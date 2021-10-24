$(function () {
    $(".bskt").click(function () {
        // $(this).preventDefault();
        $(".basket").toggleClass("hidden");
    })
    $(".basketclose").click(function () {
        $(".basket").toggleClass("hidden");
        if($(window).width() <= "767"){
            $("body").toggleClass("fixed-page");
        }
    })
    $(".started").click(function () {
        // $(this).preventDefault();
        $(".getstarted").toggleClass("hidden");
        if($(window).width() <= "767"){
            $("body").toggleClass("fixed-page");
        }
    })
    $(".formclose").click(function () {
        $(".getstarted").toggleClass("hidden");
        if($(window).width() <= "767"){
            $("body").toggleClass("fixed-page");
        }
    })
    $(".search").click(function () {
        $(".searchinput").toggleClass("hidden");
        $(".searchinput").focus();
    })
    $(".pressbutton").click(function () {
        $(".wordpresspurchase").toggleClass("hidden");
    })
    $(".closepurchase").click(function () {
        $(".wordpresspurchase").toggleClass("hidden");
    })
    $(".load").click(function () {
        $(".projectitem").removeClass("hidden");
    })
    if($(window).width() < "767"){
        $(".headnav").addClass("hidden");       
    }
    $(".menu-burger").click(function(){
        $(".headnav").toggleClass("hidden");
        $(".logo").toggleClass("hidden");
        // if($(window).width() <= "767"){
        //     $("body").toggleClass("fixed-page");
        // }
        // if($(".headnav").hasClass("hidden")){
        //     $(".headnav").removeClass("hidden");
        // } else{
        //     $(".headnav").addClass("hidden");
        // }
    })

    for (let btn of $(".projectbutton")) {
        $(btn).click((e) => {
            let catName = $(e.target).data("value");

            for (let card of $(".projectitem")) {
                if ($(card).data("category") === catName) {
                    $(card).removeClass("hidden");
                } else if (catName === "all") {
                    $(card).removeClass("hidden");
                } else {
                    $(card).addClass("hidden");
                }
            }
        });
    }
})