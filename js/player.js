var media, play, loop, maxim, progress, bar, mute, volume;
function initiate() {
	//objects
	maxim = 400;
	media = document.getElementById('media');
	play = document.getElementById('play');
	progress = document.getElementById('progress');
	bar = document.getElementById('bar');
	mute = document.getElementById('mute');
	volume = document.getElementById('volume');
	//listeners
	play.addEventListener('click', push);
	bar.addEventListener('click', move);
	mute.addEventListener('click', sound);
	media.addEventListener('click', fullscreen);
	volume.addEventListener('change', level);
}
function push() {
	if (!media.paused && !media.ended) {
		media.pause();
		play.value = 'Play';
		clearInterval(loop);
	} else {
		media.play();
		play.value = 'Pause';
		loop = setInterval(status, 1000);
	}
}
function status() {
	// size/time = maxim/duration
	// size = time*maxim/duration
	if (!media.ended) {
		var size = parseInt(media.currentTime * maxim / media.duration);
		progress.style.width = size + 'px';
	} else {
		progress.style.width = 0;
		play.value = 'Play';
		clearInterval(loop);
	}
}
function move(e) {
	var mouseX = e.pageX - bar.offsetLeft - 570;
	//console.log(mouseX);
	var newTime = mouseX * media.duration / maxim;
	media.currentTime = newTime;
	progress.style.width = mouseX + 'px';
}
function sound() {
	if (mute.value == 'Mute') {
		media.muted = true;
		mute.value = 'Sound';
	} else {
		media.muted = false;
		mute.value = 'Mute';
	}
}
function level() {
	console.log('change sound');
	media.volume = volume.value;
}
function fullscreen() {
	if (!document.fullscreenElement) {
		media.requestFullscreen();
		media.play();
	}
}
addEventListener('load', initiate);