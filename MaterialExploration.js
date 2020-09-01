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
    .from('#section1 h2', 1, {x: '150%', delay:1, opacity:0, ease:Power0.easeOut},0)
    .add(TweenMax.from(("#section1 img"),2,{opacity:1, opacity:0, scale:0.9}))
    .add(TweenMax.from(("#section1 em"),1,{opacity:1, opacity:0}))
    .from('#section1 p', 1, {y: '150%', delay:3, opacity:0, ease:Power0.easeOut},0)
var scene= new ScrollMagic.Scene({triggerElement:'#section1 h2', triggerHook:.3})
.setTween(timeline)
scene.reverse(false)
.addTo(controller);

var timeline = new TimelineMax()
    .from('#section2 h2', 1, {x: '-150%', delay:0, opacity:0, ease:Power0.easeOut},0)
    .add(TweenMax.from(("#section2 em"),1,{opacity:1, opacity:0}))
    .from('#section2 p', 1, {y: '150%', delay:1, opacity:0, ease:Power0.easeOut},0)
    .add(TweenMax.from(("#mural2"),1,{opacity:1, opacity:0, scale:0.9}))
    .add(TweenMax.from(("#mural1"),1,{opacity:1, opacity:0, scale:0.9}))
var scene= new ScrollMagic.Scene({triggerElement:'#section2 h2', triggerHook:.5})
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