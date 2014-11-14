var types = new Array("textarea","input","div","h1","h2","h3","span","p");
var fontin ="Verdana";
var fontout = "\'Courier New\'";
console.log("exec script.js");

(function(){
  chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });

  var replaceFont = function(){

  };
  chrome.extension.sendRequest({
    set:"font"
  },function(response){
    for(var i=0;i<types.length;i++){
      var node = document.getElementsByTagName(types[i]);
      for(var y=0;y<node.length;y++){
        // replace the font style
        node[y].style.fontFamily = fontout;
      }
    }
  });
})();
