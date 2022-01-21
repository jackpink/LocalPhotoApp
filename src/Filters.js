import React, { useState } from "react";
import AlbumSelector from "./AlbumSelector";
import CreateAlbum from "./CreateAlbum";


const Filters = ({ albums, loading, children }) => {
    const [currentAlbums, setCurrentAlbums] = useState([]);

    console.log(currentAlbums);

    return(
        <div className="filters">
            {loading ? (
                <p>loading</p>
            ) : (
                <AlbumSelector 
                    albums={albums}
                    currentAlbums={currentAlbums} 
                    setCurrentAlbums={setCurrentAlbums}
                    multiple={true}
                />
            )}
            { children }
            
        </div>
    )
}

export default Filters