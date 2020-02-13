import React from 'react';
import { View, TextInput, Button, TouchableHighlight, Text } from 'react-native';
import { Component } from 'react';
class Home extends Component{
    render (){
return(
    
    <View style={{ flex: 1, padding: 10 }}>
      <Text>
        Seja bem vindo  
    </Text>
    
    <TouchableHighlight 
        onPress={() => {
        this.props.navigation.navigate("Login");
        
      }}>
        <Text >Voltar</Text>
        </TouchableHighlight> 
    </View>
        );
    }
}
export default Home;