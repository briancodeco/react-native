
import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Login from './src/routes/FormLogin';
import 'react-native-gesture-handler';
import FormLogin from './src/routes/FormLogin';

export default class App extends React.Component {
    render(){
        return(
<AppStackNavigator />
        );
    }
}


const AppStackNavigator = createSwitchNavigator({
    Login:{
        screen: FormLogin
    } 

});



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


