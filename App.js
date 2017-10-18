import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';
import {Header,CardSection} from './Components/common';
import LoginForm from './Components/LoginForm';
import {Button} from './Components/common';

export default class App extends React.Component {

  state={
    loggedIn:false
  };

  componentWillMount(){
    firebase.initializeApp({
    apiKey: "AIzaSyDccCBsDmXoInQ7RbHTpH744a9gG5hw8Xk",
    authDomain: "login-e0028.firebaseapp.com",
    databaseURL: "https://login-e0028.firebaseio.com",
    projectId: "login-e0028",
    storageBucket: "login-e0028.appspot.com",
    messagingSenderId: "853891363115"
  });

firebase.auth().onAuthStateChanged(
 (user)=>{
   if(user){
     this.setState({loggedIn:true});
   }
   else{
      this.setState({loggedIn:false});
   }
 }


  );


  }

  renderContent(){
 if(this.state.loggedIn){
 return(
     <CardSection>
   <Button onPress={()=>firebase.auth().signOut()}>
   Log out
</Button>
  </CardSection>
 );

 }
else{
  return <LoginForm />
}
  }
  render() {
    return (
      <View style={styles.container}>
      <Header headerText="Authorized" />
       {this.renderContent()}
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
