// src/GoogleMap.jsx

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 11.359548338780293,
  lng: 75.90918126117276,
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="https://maps.app.goo.gl/Db2nrZZSugtSijUE7">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15} // Adjust the zoom level as needed
      >
        {/* Example marker */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
