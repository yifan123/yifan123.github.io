function blink(){
    // window.alert('1111');
    $('fa').fadeOut('fast').fadeIn('fast');
}

$(document).ready(function () {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', "/assets/myname.m4a");
    audioElement.autoPlay = false;

    audioElement.crossOrigin = "anonymous";

    $('#soundPlay').click(function (e) {
        window.postMessage("111");

        audioElement.play();

        blink();

        // Cancel the default action
        e.preventDefault();
    });
});

setInterval(blink,100);