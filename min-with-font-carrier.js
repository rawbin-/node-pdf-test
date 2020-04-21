var fontCarrier = require('font-carrier')
var transFont = fontCarrier.transfer('./font/pingfang.ttf')
// 会自动根据当前的输入的文字过滤精简字体
transFont.min('中文字体你行不行')
const result = transFont.output({
    // path: './font/pingfang-part'
})

console.log(result)
