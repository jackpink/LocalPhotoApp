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
   axios({
       method: 'post',
       url: albumsURL,
       data: {
           newAlbum
       }
   })
   .then(data=>console.log(data))
   .catch(err=>console.log(err))
}

// backend.getPhotos()

// backend.uploadPhoto(file, album)