import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux';

export default function MusicPlayer() {

    const currSong = useSelector(state => state.player.song);
    const songs = useSelector(state => state.songs);

    return (
        <div className='music-player-div'>
            <AudioPlayer
                // autoPlay
                src={currSong?.audioUrl}
                onPlay={e => console.log("onPlay")}
                header={currSong?.title}
                layout='stacked-reverse'
                volume={0.2}
            />
        </div>
    )
}
