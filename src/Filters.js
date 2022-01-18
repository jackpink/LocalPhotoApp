import React, { useState } from "react";
import AlbumSelector from "./AlbumSelector";
import CreateAlbum from "./CreateAlbum";
import { useQuery, gql } from '@apollo/client';




const Filters = () => {
    const [currentAlbums, setCurrentAlbums] = useState([]);

    
    // make api cal with apollo instead and investigate how it handles change in state
    //const {data: albums, setCreateResult} = useBackend(albumsURL);

    const setCreateResult = () => {
        console.log("create result");
    }

    const GET_ALBUMS = gql`
        query Albums {
            albums {
                name
            }
        }
    `;

    const { loading, error, data, refetch } = useQuery(GET_ALBUMS);

    //const apolloAlbums = client.query(query1);

    console.log(data);

    return(
        <div className="filters">
            {loading ? (
                <p>loading</p>
            ) : (
                <AlbumSelector 
                    albums={data} 
                    currentAlbums={currentAlbums} 
                    setCurrentAlbums={setCurrentAlbums}
                />
            
            )}
            <CreateAlbum GET_ALBUMS={GET_ALBUMS} refetch={refetch} />
            
        </div>
    )
}

export default Filters