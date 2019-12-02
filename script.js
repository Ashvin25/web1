let book = $('.bookImg');


$(document).ready(function(){
    $("#knowledge").on("click",function()
    {
        console.log("Get Out");
        $(".bookImg").hide();
        $(".bookImg").attr("src","src/images/ani.gif");
        setTimeout(function(){
            $(".bookImg").show();
        },2000);
        setTimeout(function(){
            $(".bookImg").attr("src","src/images/done.gif")
        },7000);
    })
})