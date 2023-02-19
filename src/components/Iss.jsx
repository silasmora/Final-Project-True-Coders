import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'

const apiKey = import.meta.env.VITE_API_KEY;


export default function Iss() {

  const [markerPosition, setMarkerPosition] = useState(null)

  function getIssLocation() {
    setInterval(() => {
      fetch("http://api.open-notify.org/iss-now.json")
        .then((res) => res.json())
        .then((data) => {
          const newLocation = {
            lat: parseFloat(data.iss_position.latitude),
            lng: parseFloat(data.iss_position.longitude),
          };
          setMarkerPosition(newLocation);
        })
        .catch((err) => console.error(err));
    }, 5000); // this interval will update every 5 seconds
  }
  useEffect(() => {
    getIssLocation()
  }, [])    
  
  return (
    <div className='border' style={{ height: '400px', width: '400px', maxWidth: '100%', }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey}}
        defaultCenter={{ lat: 0, lng: 0 }}
        center={markerPosition || { lat: 0, lng: 0 }}
        defaultZoom={3}
      >
        {markerPosition && (
          <Marker lat={markerPosition.lat} lng={markerPosition.lng} text="ISS" />
        )}
      </GoogleMapReact>
      <h5 className='h5-tags'>Location loads every 5 seconds</h5>
    </div>
  );
  
}


