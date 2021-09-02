import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import * as Font from 'expo-font';

export default class StartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { isReady: false };
  }
  async componentDidMount() {
    Font.loadAsync({ 'BlackHanSans-Regular': require('./assets/fonts/BlackHanSans-Regular.ttf'), });
    this.setState({ isReady: true });
  }
  render() {
    if (this.state.isReady) {
      return (
        <View style={styles.container} >
          <View style={styles.top}>
            <Image source={require('./assets/images/띵구_검정.png')} style={styles.image} />
          </View>
          <View style={styles.middle}>
            <TouchableOpacity style={styles.button}>
              <Text style={
                { color: '#EAE8E2',
                  fontFamily: 'BlackHanSans-Regular',
                  fontSize: 25 }
              }>로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={
                { color: '#EAE8E2',
                  fontFamily: 'BlackHanSans-Regular',
                  fontSize: 25 }
              }>회원가입</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer} />
        </View>
      );
    }
    else {
      return <Text style={{top:'5%'}}>Loading...</Text>
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    flex: 10,
    backgroundColor: '#EAEEF2',
    alignItems: 'center'
  },
  middle: {
    flex: 4,
    backgroundColor: '#EAEEF2',
    alignItems: 'center'
  },
  footer: {
    flex: 2,
    backgroundColor: '#EAEEF2'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  button: {
    backgroundColor: '#526285',
    borderRadius : 50,
    margin : 10,
    width : '60%',
    height : '30%',
    justifyContent : 'center',
    alignItems : 'center'
  }
});