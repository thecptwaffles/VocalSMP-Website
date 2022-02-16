    MinecraftAPI.getServerStatus('147.135.105.18', {
        port: 25567 
    }, function (err, status) {
        if (err) {
            return document.querySelector('#server-status').innerHTML = 'Error loading';
        }

        document.querySelector('#server-online').innerHTML = status.online ? 'online!' : 'down :(';
        document.querySelector('.server-version').innerHTML =  status.server.name
        document.querySelector('.server-motd').innerHTML = status.motd
        document.querySelector('.server-players').innerHTML = status.players.now
        document.querySelector('.server-max').innerHTML = status.players.max
    });