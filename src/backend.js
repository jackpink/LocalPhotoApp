import axios from 'axios';
import { useEffect, useState } from 'react';

const url = 'http://127.0.0.1:8081/';
const albumsURL = url + 'albums';
const photosURL = url + 'photos';

// backend.getAlbums()

export const getData = async (url) => {
    try {
        const response = await axios.get(url);
        console.log("response in getData", response.status)
        if (response.status === 200) {
            console.log("response in getData to return", response.data)
            return response.data;    
        }
        
    } catch (err) {
        console.log('get albums error', err)
        return [];
    }
}

export const useBackend = (url) =>  {
    const [data, setData] = useState([]); 
    const [createResult, setCreateResult] = useState(false);

    useEffect(() => {

        const getDataFromBackend = async () => {
            console.log("Call to backend on page load", url);
            const dataFromBackend = await getData(url);
            console.log("Response from backend ", dataFromBackend);
            setData(dataFromBackend);
        }

        try {
            getDataFromBackend();
            setCreateResult(false); // return createResult value to false
            
        } catch {
            console.log("didn't get from backend");
        }
    }, [createResult]) 

    return {data, setCreateResult}
}

// backend.create_album(albumName)

export const createAlbum = async (albumName) => {
   const newAlbum = { "name" : albumName };
   try {
       const response = await axios.post(albumsURL, newAlbum);
       if (response) {

       }
       console.log("create album success", response);
       return true
   } catch (err) {
       console.log("create album failed", err);
       return false;
   }
}

// backend.getPhotos()

// backend.uploadPhoto(file, album)