import fs from 'fs';
const file = 'src/data/csdmII.jsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/[“”]/g, '"');
content = content.replace(/[‘’]/g, "'");
content = content.replace(/[«»]/g, '"');
fs.writeFileSync(file, content);
console.log('Fixed quotes in ' + file);
