import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';



export default class Profile extends React.Component {
    render(){
  return (
      <View StyleSheet={styles.container}>
          <Image StyleSheet={styles.image} source={require('./assets/girl1.jpg')}/>   
          <Text StyleSheet={styles.Label}>Nguyen Van A</Text>
          <Text>Ma sinh vien: 4051051110</Text>
          <Text>ma khau: *******</Text>
          <Button
        title="doi mat khau"
        onPress={() => {
        this.props.navigation.navigate("ChangePassword");}}/>
      </View>
  )}
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageStyle:{
    width: 200, height: 200,
    marginBottom:20,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },

  Label: {
    color: "#005662",
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
    margin: 10,
  },
});

