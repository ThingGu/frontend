import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default function Help() {
    return(
        <View style={styles.container}>
            <View style={styles.statusBarBackground}/>
            <View style = {styles.titleBackground}>
                <TouchableOpacity>
                    <Icon name="chevron-back" size={30} color='black' style={{marginLeft: 18, marginRight: 132}}/>
                </TouchableOpacity>
                <Text style={styles.title}>도움말</Text>
            </View>
            <View style={styles.contentBackground}>
                <View style={styles.box}>
                    <Text style={styles.subTitle}>계정 관리</Text>
                </View>
                <View style={styles.underlineBox}>
                    <Button title="계정 공개 범위" color='#5E5E5E'/>
                </View>
                <View style={styles.box}>
                    <Text style={styles.subTitle}>마음에 들지 않는 콘텐츠 신고</Text>
                </View>
                <View style={styles.underlineBox}>
                    <Button title="계정 신고" color='#5E5E5E'/>
                </View>
            </View>
            <View style = {styles.bottomMenuBackground}>
                <Text>하단 메뉴바</Text>
            </View>
        </View>
    )
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
    subTitle: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    box: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 35
    },
    underlineBox: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: '#D6D5D5',
        paddingLeft: 30
    }
})