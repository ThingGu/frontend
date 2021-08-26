import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Notification extends Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.title}>
          <Text style={styles.titleText}>알림</Text>
        </View>

        <View style={styles.contents}>
          <View>
            <Text style={styles.redTitle}>경고 n회</Text>
          </View>

          <View style={styles.box}>
            <Text style={{fontSize: 18, fontWeight:'bold', marginVertical: 20}}>신고 사유</Text>
            <Text style={{fontSize: 18}}>채팅시에 비속어를 사용함.</Text>

            <TouchableOpacity activeOpacity={0.7} style={styles.button}>
              <Text style={styles.buttonText}>확인</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.speText}>경고 3회 누적 시 자동적으로 계정이 탈퇴되며 재가입이 어려우니 올바른 띵구 생활 하시기를 권장 드립니다.</Text>
        </View>

        <View style={{flex: 2.5}}>
            <Text>광고 배너</Text>
          </View>

        <View style={{flex: 2}}>
          <Text>하단 메뉴바</Text>
        </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  title: {
    flex: 1.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 25,
    color: '#000000',
    margin: 10
  },
  contents: {
    flex:20,
    backgroundColor: '#EAEEF2',
    alignItems: 'center',
  },
  redTitle: {
    fontSize: 30,
    color: '#B90000',
    margin: 30
  },
  box: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 270, 
    height: 355, 
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOffset: {
      width:0,
      height: 3
    },
    shadowOpacity: 0.1
  },
  button: {
    width: 90,
    height: 35,
    backgroundColor: '#526285',
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 130,
    marginTop: 220
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  speText: {
    marginHorizontal: 80,
    marginVertical: 5,
    fontSize: 14,
    color: '#858585',
    lineHeight: 22
  }
});