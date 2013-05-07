var PRELOAD = new preloadClass();

function preloadClass(){
  var self= this;
  var imagePreloadArray = [];

  var basePath = null;

  self.init = function(){
    basePath = CONFIG.imagePath;
  }

  self.loadGroupWithID = function(groupID , callback , returnType ){
    var curGroup = imageGroups[groupID];
    var groupType = curGroup.type;
    var groupData = curGroup.data;

    var imageArray = null;
    
    if(groupType == "list")
      imageArray = processList(groupData)

    imagePreloadArray.push( new imageArrayLoad( imageArray , callback , returnType ) );
  }

  function processList(groupData){
    var tempImgArray = [];

    for( var i = 0 ; i < groupData.length ; i++)
    {
        var curImg = groupData[i];
        var imgEl = createImgEl( curImg.name , curImg.url );
        tempImgArray.push(imgEl);
    }

    return tempImgArray;
  }

  function createImgEl( name , url )
  {

    var imgEl = { "name" : name , "url" : basePath +  url };
    return imgEl;

  }

  //image array load class

  function imageArrayLoad( imgArray , callback , returnType )
  { 
      var self = this;
      var imgToLoad = imgArray.length;
      var imagesLoaded = 0;

      var finalImageArray = null;

      function init(){
        console.log("PRELOADING IMAGE GROUP" , imgArray , returnType)

        if(returnType == "array")
          finalImageArray = [];
        else if(returnType == "object")
          finalImageArray = {};

        for( var i = 0 ; i < imgToLoad ; i++)
        {
          var curImageObj = imgArray[i];
          var tempImg = new Image;
          tempImg.name = curImageObj.name;
          tempImg.tag = i;
          tempImg.onload = function(){

            this.imgDim = { "w" : this.width , "h" : this.height }
            imgLoadHandler(this);

          }
          tempImg.src = curImageObj.url;
        }
      }

      function imgLoadHandler(img){

        if(returnType == "array")
          finalImageArray[img.tag] = img;
        else if(returnType == "object")
          finalImageArray[img.name] = img;

        console.log("THIS IS HAPPENING" , img.name)


        imagesLoaded++;
        if( imagesLoaded >= imgToLoad)
        {
          callback( finalImageArray );
        }
      }

      init();
  }

}