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

    $('#up').on("click", function () {
        $('html, body').animate( {
            scrollTop: 0
        }, 2000);
    });

    $(".button").on("click", function (e) {
        $(".button").removeClass("active");
        $(this).addClass("active");
        $(".blog .grid").isotope({
            filter: $(this).attr("data-filter")
        })
        return false;
    })

    $(".own").on("click", function () {
        var transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
        var input = $(this).parents().eq(2).find(".delete-input");
        var button = $(this).parents().eq(2).find(".dummy-button");
        var dButton = $(this).parents().eq(2).find(".delete-button");
        console.log(input);
        input.toggleClass('block').outerWidth(); // Reflow
        input.toggleClass('fade-in').one(transitionEnd);
        button.toggleClass('block').outerWidth(); // Reflow
        button.toggleClass('fade-in').one(transitionEnd);
        $(this).text(function(i, text){
            return text === "Add a new blog post" ? "Cancel" : "Add a new blog post";
        })
        if (dButton.hasClass("block")) {
            dButton.removeClass('block').outerWidth(); // Reflow
            dButton.removeClass('fade-in').one(transitionEnd);
            input.removeClass('block').outerWidth(); // Reflow
            input.removeClass('fade-in').one(transitionEnd);
            button.removeClass('block').outerWidth(); // Reflow
            button.removeClass('fade-in').one(transitionEnd);
        }
    })

    $(".input").on("change", function () {
        var transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
        var dButton = $(this).parents().eq(2).find(".dummy-button");
        var button = $(this).parents().eq(2).find(".delete-button");
        var email = $(this).val();
        if ( email === "hauwalawal") {
            button.toggleClass('block').outerWidth(); // Reflow
            button.toggleClass('fade-in').one(transitionEnd);
            dButton.toggleClass('block').outerWidth(); // Reflow
            dButton.toggleClass('fade-in').one(transitionEnd);
            $(this).parents().eq(0).removeClass('block').outerWidth(); // Reflow
            $(this).parents().eq(0).removeClass('fade-in').one(transitionEnd);
            $(this).val("");
        }
    })
})

window.onload = setTimeout(function() { $("#all").trigger('click'); },10);