var preloadData = {
	//config
	defaultSections : ["global"],
	imagePath : CONFIG.imagePath,

	sections:
	{
		"global" : []
	}

}


var imageGroups = {
	"main-assets":
	{
		"type" : "list",
		"data": 
		[
			{ name: "logo-top", url : "logo-top.png" }
		]
	},
	"secondary-assets":
	{
		"type" : "list",
		"data": 
		[
			{ name: "logo-bottom1", url : "logo-bottom1.png" },
			{ name: "logo-bottom2", url : "logo-bottom2.png" }
		]
	}
}


//examples
// "test-array":
// {
// 	"array":
// 	[
// 		{ name: "project0", url : "thumb0.png" }
// 	]
// },