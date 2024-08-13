document.addEventListener('DOMContentLoaded', () => {
    const audioElement = document.getElementById('audio');
    const playPauseButton = document.getElementById('play-pause-button');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const trackTitle = document.getElementById('track-title');

    const tracks = [
        { title: 'Track 1', src: 'track1.mp3' },
        { title: 'Track 2', src: 'track2.mp3' },
        { title: 'Track 3', src: 'track3.mp3' }
    ];

    let currentTrackIndex = 0;

    function loadTrack(index) {
        audioElement.src = tracks[index].src;
        trackTitle.textContent = tracks[index].title;
        audioElement.load();
    }

    function playPauseTrack() {
        if (audioElement.paused) {
            audioElement.play();
            playPauseButton.textContent = 'Pause';
        } else {
            audioElement.pause();
            playPauseButton.textContent = 'Play';
        }
    }

    function prevTrack() {
        currentTrackIndex = (currentTrackIndex === 0) ? tracks.length - 1 : currentTrackIndex - 1;
        loadTrack(currentTrackIndex);
        playPauseTrack();
    }

    function nextTrack() {
        currentTrackIndex = (currentTrackIndex === tracks.length - 1) ? 0 : currentTrackIndex + 1;
        loadTrack(currentTrackIndex);
        playPauseTrack();
    }

    playPauseButton.addEventListener('click', playPauseTrack);
    prevButton.addEventListener('click', prevTrack);
    nextButton.addEventListener('click', nextTrack);

    // Load the first track by default
    loadTrack(currentTrackIndex);
});
