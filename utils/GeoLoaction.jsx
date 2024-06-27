import * as Location from "expo-location";

export const requestLocationPermission = async () => {
  try {
    const {  status  } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
    //   console.log("Location permission granted");
      return true;
    } else {
    //   console.log("Location permission denied");
      return false;
    }
  } catch (error) {
    console.warn("Error requesting location permission:", error);
    return false;
  }
};

export const getCurrentLocation = async () => {
  try {
    const { coords } = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });
    const { latitude, longitude } = coords;
    return { latitude, longitude };
  } catch (error) {
    throw error;
  }
};

export const checkLocationWithinRadius = async (propertyLocation) => {
  try {
    const hasPermission = await requestLocationPermission();
    if (hasPermission) {
      const currentLocation = await getCurrentLocation();
      const distance = calculateDistance(
        currentLocation.latitude,
        currentLocation.longitude,
        propertyLocation.latitude,
        propertyLocation.longitude
      );
      console.log("Distance to property:", distance, "meters");

      const radius = 30; // Radius in meters
      return distance <= radius;
    } else {
      console.log("Location permission denied");
      return false;
    }
  } catch (error) {
    console.error("Error checking location:", error);
    return false;
  }
};

const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * (Math.PI / 180); // φ, λ in radians
  const φ2 = lat2 * (Math.PI / 180);
  const Δφ = (lat2 - lat1) * (Math.PI / 180);
  const Δλ = (lon2 - lon1) * (Math.PI / 180);

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // Distance in meters
  return distance;
};
