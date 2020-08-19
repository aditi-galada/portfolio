
var scrollY = 0;
var distance = 0;
var speed = 0;
function autoScrollTo(el) {
	var currentY = (window.pageYOffset)+106;
	var targetY = document.getElementById(el).offsetTop;
	var bodyHeight = document.body.offsetHeight;
	var yPos = currentY + window.innerHeight;
	var animator = setTimeout('autoScrollTo(\''+el+'\')',30);
	if(yPos > bodyHeight){
		clearTimeout(animator);
	} else {
		if(currentY < targetY-distance){
		    scrollY = currentY+distance;
		    window.scroll(0, scrollY);
	    } else {
		    clearTimeout(animator);
	    }
	}
}
function resetScroller(el){
	var currentY = window.pageYOffset;
    var targetY = document.getElementById(el).offsetTop;
	var animator = setTimeout('resetScroller(\''+el+'\')',speed);
	if(currentY > targetY){
		scrollY = currentY-distance;
		window.scroll(0, scrollY);
	} else {
		clearTimeout(animator);
	}
}

$(document).ready(function(){
  $('body').scrollspy({target: ".nav", offset: 0}); 
  $("#myNavbar a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash; 
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});



$(document).ready(function(){
    
var controller = new ScrollMagic.Controller();

var timeline = new TimelineMax()
    .add(TweenMax.from(("#section1 h2"),1,{opacity:0, scale:3}))
    .add(TweenMax.from(("#section1 em"),3,{opacity:1, opacity:0}))
    .from('#section1 .sub-head', 1, {x: '150%', delay:1, opacity:0, ease:Power0.easeOut},0)
    .from('#section1 .skill-icon', 1, {x: '-150%', delay:2, opacity:0, ease:Power0.easeOut},0)
    .from('#section1 .apparel', 1, {x: '-150%', delay:3, opacity:0, ease:Power0.easeOut},0)
    .from('#section1 .CAD', 1, {x: '-150%', delay:3, opacity:0, ease:Power0.easeOut},0)
    .from('#section1 .program', 1, {x: '-150%', delay:3, opacity:0, ease:Power0.easeOut},0)
    .from('#section1 .production', 1, {x: '-150%', delay:3, opacity:0, ease:Power0.easeOut},0)
    .from('#section1 .database', 1, {x: '-150%', delay:3, opacity:0, ease:Power0.easeOut},0)
var scene= new ScrollMagic.Scene({triggerElement:'#section1 h2', triggerHook:.3})
.setTween(timeline)
scene.reverse(false)
.addTo(controller);

var timeline = new TimelineMax()
    .add(TweenMax.from(("#section2 h2"),1,{opacity:0, scale:3}))
    .add(TweenMax.from(("#section2 em"),3,{opacity:1, opacity:0}))
var scene= new ScrollMagic.Scene({triggerElement:'#section2 h2', triggerHook:.4})
.setTween(timeline)
scene.reverse(false)
.addTo(controller);

var timeline = new TimelineMax()
    .from('#section2 .ma', 1, {y: '150%', delay:0, opacity:0, ease:Power0.easeOut},0)
    .from('#section2 .cornell', 1, {y: '150%', delay:1, opacity:0, ease:Power0.easeOut},0)
var scene= new ScrollMagic.Scene({triggerElement:'#section2 h2', triggerHook:.3})
.setTween(timeline)
scene.reverse(false)
.addTo(controller);

var timeline = new TimelineMax()
    .from('#section2 .bf', 1, {y: '150%', delay:0, opacity:0, ease:Power0.easeOut},0)
    .from('#section2 .nift', 1, {y: '150%', delay:1, opacity:0, ease:Power0.easeOut},0)
var scene= new ScrollMagic.Scene({triggerElement:'#section2 h2', triggerHook:.2})
.setTween(timeline)
scene.reverse(false)
.addTo(controller);
    
var timeline = new TimelineMax()
    .add(TweenMax.from(("#section3 h2"),1,{opacity:0, scale:3}))
    .add(TweenMax.from(("#section3 em"),3,{opacity:1, opacity:0}))
var scene= new ScrollMagic.Scene({triggerElement:'#section3 h2', triggerHook:.6})
.setTween(timeline)
scene.reverse(false)
.addTo(controller);

var timeline = new TimelineMax()
    .from('#section3 .biba .sub-head', 1, {x: '150%', delay:0, opacity:0, ease:Power0.easeOut},0)
    .from('#section3 .biba p', 1, {x: '-150%', delay:0, opacity:0, ease:Power0.easeOut},0)
var scene= new ScrollMagic.Scene({triggerElement:'#section3 h2', triggerHook:.5})
.setTween(timeline)
scene.reverse(false)
.addTo(controller);
    
var timeline = new TimelineMax()
    .from('#section3 .lee .sub-head', 1, {x: '150%', delay:0, opacity:0, ease:Power0.easeOut},0)
    .from('#section3 .lee p', 1, {x: '-150%', delay:0, opacity:0, ease:Power0.easeOut},0)
var scene= new ScrollMagic.Scene({triggerElement:'#section3 h2', triggerHook:.4})
.setTween(timeline)
scene.reverse(false)
.addTo(controller);


var timeline = new TimelineMax()
    .from('#section3 .raymonds .sub-head', 1, {x: '150%', delay:0, opacity:0, ease:Power0.easeOut},0)
    .from('#section3 .raymonds p', 1, {x: '-150%', delay:0, opacity:0, ease:Power0.easeOut},0)
var scene= new ScrollMagic.Scene({triggerElement:'#section3 h2', triggerHook:.3})
.setTween(timeline)
scene.reverse(false)
.addTo(controller);

var timeline = new TimelineMax()
    .from('#section3 .arvind .sub-head', 1, {x: '150%', delay:0, opacity:0, ease:Power0.easeOut},0)
    .from('#section3 .arvind p', 1, {x: '-150%', delay:0, opacity:0, ease:Power0.easeOut},0)
var scene= new ScrollMagic.Scene({triggerElement:'#section3 h2', triggerHook:.2})
.setTween(timeline)
scene.reverse(false)
.addTo(controller);

var timeline = new TimelineMax()
    .from('#section3 .terrain .sub-head', 1, {x: '150%', delay:0, opacity:0, ease:Power0.easeOut},0)
    .from('#section3 .terrain p', 1, {x: '-150%', delay:0, opacity:0, ease:Power0.easeOut},0)
var scene= new ScrollMagic.Scene({triggerElement:'#section3 h2', triggerHook:.1})
.setTween(timeline)
scene.reverse(false)
.addTo(controller);

var timeline = new TimelineMax()
    .add(TweenMax.from(("#section4 h2"),1,{opacity:0, scale:3}))
    .add(TweenMax.from(("#section4 #container"),1,{opacity:1, opacity:0}))
    .add(TweenMax.from(("#section4 em"),3,{opacity:1, opacity:0}))
var scene= new ScrollMagic.Scene({triggerElement:'#section4 h2', triggerHook:.4})
.setTween(timeline)
scene.reverse(false)
.addTo(controller);

var timeline = new TimelineMax()
    .add(TweenMax.from(("#section5 .heading"),1,{opacity:0, scale:3}))
    .from('#section5 .phone', 1, {y: '150%', delay:1, opacity:0, ease:Power0.easeOut},0)
    .from('#section5 .email', 1, {y: '150%', delay:1, opacity:0, ease:Power0.easeOut},0)

    .add(TweenMax.from(("#section5 .border-button"),1,{opacity:0, scale:1.5}))
    .add(TweenMax.from(("#section5 em"),3,{opacity:1, opacity:0}))
var scene= new ScrollMagic.Scene({triggerElement:'#section5 h2', triggerHook:.7})
.setTween(timeline)
scene.reverse(false)
.addTo(controller);

});
    
/*.addIndicators({
			name: 'fade scene',
			colorTrigger: 'black',
			colorStart: '#75C695',
			colorEnd: 'pink'
		}) 
*/