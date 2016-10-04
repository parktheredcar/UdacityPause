var intRegex = /^\d+$/;
var defaultSeek = 5;

document.addEventListener('DOMContentLoaded', function() {

    document.querySelector("#hotkeysConfig").addEventListener('click', function() {
        chrome.tabs.create({ url: 'chrome://chrome/extensions/configureCommands' });
    });

    document.querySelector("#setSeekDuration").addEventListener('click', function(){
    	var input = document.querySelector("#seekDuration").value;
    	if(intRegex.test(input)){
    		chrome.storage.local.set({"seekDuration": parseInt(input)});
    	}
    });

	chrome.storage.local.get(['seekDuration'], function(items){
		var seekDuration;
		if(intRegex.test(items.seekDuration)){
			seekDuration = items.seekDuration;
		}else{
			seekDuration = defaultSeek;
		}
		document.querySelector("#seekDuration").value = seekDuration;
	});
});