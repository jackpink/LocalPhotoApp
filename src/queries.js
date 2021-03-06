
import { gql } from '@apollo/client';


export const GET_ALBUMS = gql`
query Albums {
    allAlbums {
        name
    }
}
`;

export const GET_PHOTOS = gql`
query Photos($names: [String]) {
    photosByAlbumName(names: $names) {
        url
    }
}`

export const ADD_ALBUM = gql`
mutation AddAlbum($name: String!) {
    addAlbum(name: $name) {
        name
    }
}
`;

export const ADD_PHOTO = gql`
mutation ($image: Upload!, $album: String!) {
    addPhoto(image: $image, album: $album) {
        url
    }
}
`;