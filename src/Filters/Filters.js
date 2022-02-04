import React, { useContext } from "react";
import AlbumSelector from "./AlbumSelector";
import { AlbumContext } from "../App";



const Filters = ({ albums, loading, setCurrentAlbums,  children }) => {
    const currentAlbums = useContext(AlbumContext);

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