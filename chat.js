// Vercel Serverless Function: /api/chat.js
// Powered by Google Gemini 2.5 Flash with Google Search Grounding

module.exports = async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Only POST is supported.' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: 'GEMINI_API_KEY is not configured in Vercel Environment Variables. Please add GEMINI_API_KEY in your Vercel Project Settings > Environment Variables.'
    });
  }

  try {
    let { messages, language = 'en', siteContext = {} } = req.body || {};

    if (!messages && req.body && req.body.message) {
      messages = [{ role: 'user', content: req.body.message }];
    }
    if (req.body && req.body.lang && !req.body.language) {
      language = req.body.lang;
    }

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Invalid or missing "messages" array in request body.' });
    }

    // 1. Construct System Instruction with Persona & Hybrid Data Priority
    const langInstructions = {
      hi: 'हिंदी में उत्तर दें (Respond in clear, professional Hindi using Devanagari script). Maintain technical units (kg/yr, m, m²) in standard notation.',
      mr: 'मराठीत उत्तर द्या (Respond in clear, professional Marathi using Devanagari script). Maintain technical units (kg/yr, m, m²) in standard notation.',
      en: 'Respond in clear, professional, authoritative English.'
    };
    const activeLangRule = langInstructions[language] || langInstructions.en;

    const systemPrompt = `You are "Arbor Engineer Pro" — Senior Environmental & Structural Safety Engineer specializing in the Miyawaki Afforestation Methodology, native Indian tree species, subterranean root mechanics, canopy thermal modeling, and sustainable site planning.

LANGUAGE INSTRUCTION:
${activeLangRule}

HYBRID DATA PRIORITY (CRITICAL):
1. WEBSITE DATA FIRST: Always prioritize the exact figures from the platform siteContext below (the website's native species catalog, CO2/O2 kg/yr rates, mature height, canopy spread, minimum safe planting distances from buildings safeBldg and roads safeRoad, water/growth rates, Canopy Projection KPIs, Root Analysis KPIs, and Miyawaki Methodology principles/steps). Never hallucinate numbers that contradict siteContext.

=== OFFICIAL PLATFORM SITE CONTEXT ===
${JSON.stringify(siteContext, null, 2)}
=== END OF SITE CONTEXT ===

2. LIVE WEB FALLBACK & AUGMENTATION:
When the user asks about:
- Tree species not listed in the catalog (e.g. Mangroves, Eucalyptus, Baobab, Redwood, Oak)
- Real-time local climate/weather/soil conditions across Indian states
- Current sapling/nursery market rates or government afforestation subsidies (e.g. CAMPA, Green India Mission)
- Indian Standard (IS) civil/structural codes and municipal setback guidelines (e.g., IS 14532, tree root barrier engineering)
- General environmental or structural calculations beyond the database
You must seamlessly use the Google Search tool to fetch accurate, up-to-date information from the web and blend it with the site's engineering principles.

3. RESPONSE FORMATTING:
- Structure your analysis with clear headings, bullet points, and clean Markdown tables (especially for species comparisons, root clearance matrices, and thermal impact coefficients).
- Emphasize key numbers in **bold** with units (e.g., **301.67 kg CO₂/yr**, **8-10 m safe distance**).
- Be consultative, actionable, and mathematically precise so that site planners and developers can use your output directly in project reports.`;

    // 2. Format conversation history into alternating turns for Gemini
    const contents = [];
    for (const msg of messages) {
      const role = (msg.role === 'user' || msg.sender === 'user') ? 'user' : 'model';
      const text = (msg.content || msg.text || '').trim();
      if (!text) continue;

      if (contents.length === 0) {
        // Gemini requires the first turn to be 'user'
        if (role !== 'user') continue;
        contents.push({ role: 'user', parts: [{ text }] });
      } else {
        const lastTurn = contents[contents.length - 1];
        if (lastTurn.role === role) {
          lastTurn.parts[0].text += `\n\n${text}`;
        } else {
          contents.push({ role, parts: [{ text }] });
        }
      }
    }

    // Safety fallback if no user message was formatted
    if (contents.length === 0) {
      const lastUser = [...messages].reverse().find(m => m.role === 'user' || m.sender === 'user');
      const fallbackQuery = (lastUser && lastUser.content) ? lastUser.content : 'Hello';
      contents.push({ role: 'user', parts: [{ text: fallbackQuery }] });
    }

    // 3. Prepare Gemini API Request Payload with Search Grounding
    const geminiPayload = {
      systemInstruction: {
        parts: [{ text: systemPrompt }]
      },
      contents: contents,
      tools: [
        {
          googleSearch: {}
        }
      ],
      generationConfig: {
        temperature: 0.3,
        topP: 0.95
      }
    };

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const geminiRes = await fetch(geminiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(geminiPayload)
    });

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      console.error('Gemini API Error:', geminiRes.status, errText);
      return res.status(geminiRes.status).json({
        error: `Gemini API returned error ${geminiRes.status}`,
        details: errText
      });
    }

    const data = await geminiRes.json();
    const candidate = data.candidates?.[0];
    const reply = candidate?.content?.parts?.map(p => p.text).filter(Boolean).join('') || '';

    // Extract Google Search Grounding sources if triggered
    const sources = [];
    const groundingMetadata = candidate?.groundingMetadata;
    if (groundingMetadata && Array.isArray(groundingMetadata.groundingChunks)) {
      const seenUrls = new Set();
      for (const chunk of groundingMetadata.groundingChunks) {
        if (chunk.web && chunk.web.uri) {
          if (!seenUrls.has(chunk.web.uri)) {
            seenUrls.add(chunk.web.uri);
            sources.push({
              title: chunk.web.title || chunk.web.uri,
              url: chunk.web.uri
            });
          }
        }
      }
    }

    return res.status(200).json({
      reply,
      sources,
      webSearchQueries: groundingMetadata?.webSearchQueries || []
    });

  } catch (err) {
    console.error('Error in /api/chat:', err);
    return res.status(500).json({
      error: 'Internal server error processing chat request.',
      details: err.message
    });
  }
};
