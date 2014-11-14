$(document).ready(function(){
  console.log('test');
  $('#remove').click(function(){
    // send message to context script to act
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {message: "remove"}, function(response) {
        console.log(response.farewell);
      });
    });
  });
  $('#add').click(function(){
    console.log('add');
    // send message to context script to act
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {message: "add"}, function(response) {
        console.log(response.farewell);
      });
    });
  });
});
