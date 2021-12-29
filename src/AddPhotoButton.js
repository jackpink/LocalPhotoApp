import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AddPhotoDialog from './AddPhotoDialog';

const AddPhotoButton = () => {
    const [open, setOpen] = useState(false);

    const openDialog = () => {
        setOpen(true);
    }

    return(
        <div className="add-photo">
            <Fab variant="extended" color="primary" onClick={openDialog} aria-label="add">
                <AddIcon />
                <p>Add Photo</p>
            </Fab>
            <AddPhotoDialog open={open} setOpen={setOpen} />
        </div>
    )
}

export default AddPhotoButton;