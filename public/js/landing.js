$(document).ready(function () {
    $(".menu-toggler").on("click", function () {
        $(this).toggleClass("open");
        $(".top-nav").toggleClass("open");
    });

    $(".top-nav .nav-link").on("click", function () {
        $('.menu-toggler').removeClass("open");
        $(".top-nav").removeClass("open");
    });

    $('nav a[href*="#"]').on("click", function () {
        $('html, body').animate( {
            scrollTop: $($(this).attr('href')).offset().top 
        }, 1500);
    });

    $("nav a.blog-link[href]").click(function(e){
        e.preventDefault();
        if (this.href) {
            var target = this.href;
            setTimeout(function(){
                window.location = target;
            }, 1000);
        }
    });

    $('.message-text a[href*="#"]').on("click", function () {
        $('html, body').animate( {
            scrollTop: $($(this).attr('href')).offset().top 
        }, 1500);
    });

    $('#up').on("click", function () {
        $('html, body').animate( {
            scrollTop: 0
        }, 2000);
    });

    $(function() {
      AOS.init({
        once: true
      });
    });

    var offsetTop = $(".skill-box").offset().top;
    $(window).scroll(function() {
      var height = $(window).height();
      if ($(window).scrollTop() + height > offsetTop) {
        $(".skill-box").each( function (index) {
            $(this).find(".skill-bar-in").addClass("skill-bar" + index);
        })

        $('.counter').each(function() {
          var $this = $(this),
              countTo = $this.attr('data-count');
          
          $({ countNum: $this.text()}).animate({
            countNum: countTo
          },
          {
            duration: 1000,
            easing:'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }
          });
        });
      }
    });

    
})

const sliderContainer = document.querySelector(".testi-slider");
const slides = sliderContainer.children;
const containerWidth = sliderContainer.offsetWidth;
const margin = 30; 
let itemPerSlide = 0;
let slideDots;

const responsive = [
    { breakPoint : { width:0, item:1 } },
    { breakPoint : { width:991, item:2 } }
]

function load() {
    for (var i = 0 ; i < responsive.length; i++) {
        if (window.innerWidth > responsive[i].breakPoint.width) {
            itemPerSlide=responsive[i].breakPoint.item;
        }
    }
    start();
}

function start () {
        totalWidth = 0;
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = (containerWidth/itemPerSlide)-margin + "px";
        slides[i].style.margin = margin/2 + "px";
        totalWidth += containerWidth/itemPerSlide;
    }
    
    sliderContainer.style.width = totalWidth+ "px";
     slideDots = Math.ceil(slides.length/itemPerSlide);

    for (var i = 0; i < slideDots; i++) {
        const div = document.createElement("div");
        div.id = i;
        div.setAttribute("onClick", "controlslide(this)")
        if (i==0) {
            div.classList.add("active");
        }
        document.querySelector(".slide-controls").appendChild(div);
    }    
}


let currentSlide = 0; 
let autoSlide = 0;


function controlslide(element) {
    clearInterval(timer);
    timer=setInterval(autoPlay, 5000);
    autoSlide=element.id;
    currentSlide = element.id
    changeSlide(currentSlide)
}

function changeSlide(currentSlide) {
    controlButtons = document.querySelector(".slide-controls").children;

    for (var i = 0; i < controlButtons.length; i++) {
        controlButtons[i].classList.remove("active");
    }
    controlButtons[currentSlide].classList.add("active");
    sliderContainer.style.marginLeft=-(containerWidth*currentSlide) + "px";
}

function autoPlay(){
    if (autoSlide==slideDots - 1) {
        autoSlide=0;
    } else {
        autoSlide++;
    }
    changeSlide(autoSlide);
}

let timer=setInterval(autoPlay, 5000);

window.onload = load();

