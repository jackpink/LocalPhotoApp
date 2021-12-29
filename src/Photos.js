import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import AddPhotoButton from './AddPhotoButton';


const Photos = () => {
    const [photos, setPhotos] = useState(['https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fresources0.news.com.au%2Fimages%2F2014%2F03%2F03%2F1226843%2F644276-569267d0-a275-11e3-b139-6c556f9120f6.jpg&f=1&nofb=1','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.7Mo9q4sDX2z_QspCpdP6BgHaCs%26pid%3DApi&f=1','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.j-qRv96Un0detchBp1Ht6wHaFj%26pid%3DApi&f=1','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.nJ7HuquyVoNLPYIA9xd-vAHaEK%26pid%3DApi&f=1','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.tbC186M0311HpX4U5ZponQHaEu%26pid%3DApi&f=1','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UNfQ9kHqIrwGa2TSELfLqQHaEK%26pid%3DApi&f=1']);

    return(
        <div className="photos">
            <ImageList variant="masonry" cols={3} gap={20}>
            {photos.map((photo) => (
                <ImageListItem key={photo}>
                    <img
                    src={`${photo}?w=248&fit=crop&auto=format`}
                    srcSet={`${photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt='pic'
                    loading="lazy"
                    />
                </ImageListItem>
            ))}
            </ImageList>
            <AddPhotoButton />
        </div>
    )
}

export default Photos;