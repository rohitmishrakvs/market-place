import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import LoginScreen from "../../screens/AuthScreen";
const Stack = createStackNavigator();

const AuthNavigator = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{
          headerShown: false,
        }}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
