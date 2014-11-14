var types = new Array("textarea","input","div","h1","h2","h3","span","p");
var fontin ="Verdana";
var fontout = "\'Courier New\'";

$(document).ready(function(){
  console.log('test');
  $('ul#messages li a').click(function(){
    debugger;
    // send message to context script to act
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {message: "hello"}, function(response) {
        console.log(response.farewell);
      });
    });
  });
});
