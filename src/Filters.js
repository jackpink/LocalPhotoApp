import React, { useState } from "react";
import AlbumSelector from "./AlbumSelector";
import CreateAlbum from "./CreateAlbum";


const Filters = () => {
    const [albums, setAlbums] = useState(['album1', 'album2', 'album3']); 
    const [currentAlbums, setCurrentAlbums] = useState([]);

    // Will have a useEffect hook here to get albums 

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