import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../../screens/Home";
import Profile from "../../screens/Profile";
import { Colors } from "../../constants/Colors";

const tabs = [
  {
    id: 1,
    name: "Home",
    selectedIcon: <FontAwesome name="home" size={24} color={Colors.PRIMARY} />,
    unSelectedIcon: <FontAwesome name="home" size={24} color="black" />,
    component: HomeScreen,
  },
  {
    id: 2,
    name: "Profile",
    selectedIcon: (
      <FontAwesome name="user-circle" size={24} color={Colors.PRIMARY} />
    ),
    unSelectedIcon: <FontAwesome name="user-circle" size={24} color="black" />,
    component: Profile,
  },
];

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#D1D1D1", // Set your desired tab bar background color here
        },
      })}
    >
      {tabs.map((tab) => {
        return (
          <Tab.Screen
            key={tab.id}
            name={tab.name}
            component={tab?.component}
            icon={tab?.icon}
            options={{
              tabBarIcon: ({ focused, color, size }) => {
                return focused ? tab?.selectedIcon : tab.unSelectedIcon;
              },
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
