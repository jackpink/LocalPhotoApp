import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import './App.css';
import Header from './Header';
import Filters from './Filters/Filters';
import Photos from './Photos/Photos';
import CreateAlbum from './Filters/CreateAlbum';
import { GET_ALBUMS, GET_PHOTOS } from "./queries";


export const AlbumContext = React.createContext();
export const RefetchPhotosContext = React.createContext();

function App() {

  const [currentAlbums, setCurrentAlbums] = useState([]);

  const { loading: albumsLoading, data: albumsData, refetch: albumsRefetch } = useQuery(GET_ALBUMS);
  const { loading: photosLoading, data: photosData, refetch: photosRefetch } = useQuery(GET_PHOTOS, { variables: {names: currentAlbums} });

  return (
    <div className="LocalPhotoApp">
      <AlbumContext.Provider value={currentAlbums}>
        <RefetchPhotosContext.Provider value={photosRefetch} >
          <Header />
          <Filters albums={albumsData} loading={albumsLoading} setCurrentAlbums={setCurrentAlbums}>
            <CreateAlbum refetch={albumsRefetch} />
          </Filters>
          <Photos albums={albumsData} loading={photosLoading} data={photosData} />
        </RefetchPhotosContext.Provider>
      </AlbumContext.Provider>
    </div>
  );
}

export default App;
