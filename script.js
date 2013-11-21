function showNotification(tabId, source, img) {
	var q = 'Unknown'
	try {
		q = document.getElementById("query").textContent.trim().substring(0,180)
	} catch(e) {
		console.log(e.message)
	}

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

    console.log('send msg')
    chrome.runtime.sendMessage({greeting: "initialstep"}, function(response) {
	  showNotification(response.answer, response.source, response.img)
	});

  } else {
      window.webkitNotifications.requestPermission();
  }
}  

notify()