import React, { useState, useEffect } from "react";
import AlbumSelector from "./AlbumSelector";
import CreateAlbum from "./CreateAlbum";
import { useBackend } from "./backend";


const Filters = () => {
    const [currentAlbums, setCurrentAlbums] = useState([]);

    const url = 'http://127.0.0.1:8081/';
    const albumsURL = url + 'albums';
    
    const {data: albums, setCreateResult} = useBackend(albumsURL);
    console.log(albums);
    return(
        <div className="filters">
            <AlbumSelector 
                albums={albums} 
                currentAlbums={currentAlbums} 
                setCurrentAlbums={setCurrentAlbums}
            />
            <CreateAlbum setCreateResult={setCreateResult} />
        </div>
    )
}

export default Filters