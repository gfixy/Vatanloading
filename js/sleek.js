function setMusicName(name) {
	$("#music-name").fadeOut(2000, function() {
		$(this).html(name);
		$(this).fadeIn(2000);
	});
}

var youtubePlayer;
var actualMusic = -1;

$(function() {
	if (l_bgImagesRandom)
		l_bgImages = shuffle(l_bgImages);

	if (l_musicRandom)
		l_musicPlaylist = shuffle(l_musicPlaylist);

	if (l_messagesRandom)
		l_messages = shuffle(l_messages);

	if (l_messagesEnabled)
		showMessage(0);

	if (l_music) {
		loadYoutube();
		if (l_musicDisplay)
			$("#music").fadeIn(2000);
	}

	if (l_bgVideo) {
		$("body").append("<video loop autoplay muted><source src='"+l_background+"' type='video/webm'></video>");
	}else{
		$.backstretch(l_bgImages, {duration: l_bgImageDuration, fade: l_bgImageFadeVelocity});
	}

	if (l_serverName && !l_serverImage)
		setServerName(l_serverName);

	if (l_serverImage)
		setServerName("<img src='"+l_serverImage+"'>");

	if (l_bgOverlay)
		$("#overlay").css("background-image", "url('images/overlay.png')");

	$("#overlay").css("background-color", "rgba(0,0,0,"+(l_bgDarkening/100)+")");
});

function loadYoutube() {
	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function onYouTubeIframeAPIReady() {
	youtubePlayer = new YT.Player('player', {
	  height: '390',
	  width: '640',
	  events: {
	    'onReady': onPlayerReady,
	    'onStateChange': onPlayerStateChange
	  }
	});
}

function onPlayerReady(event) {
	youtubePlayer.setVolume(l_musicVolume);
	if (youtubePlayer.isMuted()) youtubePlayer.unMute();
	nextMusic();
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
    	nextMusic();
	}
}

function nextMusic() {
	actualMusic++;

	if (actualMusic >= l_musicPlaylist.length) {
		actualMusic = 0;
	}

	var atual = l_musicPlaylist[actualMusic];

	if (atual.youtube) {
		youtubePlayer.loadVideoById(atual.youtube);
	}else{
		$("body").append('<audio src="'+atual.ogg+'" autoplay>');
		$("audio").prop('volume', l_musicVolume/100);
		$("audio").bind("ended", function() {
			$(this).remove();
			nextMusic();
		});
	}

	setMusicName(atual.name);
}