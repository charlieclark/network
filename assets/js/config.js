var CONFIG = new configClass();

function configClass(){

	var self = this;

	self.windowHeight = 0;
	self.windowWidth = 0;

	self.contentHeight = 0;
	self.contentWidth = 0;

	self.mouseX = 0;
	self.mouseY = 0;

	self.baseURL = document.URL;

	self.assetPath = self.baseURL + "assets";
	self.imagePath = self.assetPath + "/img/";
	self.downloadPath = self.baseURL + "/downloads/";

	//debug variables
	self.mobileDebug = false;
	self.isDev = false;


	function init(){

		
		URLConditions();


	}

	function URLConditions(){
		var curURL = self.baseURL;

		if( curURL.indexOf("charlieclark")>=0 || curURL.indexOf("williamclark")>=0 )
		{
			self.isDev = true;
		}

	}

	init();
 
}
 
