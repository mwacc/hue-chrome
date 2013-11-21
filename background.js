
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "initialstep") {
    	var tabid = sender.tab.id
      	sendResponse({answer: tabid});
    } else if (request.greeting == "highlightstep") {
    	chrome.tabs.update(request.tabid, {selected: true});
    	sendResponse({answer: 'done'});
    }
  });

