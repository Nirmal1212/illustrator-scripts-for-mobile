/**
* Remixer 1: @herkulano (http://www.herkulano.com)
* Remixer 2: @hotappsfactory (http://www.hotappsfactory.com)
* Remixer 3: @nirmal1212 (nirmal@madstreetden.com)
* Thanks to: Niels Bosma (niels.bosma@motorola.com)
*/

var folder = Folder.selectDialog();
var document = app.activeDocument;
var suffix;

if (document && folder) {
	suffix = prompt("Sharon Please enter a prefix for file name", "") || "";
}

if (document && folder) {
	var documentName = document.name.replace(".ai","");
	
	saveToRes(100, documentName, "", documentName + "Ios", false);
	saveToRes(200, documentName, "@2x", documentName + "Ios", false);
	saveToRes(300, documentName, "@3x", documentName + "Ios", false);
	
	saveToRes(100, documentName, "", "mdpi_" + documentName, true);
	saveToRes(150, documentName, "", "hdpi_" + documentName, true);
	saveToRes(200, documentName, "", "xhdpi_" + documentName, true);
	saveToRes(300, documentName, "", "xxhdpi_" + documentName, true);
	saveToRes(400, documentName, "", "xxxhdpi_" + documentName, true);
}

/**
* Scale and export file suffixed by densitySuffix, in a specific folder named folderName
*/
function saveToRes(scaleTo, preffix, densitySuffix, folderName, lowerCase) {
	var i, ab, file, options;
		
	var myFolder = new Folder(folder.absoluteURI + "/" + folderName);
	if(!myFolder.exists) myFolder.create();
	
	for (i = document.artboards.length - 1; i >= 0; i--) {
		document.artboards.setActiveArtboardIndex(i);
		ab = document.artboards[i];
		
		var fileName = preffix + ab.name + suffix;
		
		if(lowerCase){
			var fileNameLowerCase = "";
			
			for (var j = 0; j < fileName.length; j++) {
				if(isUpperCase(fileName.charAt(j))){
					if(j > 0){
						fileNameLowerCase += "_";
					}
					 fileNameLowerCase += fileName.charAt(j).toLowerCase();
				}
				else{
					fileNameLowerCase += fileName.charAt(j);
				}
			}
			fileName = fileNameLowerCase;
		}
	
		file = new File(myFolder.fsName + "/" + fileName + densitySuffix + ".png");
		
		options = new ExportOptionsPNG24();
		options.antiAliasing = true;
		options.transparency = true;
		options.artBoardClipping = true;
		options.verticalScale = scaleTo;
		options.horizontalScale = scaleTo;
		
		document.exportFile(file, ExportType.PNG24, options);
	}
}

function isUpperCase(myString) { 
      return (myString == myString.toUpperCase()); 
} 
