    MinecraftAPI.getServerStatus('147.135.105.18', {
        port: 25565 // optional, only if you need a custom port
    }, function (err, status) {
        if (err) {
            return document.querySelector('#server-status').innerHTML = 'Error loading status';
        }

        // you can change these to your own message!
        document.querySelector('#server-online').innerHTML = status.online ? 'online!' : 'down :(';
        document.querySelector('.server-version').innerHTML =  status.server.name
        document.querySelector('.server-motd').innerHTML = status.motd
        document.querySelector('.server-players').innerHTML = status.players.now
        document.querySelector('.server-max').innerHTML = status.players.max
    });