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
            color:'white',
            fontSize : 30
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

        <View style = {styles.half2}>
          <View style = {[styles.half21, styles.half2x]}>
            <Text style = {styles.text}>'This is 2-1'</Text>
          </View>
          <View style = {[styles.half22, styles.half2x]}>
          <Text style = {styles.text}>'This is 2-2'</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  half1: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center'
  },
  half2 : {
    flex : 1,
    backgroundColor: "blue",
    flexDirection: 'row'
  },
  half2x: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  half21 : {
    flex: 2,
    backgroundColor: 'orange'
  },
  half22 : {
    flex: 1,
    backgroundColor: 'green'
  },
  text: {
    color : 'white',
    fontSize: 20
  }
}) 
