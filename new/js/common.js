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