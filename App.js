import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';
import dmk from './FormDoiMK';


 function Profile({ navigation }) {
  return (
      <View StyleSheet={styles.container}>
          <Image StyleSheet={styles.image} source={require('./asset/girl1.jpg')}></Image>        
          <Text StyleSheet={styles.Label}><b>Nguyen Van A</b></Text>
          <Text>Ma sinh vien: 4051051110</Text>
          <Text>ma khau: *******</Text>
          <Button
        title="Go to Details"
        onPress={() => navigation.navigate('ChangePassword')}
      />
      </View>
  )
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ChangePassword" component={dmk} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image:{
    width:200, 
    height:200,
    marginBottom:20,
    borderTopLeftRadius:100,
    borderTopRightRadius:100,
    borderBottomLeftRadius:100,
    borderBottomRightRadius:100,
  }

  Label: {
    fontSize: 24,
    
  }
});
