
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
    	} else if( sender.tab.url.indexOf('pig/#logs') != -1 ) { // pig
    		/*var counter = 720
    		console.log('start interval')
    		var interval = setInterval(function(){
    			var doc = request.doc
    			if( /.+100%/.test(doc.getElementById('logs').getElementsByTagName('div')[1].getElementsByTagName('div')[0].getElementsByTagName('h4')[0].textContent) ) {
    				source = "Pig job"
    				sourceImg = "http://pig.apache.org/images/pig-logo.gif"

    				clearInterval(interval)
    			}

    			if(  counter < 0 ) {
    				clearInterval(interval)	
    			}
    			counter = counter - 1;
    		}, 5000)	*/
    		console.log('end interval')
    	}

      	sendResponse({answer: tabid, source: source, img: sourceImg });
    } else if (request.greeting == "highlightstep") {
    	chrome.tabs.update(request.tabid, {selected: true});
    	sendResponse({answer: 'done'});
    }
  });

