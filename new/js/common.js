$(".wechat").hover(function () {
    $(".wechat-code").fadeIn(300);
}, function () {
    $(".wechat-code").fadeOut(300);
});

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

function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
     if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
