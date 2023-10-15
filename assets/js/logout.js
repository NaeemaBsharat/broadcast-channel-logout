




    const logoutButton = document.getElementById('logoutButton');
  
    const broadcastChannel = new BroadcastChannel('myChannel'); 
  
    logoutButton.addEventListener('click', function () {
    
      broadcastChannel.postMessage({ action: 'logout' });
    });
 
  

