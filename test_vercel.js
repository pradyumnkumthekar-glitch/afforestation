const { JSDOM } = require('jsdom');

async function test() {
  console.log("Loading URL...");
  const dom = await JSDOM.fromURL('http://localhost:8080/', {
    runScripts: "dangerously",
    resources: "usable",
    pretendToBeVisual: true
  });
  
  dom.window.IntersectionObserver = class IntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  };

  dom.window.addEventListener('error', (event) => {
    console.error('Window Error:', event.error);
  });
  
  const originalError = dom.window.console.error;
  dom.window.console.error = (...args) => {
    console.error('Console Error:', ...args);
    originalError(...args);
  };
  
  const originalLog = dom.window.console.log;
  dom.window.console.log = (...args) => {
    console.log('Console Log:', ...args);
    originalLog(...args);
  };

  setTimeout(() => {
    console.log("Finished waiting 5 seconds.");
    process.exit(0);
  }, 5000);
}

test().catch(console.error);
