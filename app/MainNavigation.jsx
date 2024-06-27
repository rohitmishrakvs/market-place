import { useAuth } from "@/context/AuthContext";
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthNavigator from "./Auth";
import BottomTabNavigator from "./InApp";
import { createStackNavigator,TransitionPresets } from "@react-navigation/stack";
import {renderSatckScreens} from "./stackScreen"

const Stack = createStackNavigator();

export default function MainNavigation() {
  const { token } = useAuth();
  return (
    <>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        {/* {!token ? <AuthNavigator /> : <BottomTabNavigator />} */}
        {!token ? (
          <AuthNavigator />
        ) : (
          <Stack.Navigator
            screenOptions={{
              cardOverlayEnabled: true,
              // ...TransitionPresets.SlideFromRightIOS,
            }}
          >
            <Stack.Screen
              name="Main"
              component={BottomTabNavigator}
              options={{ headerShown: false }}
            />
            {renderSatckScreens(Stack)}
          </Stack.Navigator>
        )}
      </SafeAreaView>
    </>
  );
}
