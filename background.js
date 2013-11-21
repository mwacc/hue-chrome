
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "initialstep") {
    	var tabid = sender.tab.id
    	var source = 'Unknown'
    	var sourceImg = 'Unknown'

    	if( sender.tab.url.indexOf('beeswax') != -1 ) { // hive
    		source = "Hive query"
    		sourceImg = 'http://hive.apache.org/images/hive_logo_medium.jpg'
    	} else if( sender.tab.url.indexOf('impala') != -1 ) { // impala
    		source = "Impala query"
    		sourceImg = 'http://blog.cloudera.com/wp-content/uploads/2012/11/impala-logo.png'
    	}

      	sendResponse({answer: tabid, source: source, img: sourceImg });
    } else if (request.greeting == "highlightstep") {
    	chrome.tabs.update(request.tabid, {selected: true});
    	sendResponse({answer: 'done'});
    }
  });

