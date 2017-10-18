import React,{Component} from 'react';
import {Text} from 'react-native';
import {Button,Card,CardSection,Input,Spinner} from './common';
import firebase from 'firebase';


export default class LoginForm extends Component{

 state={email:'', password:'',error:'',loading:false};
 onButtonPress(){
   this.setState({error:'',loading:true});
   const {email,password}=this.state;

  firebase.auth().signInWithEmailAndPassword(email,password)
  .then(this.onLoginSuccess.bind(this))
  .catch( ()=>{
    firebase.auth().createUserWithEmailAndPassword(email,password)
  .then(this.onLoginSuccess.bind(this))
  .catch(this.onLoginFail.bind(this));
});
 }

onLoginFail(){
    this.setState({error:'Authentication Failed',loading:false});
}

onLoginSuccess(){
this.setState({email:'',
  password:'',
  error:'',
  loading:false});
}

renderButton(){
  if(this.state.loading){
    return <Spinner size='small' />;

  }
  else return (
    <Button onPress={this.onButtonPress.bind(this)}>
    Log in
    </Button>
  );
}

render(){
  return(
    <Card>
    <CardSection>
    <Input label='Email' placeholder='abc@gmail.com'
    value={this.state.email}
     onChangeText= {email=>this.setState({email})}
     />
    </CardSection>
    <CardSection>
    <Input secureTextEntry
    label='Password'
     placeholder='Password'
     value={this.state.password}
      onChangeText= {text=>this.setState({password:text})}
      />
    </CardSection>
    <Text>{this.state.error}
    </Text>
    <CardSection>
    {this.renderButton()}
    </CardSection>
    </Card>
  );
}
}
