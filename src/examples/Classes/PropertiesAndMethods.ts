
///<reference path="Song.d.ts" />
class Playlist {
 private songs: Song[] = [];
 static maxSongCount: number = 30;
 constructor(public name: string) {
 }
 addSong(song: Song) {
 if (this.songs.length >=Playlist.maxSongCount) {
 throw new Error('Playlist is full');
 }
 this.songs.push(song);
 }
}

var playlist = new Playlist('My Playlist');
var name = playlist.name;
playlist.addSong(new Song('Therapy?', 'Crooked Timber'));
var maxSongs = Playlist.maxSongCount;