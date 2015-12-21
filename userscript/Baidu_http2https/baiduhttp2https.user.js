// ==UserScript==
// @name        Baidu Search http2https
// @namespace   https://github.com/kongfl888/Surfing-the-Internet/tree/master/userscript
// @description Enforces browsing Baidu Search websites through https
// @include     http://www.baidu.com/*
// @include     http://baidu.com/*
// @updateURL   https://github.com/kongfl888/Surfing-the-Internet/raw/master/userscript/Baidu_http2https/baiduhttp2https.meta.js
// @downloadURL https://github.com/kongfl888/Surfing-the-Internet/raw/master/userscript/Baidu_http2https/baiduhttp2https.user.js
// @version     1.0
// @author      kongfl888
// @grant       none
// ==/UserScript==
//alert(location.href);
$(function(){
//alert(location.href);
  if(location.protocol == 'http:'){
    var url=location.href;
    url = url.replace(/^http:/, 'https:');
    url = url.replace(/\&tn=\w+/, '');
    location.replace(url);
  }
});
