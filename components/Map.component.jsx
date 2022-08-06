import React, { useRef, useEffect } from "react";

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;
  const style = {
    padding: "1rem",
    flexBasis: "250px",
    height: "100%",
    overflow: "auto",
  };

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);

  return <div ref={mapRef} className={`map w-[200px] h-[300px]`}></div>;
};

export default Map;
