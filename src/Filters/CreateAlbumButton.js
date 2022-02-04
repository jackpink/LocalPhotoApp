import React from 'react';
import Button from '@mui/material/Button';

const CreateAlbumButton = ( {setTextOpen} ) => {

    const openTextfield = () => {
        setTextOpen(true);
    }

    return(      
        <div className="create-album-button">
            <Button variant="outlined" size="large" color='info' onClick={openTextfield} >Create new Album</Button>
        </div>  
    )
}

export default CreateAlbumButton;