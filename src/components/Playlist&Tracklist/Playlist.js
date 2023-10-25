import React, { useCallback } from 'react'
import styles from './Lists.module.css'
import TrackList from './TrackList.js'

const Playlist = (props) => {
    const handleNameChange = useCallback((event) => {
        props.onNameChange(event.target.value);
    }, [props.onNameChange])
    return (
        <div className= {styles.container}>
            <input onChange={handleNameChange} defaultValue={"New Playlist"} className={styles.listName} />
            <TrackList 
              style = {{color: 'white'}}
              tracks = {props.playlistTracks}
              isRemoval = {true}
              onRemove = {props.onRemove}
            />
            <button onClick={props.onSave} className={styles.save} >
                Save to Spotify
            </button>
        </div>
    )
}
export default Playlist