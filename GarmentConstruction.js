// display modal box
var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("btn1");
btn1.onclick = function() {
  modal1.style.display = "block";
}

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("btn2");
btn2.onclick = function() {
  modal2.style.display = "block";
}

var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("btn3");
btn3.onclick = function() {
  modal3.style.display = "block";
}
var modal4 = document.getElementById("myModal4");
var btn4 = document.getElementById("btn4");
btn4.onclick = function() {
  modal4.style.display = "block";
}
var modal5 = document.getElementById("myModal5");
var btn5 = document.getElementById("btn5");
btn5.onclick = function() {
  modal5.style.display = "block";
}
var modal6 = document.getElementById("myModal6");
var btn6 = document.getElementById("btn6");
btn6.onclick = function() {
  modal6.style.display = "block";
}
var modal7 = document.getElementById("myModal7");
var btn7 = document.getElementById("btn7");
btn7.onclick = function() {
  modal7.style.display = "block";
}
var modal8 = document.getElementById("myModal8");
var btn8 = document.getElementById("btn8");
btn8.onclick = function() {
  modal8.style.display = "block";
}
var modal9 = document.getElementById("myModal9");
var btn9 = document.getElementById("btn9");
btn9.onclick = function() {
  modal9.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
  if (event.target == modal7) {
    modal7.style.display = "none";
  }
  if (event.target == modal8) {
    modal8.style.display = "none";
  }
  if (event.target == modal9) {
    modal9.style.display = "none";
  }
}


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
    .from('#section1 h2', 1, {x: '150%', delay:1, opacity:0, ease:Power0.easeOut},0)
.from('#section2 h2', 1, {x: '-150%', delay:0, opacity:0, ease:Power0.easeOut},0)
    .add(TweenMax.from(("#section1 img"),2,{opacity:1, scale:0}))
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
    .add(TweenMax.from(("#mural2"),1,{opacity:1, scale:0}))
    .add(TweenMax.from(("#mural1"),1,{opacity:1, scale:0}))
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
