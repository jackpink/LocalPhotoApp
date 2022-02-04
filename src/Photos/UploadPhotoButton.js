import React, { useContext } from 'react';
import Fab from '@mui/material/Fab';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useMutation } from '@apollo/client';
import { RefetchPhotosContext } from '../App';
import { ADD_PHOTO } from '../queries'; 



const UploadPhotoButton = ({ files, setOpen, targetAlbum }) => {

    // Initialise Apollo mutation function for adding photos
    const [ addPhoto ] = useMutation(ADD_PHOTO, {
        onCompleted: data => console.log(data)
    });

    // Get then refetch function for photos from React Context
    const refetch = useContext(RefetchPhotosContext);

    const onClickUpload = () => {
        // Call API to upload photos using files
        addPhoto({ variables: {image: files[0], album: targetAlbum[0]} })
        // when response received, close dialog and update photos from backend
        setOpen(false);
        refetch();
    }

    return(    
        <div className="add-photo-button-dialog" >
            <Fab variant="extended" color="primary" onClick={onClickUpload} aria-label="add">
                <CloudUploadIcon />
                <p>Upload</p>
            </Fab>
        </div>
    )
}

export default UploadPhotoButton;