import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default function PerInfoSetting() {
    return (
        <View style={styles.container}>
            <View style={styles.statusBarBackground}/>
            <View style = {styles.titleBackground}>
                <TouchableOpacity>
                    <Icon name="chevron-back" size={30} color='#3E3E3E' style={{marginLeft: 18, marginRight: 105}}/>
                </TouchableOpacity>
                <Text style={styles.title}>개인정보 설정</Text>
            </View>
            <View style={styles.contentBackground}>
                <View style={styles.box}>
                    <Text style={{fontSize: 18, width: '30%'}}>이름</Text>
                    <Text style={{fontSize: 18}}>홍길동</Text>
                </View>
                <View style={styles.box}>
                    <Text style={{fontSize: 18, width: '30%'}}>닉네임</Text>
                    <Text style={{fontSize: 18}}>두부</Text>
                </View>
                <View style={styles.box}>
                    <Text style={{fontSize: 18, width: '30%'}}>성별</Text>
                    <Text style={{fontSize: 18}}>두부</Text>
                </View>
                <View style={styles.box}>
                    <Text style={{fontSize: 18, width: '30%'}}>나이</Text>
                    <Text style={{fontSize: 18}}>21</Text>
                </View>
                <View style={styles.box}>
                    <Text style={{fontSize: 18, width: '30%'}}>학번</Text>
                    <Text style={{fontSize: 18}}>60213456</Text>
                </View>
                <View style={styles.box}>
                    <Text style={{fontSize: 18, width: '30%'}}>학과</Text>
                    <Text style={{fontSize: 18}}>경영학과</Text>
                </View>
                <View style={styles.box}>
                    <Text style={{fontSize: 18, width: '30%'}}>이메일</Text>
                    <Text style={{fontSize: 18, width: '47%'}}>abcdefg@gmail.com</Text>
                    <TouchableOpacity style={styles.rectifyButton}>
                        <Text>수정</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <Text style={{fontSize: 18, width: '30%'}}>비밀번호</Text>
                    <Text style={{fontSize: 18, width: '47%'}}>*******</Text>
                    <TouchableOpacity style={styles.rectifyButton}>
                        <Text>수정</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.explainBox}>
                    <Text style={{fontSize: 18, color: '#808080'}}>개인정보는 프로필에 표시되지 않으며 학생카드 정보는 명지대학교 마이아이웹에서 수정하실 수 있습니다.</Text>
                </View>
                <TouchableOpacity style={styles.shortcutButton}>
                    <Text style={{fontSize: 18}}>바로가기</Text>
                </TouchableOpacity>
                <View style={styles.widthdrawBox}>
                    <Text style={{fontSize: 18, color: '#B90000', marginRight: 230}}>서비스 탈퇴</Text>
                    <TouchableOpacity>
                        <Icon name="chevron-forward" size={30} color='#3E3E3E' style={{marginLeft: 18, marginRight: 105}}/>
                    </TouchableOpacity>
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
        fontSize: 20,
        fontWeight: 'bold'
    },
    box: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 40,
        paddingTop: 30
    },
    rectifyButton: {
        backgroundColor: '#BAC6D1',
        width: 60,
        height: 23,
        borderRadius: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    explainBox: {
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 50
    },
    shortcutButton: {
        backgroundColor: '#BAC6D1',
        width: 103,
        height: 33,
        borderRadius: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 40,
        marginTop: 20
    },
    widthdrawBox: {
        backgroundColor: '#BAC6D1',
        alignItems: 'stretch',
        height: 37,
        marginTop: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 40
    }
})