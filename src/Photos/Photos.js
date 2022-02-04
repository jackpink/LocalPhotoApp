import React, { useContext } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import AddPhotoButton from './AddPhotoButton';
import { AlbumContext } from "../App";


const Photos = ({ albums, loading, data }) => {

    const currentAlbums = useContext(AlbumContext);

    if (currentAlbums.length === 0) {
        console.log("NO ALBUM SELECTED");
        // No photos to display (Please select an album)
        return(<p>Please select an album to display</p>);
    } else if (loading) {
        console.log("LOADING IS TRUE");
        return(<p>Loading Photos</p>);
    /*
    } else if (data === undefined) {
        console.log("data");
        return(<p>No Photos</p>)*/
    } else if (data.photosByAlbumName === null) {
        console.log("LOADING IS FALSE: null", loading);
        console.log("data.photosByAlbumname === null");
        return(<p>No Photos</p>) 
    } else if (data.photosByAlbumName.length === 0) {
        console.log("LOADING IS FALSE: No photos", loading);
        return(
            <>
                <p>Please add a photo to this album</p>
                <AddPhotoButton albums={albums}/>
            </>
            );
    } else {
        console.log("LOADING IS FALSE: show photos",);
        return(
            <div className="photos">
                <ImageList variant="masonry" cols={3} gap={20}>
                {data.photosByAlbumName.map((photo) => (
                    <ImageListItem key={photo.url}>
                        <img
                        src={photo.url}
                        
                        alt='pic'
                        loading="lazy"
                        />
                    </ImageListItem>
                ))}
                </ImageList>
                <AddPhotoButton albums={albums} />
            </div>
        )
    }
}

export default Photos;