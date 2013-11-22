function showNotification(tabId, q, source, img) {
	
	var notification = window.webkitNotifications.createNotification(
      	img,
      	source + ' was completed!',
    	q
    );
    
    notification.onclick = function () {
      	chrome.runtime.sendMessage({greeting: "highlightstep", tabid:tabId}, function(response) {
		  
		});
      	notification.close();
    }
    notification.show();
}

function notify() {
  var havePermission = window.webkitNotifications.checkPermission();
  if (havePermission == 0) {
    // 0 is PERMISSION_ALLOWED
    
    chrome.runtime.sendMessage({greeting: "initialstep" }, function(response) {
    	if( response.answer == 'done' ) {
    		var q = 'Unknown'
			try {
				q = document.getElementById("query").textContent.trim().substring(0,180)
			} catch(e) {
				console.log(e.message)
			}

	  		showNotification(response.tabid, q, response.source, response.img)
	  	} else if( response.answer == 'pig' ) { 
	  		var counter = 720
    		
    		var interval = setInterval(function(){
    			if( document.getElementById('download_job_result').href.trim() != '' ) {    				
    				clearInterval(interval)

    				var q = 'Unknown'
					try {
						q = document.getElementById('pig_script_form').getElementsByClassName('CodeMirror')[0].textContent.trim().substring(0,180)
					} catch(e) {
						console.log(e.message)
					}

    				showNotification(response.tabid, q, response.source, response.img)
    			}

    			if(  counter < 0 ) {
    				clearInterval(interval)	
    			}
    			counter = counter - 1;
    		}, 5000)	
	  	}
	});

  } else {
      window.webkitNotifications.requestPermission();
  }
}  

notify()