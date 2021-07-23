import { StatusBar } from 'expo-status-bar';
import React, {useState,Component} from "react";
import { Button, StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
import Bbutton from "./Bbutton"
export class App extends Component {
  constructor(props){  
    super(props);  
    this.state = {
      result:"",  
      final:"",
      aa :["+", "-","*","/"],
      LastWord:"",
      }  
  } 
  
  buttonAc=()=>{
    this.setState({
      result:"",
      final:"",
    });
  }
  
  buttonPress=(res)=>{   

      console.log("rs"+this.state.result)
    if (this.state.aa.includes(res)) {
      this.setState({
      final:"",
      });
      if(this.state.LastWord==res){
        this.setState({
          result:this.state.result,
          final:this.state.final,
        });
        }

      else {
        
        this.setState({
          result:this.state.result+res,
        });
      }
    }
    else {
    
      this.setState({
        final:this.state.final+res,
        result:this.state.result+res,
      });    
    }
    this.setState({
      LastWord:res,
      });
        console.log("lastword"+" "+this.state.LastWord)
        console.log("result"+" "+this.state.result)
        console.log("final"+" "+this.state.final)
  }
  buttonCalcul=()=>{
    this.setState({
      final:eval(this.state.result),
      result:'',
    });
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.text}>{this.state.final}</Text>
      </View>
      <View style={styles.button}>
        <View style={styles.mmcontainer}>
          
          <Bbutton name='AC' color='#A5A5A5' colorText='#000000' onPress={()=>{this.buttonAc()}} ></Bbutton>
          <Bbutton name='+/-' color='#A5A5A5' colorText='#000000'onPress={()=>{this.buttonPress("+/-")}}></Bbutton>
          <Bbutton name='%' color='#A5A5A5'colorText='#000000'onPress={()=>{this.buttonPress("%")}}></Bbutton>
          <Bbutton name='÷' color='#FF9F0A'colorText='#FFFFFF'onPress={()=>{this.buttonPress("/")}} ></Bbutton>
        </View>
        <View style={styles.mmcontainer}>
          <Bbutton name='7'color='#333333'colorText='#FFFFFF'onPress={()=>{this.buttonPress("7")}}></Bbutton>
          <Bbutton name='8' color='#333333'colorText='#FFFFFF'onPress={()=>{this.buttonPress("8")}}></Bbutton>
          <Bbutton name='9' color='#333333'colorText='#FFFFFF'onPress={()=>{this.buttonPress("9")}}></Bbutton>
          <Bbutton name='x'color='#FF9F0A'colorText='#FFFFFF'onPress={()=>{this.buttonPress("*")}}></Bbutton>
        </View>
        <View style={styles.mmcontainer}>
          <Bbutton name='4'color='#333333'colorText='#FFFFFF'onPress={()=>{this.buttonPress("4")}}></Bbutton>
          <Bbutton name='5'color='#333333'colorText='#FFFFFF'onPress={()=>{this.buttonPress("5")}}></Bbutton>
          <Bbutton name='6'color='#333333'colorText='#FFFFFF'onPress={()=>{this.buttonPress("6")}}></Bbutton>
          <Bbutton name='-' color='#FF9F0A'colorText='#FFFFFF'onPress={()=>{this.buttonPress("-")}}></Bbutton>
        </View>
        <View style={styles.mmcontainer}>
          <Bbutton name='1'color='#333333' colorText='#FFFFFF' onPress={()=>{this.buttonPress("1")}}></Bbutton>
          <Bbutton name='2'color='#333333' colorText='#FFFFFF' onPress={()=>{this.buttonPress("2")}}></Bbutton>
          <Bbutton name='3'color='#333333' colorText='#FFFFFF' onPress={()=>{this.buttonPress("3")}}></Bbutton>
          <Bbutton name='+' color='#FF9F0A' colorText='#FFFFFF' onPress={()=>{this.buttonPress("+")}}></Bbutton>
        </View>
        <View style={styles.mmcontainer}>
          <Bbutton name='0'color='#333333' style={{flex:2, alignItems:"flex-start", paddingLeft:34}} onPress={()=>{this.buttonPress("0")}} ></Bbutton>
          <Bbutton name=','color='#333333' colorText='#FFFFFF'onPress={()=>{this.buttonPress(".")}}></Bbutton>
          <Bbutton name='=' color='#FF9F0A' colorText='#FFFFFF'onPress={()=>{this.buttonCalcul("+")}}></Bbutton>
        </View>
       
      </View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    backgroundColor:'black',
    flex:1,
   
  },
  button:{
    backgroundColor: "black" ,

  },
  mmcontainer:{
    flexDirection:'row',
    justifyContent: "space-between",
  },
  
  result:{
    flex:1,
    justifyContent: "flex-end",
    
  },
  text:{
    textAlign:'right',
    fontSize:70,
    color:'white',
    
  },
})
export default App







