import React, { useState, useEffect } from "react";
import AlbumSelector from "./AlbumSelector";
import CreateAlbum from "./CreateAlbum";
import { getAlbums } from "./backend";


const Filters = () => {
    const [albums, setAlbums] = useState([]); 
    const [currentAlbums, setCurrentAlbums] = useState([]);
    const [createResult, setCreateResult] = useState(false);

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
    }, [createResult]) // we want this to trigger when we create an album

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