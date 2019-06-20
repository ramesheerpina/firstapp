import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image } from 'react-native';


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
        <Greeting name = 'Banana' />
        <Image style={{width: 300, height: 160}}
          source = {{uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" }}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    top: 100
  }
}
) 
