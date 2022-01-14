import axios from 'axios'

const url = 'http://127.0.0.1:8081/';
const albumsURL = url + 'albums';
const photosURL = url + 'photos';

// backend.getAlbums()

export const getAlbums = async () => {
    try {
        const response = await axios.get(albumsURL);
        return response.data.albums;
    } catch (err) {
        console.log('get albums error', err)
        return [];
    }
}

// backend.create_album(albumName)

export const createAlbum = async (albumName) => {
   const newAlbum = { "name" : albumName };
   try {
       const response = await axios.post(albumsURL, newAlbum);
       console.log("create album success", response);
       return true
   } catch (err) {
       console.log("create album failed", err);
       return false;
   }
}

// backend.getPhotos()

// backend.uploadPhoto(file, album)