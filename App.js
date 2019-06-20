import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';


class Greeting extends Component {
  render () {
    return (
      <View style = {{ alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}
export default class LotsOfGreetings extends Component {
  render () {
    return (
      <View style = {styles.container}>
        <Greeting name = 'Raxxesh' />
        <Greeting name = 'Jaina' />
        <Greeting name = 'Valeera' />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    top: 300
  }
}
) 
