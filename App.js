import React, { Component } from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      resultText:"",
      calculateText:''
    }
    this.operations = ['Del','+','-','*','/']
  }
  calculateResult () {
    const text = this.state.resultText
    this.setState({
      calculateText: eval(text)
    })
  }
  /*buttonPressed(text) {
    //console.log(text)
    if(text== '=') {
      return this.calculateResult(this.state.result)
    }
    this.setState({
      resultText: this.state.resultText+text
    })
  }*/
  validate() {
    const text = this.state.resultText
    switch(text.slice(-1)) {
      case '+':
      case '-':
      case '*':
      case '/':
        return false
    }
    return true
  }
  buttonPressed(text) {
    //console.log(text)
    if(text== '=') {
      return this.validate() && this.calculateResult()
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
        break
      case '+':
      case '-':
      case '*':
      case '/':
        const lastChar = this.state.resultText.split('').pop()
        if (operations.indexOf(lastChar) > 0) return
        if(this.state.text == "" ) return
        this.setState ({
          resultText: this.state.resultText + operations
        })
    }
  }
  render () {
    let rows = []
    let nums = [[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
    for (let i = 0; i < 4; i++) {
      let row = []
      for (let j =0; j < 3; j++) {
        row.push(<TouchableOpacity key = {nums[i][j]} onPress = {() => this.buttonPressed(nums[i][j])} style = {styles.btn}>
          <Text style = {styles.btntxt}>{nums[i][j]}</Text>
        </TouchableOpacity>)
      }
      rows.push(<View style = {styles.row}>{row}</View>)
    }

    
    let ops =[]
    for (let j =0; j < 5; j++) {
      ops.push(<TouchableOpacity key = {this.operations[j]} style = {styles.btn} onPress = {() => this.operate(this.operations[j])}>
        <Text style = {[styles.btntxt, styles.white]}>{this.operations[j]}</Text>
      </TouchableOpacity>)
    }
    return (
      <View style={styles.container}>
        <View style = {styles.result}>
          <Text style = {styles.resultsText}>{this.state.resultText}</Text>
        </View>
        <View style = {styles.calculation}>
          <Text style = {styles.calculationText}>{this.state.calculateText}</Text>
        </View>
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
  resultsText : {
    fontSize : 50,
    color: 'white'
  },
  calculationText : {
    fontSize : 30,
    color: 'black'
  },
  row : {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  result : {
    flexGrow : 2, 
    backgroundColor: 'orange',
    justifyContent:'center',
    alignItems : 'flex-end'
  },
  btntxt : {
    color: 'white',
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
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems : 'flex-end'
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
    backgroundColor: '#434344',

  },
  operations : {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#636363'
  }
})