var enabledText = 'on';
var disableText = 'off';
chrome.browserAction.onClicked.addListener(function(tab){
  // first get the state
  chrome.browserAction.getBadgeText({
    tabId: tab.id,
  }, function(result){
    if (result === 'off'){
      // it's off, turn it on and run scripts
      chrome.browserAction.setBadgeText({
        text: enabledText,
        tabId: tab.id
      });
      chrome.tabs.sendMessage(tab.id, {message: "enable"}, function(response){
        console.log(response);
      });
    } else {
      // it's on, turn it off and run scripts
      chrome.browserAction.setBadgeText({
        text: disableText,
        tabId: tab.id
      });
      chrome.tabs.sendMessage(tab.id, {message: "disable"}, function(response){
        console.log(response);
      });
    }
  });
  // then set the state based on current state
  console.log('action clicked');
});
