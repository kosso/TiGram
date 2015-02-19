var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
win.open();

var tigram = require('com.kosso.tigram');
Ti.API.info("module is => " + tigram);

/*

...

Some code to get/take a photo... 

(sorry.. lazy! :) 

... 


*/

var the_photo = *[a TiBlob from the camera or album]*  


var the_caption = "Sent via Titanium!";

// when some button is clicked to share on Instagram...

		if(tigram.isInstalled){
			tigram.openPhoto({
				mediathe_photo,
				caption:the_caption
			});
		} else {
			alert("Instagram is not installed!");
		}




