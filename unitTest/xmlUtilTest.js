var xmlUtil = require('../xmlUtil/xmlUtil')
var assert = require('assert');

var xmlData = "<xml><ToUserName><Name1>Spursyy</Name1> <Name2>YY</Name2></ToUserName><FromUserName><![CDATA[WeiChat]]></FromUserName><CreateTime>123456789</CreateTime><MsgType><![CDATA[event]]></MsgType><Event><![CDATA[subscribe]]></Event></xml>"

describe('xmlUtil', function() {
  describe('formateMessage', function () {
    it('should return -1 when the value is not present', function (done) {

        xmlUtil.parseXMLAsync(xmlData).then(function(data) {
            (async function() {
                var mes = await xmlUtil.formatMessage(data.xml)
                assert.equal(mes.ToUserName.Name1, "Spursyy");
                assert.equal(mes.ToUserName.Name2, "YY");
            })()
            done()
            }).catch(function(err) {
                console.log(err)
            })
    });
  });
});