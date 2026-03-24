const fs = require('fs');

const file = "C:\\Users\\dpradel\\Downloads\\Nelogica - Tecnologia e Informação para o Mercado Financeiro.mhtml";
const content = fs.readFileSync(file, 'utf8');

const htmlMatch = content.match(/Content-Type: text\/html(?:.|\n|\r)*?\r?\n\r?\n([\s\S]*?)\r?\n------MultipartBoundary/im);
if (htmlMatch) {
    let html = htmlMatch[1];
    // decode quoted printable
    html = html.replace(/=\r?\n/g, '');
    html = html.replace(/=([A-Fa-f0-9]{2})/g, (m, g1) => String.fromCharCode(parseInt(g1, 16)));
    
    fs.writeFileSync("extracted.html", html);
    console.log("Extracted HTML");
} else {
    console.log("HTML part not found");
}
