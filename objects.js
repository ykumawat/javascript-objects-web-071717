let playlist = {"x": "y"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
};

function removeFromPlaylist(obj, artistName) {
  delete playlist[artistName]
  return playlist
};
