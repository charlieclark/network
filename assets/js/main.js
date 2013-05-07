//global vars
var curLang = "en";
var curLayoutTag = null;


$(document).ready(function(){
	init();
});

function init(){


	//init preload
	PRELOAD.init(preloadData.defaultSections , [] );

	//initializing classes
	TEMPLATE.init();
	CONFIG.init();
	LAYOUT.init();

	//init render loop
	animate();

	//mouseEvents
	mouseEvents();

	PRELOAD.loadGroupWithID("main-assets" , loadMainImages , "object" );
	PRELOAD.loadGroupWithID("secondary-assets" , loadSecondaryImages , "object" );

	//resize
	$(window).resize();


}

function animate(){
	// requestAnimFrame(animate);
	// renderLoop();
}

function renderLoop(){
	//render classes here
}

function loadMainImages(theImages) {
	$(".logo-top").html( theImages["logo-top"] );
}

function loadSecondaryImages(theImages){
	$(".logo-bottom1").html(theImages["logo-bottom1"])
	$(".logo-bottom2").html(theImages["logo-bottom2"])

}
function mouseEvents(){

	//global
	$("#content").mousemove(function(e){
		CONFIG.mouseX = e.pageX;
		CONFIG.mouseY = e.pageY;
	});

	//specific
	$(".soundcloud-container").mouseover(function(){
		$(this).find(".soundcloud-overlay").fadeOut(2000);
	})

	$("#email").click(function(){
		window.open("mailto:WFCGREEN@GMAIL.COM");
	})

	$(".logo-button").click(function(){
		window.open(CONFIG.downloadPath + "logos.zip");
	})

}

//resize logic

$(window).resize(function(){
		getWidthHeight();
		checkBreakpoints();

		//resize classes
		LAYOUT.resize();
			
});

function checkBreakpoints(){

	if(CONFIG.contentWidth < 500)
	{
		layoutChange("mobile");
	}
	else
	{
		layoutChange("desktop")
	}

}

function layoutChange(tag){

	var allLayoutTags = ["desktop" , "mobile"];

	if( curLayoutTag != tag)
	{
		curLayoutTag = tag;

		for( var i = 0 ; i < allLayoutTags.length ; i++)
		{
			$("#content").removeClass(allLayoutTags[i]);
		}

		$("#content").addClass(curLayoutTag);
	}
}

function getWidthHeight(){
		CONFIG.windowHeight = $(window).height();
		CONFIG.windowWidth 	= $(window).width();

		CONFIG.contentHeight = CONFIG.windowHeight;
		CONFIG.contentWidth = CONFIG.windowWidth;
}




