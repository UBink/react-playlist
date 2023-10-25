import React from 'react'
import styles from './Lists.module.css'
import Track from '../Track/Track.js'

const TrackList = (props) => {
    return (
        <div>
            {props.tracks?.map(track => {
              return (
                <Track
                  track={track}
                  key={track.id}
                  onAdd={props.onAdd}
                  isRemoval={props.isRemoval}
                  onRemove={props.onRemove}
              />
              );
            })}
        </div>
    )
}

export default TrackList