import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default class Notification extends Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>알림</Text>
        </View>

        <View style={styles.contents}>
            
            <TouchableOpacity activeOpacity={0.7} style={styles.notiVis}>
              <Text style={styles.text}>댕글이님이 메시지를 보냈습니다.</Text>
            </TouchableOpacity>
            

            <TouchableOpacity activeOpacity={0.7} style={styles.noti}>
              <Text style={styles.text}>부침개님과의 매칭이 성사되었습니다.</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={styles.notiVis}>
              <Text style={styles.text}>경고 1회가 누적되었습니다. </Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={styles.noti}>
              <Text style={styles.text}>두부님과의 약속 시간으로부터 1시간 남았습니다.</Text>
            </TouchableOpacity>
        </View>

        <View style={{flex: 2.5}}>
            <Text>광고 배너</Text>
          </View>

        <View style={{flex: 2}}>
          <Text>하단 메뉴바</Text>
        </View>
        <StatusBar style="auto" />
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
    flex: 20,
    backgroundColor: '#EAEEF2',
  },
  notiVis: {
    borderBottomColor: '#969696',
    borderBottomWidth: 1,
    backgroundColor: '#A4B9CD'
  },
  noti: {
    borderBottomColor: '#969696',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 18,
    margin: 20
  }
});