import React, { useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createAlbum } from './backend';

const CreateAlbumTextField = ( {setTextOpen, setCreateResult} ) => {
    const [albumName, setAlbumName] = useState('');
    const [error, setError] = useState(false);

    const handleClickAway = () => {
        setTextOpen(false);
        console.log("click away");
      };

    const incorrectFormat = (name) => {
        if (name === '') {
            return true;
        } else {
            return false;
        }
    }

    const createNewAlbum = async () => {
        if (incorrectFormat(albumName)) {
            setError(true);
        } else {
            console.log("create new album", albumName);
            setTextOpen(false);
            // Async Call to backend to create a new album
            const createResult = await createAlbum(albumName);
            console.log("create result is ", createResult);
            setCreateResult(createResult); // This should trigger our useEffect
        }
    }

    const updateAlbumName = (event) => {
        setAlbumName(event.target.value);
    }

    return( 
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className="create-album-textfield" >
                <TextField
                    id="create-album-textfield"
                    label="Album Name"
                    type="search"
                    variant="filled"
                    value={albumName}
                    onChange={updateAlbumName} 
                    error={error}
                />
                <div className="create-album-button">
                    <Button variant="outlined" size="large" color='info' onClick={createNewAlbum}>Create new Album</Button>
                </div> 
            </div>
        </ClickAwayListener>

    )
}

export default CreateAlbumTextField;