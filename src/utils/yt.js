// Function to load the YouTube IFrame API script
function loadYouTubeIframeAPI() {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = "https://www.youtube.com/iframe_api";
        script.onload = () => {
            console.log("YouTube IFrame API script loaded");
            resolve();
        };
        script.onerror = () => {
            console.error("Failed to load YouTube IFrame API script");
            reject();
        };
        document.head.appendChild(script);
    });
}

// Ensure the onYouTubeIframeAPIReady function is globally accessible
window.onYouTubeIframeAPIReady = function() {
    console.log("YouTube IFrame API is ready");
    onYouTubeIframeAPIReady();
};
function onYouTubeIframeAPIReady() {
    console.log("test1")
    var player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: "https://www.youtube.com/watch?v=9Sk7RQtSl5g", // Replace with your YouTube video ID
        playerVars: {
            'autoplay': 1, // Auto-play the video
            'controls': 1, // Hide player controls
            'disablekb': 0, // Disable keyboard controls
            'modestbranding': 1, // Hide YouTube logo
            'rel': 0, // Disable related videos at the end
            'showinfo': 0 // Hide video title and uploader information
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    //currentTime = player.getCurrentTime();
}

 function onPlayerReady(event) {
    console.log("test2")
    //player.seekTo(begv);
    player.playVideo();

    setTimeout(() => {
        //changePlaybackSpeed(parseFloat(speedv))
    }, 1000)

    //getThumbnailUrl(urlv);

    duration = player.getDuration();

    player.setVolume(100);
}

 function onPlayerStateChange(event) {
    console.log("test3")
    if (event.data == YT.PlayerState.PLAYING) {
        //setInterval(loopVideo, 100); // Check video time every second
    }
}