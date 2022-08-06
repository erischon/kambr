import { Wrapper, Status } from "@googlemaps/react-wrapper";

import Map from "./Map.component";

const Location = () => {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

  const center = { lat: 47.9147798783781, lng: -4.200781693089627 };
  const zoom = 14;
  const style = "w-full h-[150px] rounded-lg";

  const key = process.env.NEXT_PUBLIC_GAPI_KEY || "";

  return (
    <div className="">
      <p className="font-semibold text-sm mb-2">
        <span className="text-xs font-normal">Au</span> 2 Ham. de Ty Guip, 29120
        Tréméoc
      </p>

      <Wrapper apiKey={key} render={render}>
        <Map center={center} zoom={zoom} style={style} />
      </Wrapper>
    </div>
  );
};

export default Location;
