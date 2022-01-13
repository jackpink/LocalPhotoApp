import React, { useState, useEffect } from "react";
import AlbumSelector from "./AlbumSelector";
import CreateAlbum from "./CreateAlbum";
import { getAlbums } from "./backend";


const Filters = () => {
    const [albums, setAlbums] = useState(['album1', 'album2', 'album3']); 
    const [currentAlbums, setCurrentAlbums] = useState([]);

    // Will have a useEffect hook here to get albums 
    const getAlbumsFromBackend = async () => {
        const albumsFromBackend = await getAlbums();
        console.log('res', albumsFromBackend);
        setAlbums(albumsFromBackend);
    }


    useEffect(() => {
        try {
            getAlbumsFromBackend();
            
        } catch {
            console.log("didn't get from backend");
        }
    }, [])

    return(
        <div className="filters">
            <AlbumSelector 
                albums={albums} 
                currentAlbums={currentAlbums} 
                setCurrentAlbums={setCurrentAlbums}
            />
            <CreateAlbum />
        </div>
    )
}

export default Filters