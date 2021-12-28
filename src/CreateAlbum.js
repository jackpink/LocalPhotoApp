import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CreateAlbumButton from './CreateAlbumButton';
import CreateAlbumTextField from './CreateAlbumTextField';

const CreateAlbum = () => {
    const [textOpen, setTextOpen] = useState(false);


    return(
        <>
            {textOpen === true ? (
                <CreateAlbumTextField setTextOpen={setTextOpen} />
            ) : (
                <CreateAlbumButton setTextOpen={setTextOpen} />
            )}
        </>
        
    )
}

export default CreateAlbum;