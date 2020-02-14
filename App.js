
import React from 'react';
import {StyleSheet} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Login from './src/routes/FormLogin';
import 'react-native-gesture-handler';
import FormLogin from './src/routes/FormLogin';
import FormCadastro from './src/routes/FormCadastro';
import Home from './src/routes/Home';



const Navigator = createSwitchNavigator({
    Login:{
        screen:FormLogin,
        navigationOptions: ({navigation})=>{
          return{
            pass: {
              pass: navigation.getParam('pass', '')
            },
            user: {
              user: navigation.getParam('user','')
            }
          }
        }
    },
    Cadastro:{
      screen:FormCadastro,
      
    } ,
    Home:{
    screen:Home
}  

});

export default createAppContainer(Navigator);

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


