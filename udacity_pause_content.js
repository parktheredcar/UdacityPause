var safeGetYoutubePlayer = `
	var errMsg = null;
	var player = null;
	if(YT === null){
		errMsg = "UdacityPause error: YT is null, something went wrong."
	}else{
		var videoFrame = document.querySelector("div[class^=youtube-player] iframe");
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
	if(request.action === "udacity_pause_next"){
		alert("next");
		document.querySelector("div[class^=_header--next]").click();
	}else if(request.action === "udacity_pause_prev"){
		// callAngularFunction("goToPreviousMorsel");
		document.querySelector("div[class^=_header--prev]").click();
	}
});	

// function callAngularFunction(functionName){
// 	var scriptContent = `
// 		angular.element(document.querySelector("[ng-click='${functionName}()']")).scope().${functionName}()
// 	`;
// 	runRemoteScript(scriptContent);
// }

// function seekUdacity(seconds){
// 	var scriptContent = `
// 		${safeGetYoutubePlayer}
// 		var time = player.getCurrentTime();
// 		player.seekTo(time + ${seconds}, true)
// 	`;
// 	runRemoteScript(scriptContent);
//}

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