import React, { Component } from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render () {
    let rows = []
    let nums = [[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
    for (let i = 0; i < 4; i++) {
      let row = []
      for (let j =0; j < 3; j++) {
        row.push(<TouchableOpacity style = {styles.btn}>
          <Text style = {styles.btntxt}>{nums[i][j]}</Text>
        </TouchableOpacity>)
      }
      rows.push(<View style = {styles.row}>{row}</View>)
    }

    let operations = ['+','-','*','/']
    let ops =[]
    for (let j =0; j < 4; j++) {
      ops.push(<TouchableOpacity style = {styles.btn}>
        <Text style = {[styles.btntxt, styles.white]}>{operations[j]}</Text>
      </TouchableOpacity>)
    }
    return (
      <View style={styles.container}>
        <View style = {styles.result}></View>
        <View style = {styles.calculation}></View>
        <View style = {styles.buttons}>
          <View style = {styles.numbers}>
            {rows}
          </View>
          <View style = {styles.operations}>
            {ops}
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create ({
  container : {
    flex: 1
  },
  row : {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  result : {
    flexGrow : 2, 
    backgroundColor: 'red'
  },
  btntxt : {
    fontSize : 30
  },
  btn : {
    flex : 1,
    alignItems : 'center',
    alignSelf : 'stretch',
    justifyContent : 'center'
  },
  calculation : {
    flexGrow : 1, 
    backgroundColor: 'green'
  },
  white: {
    color : 'white'
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
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: 'black'
  }
})