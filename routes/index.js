//依赖关系
var express = require('express');
var router = express.Router();
const sha1 = require('node-sha1'); //加密模块


/**
 * [设置验证微信接口配置参数]
 */
const config = {
    token: 'weixin-dev', //对应测试号接口配置信息里填的token
    appid: 'wx05b5c9efca1d33c1', //对应测试号信息里的appID
    secret: '1ab7a5092bf131ce769e68324afb2528', //对应测试号信息里的appsecret
    grant_type: 'client_credential' //默认
};


//主页路由
router.get('/', function (req, res) {
	const token = config.token; //获取配置的token
    const signature = req.query.signature; //获取微信发送请求参数signature
    const nonce = req.query.nonce; //获取微信发送请求参数nonce
    const timestamp = req.query.timestamp; //获取微信发送请求参数timestamp

    const str = [token, timestamp, nonce].sort().join(''); //排序token、timestamp、nonce后转换为组合字符串
    const sha = sha1(str); //加密组合字符串

    //如果加密组合结果等于微信的请求参数signature，验证通过
    if (sha === signature) {
        const echostr = req.query.echostr; //获取微信请求参数echostr
        res.send(echostr + ''); //正常返回请求参数echostr
    } else {
        res.send('验证失败');
    }
});



//导出模块接口
module.exports = router;