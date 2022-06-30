import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function MusicPlayer() {
    return (
        <AudioPlayer
            autoPlay
            src="https://soundcloud-clone-data.s3.us-west-1.amazonaws.com/Ludacris+Ft.+Nate+Dogg-Area+Codes(Lyrics).mp3"
            onPlay={e => console.log("onPlay")}
        // other props here
        />)
}
