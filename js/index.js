/*******************************************IMAGE GALLERY*******************************************/

/*******Filtering*******/

// init Isotope
  var $grid = $('.img-grid').isotope({
    itemSelector: '.img-container',
    //layoutMode: 'fitRows',
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {

    },
  };

  // bind filter button click
  $('#filter-btn').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

/*******Popup Image Gallary in Porfolio*******/

$('.popup-gallery').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});

/*******************************************CAROUSEL IN MY CLIENTS*******************************************/

$(document).ready(function(){
  $('.loop').owlCarousel({
    center: true,
    items:1,
    loop:true,
    margin:10,
    responsive:{
      600:{
        items:1
      }
    }
  });
});

/*******************************************SCROLL MAGIC*******************************************/

/*******Scroll for the links*******/
var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({triggerElement: "#hero", duration: $("#hero").height()}).setClassToggle("#hero-link", "active").addTo(controller);
new ScrollMagic.Scene({triggerElement: "#about", duration: $("#about").height() + 100}).setClassToggle("#about-link", "active").addTo(controller);
new ScrollMagic.Scene({triggerElement: "#services", duration: $("#services").height()}).setClassToggle("#services-link", "active").addTo(controller);
new ScrollMagic.Scene({triggerElement: "#portfolio", duration: $("#portfolio").height()}).setClassToggle("#portfolio-link", "active").addTo(controller);
new ScrollMagic.Scene({triggerElement: "#client", duration: $("#client").height() + 250}).setClassToggle("#client-link", "active").addTo(controller);
new ScrollMagic.Scene({triggerElement: "#contact", duration: $("#contact").height()}).setClassToggle("#contact-link", "active").addTo(controller);

/*******Other Scroll Magic Elements*******/

$(document).ready(function(){

  var controller2 = new ScrollMagic.Controller();

  //The about paragraph
  var about_scene = new ScrollMagic.Scene({
    triggerElement: '.about-text',
    triggerHook: .7
  })
  .setClassToggle('.about-text', 'about-text-animate')
  .reverse(false)
  .addTo(controller2);
    

  //Progress bars
  var progress_bar_scene = new ScrollMagic.Scene({

    triggerElement: '.about-resume',
    triggerHook: .7,

  })
  .setClassToggle('.inner-percent', 'inner-percent-animate')
  .reverse(false)
  .addTo(controller);
    
  //Icons in Services
  var about_scene = new ScrollMagic.Scene({
    triggerElement: '.trigger',
    triggerHook: .7
  })
  .setClassToggle('.icon', 'service-icon-animate')
  .reverse(false)
  .addTo(controller2);
    
});

/*******************************************MOBILE NAV*******************************************/
$('.mobile-toggle').click(function(){
  if($('#main-header').hasClass('open-nav')){
     $('#main-header').removeClass('open-nav');
  }else{
    $('#main-header').addClass('open-nav');
  }
});

/*******************************************NAV SCROLL*******************************************/
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

/*******************************************PRELOAD*******************************************/
var overlay = document.getElementById("preload-overlay");

window.addEventListener('load', function(){
  overlay.style.display = "none";
})

/***********************Particles*************/

// particlesJS("particles-js", {"particles":{"number":{"value":120,"density":{"enable":true,"value_area":800}},
// "color":{"value":"#E5554F"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},
// "opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},
// "line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
// "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},
// "bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
// var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute';
// stats.domElement.style.left = '0px';
// stats.domElement.style.top = '0px';
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector('.js-count-particles');
// update = function() { stats.begin(); stats.end();
// if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//   count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; }
// requestAnimationFrame(update); }; requestAnimationFrame(update);;

var stageWrap = document.getElementById('petal-stage-wrap');
var stage = document.getElementById('petal-stage');
var stageWidth  = stageWrap.clientWidth;
var stageHeight = stageWrap.clientHeight;
var petalNum = 30;
var petalObjArr = [];
var g = 0.00004;
var w = 0;
var wDeg = 0;
var fps = 60;
var frameTime = 1000 / fps;

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var getDegree = function(radian) {
  return radian / Math.PI * 180;
};

var getRadian = function(degrees) {
  return degrees * Math.PI / 180;
};

var petal = function(num) {
  this.elm  = document.createElement('div');
  this.size = 's';
  this.t    = 0;
  this.x    = 0;
  this.vx   = 0;
  this.py   = 0;
  this.y    = 0;
  this.rotateY = 0;
  this.rotateYUnit = getRandomInt(10, 50) / frameTime;
  this.rotateZ = getRandomInt(-45, 45);
  
  if (num % 3 == 1) this.size = 'm';
  if (num % 3 == 2) this.size = 'l';
  
  this.elm.id = 'petal-' + num;
  this.elm.className = 'petal-model petal-model-' + this.size;
  this.elm.innerHTML = '<img src="http://www.tplh.net/file/petal.png" alt="" />';
};

petal.prototype.init = function() {
  var deg = getRandomInt(0, 90);
  this.t  = 0;
  this.x  = getRandomInt(100, 1000) * -1;
  this.vx = getRandomInt(1, 5);
  this.py = getRandomInt(-100, stageHeight / 2);
};

petal.prototype.build = function() {
  stage.appendChild(this.elm);
  this.init();
};

petal.prototype.move = function() {
  this.t += frameTime;
  this.x += this.vx + w;
  this.y = 1 / 2 * g * this.t * this.t + this.py;
  this.elm.style.top = this.y + 'px';
  this.elm.style.left = this.x + 'px';
};

petal.prototype.rotate = function() {
  this.rotateY += this.rotateYUnit;
  this.elm.style.transform = 'rotateZ(' + this.rotateZ + 'deg) rotateY(' + this.rotateY + 'deg)';
};

petal.prototype.reset = function() {
  if (this.x < stageWidth && this.y < stageHeight) return;
  this.init();
};

var petalObjRender = function() {
  for (var i = 0; i < petalObjArr.length; i++) {
    petalObjArr[i].move();
    petalObjArr[i].rotate();
    petalObjArr[i].reset();
  }
};

var blowWind = function() {
  wDeg += 0.2;
  w = Math.pow(Math.sin(getRadian(wDeg)) + 1, 2);
};

var init = function() {
  for (var i = 0; i < petalNum; i++) {
    petalObjArr[i] = new petal(i);
    petalObjArr[i].build();
  }
  
  setInterval(function() {
    petalObjRender();
    blowWind();
  }, frameTime);
};

init();
