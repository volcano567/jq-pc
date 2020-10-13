$(".wechat").hover(function () {
    $(".wechat-code").fadeIn(300);
}, function () {
    $(".wechat-code").fadeOut(300);
});

document.writeln('<!-- PHPStat Start -->');
document.writeln('<script language="JavaScript" id="phpstat_js_id_10000019">');
document.writeln('var _trackDataType = \'web\';');
document.writeln('var _trackData = _trackData || [];');
document.writeln('(function() {');
document.writeln('var phpstat_js = document.createElement(\'script\'); phpstat_js.type = \'text/javascript\';');
document.writeln('phpstat_js.charset = \'utf-8\'; phpstat_js.id = \'phpstat_async_js_id_10000019\'; phpstat_js.async = true;');
document.writeln('phpstat_js.src = \'../../../../js.henan.gov.cn/count/10000019/10000019.js\'/*tpa=https://js.henan.gov.cn/count/10000019/10000019.js*/;');
document.writeln('var phpstat_cjs = document.getElementsByTagName(\'script\')[0]; phpstat_cjs.parentNode.insertBefore(phpstat_js, phpstat_cjs);');
document.writeln('})();');
document.writeln('</script>');
document.writeln('<!--/PHPStat End -->');

(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = '../../../../zz.bdstatic.com/linksubmit/push.js'/*tpa=https://zz.bdstatic.com/linksubmit/push.js*/;
    }
    else {
        bp.src = '../../../../push.zhanzhang.baidu.com/push.js'/*tpa=http://push.zhanzhang.baidu.com/push.js*/;
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();

$(".listNav ul li").each(function(){
    var listname = $(".mainListTitle").text();
    let me = $(this).text();
    let boom = listname.indexOf(me);
    if(boom != -1){
        $(this).addClass("listactive");
    }else{
        $(this).removeClass("listactive");
    }
});