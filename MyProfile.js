import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default function MyProfile() {
    return (
        <View style={styles.container}>
            <View style={styles.statusBarBackground}/>
            <View style = {styles.titleBackground}>
                <TouchableOpacity>
                    <Icon name="chevron-back" size={30} color='black' style={{marginRight: 80}}/>
                </TouchableOpacity>
                <Text style={styles.title}>나의 프로필</Text>
                <TouchableOpacity>
                    <Icon name="ellipsis-horizontal" size={30} color='black' style={{marginLeft: 80}}/>
                </TouchableOpacity>
            </View>
            <View style={styles.contentBackground}>
                <View style={styles.circle}>
                    <Image style={{
                        marginTop: 5,
                        height: '80%',
                        resizeMode: 'contain',
                        alignItems: 'center',
                        justifyContent: 'center'}}
                        source={require('./assets/dog.png')} />
                </View>
                <Text style={{fontSize: 33, color:'#3E3E3E', fontWeight: 'bold', marginBottom: 16}}>두부</Text>
                <View style={{flexDirection:'row', marginBottom: 18}}>
                    <Text style={{fontSize: 24, marginRight: 10}}>#ENFP</Text>
                    <Text style={{fontSize: 24, marginRight: 10}}>#영문과</Text>
                    <Text style={{fontSize: 24}}>#20학번</Text>
                </View>
                <View style={{flexDirection:'row', marginBottom: 50}}>
                    <Text style={{fontSize: 16, marginRight: 5}}>#20학번</Text>
                    <Text style={{fontSize: 16, marginRight: 5}}>#24세</Text>
                    <Text style={{fontSize: 16}}>#여성</Text>
                </View>
                <View style={{alignItems:'center', marginBottom: 5}}>
                    <TouchableOpacity style={styles.startButton}>
                        <Text style={styles.startText}>프로필 편집</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center', marginBottom: 50}}>
                    <TouchableOpacity style={styles.startButton}>
                        <Text style={styles.startText}>나의 식사카드</Text>
                    </TouchableOpacity>
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
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    contentBackground: {
        flex: 17,
        backgroundColor: '#EAEEF2',
        alignItems: 'center',
        justifyContent: 'center'
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
    text: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold'
    },
    startButton: {
        backgroundColor: '#526285',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: 165,
        height: 48,
        borderRadius: 65
    },
    startText: {
        fontSize: 18,
        color: '#FFFFFF',
        fontStyle: 'normal',
        fontWeight: 'bold'
    },
    circle: {
        margin:15,
        width:180,
        height:180,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C4C4C4',
        borderRadius: 100,
        marginBottom: 30
    }
})