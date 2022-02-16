
    MinecraftAPI.getServerStatus('147.135.105.18', {
    port: 25567 // optional, only if you need a custom port
}, function (err, status, server, players) {
    if (err) {
    return document.querySelector('.server-online').innerHTML = 'Error loading status';
    }

    document.querySelector('.server-online').innerHTML = status.online ? 'online' : 'offline';

    document.querySelector('.server-motd').innerHTML = status.motd;

    document.querySelector('.server-players').innerHTML = status.players.now;

    document.querySelector('.server-max').innerHTML = status.players.max

    document.querySelector('.server-version').innerHTML = status.server.name
}
);

