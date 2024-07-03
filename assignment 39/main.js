"use strict";
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("Ayesha", "Album title 1");
let album2 = make_album("Nimra", "Album title 2");
let album3 = make_album("Haroon", "Album title 3", 10);
console.log(album1);
console.log(album2);
console.log(album3);