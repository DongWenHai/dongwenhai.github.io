// 卖萌标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '你瞧我发现了啥~';
        clearTimeout(titleTime);
    } else {
        document.title = '原来是你这个小可爱~';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});

function loadFonts(){
    var fonts = [{
        url:'/font/Candy.ttf',
        fontFamily:'Candy'
    },
    {
        url:'/font/OldEnglish.TTF',
        fontFamily:'OldEnglish'
    }];
    var styleTextCode = fonts.reduce(function(t, f){
        return t + `@font-face{font-family:${f.fontFamily};src:url('${f.url}');}`
    },'')
    var styleDom = document.createElement('style');
    styleDom.type = 'text/css';
    styleDom.rel = 'stylesheet';
    styleDom.appendChild(document.createTextNode(styleTextCode));
    document.querySelector('head').appendChild(styleDom);
}

window.onload = function(){
    loadFonts();
}