import React, { useState } from 'react';
import CreateAlbumButton from './CreateAlbumButton';
import CreateAlbumTextField from './CreateAlbumTextField';

const CreateAlbum = ({ refetch, children }) => {
    const [textOpen, setTextOpen] = useState(false);


    return(
        <>
            {textOpen === true ? (
                <CreateAlbumTextField setTextOpen={setTextOpen} refetch={refetch} />
            ) : (
                <CreateAlbumButton setTextOpen={setTextOpen} />
            )}
        </>
        
    )
}

export default CreateAlbum;