// Import React library for getting a component
import React,{Component} from 'react';
import {Text,View} from 'react-native';

class Header extends Component<{}>{

	constructor(props){
		super(props)
	};
	render(){
		return(
         <View style={styles.viewStyles}>
         <Text style={styles.textStyles}> {this.props.headerText} </Text>
         </View>
			);
	};
};

const styles={
	textStyles:{
		fontSize:30
	},
	viewStyles:{
		backgroundColor: '#f8f8f8',
		justifyContent:'center',
		alignItems:'center',
		height:60,
		paddingTop:15,
		elevation:2,
		position:'relative'
	}
};

export {Header};
