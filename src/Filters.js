import React, { useState, useEffect } from "react";
import AlbumSelector from "./AlbumSelector";
import CreateAlbum from "./CreateAlbum";
import { getAlbums } from "./backend";


const Filters = () => {
    const [albums, setAlbums] = useState([]); 
    const [currentAlbums, setCurrentAlbums] = useState([]);

    // Will have a useEffect hook here to get albums 
    


    useEffect(() => {

        const getAlbumsFromBackend = async () => {
            console.log("Call to backend on page load");
            const albumsFromBackend = await getAlbums();
            console.log("Response from backend ", albumsFromBackend);
            setAlbums(albumsFromBackend);
        }

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