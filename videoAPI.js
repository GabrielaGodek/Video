$(document).ready(function() {
    let video=$(".video")[0];
    //PlayPauseBtn
    $('#playPauseBtn').click(function() {
        if(video.paused){
            video.play();
            $('#playPauseBtn').html('PAUSE');
        } else {
            video.pause();
            $('#playPauseBtn').html('PLAY');
        }
    });
    //MuteBtn
    $('#muteBtn').click(function() {

        if(!video.muted){
            video.muted = true;
            $('#muteBtn').html('UNMUTE');
        } else {
            video.muted = false;
            $('#muteBtn').html('MUTE');
        }
    });
    //ResizeUpBtn
    $('#sizeUp').click(function() {
        $(".video").css('width', '+=30px');
    });
    //ResizeDownBtn
    $('#sizeDown').click(function() {
        $(".video").css('width', '-=30px');
    });
});