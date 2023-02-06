import React from "react";
import GoogleMapReact from "google-map-react";

export default function Map() {
  const defaultProps = {
    center: {
      lat: 50.46975081182871,
      lng: 30.391966112077778,
    },
    zoom: 14,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
}
