import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import './App.css';
import Header from './Header';
import Filters from './Filters';
import Photos from './Photos';
import AlbumSelector from './AlbumSelector';
import CreateAlbum from './CreateAlbum';
import CreateAlbumTextField from './CreateAlbumTextField';
import { GET_ALBUMS } from "./queries"

export const AlbumContext = React.createContext();

function App() {
  const [currentAlbums, setCurrentAlbums] = useState([]);
  const { loading, data, refetch } = useQuery(GET_ALBUMS);
  console.log("albums", data)
  console.log("loading", loading);
  return (
    <div className="LocalPhotoApp">
      <AlbumContext.Provider value={currentAlbums}>
        <Header />
        <Filters albums={data} loading={loading} setCurrentAlbums={setCurrentAlbums}>
          <CreateAlbum refetch={refetch} />
        </Filters>
        <Photos albums={data} />
      </AlbumContext.Provider>
    </div>
  );
}

export default App;
