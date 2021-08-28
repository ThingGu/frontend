import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default function PerInfoSetting() {
    return (
        <View style={styles.container}>
            <View style={styles.statusBarBackground}/>
            <View style = {styles.titleBackground}>
                <TouchableOpacity>
                    <Icon name="chevron-back" size={30} color='#3E3E3E' style={{marginLeft: 18, marginRight: 115}}/>
                </TouchableOpacity>
                <Text style={styles.title}>서비스 탈퇴</Text>
            </View>
            <View style={styles.contentBackground}>
                <Text style={{fontSize: 18, color: '#B90000', marginTop: 18, marginBottom: 18}}>띵구 서비스 탈퇴 시 아래 사항을 확인하세요.</Text>
                <View style={styles.contentBox}>
                    <View style={styles.contentTextBox}>
                        <Text style={{marginBottom: 10, fontSize: 16}}>1. 회원정보 삭제</Text>
                        <Text style={{color: '#808080', marginBottom: 5}}>- 탈퇴 즉시 아이디 및 비밀번호가 모두 삭제되며, 삭제된 정보는 복구되지 않습니다.</Text>
                        <Text style={{color: '#808080'}}>- 채팅방의 내용과 식사 기록이 모두 삭제됩니다.</Text>
                    </View>
                    <View style={styles.contentTextBox}>
                        <Text style={{marginBottom: 10, fontSize: 16}}>2. 탈퇴 시 7일 뒤 재가입 가능</Text>
                        <Text style={{color: '#808080', marginBottom: 5}}>- 탈퇴 후 7일 뒤에 재가입이 가능하며 삭제된 정보는 복구가 어렵습니다.</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.withdrawButton}>
                    <Text style={styles.withdrawText}>탈퇴하기</Text>
                </TouchableOpacity>
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
        backgroundColor: '#EAEEF2',
        alignItems: 'center'
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
    contentBox: {
        backgroundColor: '#BAC6D1',
        width: '100%',
        height: 220,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentTextBox: {
        width: 323,
        height: 100,
        justifyContent: 'center'
    },
    withdrawButton: {
        backgroundColor: '#526285',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: 278,
        height: 56,
        borderRadius: 65,
        marginTop: 70
    },
    withdrawText: {
        fontSize: 18,
        color: '#FFFFFF',
        fontStyle: 'normal',
        fontWeight: 'bold'
    }
})