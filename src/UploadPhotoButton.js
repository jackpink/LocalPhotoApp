import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const UploadPhotoButton = ({ files, setOpen }) => {

    const getFilePaths = (files) => {
        let filePaths = []
        for (let i = 0; i < files.length; i++) {
            filePaths.push(files[i].name)
        }
        return filePaths;
    }

    const onClickUpload = () => {
        // Call API to upload photos using files
        const filePaths = getFilePaths(files);
        console.log("filePaths ", filePaths);
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