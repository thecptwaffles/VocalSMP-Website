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

    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
} 
