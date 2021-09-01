import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, CheckBox} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class SignUp extends Component {
  state={
    selectedButton: ''
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBarBackground}/>
        <View style={styles.titleBackground}>
          <Text style={styles.title}>회원가입</Text>
      </View>
        <View style={styles.contentBackground}>
          <View style={{flex: 1, paddingTop: 25, paddingLeft: 44}}>
            <Text style={styles.subtitle}>이름</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.subtitle}>학번</Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
              <TextInput style={styles.input}/>
              <Text style={{color: '#B90000', marginLeft: 10}}>이미 사용 중인 학번입니다.</Text>
            </View>
            <Text style={styles.subtitle}>비밀번호</Text>
            <TextInput style={styles.passwordInput} placeholder="영문+숫자 포함 6자 이상" />
            <TouchableOpacity style={{position: 'absolute', left: '55%', top: '29.7%'}}>
              <Icon name="eye" size={30} color='#6C6C6C'/>
            </TouchableOpacity>
            <Text style={styles.subtitle}>비밀번호 확인</Text>
            <TextInput style={styles.passwordInput}/>
            <TouchableOpacity style={{position: 'absolute', left: '55%', top: '40.7%'}}>
              <Icon name="eye" size={30} color='#6C6C6C'/>
            </TouchableOpacity>
            <Text style={styles.subtitle}>닉네임</Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
              <TextInput style={styles.input}/>
              <Text style={{color: '#B90000', marginLeft: 10}}>이미 사용 중인 닉네임입니다.</Text>
            </View>
            <Text style={styles.subtitle}>성별</Text>
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity
              style={[styles.genderButton,
                {backgroundColor: this.state.selectedButton === 'male' ? '#A4B9CD' : '#BAC6D1'}]}
                onPress={() => this.setState({selectedButton: 'male'})}>
                <Text style={styles.buttonText}>남</Text>
              </TouchableOpacity>          
              <TouchableOpacity
              style={[styles.genderButton,
                {backgroundColor: this.state.selectedButton === 'female' ? '#A4B9CD' : '#BAC6D1'}]}
                onPress={() => this.setState({selectedButton: 'female'})}>
                <Text style={styles.buttonText}>여</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.subtitle}>학생카드 인증</Text>
            <View style={{flexDirection:'row', justifyContent: 'flex-start', alignItems: 'center'}}>
              <TouchableOpacity style={styles.certifyButton}>
                <Text style={styles.buttonText}>인증하기</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.subtitle}>개인정보 사용 약관/이용 약관</Text>
            <View style={styles.rectangle}/>
            <View style = {{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.checkbox}/>
              <Text style={{fontSize:18, marginTop: 12, marginBottom:5}}>다음 약관에 동의합니다.</Text>
            </View>
          </View>
          <View style={{alignItems:'center', marginBottom: 55}}>
            <TouchableOpacity style={styles.startButton}>
                <Text style={{fontSize: 18, color: '#FFFFFF', fontStyle: 'normal', fontWeight: 'bold'}}>시작하기</Text>
            </TouchableOpacity>
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
  statusBarBackground: {
    flex: 1,
    backgroundColor: '#000000'
  },
  titleBackground: {
    flex: 1.5,
    backgroundColor: '#142E65'
  },
  contentBackground: {
    flex: 20,
    backgroundColor: '#EAEEF2'
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20
  },
  subtitle: {
    fontSize:18,
    marginTop: 10,
    marginBottom:5
  },
  input: {
      backgroundColor: '#BAC6D1',
      width: 176,
      height: 35,
      paddingLeft: 10,
      color: 'white',
      borderRadius: 80,
      fontSize: 15,
      fontWeight: '500'
  },
  passwordInput: {
    backgroundColor: '#BAC6D1',
    width: 200,
    height: 35,
    paddingLeft: 10,
    color: 'white',
    borderRadius: 80,
    fontSize: 15,
    fontWeight: '500'
  },
  genderButton: {
      width: 91,
      height: 35,
      borderRadius: 80,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 5
  },
  certifyButton: {
    backgroundColor: '#BAC6D1',
    width: 150,
    height: 38,
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
      fontSize: 18,
      color: '#000000',
      textAlign: 'center'
  },
  rectangle: {
      backgroundColor: "#FFFFFF",
      width: 279,
      height: 83,
      shadowColor: 'rgba(0, 0, 0, 0.3)',
      shadowOpacity: 2,
      shadowOffset: {height: 3, width: -1},
      shadowRadius: 2
  },
  startButton: {
      backgroundColor: '#526285',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
      width: 150,
      height: 40,
      borderRadius: 65
  },
  checkbox: {
    alignSelf: "center",
    marginTop: 12,
    marginBottom: 5,
    marginRight: 15,
    width: 20,
    height: 20,
    backgroundColor: '#BAC6D1'
  }
});
