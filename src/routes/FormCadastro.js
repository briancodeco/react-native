import React,{useEffect} from 'react';
import { View, TextInput, Button,TouchableHighlight,Text } from 'react-native';
import { Component } from 'react';


/** const [state] = useStateValue();

useEffect(() => {
navigation.setParams({pass: state.pass, user: state.user});
}, []);
*/

class FormCadastro extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          user: "",
          pass: ""
        };
      }

    
    render (){
return(
    
    <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 4, justifyContent: 'center' }}>
            <TextInput placeholder="E-mail" style={{ fontSize: 20, height: 45 }} />
            <TextInput placeholder="Senha" style={{ fontSize: 20, height: 45 }} />
        </View>
        <View style={{ flex: 1 }}>
            <Button title="Cadastrar" color="#115E54" onPress={() => false} />
        </View>
        <TouchableHighlight 
        onPress={() => {
        this.props.navigation.navigate("Login");
        
      }}>
        <Text>Voltar</Text>
        </TouchableHighlight>
    </View>
        );
    }
}
export default  FormCadastro;