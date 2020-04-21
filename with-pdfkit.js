const PDFDocument = require('pdfkit');
const fs = require('fs');

// Create a document
const doc = new PDFDocument();

// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream('dist/with-pdfkit.pdf'));

// Embed a font, set the font size, and render some text
doc
    .font('font/pingfang.ttf')
    .fontSize(25)
    .text('中文字体你行不行', 100, 100);

doc.end();
