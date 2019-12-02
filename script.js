let book = $('.bookImg');

var count = 0;

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
        else if(count == 1)
        {
            $(".bookImg2").show();
            $(".bookImg2").attr("src", "src/images/final.gif");
            setTimeout(function () {
                $(".bookImg2").attr("src", "src/images/done.gif")
            }, 7000);
            count++;
        }
        else if (count == 2){
            count = 0;
            $(".bookImg1").hide();
            $(".bookImg2").hide();
        }

    })
})