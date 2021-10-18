$(function (){
    $(".bskt").click(function(){
        // $(this).preventDefault();
        $(".basket").toggleClass("hidden");
    })
    $(".basketclose").click(function(){
        $(".basket").toggleClass("hidden");
    })
    $(".started").click(function(){
        // $(this).preventDefault();
        $(".getstarted").toggleClass("hidden");
    })
    $(".formclose").click(function(){
        $(".getstarted").toggleClass("hidden");
    })
    $(".search").click(function(){
        $(".searchinput").toggleClass("hidden");
        $(".searchinput").focus();
    })
    $(".pressbutton").click(function(){
        $(".wordpresspurchase").toggleClass("hidden");
    })
    $(".closepurchase").click(function(){
        $(".wordpresspurchase").toggleClass("hidden");
    })
})