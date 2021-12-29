import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import UploadPhotoButton from './UploadPhotoButton';

const AddPhotoDialog = ({ open, setOpen }) => {
    const [files, setFiles] = useState([]);
    
    const handleClose = () => {
        setOpen(false);
    }

    const onChange = (e) => {
        const fileTarget = e.target.files;
        console.log("fileTarget", fileTarget);
        setFiles(fileTarget);
    }

    return(
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Choose Photo to Upload</DialogTitle>
            <div className="image-file-input">
                
                <input type="file" onChange={onChange} id="image" name="image" accept="image/*" multiple/>
            </div>
            <UploadPhotoButton files={files} setOpen={setOpen} />
        </Dialog>
    )
}

export default AddPhotoDialog;