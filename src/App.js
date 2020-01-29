import React , {useState} from 'react';
import ReactMapGL from "react-map-gl";
import logo from './logo.svg';
import './App.css';

function App() {
    let REACT_APP_MAPBOX_TOKEN="pk.eyJ1IjoiYW5pamlhbmdnIiwiYSI6ImNrNXRvaXloZDB4d2QzZ3BiNnRoNmR1NjcifQ.ri1D9JXJuXXX2d3MlEFRCA"
    const [viewport, setViewport] = useState({
    latitude: 40.69,
    longitude: -74.25,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });
  return (
    <div>
      <ReactMapGL{...viewport}
      mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/anijiangg/ck5u16add11ce1iobyoxqvmu5"
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
      >HERE</ReactMapGL>
    </div>

  );
}

export default App;
