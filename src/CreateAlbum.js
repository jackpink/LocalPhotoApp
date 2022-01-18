import React, { useState } from 'react';
import CreateAlbumButton from './CreateAlbumButton';
import CreateAlbumTextField from './CreateAlbumTextField';

const CreateAlbum = ({ GET_ALBUM, refetch }) => {
    const [textOpen, setTextOpen] = useState(false);


    return(
        <>
            {textOpen === true ? (
                <CreateAlbumTextField setTextOpen={setTextOpen} GET_ALBUM={GET_ALBUM} refetch={refetch} />
            ) : (
                <CreateAlbumButton setTextOpen={setTextOpen} />
            )}
        </>
        
    )
}

export default CreateAlbum;