import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { useIsFocused } from "@react-navigation/native";
import { fetchPlaces } from "../utils/database";

const AllPlaces = () => {
  const [loadedPlace, setLoadedPlace] = useState([]);
  const isFocused = useIsFocused();

  // useEffect(() => {
  //   console.log(loadedPlace);
  //   if (isFocused && route.params) {
  //     setLoadedPlace((prev) => [...prev, route.params.place]);
  //   }
  // }, [isFocused, route]);

  useEffect(() => {
    const getPlaces = async () => {
      const places = await fetchPlaces();
      setLoadedPlace(places);
    };

    if (isFocused) {
      getPlaces();
    }
  }, [isFocused]);

  return <PlacesList places={loadedPlace} />;
};

export default AllPlaces;
