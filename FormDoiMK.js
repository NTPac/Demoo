import React from 'react'
import { TextInput, View, Text, StyleSheet, Button, Alert } from 'react-native'


export default class login extends React.Component {
    state = {
      password: "",
      passwordNew: "",
      passwordNewConfirm: "",
    };

    ChangePwByFirebase = (password,passwordNew,passwordNewConfirm) => {  
          console.log("Đang đổi mật khẩu:" + password);   
          if (password == "admin") {
              if(passwordNew == passwordNewConfirm){
                console.log("Đang đổi mật khẩu với mật khẩu mới là:" + passwordNew + passwordNewConfirm);   
                Alert.alert("Đổi mật khẩu thành công");
            }
          } else {
              Alert.alert("mật khẩu không chính xác");
            };
        };


    render(){
    return (
        <View>
            <Text>Mật khẩu cũ</Text>
            <TextInput
                secureTextEntry={true}
                style={styles.TextIput}
                onChangeText={(text) => {
                    this.setState({ password: text });
                  }}/>
            <Text>Mật khẩu mới</Text>
            <TextInput
                secureTextEntry={true}
                style={styles.TextIput}
                onChangeText={(text) => {
                    this.setState({ passwordNew: text });
                  }}/>
            <Text>Nhập lại mật khẩu mới</Text>
            <TextInput
                secureTextEntry={true}
                style={styles.TextIput}
                onChangeText={(text) => {
                    this.setState({ passwordNewConfirm: text });
                  }}/>
            <Button
                onPress={() => {
                  this.ChangePwByFirebase(this.state.password, this.state.passwordNew,this.state.passwordNewConfirm);
                }}
                title="Xác nhận"
                color="#0033FF"
            />
            
        </View>
    )}
}



const styles = StyleSheet.create({
    TextIput:{ 
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        
    },
    container: {
      flex: 1,
    },
  });
  