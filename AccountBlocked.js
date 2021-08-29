import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default function Settings() {
    return (
        <View style={styles.container}>
            <View style={styles.statusBarBackground}/>
            <View style = {styles.titleBackground}>
                <TouchableOpacity>
                    <Icon name="chevron-back" size={30} color='#3E3E3E' style={{marginLeft: 18, marginRight: 115}}/>
                </TouchableOpacity>
                <Text style={styles.title}>차단한 계정</Text>
            </View>
            <View style={styles.contentBackground}>
                <View style={styles.underlineBox}>
                    <Text style={{fontSize: 18, paddingLeft: 30, color: '#5E5E5E'}}>차단 유저 프로필</Text>
                </View>
                <View style={styles.box}>
                    <View style={styles.circle}>
                        <Image style={{
                            marginTop: 5,
                            height: '80%',
                            resizeMode: 'contain',
                            alignItems: 'center',
                            justifyContent: 'center'}}
                            source={require('./assets/dog.png')} />
                    </View>
                    <Text style={styles.userName}>갱얼쥐</Text>
                    <TouchableOpacity>
                        <Icon name="md-remove-circle" size={30} color='#3E3E3E' style={{marginRight: 30}}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <View style={styles.circle}>
                        <Image style={{
                            marginTop: 5,
                            height: '80%',
                            resizeMode: 'contain',
                            alignItems: 'center',
                            justifyContent: 'center'}}
                            source={require('./assets/dog.png')} />
                    </View>
                    <Text style={styles.userName}>신림동불주먹</Text>
                    <TouchableOpacity>
                        <Icon name="md-remove-circle" size={30} color='#3E3E3E' style={{marginRight: 30}}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <View style={styles.circle}>
                        <Image style={{
                            marginTop: 5,
                            height: '80%',
                            resizeMode: 'contain',
                            alignItems: 'center',
                            justifyContent: 'center'}}
                            source={require('./assets/dog.png')} />
                    </View>
                    <Text style={styles.userName}>해적왕</Text>
                    <TouchableOpacity>
                        <Icon name="md-remove-circle" size={30} color='#3E3E3E' style={{marginRight: 30}}/>
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
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    underlineBox: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#D6D5D5'
    },
    box: {
        height: 65,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    userName: {
        fontSize: 18,
        paddingLeft: 30,
        color: '#5E5E5E',
        position: 'absolute',
        paddingLeft: 80
    },
    circle: {
        margin:15,
        width:50,
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C4C4C4',
        borderRadius: 80,
    }
})