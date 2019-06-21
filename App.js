import React, { Component } from 'react';
import {Text,View, StyleSheet} from 'react-native';

export default class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render () {
    return (
      <View style={styles.container}>
        <View style = {styles.result}></View>
        <View style = {styles.calculation}></View>
        <View style = {styles.buttons}>
          <View style = {styles.numbers}></View>
          <View style = {styles.operations}></View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create ({
  container : {
    flex: 1
  },
  result : {
    flexGrow : 2, 
    backgroundColor: 'red'
  },
  calculation : {
    flexGrow : 1, 
    backgroundColor: 'green'
  },
  buttons : { 
    flexGrow: 7,
    flexDirection: 'row'
  },
  numbers : {
    flex: 3,
    backgroundColor: 'yellow'
  },
  operations : {
    flex: 1,
    backgroundColor: 'black'
  }
})