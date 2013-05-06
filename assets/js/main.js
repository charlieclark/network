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
	loadHandlers();

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

function loadHandlers(){

	 $(PRELOAD).on('group-finished' , function(event , data){

	 	var tag = data.groupTag;
	 	var elArray = data.elementArray;

	 	if(tag == "firstAssets")
	 	{
	 		//do something here
	 	}
	 	
	 });
}

function mouseEvents(){

	//global
	$("#content").mousemove(function(e){
		CONFIG.mouseX = e.pageX;
		CONFIG.mouseY = e.pageY;
	});

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




