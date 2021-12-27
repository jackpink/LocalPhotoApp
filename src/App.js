import './App.css';
import Header from './Header';
import Filters from './Filters';
import Photos from './Photos';
import AddPhoto from './AddPhoto';


function App() {
  return (
    <div className="LocalPhotoApp">
      <Header />
      <Filters />
      <Photos />
      <AddPhoto />
    </div>
  );
}

export default App;
