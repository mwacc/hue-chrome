function notify() {
  var havePermission = window.webkitNotifications.checkPermission();
  if (havePermission == 0) {
    // 0 is PERMISSION_ALLOWED
    var notification = window.webkitNotifications.createNotification(
      	'http://cdn.dice.com/wp-content/uploads/2013/06/elephant_rgb_sq.png',
      	'Hue job was completed!',
    	'Hue job was executed and the result is available in Hue now'
    );
    
    notification.onclick = function () {
      //window.open("http://stackoverflow.com/a/13328397/1269037");
      notification.close();
    }
    notification.show();
  } else {
      window.webkitNotifications.requestPermission();
  }
}  

notify()