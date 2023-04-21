document.getElementById('sendNotification').addEventListener('click', () => {
  if (!('Notification' in window)) {
    alert('This browser does not support notifications.');
  } else {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        showNotification();
      }
    });
  }
});

function showNotification() {
  const notification = new Notification('Hello!', {
    body: 'You clicked the button.',
  });
}
