import React, { Component } from 'react'
import { TouchableOpacity,Text,StyleSheet,View, ImageBackground } from 'react-native'

class Bbutton extends Component {
static defaultProps={
  colorText:'#FFFFFF',
  color:'#A5A5A5',
  style:'',
}

    render() {
      let color = this.props.color
      let colorText = this.props.colorText
      
        return (
           
                <TouchableOpacity onPress={this.props.onPress} style={[styles.container,{backgroundColor: color},{...this.props.style}]} >
                 <Text style={[styles.text,{color: colorText}]}>{this.props.name}</Text>
                </TouchableOpacity>
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
      
      justifyContent: "center",
      alignItems:"center", 
      width: 80,
      height:80,
      margin:8,
      borderRadius: 50, 
      
      },
   
    text: {
      fontSize: 30,
    },
  });

  export default Bbutton