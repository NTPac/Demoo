  
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import dmk from './screens/FormDoiMK';
import profile from "./screens/profile";

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"profile"}
        >
          <Stack.Screen name="ChangePassword" component={dmk} />
          <Stack.Screen name="profile" component={profile} navigation />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}