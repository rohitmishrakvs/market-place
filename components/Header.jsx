import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "@/utils/ResponsiveScreen";

const AppHeader = (props) => {
  const { title, onPressback } = props;
  return (
    <View style={styles.container}>
      {onPressback && <TouchableOpacity onPress={onPressback}>
        <View style={styles.backContainer}>
          <Image
            source={require("@/assets/images/back.webp")}
            style={styles.back}
          />
        </View>
      </TouchableOpacity>}
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(5),
    height: wp(10),
    flexDirection: "row",
    alignItems: "center",
    marginBottom:wp(2)
  },

  headerText: {
    fontSize: 18,
  },
  back: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  backContainer:{
    paddingRight:10,
    paddingVertical:10,
  }
});

export default AppHeader;
