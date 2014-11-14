$(document).ready(function(){
  console.log('test');
  $('ul#messages li a').click(function(){
    // send message to context script to act
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {message: "hello"}, function(response) {
        console.log(response.farewell);
      });
    });
  });
});
