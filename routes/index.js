//依赖关系
var express = require('express');
var router = express.Router();
const sha1 = require('node-sha1'); //加密模块

const logger = require('../conf/log/log').static;
// const {Wechat} = require('wechat-jssdk');



/**
 * [设置验证微信接口配置参数]
 */
const config = {
    token: 'weixin-dev', //对应测试号接口配置信息里填的token
    appid: 'wx05b5c9efca1d33c1', //对应测试号信息里的appID
    secret: '1ab7a5092bf131ce769e68324afb2528', //对应测试号信息里的appsecret
    grant_type: 'client_credential' //默认
};

const wechatConfig = {
  "wechatRedirectUrl": "http://www.baidu.com",
  "wechatToken": "weixin-dev",
  "appId": "wx05b5c9efca1d33c1",
  "appSecret": "1ab7a5092bf131ce769e68324afb2528",
  //card: true, //enable cards
  //payment: true, //enable payment support
  //merchantId: '', //
  //paymentSandBox: true, //dev env
  //paymentKey: '', //API key to gen payment sign
  //paymentCertificatePfx: fs.readFileSync(path.join(process.cwd(), 'cert/apiclient_cert.p12')),
  //paymentNotifyUrl: `http://your.domain.com/api/wechat/payment/`,
  //"miniProgram": {
  //     "appId": "mp_appid",
  //     "appSecret": "mp_app_secret",
  // }
}

// const wx = new Wechat(wechatConfig);


var OAuth = require('wechat-oauth');
var api = new OAuth('wx05b5c9efca1d33c1', '1ab7a5092bf131ce769e68324afb2528');

//主页路由
// router.get('/', function (req, res) {
//     logger.info(req)
    
// 	const token = config.token; //获取配置的token
//     const signature = req.query.signature; //获取微信发送请求参数signature
//     const nonce = req.query.nonce; //获取微信发送请求参数nonce
//     const timestamp = req.query.timestamp; //获取微信发送请求参数timestamp

//     const str = [token, timestamp, nonce].sort().join(''); //排序token、timestamp、nonce后转换为组合字符串
//     const sha = sha1(str); //加密组合字符串

//     //如果加密组合结果等于微信的请求参数signature，验证通过
//     if (sha === signature) {
//         const echostr = req.query.echostr; //获取微信请求参数echostr
//         res.send(echostr + ''); //正常返回请求参数echostr
//     } else {
//         res.send('验证失败');
//     }
// });


//
router.get('/', (req, res) => {
  // console.log(api)
  //api.getAccessToken(code, callback);
  let b = api.getAuthorizeURL('http://weixin-dev.zhaitianye.com/','weixin-dev','snsapi_base');
  console.log(b);

  // api.getAccessToken(code, function(err,res){
  //   console.log(err);
  //   console.log(res);
    
  // });
  //console.log(req)



  res.send('123')
});

router.get('/content', (req, res) => {
    console.log(req)
    res.send('123')
});


//导出模块接口
module.exports = router;