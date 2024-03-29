import React, { useRef, useEffect } from "react";

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom, style } = props;

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
      mapTypeId: "terrain",
    });

    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);

  return <div ref={mapRef} className={`map ${style}`}></div>;
};

export default Map;
