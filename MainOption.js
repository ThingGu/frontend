import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export default function MainOption() {
  return (
    <View style={styles.container}>
      <View style = {{flex: 1, alignItems: 'center'}}>
        <Image
          style = {{flex:1, height: '150%',
          resizeMode: 'contain',position: 'absolute',
          top: '10%' }}
          source={require('./assets/logo-black.png')} />
      </View>
      <View style={styles.imageBackground}>
        <Image 
        style={styles.images}
        source={require('./assets/icon.png')} />
      </View>
      <View style={styles.buttonBackground}>
        <View style = {styles.circle}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>밥띵구</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.circle}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>술띵구</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  imageBackground: {
    flex:2,
    backgroundColor: '#EAEEF2',
    alignItems: 'center'
  },
  images: {
    position: 'absolute',
    top:'10%',
    height: '100%',
    resizeMode: 'contain'
  },
  buttonBackground: {
    flex:5,
    backgroundColor: '#BAC6D1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    margin:15,
    width:160,
    height:160,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 80,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOpacity: 2,
    shadowOffset: {height: 3, width: -1},
    shadowRadius: 2
  },
  button: {
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 130,
    borderRadius: 65,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 5,
    shadowOffset: {height: -4, width: -4},
    shadowRadius: 2
  },
  text: {
    fontStyle: 'normal',
    fontSize: 25,
    fontWeight: 'bold'
  }
});
