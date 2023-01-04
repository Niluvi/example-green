window.addEventListener('DOMContentLoaded', function () {
  // ---------------------------------start-------------------------------
  // ----------__Hero-Left
gsap.from(".hero__left", {delay: .3, ease: "expo.out",
  duration: 1.2, y: 100,
});

 // ___hero__title
 gsap.from(".hero__title", {delay: .4, ease: "power1.out",
 duration: 1.2, y: 30, opacity: 0,
});

 // ___hero__btn
 gsap.from(".hero__btn", {delay: .3, ease: "power1.out",
 duration: 1.3, opacity: 0,
});

 // ___hero__descr
 gsap.from(".hero__descr", {delay: 1.3, ease: "expo.out",
 duration: 1.1, opacity: 0,
});

// ----------
// ___Photos-Wrap
gsap.from(".photos-wrap img", {
  delay: 1.3,
  stagger: 0.2,
  ease: "elastic.out",
  duration: 1.6,
  opacity: 0,
});

 // ___photos__author
 gsap.from(".photos__author", {delay: 1.9, ease: "expo.out",
 duration: 1.4, opacity: 0,
});

//  -------------------------------------
// ----------__Burger
var btn = document.querySelector('.burger')
// var visible = document.querySelector('.menu')
var close = document.querySelector('.close')

var click = gsap.timeline({paused: true});

click
.fromTo(".menu", .5, { opacity: 0, ease: "power4.out" }, {duration: 2, display: "block", opacity: 1,}) // ___menu
.from(".menu__top", { duration: 1, height: 0, opacity: 0, ease: "elastic.out(1, 0.3)" }) // ___menu__top
.from(".nav__list", { duration: .8, opacity: 0, y: 20, ease: "power4.out" }) // ___nav__list
.from(".social, .sub-menu", { duration: .8, opacity: 0, y: 30, ease: "power4.out" }) // ___social

btn.onclick = function() {
  click.play()
};
// -----------end-click-open-----
close.onclick = function() {
  click.reverse()
}

// -----------end-click-close-----



  // ---------------------------------end-------------------------------
})
