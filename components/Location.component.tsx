import { useRef, useEffect } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import Map from "./Map.component";

const Location = () => {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };
  const center = { lat: 47.9147798783781, lng: -4.200781693089627 };
  const zoom = 16;

  return (
    <div>
      <Wrapper
        apiKey={"AIzaSyA4ltItJD6zP9QKEgh19hJQesO4_2r_WUA"}
        render={render}
      >
        <p>Map</p>
        <Map center={center} zoom={zoom} />
      </Wrapper>
    </div>
  );
};

export default Location;
