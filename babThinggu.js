import React from 'react';
import {StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native';

export default function BabTinggu() {
    return (
        <View style = {styles.container}>
            <View style = {{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text
                style = {{top:'20%', fontWeight:'bold', fontSize: 20}} >밥띵구</Text>
            </View>
            <View style = {styles.background}>
                <Image 
                    style={{
                    marginTop: 20,
                    height: '50%',
                    resizeMode: 'contain'}}
                    source={require('./assets/icon.png')} />
                
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>식사 카드 생성</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>밥띵구 탐색</Text>
                </TouchableOpacity>
            </View>
            <View style = {{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text
                style = {{fontWeight:'bold', fontSize: 20}} >광고배너</Text>
            </View>
            <View style = {styles.container}>
                <Text>하단 메뉴바</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    background: {
        flex: 7,
        backgroundColor: '#EAEEF2',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#526285',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: '70%',
        height: '7%',
        borderRadius: 65
    },
    text: {
        fontStyle: 'normal',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
});