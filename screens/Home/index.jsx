import { AppContext } from "@/context/AppContext";
import useFetchHomeData from "@/hooks/useFetchHomeData";
import React, { useContext, useEffect } from "react";
import { ActivityIndicator, Text } from "react-native";
import Home from "./Home";
import { requestLocationPermission } from "@/utils/GeoLoaction";

export default function HomeScreen(props) {
  const { navigation } = props;
  const { state, setData, setError } = useContext(AppContext);
  const { data, isLoading, error } = useFetchHomeData(
    "http:////192.168.0.101:3000/homes"
  );

  const handleUnlockButton = (id) => {
    navigation.navigate("PROPERTY_SCREEN",{id})
  };

  useEffect(() => {
    if (!isLoading && data) {
      setData(data);
    }
    if (!isLoading && error) {
      setError(error);
    }
  }, [isLoading, data]); // Only update when these dependencies change

  useEffect(() => {
    requestLocationPermission();
  }, []);

  if (state.isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (state.error) {
    return <Text>Error: {state.error}</Text>;
  }
  return (
    <>
      <Home data={data} handleUnlockButton={handleUnlockButton} />
    </>
  );
}
