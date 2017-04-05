var xmlUtil = require('../xmlUtil/xmlUtil')

var xmlData = "<xml><ToUserName>Spursyy</ToUserName><FromUserName>WeiChat</FromUserName><CreateTime>123456789</CreateTime><MsgType>event</MsgType><Event>subscribe</Event></xml>"

xmlUtil.parseXMLAsync(xml2).then(function(data) {
    console.log(data)
}).catch(function(err) {
    console.log(err)
})