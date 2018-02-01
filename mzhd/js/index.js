(function(){
    $(".list").mouseenter(function() {
        $(".gamelist").stop().slideDown('fast');
    });
    $(".list").mouseleave(function() {
        $(".gamelist").stop().slideUp('fast');
    });
    $(".videoBox,.bds_tsina").click(function(){
        $(".video").fadeIn();
    });
    $(".video_close").click(function(){
        $(".video").fadeOut();
    });
    $(".jpList_ms li").mouseenter(function(){
        for(var i = 0; i < $(".jpList_ms li").length; i++ ){
            $(".jpList_ms li").eq(i).children("img").eq(1).fadeOut();
        }
        $(this).children('img').eq(1).fadeIn();
    })
})()
