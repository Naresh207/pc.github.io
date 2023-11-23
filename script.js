$(document).ready(function () {
    $("#button").click(function (event) {
        $("#box").show();
    });
    setTimeout(function () { 
        $('#blueScreen').show();
        $('#blackScreen').hide(); 
        blueScreen();
    }, 1000);
});

function blueScreen() {
    // setTimeout('window.open("https://geekprank.com/boot-device-not-found/","_self");', 4000);
    setTimeout(function () {
        document.getElementById("redirectIframe").style.display = "block";
        document.getElementById("redirectIframe").innerHTML = '<iframe id="fullScreenIframe" style="width: 100%; height: 100%; overflow: hidden;" src="https://geekprank.com/boot-device-not-found/" width="100" height="100" scrolling="no">Iframes not supported</iframe>';
        document.getElementById("fullScreenIframe").contentWindow.focus();
    }, 4000);
}
