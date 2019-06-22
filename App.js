import React, { Component } from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      resultText:""
    }
  }
  calculateResult () {
    const text = this.state.resultText
  }
  buttonPressed(text) {
    console.log(text)
    if(text== '=') {
      return this.calculateResult(this.state.result)
    }
    this.setState({
      resultText: this.state.resultText+text
    })
  }

  operate(operations) {
    switch(operations) {
      case 'Del':
        const text = this.state.resultText.split('')
        text.pop()
        this.setState({
          resultText: text.join('')
        })
    }
  }
  render () {
    let rows = []
    let nums = [[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
    for (let i = 0; i < 4; i++) {
      let row = []
      for (let j =0; j < 3; j++) {
        row.push(<TouchableOpacity onPress = {() => this.buttonPressed(nums[i][j])} style = {styles.btn}>
          <Text style = {styles.btntxt}>{nums[i][j]}</Text>
        </TouchableOpacity>)
      }
      rows.push(<View style = {styles.row}>{row}</View>)
    }

    let operations = ['Del','+','-','*','/']
    let ops =[]
    for (let j =0; j < 5; j++) {
      ops.push(<TouchableOpacity style = {styles.btn} onPress = {() => this.operate(operations[j])}>
        <Text style = {[styles.btntxt, styles.white]}>{operations[j]}</Text>
      </TouchableOpacity>)
    }
    return (
      <View style={styles.container}>
        <View style = {styles.result}>
          <Text> style = {styles.resultText}>{this.state.resultText}</Text>
        </View>
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