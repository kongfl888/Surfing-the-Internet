// ==UserScript==
// @name        Baidu Search http2https
// @namespace   https://github.com/kongfl888/Surfing-the-Internet/tree/master/userscript
// @description Enforces browsing Baidu Search websites through https
// @include     http://www.baidu.com/*
// @include     http://baidu.com/*
// @include     https://www.baidu.com/*
// @include     https://baidu.com/*
// @updateURL   https://github.com/kongfl888/Surfing-the-Internet/raw/master/userscript/Baidu_http2https/baiduhttp2https.meta.js
// @downloadURL https://github.com/kongfl888/Surfing-the-Internet/raw/master/userscript/Baidu_http2https/baiduhttp2https.user.js
// @version     1.1
// @author      kongfl888
// @grant       none
// ==/UserScript==
var url = location.href;
//alert(location.href);
$(function () {
  if (location.protocol == 'http:') {
    url = url.replace(/^http:/, 'https:');
    url = url.replace(/\&tn=\w+/, '');
    location.replace(url);
  } else if (location.protocol == 'https:') {
    if (url.match(/\&tn=\w+hao_pg/) != null)
    {
      url = url.replace(/\&tn=\w+/, '');
      location.replace(url);
    }
  }
});
