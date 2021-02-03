$(document).ready(function () {
    $(".menu-toggler").on("click", function () {
        $(this).toggleClass("open");
        $(".top-nav").toggleClass("open");
    });

    $(".top-nav .link ").on("click", function () {
        $('.menu-toggler').removeClass("open");
        $(".top-nav").removeClass("open");
    });

    $("nav a.link[href]").click(function(e){
        e.preventDefault();
        if (this.href) {
            var target = this.href;
            setTimeout(function(){
                window.location = target;
            }, 1000);
        }
    }); 
})






