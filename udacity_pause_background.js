var defaultSeek = 5;
var intRegex = /^\d+$/;

chrome.commands.onCommand.addListener(function(command) {
	if(command.startsWith("udacity_pause_")){
		sendUdacityCommand(command);
	}
});

function sendUdacityCommand(command){

	chrome.storage.local.get(['seekDuration'], function(items){

		var seekDuration;
		if(intRegex.test(items.seekDuration)){
			seekDuration = items.seekDuration;
		}else{
			seekDuration = defaultSeek;
		}

		chrome.tabs.query({url: "*://classroom.udacity.com/courses/*", active: true}, function(tabs) {
			tabs.forEach(function(thisTab){
				chrome.tabs.sendMessage(thisTab.id, {action : command, seekDuration : seekDuration});
			});
		});	
	});
}