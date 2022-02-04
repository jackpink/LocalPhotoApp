import React from 'react';
import Button from '@mui/material/Button';
import { useMutation } from '@apollo/client';
import { ADD_ALBUM } from '../queries';


const CreateAlbumTextFieldButton = ({ albumName, setError, setTextOpen, refetch }) => {

    const [ createAlbum ] = useMutation(ADD_ALBUM);

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
            console.log("Creating new Album ", albumName);
            setTextOpen(false);
            // Async Call to backend to create a new album
            createAlbum({ variables: {name: albumName} })
            refetch();
            //setCreateResult(createResult); // This should trigger our useEffect
        }
    }

    return(
        <div className="create-album-button">
            <Button variant="outlined" size="large" color='info' onClick={createNewAlbum}>Create new Album</Button>
        </div> 
    )
}

export default CreateAlbumTextFieldButton;