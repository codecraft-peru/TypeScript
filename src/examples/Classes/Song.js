var Song = (function () {
    function Song(artist, title) {
        this.artist = artist;
        this.title = title;
    }
    Song.prototype.play = function () {
        console.log('Playing:' + this.title + ' by ' + this.artist);
    };
    return Song;
})();
