var enabled_icon = {
      "19": "images/icon19.png",
      "38": "images/icon38.png"
};
var disabled_icon = {
      "19": "images/disabled19.png",
      "38": "images/disabled38.png"
};

var enabled = true;
chrome.storage.local.set({enabled: enabled}, function() {});

chrome.browserAction.onClicked.addListener(function(tab) {
  enabled = !enabled;
  chrome.storage.local.set({enabled: enabled}, function() {});
  chrome.browserAction.setIcon({path: enabled ? enabled_icon : disabled_icon});
});
