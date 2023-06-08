import React, { FC } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Location } from "@/interfaces";
import Loading from "@/components/groups/loading";

interface MapCompenentProps {
  center: Location;
  locations: Location[];
}
const containerStyle = {
  width: "400px",
  height: "400px",
};

const MapComponent: FC<MapCompenentProps> = ({ locations, center }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY!,
  });

  const [map, setMap] = React.useState(null);
  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {locations.map((loc, idx) => (
        <Marker key={idx} position={loc} />
      ))}
    </GoogleMap>
  ) : (
    <Loading />
  );
};

export default React.memo(MapComponent);
