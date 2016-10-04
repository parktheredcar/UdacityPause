var safeGetYoutubePlayer = `
	var errMsg = null;
	var player = null;
	if(YT === null){
		errMsg = "UdacityPause error: YT is null, something went wrong."
	}else{
		var videoFrame = document.querySelector("iframe[data-ng-controller=videoPlayer]");
		if(videoFrame === null){
			errMsg = "UdacityPause error: videoFrame is null, something went wrong."
		}else{
			player = YT.get(videoFrame.id);
			if(player === null){
				errMsg = "UdacityPause error: failed to YT.get player.";
			}
		}
	}

	if(errMsg !== null){
		alert(errMsg);
		throw errMsg;
	}
`

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	if(request.action === "udacity_pause_pause"){
		// console.log("udacity pause");
		console.log("pausing");

		var scriptContent = `
			${safeGetYoutubePlayer}
			var playerState = player.getPlayerState();
			if(playerState === YT.PlayerState.PAUSED){
				player.playVideo();
			}else if(playerState === YT.PlayerState.PLAYING){
				player.pauseVideo();
			}
		`;
		runRemoteScript(scriptContent);
	}else if(request.action === "udacity_pause_forward"){
		seekUdacity(request.seekDuration);
	}else if(request.action === "udacity_pause_back"){
		seekUdacity(-request.seekDuration);
	}
});	

function seekUdacity(seconds){
	var scriptContent = `
		${safeGetYoutubePlayer}
		var time = player.getCurrentTime();
		player.seekTo(time + ${seconds}, true)
	`;
	runRemoteScript(scriptContent);
}

function runRemoteScript(scriptContent){
	var randomTagId = "_" + guidGenerator();
	var script = document.createElement('script');
	script.id = randomTagId;
	script.appendChild(document.createTextNode(scriptContent));
	(document.body || document.head || document.documentElement).appendChild(script);
	script.parentElement.removeChild(script);
}


function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}