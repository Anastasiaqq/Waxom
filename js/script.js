$(function (){
    $(".bskt").click(function(){
        // $(this).preventDefault();
        $(".basket").toggleClass("hidden");
    })
    $(".close").click(function(){
        $(".basket").toggleClass("hidden");
    })
    
})