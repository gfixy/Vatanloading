
/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{ogg: "songs/Adaletin Bu mu Dünya.ogg", name: "Adaletin Bu mu Dünya"},
	{ogg: "songs/Çare gelmez.ogg", name: "Çare gelmez"},
	{ogg: "songs/Kiraz Aldım Dikmeden.ogg", name: "Kiraz Aldım Dikmeden"},
	{ogg: "songs/Yaranamadım.ogg", name: "Yaranamadım"}
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 25;


/**************************************/

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = true;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/Pexels.wmv";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/image/1.jpg",
	"backgrounds/image/2.jpg",
	"backgrounds/image/3.jpg",
	"backgrounds/image/4.jpg",
	"backgrounds/image/5.gif",
	"backgrounds/image/2.gif",
	"backgrounds/image/4.gif"
	

];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;


