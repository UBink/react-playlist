import React from "react";
import TrackList from "../Playlist&Tracklist/TrackList";

const style = {
    backgroundColor: '#010c3f',
    color: 'white',
    height: '100%',
    padding: "10px 30px",
    width: '50%',
    borderRadius: 15
}

const SearchResults = (props) => {
    return (
        <div style={style}>
            <h2>Results</h2>
            <TrackList tracks ={props.searchResults} onAdd={props.onAdd} />
        </div>
    )
}

export default SearchResults