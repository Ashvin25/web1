let book = $('.bookImg');

var count = 0;

var colors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#2E2B5F", "#8B00FF"];

var current_color = 0;


$(document).ready(function () {
    $("#knowledge").on("click", function () {
        console.log("Get Out");
        if (count == 0) {
            $(".bookImg1").show();
            $(".bookImg1").attr("src", "src/images/final.gif");
            setTimeout(function () {
                $(".bookImg1").attr("src", "src/images/done.gif")
            }, 7000);
            count++;
        }
        else if (count == 1) {
            $(".bookImg2").show();
            $(".bookImg2").attr("src", "src/images/final.gif");
            setTimeout(function () {
                $(".bookImg2").attr("src", "src/images/done.gif")
            }, 7000);
            count++;
        }
        else if (count == 2) {
            count = 0;
            // $(".bookImg1").hide();
            // $(".bookImg2").hide();
        }

    });

    $("#brain").on("click", function () {
        console.log("aaa");
        $(".bookImg1").fadeOut(1000);
        $(".bookImg2").fadeOut(1000);
    });

    setInterval(function(){
        $(".homePageInfo").css("background-color",colors[current_color]);
        $(".logo").css("color",colors[current_color]);
        if(!colors[current_color]) current_color = 0;
        else current_color++;
    },1000);
})