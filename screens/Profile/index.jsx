import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { signOut } = useAuth();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Pressable onPress={()=>{signOut()}}>
          <Image
            source={require("./../../assets/images/logout.webp")}
            style={styles.logOutImage}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    justifyContent: "center",
  },
  main: {
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
    backgroundColor: "green",
    borderRadius: 8,
  },
  logout: {
    color: "#007AFF",
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  logOutImage: {
    width: 150,
    height: 150,
  },
});
