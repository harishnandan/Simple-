import React,{Component} from 'react';
import {Text,TextInput,View} from 'react-native';


const Input =({label,value,onChangeText,placeholder,secureTextEntry})=>{

     return(
      <View style={styles.viewStyles}>
      <Text style={styles.textStyles}>{label}</Text>
      <TextInput
      secureTextEntry={secureTextEntry}
       placeholder={placeholder}
       underlineColorAndroid='transparent'
       onChangeText={onChangeText}
        value={value}
        style={styles.inputStyles}
        />
        </View>
    );


}

const styles={
  viewStyles:{
    flexDirection:'row',
    width:null,
    height:40,
    flex:1,
  alignItems:'center'
  },
  textStyles:{
      flex:1,
      alignSelf:'center',
      paddingLeft:20,
      fontSize:18
  },
  inputStyles:{
    flex:2,
    alignSelf:'center',
    paddingRight:5,
    paddingLeft:5,
    color:'#000',
    lineHeight:23,
    fontSize:18
  }
}

export {Input};
