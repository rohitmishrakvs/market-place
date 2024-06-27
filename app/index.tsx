import { useFonts } from "expo-font";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppProvider } from "../context/AppContext";
import { AuthProvider } from "../context/AuthContext";
import MainNavigation from "./MainNavigation";

export default function RootLayout() {
  useFonts({
    outfit: "./../assets/font/SpaceMono-Regular.ttf",
  });
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <AppProvider>
          <MainNavigation />
        </AppProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
