// ignore
var Config = {};

/**
 * What should the text in the center of the screen be?
 * if empty it will fill in your Server Name
 */
Config.title = "Vatan Roleplay";

/**
 * Enable map text in the top left corner of the screen?
 */
Config.enableMap = true;

/**
 * Enable steamId text in the top right corner of the screen?
 */
Config.enableSteamID = true;

/**
 * Enable announcements?
 */
Config.enableAnnouncements = true;

/**
 * What messages do you want to show up?
 * only works if enableAnnouncements = true
 */
Config.announceMessages = [
  "Bize katıldığınız için teşekkür ederiz.",
  "Discord'umuza katılabilirsiniz.",
  "Server'in tadını çıkarın.",
  "İyi eğlenceler."
];

/**
 * How many miliseconds for each announcement?
 * only works if enableAnnouncements = true
 */
Config.announcementLength = 3000;

/**
 * Image Filename
 * DROP IMAGE IN "images" FOLDER
 */
Config.backgroundImage = "";

/**
 * Enable debug messages?
 */
Config.enableDebug = false;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{ogg: "songs/fkbambam - PUMP UP (feat. longlost).ogg", name: "fkbambam - PUMP UP (feat. longlost)"},
	{ogg: "songs/Playaphonk - IMMORTAL.ogg", name: "Playaphonk - IMMORTAL"},
	{ogg: "songs/Playaphonk - Phonky Town.ogg", name: "Playaphonk - Phonky"},
  /*{ogg: "songs/Yaranamadım.ogg", name: "Yaranamadım"}*/
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 5;
