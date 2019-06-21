import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image } from 'react-native';


/*
class Greeting extends Component {
  render () {
    return (
      <View style = {{ alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}
*/
export default class LotsOfGreetings extends Component {
  
  constructor () {
    super()
    this.state= {}
    this.state.customStyles = {
      color: 'red'
    }
    setInterval(() => {
      if(this.state.customStyles.color == 'red') {
        this.setState({
          customStyles: {
            color:'green'
          }
        })
      } else {
        this.setState({
          customStyles: {
            color:'red'
          }
        })
      }
    }, 1000)
  }

  render () {
    return (
      <View style = {styles.container}>
        <View style = {styles.half1}>
          <Text style = {this.state.customStyles}>
            'Hello Bananas'
          </Text>
          <Image style={{width: 300, height: 160}}
            source = {{uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" }}/>
        </View>
        <View style = {styles.half2}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  half1: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center'
  },
  half2 : {
    flex : 1,
    backgroundColor: "blue"
  }
}) 
