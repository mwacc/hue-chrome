function showNotification(tabId) {
	var notification = window.webkitNotifications.createNotification(
      	'http://cdn.dice.com/wp-content/uploads/2013/06/elephant_rgb_sq.png',
      	'Hue job was completed!',
    	'Hue job was executed and the result is available in Hue now'
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

    chrome.runtime.sendMessage({greeting: "initialstep"}, function(response) {
	  showNotification(response.answer)
	});

  } else {
      window.webkitNotifications.requestPermission();
  }
}  

notify()