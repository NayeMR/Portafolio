$("#responsive_headline").fitText();
//fullpage
/*$('#fullpage').fullpage({
	anchors: ['firstPage', 'secondPage', '3rdPage'],
	sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
	navigation: true,
	navigationPosition: 'right',
	navigationTooltips: ['First page', 'Second page', 'Third and last page']
});*/
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
