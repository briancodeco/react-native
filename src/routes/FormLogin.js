
import React, { Component } from 'react';
import {  Image, View, KeyboardAvoidingView, TextInput, TouchableOpacity,Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

 class FormLogin extends Component{
  
  componentetDidMount(){

    FormLogin.navigationOptions = ({ navigation }) => ({
      usuario : navigation.navigate.state.params.usuario  
      
    });
      console.log(usuario);
      console.log(navigation);
  }
      
  constructor(props) {
    super(props);
    var usuario = '';
    console.log();
    this.state = {
      user: '',
      pass: '',
      typedText : ''

    };
    clicou = () => {
      if(this.state.typedText == usuario){
      return this.props.navigation.navigate("Home");
      } else {
        console.log(usuario);
        console.log(navigation);
      }
    }
  }
 

  render (){
  return(
   
    <KeyboardAvoidingView style={style.background}>
       
    <View style={style.containerLogo}>
        
    <Image
    source={require('../../src/ronaldinho.png')}
    />
    </View>
    
    <View style={style.container}>
    <TextInput placeholder="Email"
    style={style.input}
      autoCorrect={false}
      onChangeText={(text) => {
        this.setState(
            (previousState) => {
                return{
                    typedText: text
                    };
                   
                }
         );                    
    }
}
      
      
      />
      <TextInput placeholder="Senha"
      style={style.input}
      autoCorrect={false}
      value={this.state.pass}
      />

      <TouchableHighlight
      onPress={() => {
        clicou();
      }}
      style={style.btnSubmit} 
       
      >
        <Text style={style.submitText}>Acessar</Text>
      </TouchableHighlight>  
      
        <TouchableHighlight 
        onPress={() => {
        this.props.navigation.navigate("Cadastro");
        
      }}
       style={style.BtnRegister}>
        <Text style={style.registerText}>Criar Conta</Text>
        </TouchableHighlight> 
    </View>
    </KeyboardAvoidingView>
    );
  }
} 
export default FormLogin;

const style = StyleSheet.create({
background:{
  flex: 1,
  alignItems: 'center',
  justifyContent:'center',
  backgroundColor: '#191919'
},
containerLogo:{
flex:1,
justifyContent: 'center',
},
container:{
  flex:1,
  alignItems: 'center',
  justifyContent: 'center',
  width: '90%',
},
input:{
 backgroundColor: '#FFF',
 width: '90%',
 marginBottom: 15,
 color: '#222',
 fontSize: 17,
 borderRadius: 7,
 padding: 10, 
},
btnSubmit: {
  backgroundColor: '#35AAFF',
  width: '90%',
  height: 45,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 7,
},
submitText:{
  color:'#FFF',
  fontSize: 18
},
BtnRegister:{
  marginTop: 10,
},
registerText:{
  color: '#FFF',
}



});


