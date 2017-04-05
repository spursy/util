>最近在做微信公众号程序，微信服务器在向开发者的服务器post数据采用的是xml格式，如何优雅高效将XML数据转换为JS Object数据。

### [xml2js](https://www.npmjs.com/package/xml2js) 库 
一种比较常见的将XML 数据与JS object 相互转换的第三方类库，转换后JS object 的value是一个数组。
```
var xmlUtil = require('../xmlUtil')

var xmlData = "<xml><ToUserName>Spursyy</ToUserName><FromUserName>WeiChat</FromUserName><CreateTime>123456789</CreateTime><MsgType>event</MsgType><Event>subscribe</Event></xml>"

xmlUtil.parseXMLAsync(xmlData).then(function(data) {
    console.log(data)   
}).catch(function(err) {
    console.log(err)
})
```
上述程序输出的结果是：
>{ xml: 
   { ToUserName: [ [Object] ],
     FromUserName: [ 'WeiChat' ],
     CreateTime: [ '123456789' ],
     MsgType: [ 'event' ],
     Event: [ 'subscribe' ] } }

由于转换后的value是数组，这在调用JS object 的value时会存在很大不便，如何value的值时Object，也会存在很多问题。

### 自定义[xmlUtil](https://github.com/spursy/util/tree/master/xmlUtil) 
实现XML 数据向JS Object的转换
##### 第一步 用bluebird 封装 xml2js.parseString
```
var promise = require('bluebird')

exports.parseXMLAsync = function(xml) {
    return new Promise(function(resolve, reject) {
        xml2js.parseString(xml, {trim: true}, function(err, content) {
            if (err) reject(err)
            else resolve(content)
        })
    })
}
```

##### 第二步 解析上一步的数据，解析key对应object并赋值给value
```
function formatMessage(result) {
    var message = {};
    if (typeof result === 'object') {
        var keys = Object.keys(result)
        console.log(keys)
        for (var i = 0; i < keys.length; i++) {            
            var item = result[keys[i]]
            var key = keys[i];
            
            if ((!(item instanceof Array ) || item.length === 0) ) {
                continue;
            }
            if (item.length === 1) {
                var val = item[0]
                if (typeof val === 'object') {
                    message[key] = formatMessage(val)
                }
                else {
                    message[key] = (val || '')
                }
            } else {
                
                message[key] = []

                for (var j = 0, k = item.length; j < k; j++) {
                    message[key].push(formatMessage(item[j]))
                }
            }
        }
    } else {
        return result;        
    }
    return message
}
```
解析key对应object,存在两种情况：
1. 如果object类型是Object对象
2. 如果object类型是Array对象

#### 3 如果使用xmlUtil 工具类库
[官网地址](https://github.com/spursy/util/tree/master/xmlUtil)

由于解析xml数据并不会阻塞线程，因此要特别注意：
```
//Promise + Async function
var xmlUtil = require('../xmlUtil/xmlUtil')
xmlUtil.parseXMLAsync(xml2).then(function(data) {
    console.log(data)
    (async function() {
         var mes = await xmlUtil.formatMessage(data.xml)
         console.log(mes)
    })()
}).catch(function(err) {
    console.log(err)
})
```

```
// Async + Async function
var xmlUtil = require('../xmlUtil/xmlUtil')
async function getValue() {
    var content = await xmlUtil.parseXMLAsync(xml2)
    console.log(content)
    var mes = await xmlUtil.formatMessage(content.xml)
    await console.log(mes);
}

getValue().catch(function(err) {
    console.log(err)
})
```