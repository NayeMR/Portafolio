alert("hola");
$(document).ready(

	$("#responsive_headline").fitText();
	//fullpage
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage'],
		sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['First page', 'Second page', 'Third and last page']
	});
);
