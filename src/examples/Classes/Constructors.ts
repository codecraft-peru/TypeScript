/**
 * Song
 */
class Song {
	
	constructor(private artist:string, private title:string) {
		
	} 
    play(){
		console.log('Playing:'+ this.title + ' by '+ this.artist );
	}	
}
var song = new Song('artist1','titulo');

/**
 * Jukebox
 */
class Jukebox {
	constructor(private songs:Song[]) {
		
	}
	play(){
		var song = this.getRandomSong();
		song.play();
	}
	private getRandomSong(){
		var songCount = this.songs.length;
		var songIndex = Math.floor(songCount*Math.random());
		return this.songs[songIndex];
	}
	
}
var songs = [
 new Song('Bushbaby', 'Megaphone'),
 new Song('Delays', 'One More Lie In'),
 new Song('Goober Gun', 'Stereo'),
 new Song('Sohnee', 'Shatter'),
 new Song('Get Amped', 'Celebrity')
];
var jukebox = new Jukebox(songs);
jukebox.play();