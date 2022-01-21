import React from 'react';
import { useQuery } from '@apollo/client';
import './App.css';
import Header from './Header';
import Filters from './Filters';
import Photos from './Photos';
import AlbumSelector from './AlbumSelector';
import CreateAlbum from './CreateAlbum';
import CreateAlbumTextField from './CreateAlbumTextField';
import { GET_ALBUMS } from "./queries"


function App() {
  const { loading, data, refetch } = useQuery(GET_ALBUMS);
  console.log("albums", data)
  console.log("loading", loading);
  return (
    <div className="LocalPhotoApp">
      <Header />
      <Filters albums={data} loading={loading} >
        <CreateAlbum refetch={refetch} />
      </Filters>
      <Photos albums={data} />
    </div>
  );
}

export default App;
