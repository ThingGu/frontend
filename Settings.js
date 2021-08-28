import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default function Settings() {
    return (
        <View style={styles.container}>
            <View style={styles.statusBarBackground}/>
            <View style = {styles.titleBackground}>
                <Text style={styles.title}>설정</Text>
            </View>
            <View style={styles.contentBackground}>
                <View style={styles.box}>
                    <Icon name="md-notifications" size={30} color='black' style={{marginLeft: 30, marginRight: 20}}/>
                    <Text style={{fontSize: 18}}>알림</Text>
                </View>
                <View style={styles.box}>
                    <Icon name="md-people" size={30} color='black' style={{marginLeft: 30, marginRight: 20}}/>
                    <Text style={{fontSize: 18}}>계정</Text>
                </View>
                <View style={styles.box}>
                    <Icon name="md-information-circle" size={30} color='black' style={{marginLeft: 30, marginRight: 20}}/>
                    <Text style={{fontSize: 18}}>정보</Text>
                </View>
                <View style={styles.box}>
                    <Icon name="md-help-circle" size={30} color='black' style={{marginLeft: 30, marginRight: 20}}/>
                    <Text style={{fontSize: 18}}>도움말</Text>
                </View>
            </View>
            <View style = {styles.bottomMenuBackground}>
                <Text>하단 메뉴바</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1
    },
    statusBarBackground: {
        flex: 1,
        backgroundColor: '#000000'
    },
    titleBackground: {
        flex: 1.5,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentBackground: {
        flex: 17,
        backgroundColor: '#EAEEF2'
    },
    bottomMenuBackground: {
        flex: 2,
        backgroundColor: '#FFFFFF'
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    box: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomWidth: 0.5,
        borderBottomColor: '#D6D5D5'
    }
})