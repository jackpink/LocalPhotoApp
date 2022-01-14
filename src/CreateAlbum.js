import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CreateAlbumButton from './CreateAlbumButton';
import CreateAlbumTextField from './CreateAlbumTextField';

const CreateAlbum = ({ setCreateResult }) => {
    const [textOpen, setTextOpen] = useState(false);


    return(
        <>
            {textOpen === true ? (
                <CreateAlbumTextField setTextOpen={setTextOpen} setCreateResult={setCreateResult} />
            ) : (
                <CreateAlbumButton setTextOpen={setTextOpen} />
            )}
        </>
        
    )
}

export default CreateAlbum;