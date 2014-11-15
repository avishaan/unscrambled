var enabledText = 'on';
var disableText = 'off';
chrome.browserAction.onClicked.addListener(function(tab){
  // first get the state
  chrome.browserAction.getBadgeText({
    tabId: tab.id,
  }, function(result){
    if (result === 'off'){
      // it's off, turn it on
      chrome.browserAction.setBadgeText({
        text: enabledText,
        tabId: tab.id
      });

    } else {
      // it's on, turn it off
      chrome.browserAction.setBadgeText({
        text: disableText,
        tabId: tab.id
      });
    }
  });
  // then set the state based on current state
  console.log('action clicked');
});
