import { View, Text, ActivityIndicator, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import useFetchHomeData from "@/hooks/useFetchHomeData";
import DetailsScreen from "./DetailsScreen";
import { checkLocationWithinRadius } from "@/utils/GeoLoaction";

const PropertyDetail = (props) => {
  const { route, navigation } = props;
  const { data, isLoading, error } = useFetchHomeData(
    `http:////192.168.0.101:3000/homes/${route?.params?.id}`
  );
  const [inRadius, setInRadius] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onPressback = () => {
    navigation.goBack();
  };



  const simulateApiCall = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5;
        if (success) {
          resolve("Home unlocked successfully!");
        } else {
          reject("Failed to unlock home.");
        }
      }, 2000);
    });
  };

  const handleUnlockPress = async () => {
    setLoading(true);
    setMessage("");
    try {
      const response = await simulateApiCall();
      setMessage(response);
      Alert.alert("Success", response);
    } catch (error) {
      setMessage(error);
      Alert.alert("Error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getInRadius = async () => {
      let positionOfProperty = { latitude: data?.lat, longitude: data?.long };
      let IsinRadius = await checkLocationWithinRadius(positionOfProperty);
      setInRadius(IsinRadius);
    };
    if (data) {
      getInRadius();
    }
  }, [data]);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  return (
    <>
      <DetailsScreen
        data={data}
        loading={loading}
        onPressback={onPressback}
        inRadius={inRadius}
        handleUnlockPress={handleUnlockPress}
      />
    </>
  );
};

export default PropertyDetail;
