const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, '../src/app/slides');

fs.readdirSync(slidesDir).forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(slidesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove "Curated insights based on..."
    content = content.replace(/<p>Curated insight based on:.*?<\/p>/g, '');
    content = content.replace(/<motion\.div[^>]*>\s*<p>Curated insight based on:.*?<\/p>\s*<\/motion\.div>/gs, '');

    // Common hyphenated words to space
    content = content.replace(/pixel-pushers/g, 'pixel pushers');
    content = content.replace(/pixel-pushing/g, 'pixel pushing');
    content = content.replace(/co-pilot/g, 'copilot');
    content = content.replace(/Co-Pilot/g, 'Copilot');
    content = content.replace(/co-design/g, 'codesign');
    content = content.replace(/yes-men/g, 'yes men');
    content = content.replace(/high-level/g, 'high level');
    content = content.replace(/real-time/g, 'real time');
    content = content.replace(/Auto-layout/g, 'Auto layout');
    content = content.replace(/semi-autonomous/g, 'semi autonomous');
    content = content.replace(/AI-driven/g, 'AI driven');
    content = content.replace(/high-fidelity/g, 'high fidelity');
    content = content.replace(/prompt-to-UI/g, 'prompt to UI');
    content = content.replace(/front-end/g, 'front end');
    content = content.replace(/cross-functional/g, 'cross functional');
    
    // specifically target "tool;"
    content = content.replace(/tool;/g, 'tool.');

    // em-dash / en-dash / spaces
    content = content.replace(/ — /g, ' ');
    // we must be careful with " - " not to break JSX like `w-full` but ` - ` is safe
    content = content.replace(/ - /g, ' ');

    // find other text semicolons - skip end of line or JS syntax
    // e.g., "word;" -> "word"
    // Just a basic pass for content semicolons (like in "AI isn't just a tool; it's fundamentally")
    content = content.replace(/tool; it's/g, 'tool. it\'s');

    fs.writeFileSync(filePath, content, 'utf8');
  }
});
console.log("Done text replacements.");
