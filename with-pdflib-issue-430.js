const fs =  require('fs')
const fetch = require("node-fetch")
const { PDFDocument, rgb } = require('pdf-lib')
const fontkit = require('@pdf-lib/fontkit')

async function generatePDF(){
    const fontBytes = await fs.readFileSync('./font/SiYuan.ttf');
    const pdfDoc = await PDFDocument.create();
    pdfDoc.registerFontkit(fontkit);
    const SiYuan = await pdfDoc.embedFont(fontBytes,{subset:true});
    const page = pdfDoc.addPage();
    const text = '中文字体你行不行';
    const textSize = 35;
    page.setFont(SiYuan);
    page.drawText(text, {
        x: 40,
        y: 450,
        size: textSize,
        color: rgb(0, 0.53, 0.71),
    });

    const pdfBytes = await pdfDoc.save()
    fs.writeFileSync('./dist/with-pdflib-issue-430.pdf',pdfBytes)
}

generatePDF()
