import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from 'react-native';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/EvilIcons';
import * as Font from 'expo-font';
import OpenInfo from './OpenInfo';
import OpenAccuse from './OpenAccuse';
import OpenCancel from './OpenCancel';
import { timesSeries } from 'async';

export default class ChattingRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false, // font 관련 state
      // openInfo 상대방 정보 Modal 창 관련 state
      // openCancel 약속 취소 Modal 창 관련 state
      // openModify 약속 수정하기 Modal 창 관련 state
      // openDirectlyInputCancel 약속 취소 사유 직접 입력 Modal 창 관련 state
      // openAccuse 신고
      // openDirectlyInputAccuse 신고 사유 직접 입력

    }
  }
  async componentDidMount() {
    Font.loadAsync({ 'BlackHanSans-Regular': require('./assets/fonts/BlackHanSans-Regular.ttf'), });
    this.setState({ isReady: true });
  }
  render() {
    if (this.state.isReady) {
      return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>

          <OpenInfo/>
          <OpenCancel/>
          

          <View style={styles.topBar}>
            <TouchableOpacity style={{ marginRight: 95 }} onPress={() => null}>
              <Icon1 name='left' size={30} color='black' />
            </TouchableOpacity>
            <Text style={styles.topBartext}>유저이름</Text>
            <TouchableOpacity style={{ marginLeft: 80 }} onPress={() => null}>
              <Icon2 name='dots-three-horizontal' size={30} color='black' />
            </TouchableOpacity>
          </View>

          <TouchableWithoutFeedback style={styles.middle} onPress={Keyboard.dismiss}>
            <View style={styles.middle}>
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.footer}>

            <TouchableOpacity onPress={() => null}>
              <Icon2 name='location-pin' size={35} color='black' />
            </TouchableOpacity>

            <TextInput style={styles.input} onPress={() => null}>
            </TextInput>
            <TouchableOpacity>
              <Icon3 style={{ paddingTop: 1 }} name='arrow-up' size={40} color='black' />
            </TouchableOpacity>
          </View>

        </KeyboardAvoidingView>

      )
    }
    else {
      return <View><Text>Loading...</Text></View>;
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEEF2',
  },
  topBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 30,
  },
  topBartext: {
    fontFamily: 'BlackHanSans-Regular',
    color: '#545454',
    fontSize: 30,
    top: '1%'
  },
  middle: {
    flex: 15,
    backgroundColor: '#EAEEF2',
    justifyContent : 'center',
    alignContent : 'center'
  },
  iconContainer: {
    borderRadius: 30,
    backgroundColor: 'white',
    paddingTop: 2,
    width: 30,
    height: 30
  },
  footer: {
    paddingTop: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent : 'center',
    backgroundColor: '#BAC6D1'
  },
  input: {
    width: '70%',
    height: '68%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'white'
  },
})