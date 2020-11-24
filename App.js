import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import dmk from './FormDoiMK';


 function Profile({ navigation }) {
  return (
      <View StyleSheet={styles.container}>
        <View>
          <Image StyleSheet={styles.image} source={require('./assets/girl1.jpg')}/>        
          <Text StyleSheet={styles.Label}><b>Nguyen Van A</b></Text>
        </View>
        <View> 
          <Text>Ma sinh vien: 4051051110</Text>
          <Text>ma khau: *******</Text>
          <Button
        title="Đổi mật khẩu"
        onPress={() => navigation.navigate('ChangePassword')}
      />
        </View> 
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
    borderTopLeftRadius:100,
    borderTopRightRadius:100,
    borderBottomLeftRadius:100,
    borderBottomRightRadius:100,
  },

  Label: {
    fontSize: 24,
    
  }
});
