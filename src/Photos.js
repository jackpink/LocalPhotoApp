import React, { useState, useContext, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import AddPhotoButton from './AddPhotoButton';
import { useQuery } from '@apollo/client';
import { GET_PHOTOS } from "./queries";
import { AlbumContext } from "./App";
import { KeyboardReturnTwoTone } from '@mui/icons-material';


const Photos = ({ albums }) => {
    const [photos, setPhotos] = useState(['https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fresources0.news.com.au%2Fimages%2F2014%2F03%2F03%2F1226843%2F644276-569267d0-a275-11e3-b139-6c556f9120f6.jpg&f=1&nofb=1','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.7Mo9q4sDX2z_QspCpdP6BgHaCs%26pid%3DApi&f=1','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.j-qRv96Un0detchBp1Ht6wHaFj%26pid%3DApi&f=1','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.nJ7HuquyVoNLPYIA9xd-vAHaEK%26pid%3DApi&f=1','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.tbC186M0311HpX4U5ZponQHaEu%26pid%3DApi&f=1','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UNfQ9kHqIrwGa2TSELfLqQHaEK%26pid%3DApi&f=1']);

    const currentAlbums = useContext(AlbumContext);
    console.log("currentAlbums",currentAlbums);

    const { loading, data, refetch } = useQuery(GET_PHOTOS, { variables: {names: currentAlbums} });
    useEffect(() => {
        console.log("REFETCH")
        refetch();
    }, [currentAlbums]);
    console.log("DATA", data);
    console.log("LOADING", loading);

    if (currentAlbums.length === 0) {
        console.log("NO ALBUM SELECTED");
        // No photos to display (Please select an album)
        return(<p>Please select an album to display</p>);
    } else if (loading) {
        console.log("LOADING IS TRUE");
        return(<p>Loading</p>);
    } else if (data === undefined) {
        console.log("data");
        return(<p>No Photos</p>)
    } else if (data.photosByAlbumName === null) {
            console.log("data");
            return(<p>No Photos</p>)
    } else if (data.photosByAlbumName.length === 0) {
        return(
            <>
                <p>Please add a photo to this album</p>
                <AddPhotoButton albums={albums}/>
            </>
            );
    } else {
        return(
            <div className="photos">
                <ImageList variant="masonry" cols={3} gap={20}>
                {data.photosByAlbumName.map((photo) => (
                    <ImageListItem key={photo}>
                        <img
                        src={photo.url}
                        srcSet={photo.url}
                        alt='pic'
                        loading="lazy"
                        />
                    </ImageListItem>
                ))}
                </ImageList>
                <AddPhotoButton albums={albums} refetch={refetch} />
            </div>
        )
    }
}

export default Photos;