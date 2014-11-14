var types = new Array("textarea","input","div","h1","h2","h3","span","p");

(function(){
  // css font-face for the font
  var styleNode           = document.createElement ("style");
  styleNode.type          = "text/css";
  styleNode.textContent   = "@font-face { font-family: Byslexic; src: url('"
                            + chrome.extension.getURL ("fonts/font.otf")
                            + "'); }"
                            ;
  document.head.appendChild (styleNode);
  // listen to messages
  chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.message == "hello"){
      // perform the font replace
      replaceFont();
      sendResponse({farewell: "goodbye"});
    }
  });
  // insert css first
  // chrome.tabs.insertCSS(null, {
  //   file: "style.css"
  // });

  var replaceFont = function(){
    chrome.extension.sendRequest({
      set:"font"
    },function(response){
      for(var i=0;i<types.length;i++){
        var node = document.getElementsByTagName(types[i]);
        for(var y=0;y<node.length;y++){
          // add class to matching elements for font style
          node[y].classList.add("byslexic");
        }
      }
    });
  };
})();
