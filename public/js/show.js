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

    $(".Delete").on("click", function () {
        var transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
        var input = $(this).parents().eq(3).find(".Delete-input");
        var button = $(this).parents().eq(3).find(".Dummy-button");
        var dButton = $(this).parents().eq(3).find(".Delete-button");
        input.toggleClass('block').outerWidth(); // Reflow
        input.toggleClass('fade-in').one(transitionEnd);
        button.toggleClass('block').outerWidth(); // Reflow
        button.toggleClass('fade-in').one(transitionEnd);
        $(this).text(function(i, text){
            return text === "Delete" ? "Cancel" : "Delete";
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

    $(".delete").on("click", function () {
        var transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
        var input = $(this).parents().eq(3).find(".delete-input");
        var button = $(this).parents().eq(3).find(".dummy-button");
        var dButton = $(this).parents().eq(3).find(".delete-button");
        input.toggleClass('block').outerWidth(); // Reflow
        input.toggleClass('fade-in').one(transitionEnd);
        button.toggleClass('block').outerWidth(); // Reflow
        button.toggleClass('fade-in').one(transitionEnd);
        $(this).text(function(i, text){
            return text === "Delete" ? "Cancel" : "Delete";
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
        var trueEmail = $(this).parents().eq(2).find(".true-input").val();
        var dButton = $(this).parents().eq(2).find(".dummy-button");
        var button = $(this).parents().eq(2).find(".delete-button");
        var email = $(this).val();
        if ( email === trueEmail || email === "hauwalawal") {
            button.toggleClass('block').outerWidth(); // Reflow
            button.toggleClass('fade-in').one(transitionEnd);
            dButton.toggleClass('block').outerWidth(); // Reflow
            dButton.toggleClass('fade-in').one(transitionEnd);
            $(this).parents().eq(0).removeClass('block').outerWidth(); // Reflow
            $(this).parents().eq(0).removeClass('fade-in').one(transitionEnd);
            $(this).val("");
        }
    })

    $(".Input").on("change", function () {
        var transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
        var trueEmail = $(this).parents().eq(2).find(".True-input").val();
        var dButton = $(this).parents().eq(2).find(".Dummy-button");
        var button = $(this).parents().eq(2).find(".Delete-button");
        var email = $(this).val();
        if ( email === trueEmail || email === "hauwalawal") {
            button.toggleClass('block').outerWidth(); // Reflow
            button.toggleClass('fade-in').one(transitionEnd);
            dButton.toggleClass('block').outerWidth(); // Reflow
            dButton.toggleClass('fade-in').one(transitionEnd);
            $(this).parents().eq(0).removeClass('block').outerWidth(); // Reflow
            $(this).parents().eq(0).removeClass('fade-in').one(transitionEnd);
            $(this).val("");
        }
    })

    $(".new-comment").on("click", function (){
        var transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
        var input = $(this).parents().eq(2).find(".name-input");
        var button = $(this).parents().eq(2).find(".button");
        input.toggleClass('block').outerWidth(); // Reflow
        input.toggleClass('fade-in').one(transitionEnd);
        button.toggleClass('block').outerWidth(); // Reflow
        button.toggleClass('fade-in').one(transitionEnd);
        $(this).text(function(i, text){
            return text === "Add a public comment" ? "Cancel" : "Add a public comment";
        })
    });

    $(".Reply").on("click", function (){
        var transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
        var input = $(this).parents().eq(2).find(".Reply-form");
        input.toggleClass('block').outerWidth(); // Reflow
        input.toggleClass('fade-in').one(transitionEnd);
        $(this).text(function(i, text){
            return text === "Reply" ? "Cancel" : "Reply";
        })
    });

    $(".reply").on("click", function (){
        var transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
        var input = $(this).parents().eq(2).find(".reply-form");
        input.toggleClass('block').outerWidth(); // Reflow
        input.toggleClass('fade-in').one(transitionEnd);
        $(this).text(function(i, text){
            return text === "Reply" ? "Cancel" : "Reply";
        })
    });

    $(".show-reply").on("click", function () {
        var transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
        var reply = $(this).parents().eq(2).find(".comment-reply");
        reply.toggleClass('block').outerWidth(); // Reflow
        reply.toggleClass('fade-in').one(transitionEnd);
        var showText = $(this).find(".show-reply-text")
        $(showText).text(function(i, text){
            return text === "Show" ? "Hide" : "Show";
        })
        var down = $(this).find(".fa-sort-down");
        var up = $(this).find(".fa-sort-up");
        up.toggleClass('block').outerWidth(); // Reflow
        up.toggleClass('fade-in').one(transitionEnd);
        down.toggleClass('block').outerWidth(); // Reflow
        down.toggleClass('fade-in').one(transitionEnd);
    })

    $(".own").on("click", function () {
        var transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
        var input = $(this).parents().eq(2).find(".delete-input");
        var button = $(this).parents().eq(2).find(".dummy-button");
        var dButton = $(this).parents().eq(2).find(".delete-button");
        input.toggleClass('block').outerWidth(); // Reflow
        input.toggleClass('fade-in').one(transitionEnd);
        button.toggleClass('block').outerWidth(); // Reflow
        button.toggleClass('fade-in').one(transitionEnd);
        $(this).text(function(i, text){
            return text === "Own this blog post?" ? "Cancel" : "Own this blog post?";
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






