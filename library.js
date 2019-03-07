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
  
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

function printSinglePlaylist(listIndex) {
  console.log (library.playlists[listIndex].id + ": " + library.playlists[listIndex].name + " - " + library.playlists[listIndex].tracks.length + " tracks");
}

function printPlaylists () {
  for (var listIndex in library.playlists){
    printSinglePlaylist(listIndex);
  }
}

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

function printSingleTrack (trackNum){
  var track = library.tracks[trackNum];
  console.log( track.id + ": " + track.name + " by " + track.artist + "("+track.album + ")")
}

 function printTracks() {
  for (var trackNum in library.tracks){
    printSingleTrack(trackNum);
  }
}

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

function printPlaylist (playlistId) {
  printSinglePlaylist(playlistId);
  for (var tracks in library.playlists[playlistId].tracks){
    printSingleTrack(library.playlists[playlistId].tracks[tracks])
  }
}

// adds an existing track to an existing playlist

function addTrackToPlaylist (trackId, playlistId) {
  library.playlists[playlistId].tracks[-1] = trackId;
}

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library

var addTrack = function (name, artist, album) {
  var newTrackID = uid();
  library.tracks[newTrackID]={};
  library.tracks[newTrackID].id = newTrackID;
  library.tracks[newTrackID].name = name;
  library.tracks[newTrackID].artist = artist;
  library.tracks[newTrackID].album = album;
}

// adds a playlist to the library

var addPlaylist = function (name) {
  var newPlaylistID = uid();
  library.playlists[newPlaylistID] = {};
  library.playlists[newPlaylistID].id = newPlaylistID;
  library.playlists[newPlaylistID].name = name;
}

// // // STRETCH:
// // // given a query string string, prints a list of tracks
// // // where the name, artist or album contains the query string (case insensitive)
// // // tip: use "string".search("tri") 
// // // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// // var printSearchResults = function(query) {

// // }