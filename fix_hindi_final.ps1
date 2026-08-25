$content = Get-Content 'c:\Users\lokes\Downloads\afforestation\script.js' -Raw -Encoding UTF8

$treeMap = @{
    'Indian siris tree' = 'Siris (सिरिस)'
    'Tamarind' = 'Imli (इमली)'
    'May flower tree' = 'Gulmohar (गुलमोहर)'
    'Yellow flame tree' = 'Peela Gulmohar (पीला गुलमोहर)'
    'Sacred fig' = 'Peepal (पीपल)'
    'River tamarind' = 'Subabul (सुबबूल)'
    'Kanak Champa' = 'Kanak Champa (कनक चम्पा)'
    'Neem' = 'Neem (नीम)'
    'Indian cork tree' = 'Neem Chameli (नीम चमेली)'
    'Gooseberry' = 'Amla (आंवला)'
    'Earleaf acacia' = 'Pahari Babul (पहाड़ी बबूल)'
    'Cluster fig' = 'Gular (गूलर)'
    'Jamun tree' = 'Jamun (जामुन)'
    'Golden shower' = 'Amaltas (अमलतास)'
    'Weeping fig' = 'Chilkan (चिलकन)'
    'Teak' = 'Sagwan (सागवान)'
    'Pungam tree' = 'Karanj (करंज)'
    'Spanish Cherry' = 'Maulsari (मौलसिरी)'
    'Paradise tree' = 'Lakshmi Taru (लक्ष्मी तरु)'
    'Wild almond tree' = 'Jangli Badam (जंगली बादाम)'
    'Wood apple' = 'Kaitha (कैथा)'
    'Mulberry tree' = 'Shahtoot (शहतूत)'
    'Guava tree' = 'Amrud (अमरूद)'
    'Casuarina' = 'Jhau (झाऊ)'
    'Bibhitaki tree' = 'Baheda (बहेड़ा)'
    'Purple bauhinia' = 'Kachnar (कचनार)'
    'Butter tree' = 'Mahua (महुआ)'
    'Indian mulberry' = 'Aal (आल)'
    'Geranium tree' = 'Lal Lasora (लाल लसोड़ा)'
    'Yellow bells' = 'Pili Chameli (पीली चमेली)'
    'Mango tree' = 'Aam (आम)'
    'Indian almond' = 'Desi Badam (देसी बादाम)'
    'False Ashoka' = 'Ashoka (अशोक)'
    'Curry leaf' = 'Kadi Patta (कड़ी पत्ता)'
    'Quick stick' = 'Giripushpa (गिरिपुष्प)'
    'Arjuna tree' = 'Arjun (अर्जुन)'
    'Parijat' = 'Harsingar (हरसिंगार)'
    'Bamboo' = 'Bans (बांस)'
}

foreach ($name in $treeMap.Keys) {
    $hindi = $treeMap[$name]
    $pattern = 'name: "' + $name + '",(?:\r?\n\s*)hindi: ".*?"'
    $replacement = 'name: "' + $name + '",' + [Environment]::NewLine + '  hindi: "' + $hindi + '"'
    $content = [regex]::Replace($content, $pattern, $replacement)
}

[IO.File]::WriteAllText('c:\Users\lokes\Downloads\afforestation\script.js', $content, [System.Text.Encoding]::UTF8)
