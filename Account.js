import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default function Settings() {
    return (
        <View style={styles.container}>
            <View style={styles.statusBarBackground}/>
            <View style = {styles.titleBackground}>
                <TouchableOpacity>
                    <Icon name="chevron-back" size={30} color='black' style={{marginLeft: 18, marginRight: 140}}/>
                </TouchableOpacity>
                <Text style={styles.title}>계정</Text>
            </View>
            <View style={styles.contentBackground}>
                <View style={styles.box}>
                    <Button title="차단한 계정" color='#5E5E5E'/>
                </View>
                <View style={styles.box}>
                    <Button title="개인정보 설정" color='#5E5E5E'/>
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
        flexDirection: 'row',
        justifyContent: 'flex-start',
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
        borderBottomWidth: 0.5,
        borderBottomColor: '#D6D5D5',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 40
    }
})