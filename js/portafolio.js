
$(document).ready(function(){

    setTimeout(function(){
         $("#wait").css("display", "none");
    }, 1000);

    /*$("#imgBiciando").hover(function(){
        $(this).css("background-color", "pink");
        }, function(){
        $(this).css("background-color", " #191919");
    });
    var height = $(window).height();

    ajustesIniciales();

    function ajustesIniciales(){
        $("section#body").css({"margin-top": height - 80 + "px"});
    }


    $(document).scroll(function(){
        var scrollTop = $(this).scrollTop();
        var pixels = scrollTop / 70;

        if(scrollTop < height){
            $("section#contenedor_general").css({
                "-webkit-filter": "blur(" + pixels + "px)",
                "background-position": "center -" + pixels * 10 + "px"
            });

        }

    });*/

});

/*$('#fullpage').fullpage({
	anchors: ['firstPage', 'secondPage', '3rdPage'],
	sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
	navigation: true,
	navigationPosition: 'right',
	navigationTooltips: ['First page', 'Second page', 'Third and last page']
});
//paralax
$('section[data-type="parallax_section"]').each(function(){
    var $bgobj = $(this); // Variable para asignacion de objeto
    $(window).scroll(function() {
    	$window = $(window);
        var yPos = -($window.scrollTop() / $bgobj.data('speed'));
        // cordinadas del background
        var coords = '50% '+ yPos + 'px';
        // moviendo el background
        $bgobj.css({ backgroundPosition: coords });
    });
});
// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
function move() {
  var elem = document.getElementById("container");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      document.getElementById("label").innerHTML = width * 1  + '%';
    }
  }
}
var bar = new ProgressBar.Line(cont, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'}
});

bar.animate(1.0);*/
