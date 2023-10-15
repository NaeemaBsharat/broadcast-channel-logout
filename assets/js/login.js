


    const loginButton = document.getElementById('loginButton');
    const logoutButton = document.getElementById('logoutButton');
  
    const broadcastChannel = new BroadcastChannel('myChannel'); 
  
    loginButton.addEventListener('click', function () {
     
      broadcastChannel.postMessage({ action: 'login' });
    });
  
    broadcastChannel.addEventListener('message', function (event) {
      if (event.data.action === 'logout') {
     
        alert('User has logged out.');
      }
    });
 
  
    

