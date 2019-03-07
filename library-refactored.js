var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
    printSinglePlaylist: function (listIndex){
        console.log (this.playlists[listIndex].id + ": " + this.playlists[listIndex].name + " - " + this.playlists[listIndex].tracks.length + " tracks");
    },
    printPlaylists: function (){
        for (var listIndex in this.playlists){
            this.printSinglePlaylist(listIndex);
        }
    },
    printSingleTrack: function (trackNum){
        var track = this.tracks[trackNum];
        console.log( track.id + ": " + track.name + " by " + track.artist + "("+track.album + ")")
    },
    printTracks: function () {
        for (var trackNum in library.tracks){
            this.printSingleTrack(trackNum);
        }
    },
    printPlaylist: function (playlistId) {
        this.printSinglePlaylist(playlistId);
        for (var tracks in this.playlists[playlistId].tracks){
            this.printSingleTrack(this.playlists[playlistId].tracks[tracks])
        }
    },
    addTrackToPlaylist: function (trackId, playlistId) {
        this.playlists[playlistId].tracks[-1] = trackId;
    },
    uid: function() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    },
    addTrack: function (name, artist, album) {
        var newTrackID = this.uid();
        this.tracks[newTrackID]={};
        this.tracks[newTrackID].id = newTrackID;
        this.tracks[newTrackID].name = name;
        this.tracks[newTrackID].artist = artist;
        this.tracks[newTrackID].album = album;
    },
    addPlaylist: function (name) {
        var newPlaylistID = this.uid();
        this.playlists[newPlaylistID] = {};
        this.playlists[newPlaylistID].id = newPlaylistID;
        this.playlists[newPlaylistID].name = name;
        this.playlists[newPlaylistID].tracks = ""
    },
  
}

//library.printPlaylists();
//library.printSingleTrack("t01")
//library.printTracks();
//library.printPlaylist("p01")
// library.addTrackToPlaylist("t03","p01");
// library.printPlaylist("p01");
//console.log(library.uid());
// library.addTrack("blue","big bang", "blue");
// library.printTracks();
// library.addPlaylist("running");
// library.printPlaylists();

// // // // STRETCH:
// // // // given a query string string, prints a list of tracks
// // // // where the name, artist or album contains the query string (case insensitive)
// // // // tip: use "string".search("tri") 
// // // // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// // // var printSearchResults = function(query) {

// // // }