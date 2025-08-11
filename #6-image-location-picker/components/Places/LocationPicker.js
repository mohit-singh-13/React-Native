import { Alert, Image, StyleSheet, Text, View } from "react-native";
import OutlinedButton from "../ui/OutlinedButton";
import { Colors } from "../../constants/colors";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import { useEffect, useMemo, useState } from "react";
import { getAddress, getMapPreview } from "../../utils/location";
import { useNavigation, useRoute } from "@react-navigation/native";

const LocationPicker = ({ onPickLocation }) => {
  const [pickedLocation, setPickedLocation] = useState();

  const navigation = useNavigation();
  const route = useRoute();

  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  const mapPickedLocation = useMemo(() => {
    return (
      route.params && {
        lat: route.params.pickedLat,
        long: route.params.pickedLong,
      }
    );
  }, [route]);

  useEffect(() => {
    if (mapPickedLocation) {
      setPickedLocation(mapPickedLocation);
    }
  }, [mapPickedLocation]);

  useEffect(() => {
    const handleLocation = async () => {
      if (pickedLocation) {
        const address = await getAddress({
          lat: pickedLocation.lat,
          long: pickedLocation.long,
        });
        onPickLocation({ ...pickedLocation, address });
      }
    };

    handleLocation();
  }, [onPickLocation, pickedLocation]);

  const verifyPermission = async () => {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permission!",
        "You need to grant location permission to use this app."
      );

      return false;
    }

    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermission();

    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    setPickedLocation({
      lat: location.coords.latitude,
      long: location.coords.longitude,
    });
  };

  const pickOnMapHandler = () => {
    navigation.navigate("Map");
  };

  let locationPreview = <Text>No location picked yet.</Text>;

  if (pickedLocation) {
    locationPreview = (
      <Image
        source={{
          uri: getMapPreview({
            lat: pickedLocation.lat,
            long: pickedLocation.long,
          }),
        }}
        style={styles.image}
      />
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutlinedButton icon={"location"} onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon={"map"} onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: "hidden",
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
