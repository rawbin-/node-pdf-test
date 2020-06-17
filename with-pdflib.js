const fs =  require('fs')
const { PDFDocument, rgb } = require('pdf-lib')
const fontkit = require('@pdf-lib/fontkit')
const pingfang = fs.readFileSync('./font/pingfang.ttf')

async function embedFontAndMeasureText() {
    const pdfDoc = await PDFDocument.create()
    const page = pdfDoc.addPage()
    pdfDoc.registerFontkit(fontkit)

    const customFont = await pdfDoc.embedFont(pingfang,{subset:true})
    const text = '中文字体你行不行'
    const textSize = 35
    const textWidth = customFont.widthOfTextAtSize(text, textSize)
    const textHeight = customFont.heightAtSize(textSize)

    page.drawText(text,{
        font:customFont
    })

    page.drawText(text, {
        x: 40,
        y: 450,
        size: textSize,
        font: customFont,
        color: rgb(0, 0.53, 0.71),
    })
    page.drawRectangle({
        x: 40,
        y: 450,
        width: textWidth,
        height: textHeight,
        borderColor: rgb(1, 0, 0),
        borderWidth: 1.5,
    })


    const pdfBytes = await pdfDoc.save()
    fs.writeFileSync('./dist/with-pdflib.pdf',pdfBytes)
}

embedFontAndMeasureText()
