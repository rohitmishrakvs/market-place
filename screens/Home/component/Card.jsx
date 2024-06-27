import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { widthPercentageToDP as wp } from "@/utils/ResponsiveScreen";
import { checkLocationWithinRadius } from "@/utils/GeoLoaction";

const Card = (props) => {
  const { data, onPress } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPress(data.id)}>
        <Image source={{ uri: data?.image }} style={styles.image} />
        <View style={styles.container2}>
          <Text style={styles.address}>{data.address}</Text>
          <Text style={styles.description}>{data.description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    alignSelf: "center",
    backgroundColor: "#D1D1D1",
    marginVertical: wp(2),
    borderRadius: wp(2),
    elevation: 3,
    borderWidth: 1,
    borderColor: "#C1c1c1",
  },
  container2: {
    paddingVertical: wp(2),
    paddingHorizontal: wp(2),
  },
  address: {},
  description: {},
  image: {
    width: wp(89.5),
    height: wp(50),
    resizeMode: "cover",
    borderRadius: wp(2),
  },
});
export default Card;
