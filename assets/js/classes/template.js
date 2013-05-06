var TEMPLATE = new templateClass();

function templateClass(){
	
	var self = this;

	self.init = function(){

		//creating globa ref
		Handlebars.registerHelper('global', function(name) {
		  return copyData.global[name]
		});


		buildTemplates();
	}

	self.compileTemplate = function(selector , context , dest){

		var source   = $("#"+selector).html();
		var template = Handlebars.compile(source);
		var html = template(context);

		if(dest.length >= 1)
			dest.html(html)

		return html;

	}
	function buildTemplates(){

		processTemplate( $("#header") , "header-template" , copyData["header"] );
		processTemplate( $("#sub-header") , "sub-header-template" , copyData["sub-header"] );
		processTemplate( $("#main-content") , "main-content-template" , copyData["main-content"] );
		processTemplate( $("#contract") , "contract-template" , copyData["contract"] );
		processTemplate( $("#footer") , "footer-template" , copyData["footer"] );

	}


	//process normal template
	function processTemplate( el , templateClass , copy){
		var newCopyObj = {};

		//looping through propreties of copy object
		for( copyEl in copy)
		{
			var tempObj = copy[copyEl]

			var isArray =  $.isArray( tempObj ) ;
			var arrayObj = [];

			if( isArray )
			{
				for( var j = 0 ; j < tempObj.length ; j++)
				{
					var obj = tempObj[j];

					if(typeof obj == 'string')
					{
						arrayObj.push(obj) 
					}
					else
					{
						var newObj = {};
						for( p in obj)
						{
							newObj[p] = obj[p]
						}
						arrayObj.push(newObj) 
					}
				}

				newCopyObj[copyEl] = arrayObj;
			}
			else
			{
				newCopyObj[copyEl] = tempObj
			}						
		}

		self.compileTemplate( templateClass ,  newCopyObj , el );
	}

}