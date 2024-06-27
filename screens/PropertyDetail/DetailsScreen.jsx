import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "@/utils/ResponsiveScreen";
import AppHeader from "@/components/Header";

const DetailsScreen = (props) => {
  const { data, onPressback, inRadius, handleUnlockPress, loading } = props;
  return (
    <View style={styles.container}>
      <View>
        <AppHeader title={"Details"} onPressback={onPressback} />
        <View>
          <Image source={{ uri: data.image }} style={styles.imageContainer} />
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.descriptionText}>{data?.description}</Text>
          <Text>{data?.address}</Text>
        </View>
      </View>
      {inRadius && (
        <TouchableOpacity style={styles.btn} onPress={handleUnlockPress}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.btnText}>Unlock</Text>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  imageContainer: {
    width: wp(90),
    height: wp(80),
    resizeMode: "cover",
    alignSelf: "center",
    borderRadius: wp(2),
  },
  detailContainer: {
    width: wp(90),
    alignSelf: "center",
    marginVertical: wp(4),
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: "600",
  },
  btn: {
    width: wp(90),
    backgroundColor: "#626FA8",
    alignSelf: "center",
    borderRadius: wp(2),
    paddingVertical: wp(2.5),
    alignItems: "center",
    marginBottom: wp(2),
  },
  btnText: {
    fontWeight: "700",
    color: "#ffff",
  },
});

export default DetailsScreen;
