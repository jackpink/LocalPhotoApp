import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useMutation, gql } from '@apollo/client';

const ADD_PHOTO = gql`
mutation ($image: Upload!, $album: String!) {
    addPhoto(image: $image, album: $album) {
        url
    }
}
`;


const UploadPhotoButton = ({ files, setOpen, targetAlbum }) => {

    const getFilePaths = (files) => {
        let filePaths = []
        for (let i = 0; i < files.length; i++) {
            filePaths.push(files[i].name)
        }
        return filePaths;
    }

    const [ addPhoto ] = useMutation(ADD_PHOTO, {
        onCompleted: data => console.log(data)
    });

    const onClickUpload = () => {
        // Call API to upload photos using files
        const filePaths = getFilePaths(files);
        console.log("filePaths ", files[0]);
        console.log([targetAlbum]);
        addPhoto({ variables: {image: files[0], album: targetAlbum[0]} })
        // when response received, close dialog and update photos from backend
        setOpen(false);
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