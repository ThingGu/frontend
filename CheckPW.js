import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class CheckPW extends Component {
  constructor() {
    super();
    this.state = {
      showId: null
    };
  }

  handleClick(id) {
    this.setState(() => {
      return {showId: id};
    })
  }

  state = {
    text: '',
    inputText: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.blueView}>
          <Text style={styles.barText}>비밀번호 찾기</Text>
        </View>
        
        <View style={styles.whiteView}>
          <Text style={styles.conText}> 비밀번호를 찾을 방법을 선택해 주세요. </Text>
          
          <TouchableOpacity onPress={()=> this.handleClick(1)} activeOpacity={0.7} style={styles.labelViewl}>
            <View style={styles.radioButtonHolder}>
              {
              (this.state.showId === 1) ? (
                <View style={styles.radioIcon} />
              ) : null
              }
            </View>
            <Text style={styles.labelText}>본인확인 이메일로 인증</Text>
          </TouchableOpacity>

          {
            (this.state.showId === 1) ? (
          <View>
            <Text style={styles.speText}>마이아이웹 이메일 주소와 입력한 이메일 주소가 같아야, 인증번호를 받을 수 있습니다.</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => {this.setState({inputText: text})}}
              placeholder="이름"
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => {this.setState({inputText: text})}}
              placeholder="이메일"
            />
            <TouchableOpacity activeOpacity={0.7} style={styles.button}>
              <Text style={styles.buttonText}>확인</Text>
            </TouchableOpacity>
          </View>
            ) : null
          }

          <TouchableOpacity onPress={()=> this.handleClick(2)} activeOpacity={0.7} style={styles.labelViewl}>
            <View style={styles.radioButtonHolder}>
            {
              (this.state.showId === 2) ? (
                <View style={styles.radioIcon} />
              ) : null
            }
            </View>
            <Text style={styles.labelText}>본인 명의 휴대전화로 인증</Text>
          </TouchableOpacity>

          {
            (this.state.showId === 2) ? (
          <View>
          <Text style={styles.speText}>본인 주민등록번호로 가입된 휴대전화로 인증 가능</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => {this.setState({inputText: text})}}
              placeholder="이름"
            />
            <View style={styles.horizon}>
              <TextInput
                style={styles.numInput}
                onChangeText={(text) => {this.setState({inputText: text})}}
                placeholder="휴대폰번호"
              />
              <TouchableOpacity activeOpacity={0.7} style={styles.buttonh}>
                <Text style={styles.buttonText}>인증</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.horizon}>
              <TextInput
                style={styles.numInput}
                onChangeText={(text) => {this.setState({inputText: text})}}
                placeholder="인증번호 숫자 4자리"
              />
              <TouchableOpacity activeOpacity={0.7} style={styles.buttonh}>
                <Text style={styles.buttonText}>확인</Text>
              </TouchableOpacity>
            </View>
          </View>
            ) : null
          } 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEEF2'
  },
  blueView: {
    flex: 1,
    backgroundColor: '#142E65',
    justifyContent: 'flex-end',
  },
  barText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    margin: 10
  },
  whiteView: {
    flex: 10
  },
  conText: {
    fontSize: 18,
    paddingLeft: 15,
    marginVertical: 15
  },
  radioButtonHolder: {
    height: 20,
    width: 20,
    borderRadius: 70,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  radioIcon: {
    height: 10,
    width: 10,
    backgroundColor: '#000000',
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelViewl: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    backgroundColor: '#ffffff',
    borderBottomColor: '#969696',
    borderBottomWidth: 1
  },
  labelText: {
    fontSize: 18,
    paddingLeft: 10,
    marginVertical: 10,
  },
  speText: {
    fontSize: 15,
    color: '#808080',
    padding: 10,
    marginHorizontal:30
  },
  textInput: {
    backgroundColor: '#ffffff',
    height: 32,
    margin: 3,
    borderWidth: 1,
    paddingLeft: 10,
    marginHorizontal: 50
  },
  numInput: {
    backgroundColor: '#ffffff',
    height: 32,
    width: 187,
    margin: 3,
    borderWidth: 1,
    paddingLeft: 10,
    marginHorizontal: 50
  },
  button: {
    height: 30,
    width: 77,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 70,
    margin: 10,
    marginLeft: 285,
    backgroundColor: '#BAC6D1'
  },
  buttonh: {
    height: 30,
    width: 77,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 70,
    backgroundColor: '#BAC6D1',
    margin: 3,
  },
  buttonText: {
    fontSize: 13
  },
  horizon: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  }
});