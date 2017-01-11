# UdacityPause
Chrome plugin that adds global hotkeys to pause and skip around in Udacity. Useful when taking notes.

Commands will be sent to all active udacity classroom tabs. This means if there are two Udacity windows open, they will both receive any commands issued.

##Usage

These are the default keys, which can be overridden using Chrome's UI.

Global Hotkey | Action
------------ | -------------
Ctrl+Shift+8 | Skip back 5 seconds.
Ctrl+Shift+9 | Pause/Play.
Ctrl+Shift+0 | Skip forward 5 seconds.

##Configuration 

The number of seconds to skip forward/backward when using the seek commands is configurable through the extension's UI. 

Due to security concerns, the Chrome API restricts default global keys to some combination of Ctrl+Shift+[0-9]. Once installed, the user can manually override these settings to anything they prefer by visiting Chrome's Keyboard Shortcuts for Extensions and Apps page, located at chrome://extensions/configureCommands.

##Installation

###Prepackaged Extension
[Install here through the chrome web store](https://chrome.google.com/webstore/detail/udacity-global-pause-hotk/nofjfgmcoeohehhmkimnfcgimefhpagm?hl=en-US).  

###From source
[Enable chrome developer mode](https://developer.chrome.com/extensions/faq#faq-dev-01), pull down the code,then go to chrome://extensions and select this plugin's folder.
