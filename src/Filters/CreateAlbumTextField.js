import React, { useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import TextField from '@mui/material/TextField';
import CreateAlbumTextFieldButton from './CreateAlbumTextFieldButton';

const CreateAlbumTextField = ( {setTextOpen, refetch } ) => {
  
    const [albumName, setAlbumName] = useState('');
    const [error, setError] = useState(false);

    const handleClickAway = () => {
        setTextOpen(false);
      };

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
                
                <CreateAlbumTextFieldButton albumName={albumName} setError={setError} setTextOpen={setTextOpen} refetch={refetch} />
            </div>
        </ClickAwayListener>

    )
}

export default CreateAlbumTextField;