chrome.commands.onCommand.addListener(function(command) {
	// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	// console.log("oncommand " + command);
	if(command.startsWith("udacity_pause_")){
		sendUdacityCommand(command);
	}
});

function sendUdacityCommand(command){
	// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	chrome.tabs.query({url: "*://*.udacity.com/course/viewer/*", active: true}, function(tabs) {
		// console.log('Command:', command);
		tabs.forEach(function(thisTab){
			chrome.tabs.sendMessage(thisTab.id, {action : command});
		});
	});	
}