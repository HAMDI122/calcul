import { StatusBar } from 'expo-status-bar';
import React, {Component} from "react";
import { Button, StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';



export class App extends Component {
  

  render() {
    
    return (
      
      <View style={styles.container}>
        <TouchableOpacity title='nname'></TouchableOpacity>
      <StatusBar style="auto" />
      </View>
    )
  }
}

export default App






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width:80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
