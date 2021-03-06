// ==UserScript==
// @name Tieba Private
// @namespace http://tieba.baidu.com
// @include http://tieba.baidu.com/home/*
// @updateURL https://github.com/FirefoxBar/userscript/raw/master/Tieba_Private/Tieba_Private.meta.js
// @downloadURL https://github.com/FirefoxBar/userscript/raw/master/Tieba_Private/Tieba_Private.user.js
// @version 1
// @grant none
// @author      网络中二行客
// ==/UserScript==

;(function ($) {
    $.ajax({
        type: 'post',
        url: '/home/post/delvisite',
        data: {
            ie: 'utf-8',
            un: $('.userinfo_username').text(),
            tbs: unsafeWindow.PageData.tbs
        },
        dataType: 'json'
    }).success(function (t) {
        0 === t.no && $('.visitor_card:first').animate({
            width: 0
        }, 200, function () {
            $('.visitor_card:first').remove(),
            (function () {
                var t = $('#visitor_card_wrap') .find('.visitor_card').length;
                0 === t && $('#visitor_card_wrap') .closest('.ihome_visitor').slideUp(200)
            }) ();
        })
    })
})(unsafeWindow.$);