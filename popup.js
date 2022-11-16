
chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
  document.getElementById("p").innerHTML = selection[0];
});
