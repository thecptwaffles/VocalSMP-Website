    MinecraftAPI.getServerStatus('147.135.105.18', {
        port: 25567 // optional, only if you need a custom port
    }, function (err, status) {
        if (err) {
            return document.querySelector('#server-status').innerHTML = 'Error loading status';
        }

        // you can change these to your own message!
        document.querySelector('#server-online').innerHTML = status.online ? 'up' : 'down';
        document.querySelector('.server-version').innerHTML = players.max 
    });