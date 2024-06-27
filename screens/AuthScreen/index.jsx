import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { useAuth } from "../../context/AuthContext";

export default function LoginScreen() {
  const { signIn } = useAuth();

  return (
    <View style={styles.container}>
      <Text
        style={[styles.txtdescription, { fontSize: 30, fontWeight: "900" }]}
      >
        {"Marketplace"}
      </Text>
      <Image
        source={require("./../../assets/images/mobile.png")}
        style={styles.mobileImage}
      />
      <View style={styles.container2}>
        <View>
          <Text style={styles.txtdescription}>
            {
              "Marketplace is a convenient destination on Facebook to discover, buy and sell items."
            }
          </Text>
          <Text style={styles.txtslogan}>
            {"Don't be slow! Our prices are low."}
          </Text>
        </View>
        <Pressable style={styles.btn} onPress={()=>{signIn("Rohit1234")}}>
          <Text style={styles.btnText}>{"Sign In"}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  mobileImage: {
    width: 450,
    height: 500,
    resizeMode: "contain",
  },
  txtdescription: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "700",
    paddingHorizontal: 0,
  },
  txtslogan: {
    color: "#0ce",
    fontSize: 14,
    textAlign: "center",
    marginVertical: 5,
  },
  btn: {
    backgroundColor: "#058",
    width: 330,
    borderRadius: 8,
    paddingVertical: 13,
    alignItems: "center",
    marginTop: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
  },
});
