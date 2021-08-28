import React, { useState } from 'react';
import { CheckBox, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function Login() {
    const [isSelected, setSelection] = useState(false);
    //useState는 배열 반환 함수 0번째는 state의 현재 상태, 1번째는 set함수
    // 함수 컴포넌트에서만 호출 가능

    return (
        <View style={styles.container}>
            <View style = {{flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#142E65'}}>
                <Text style = {{top: '20%', fontWeight:'bold', fontSize: 20 ,color:'white'}}> 로그인</Text>
            </View>
            <View style={styles.inputBox}>
                <Text style={styles.text}>아이디</Text>
                <TextInput style={styles.input} />
                <Text style={styles.text}>비밀번호</Text>
                <TextInput style={styles.input} />
                <TouchableOpacity style={styles.button}>
                    <Text style = {{fontSize: 20}}>로그인</Text>
                </TouchableOpacity>
                <View style = {{ flexDirection:'row', justifyContent:'center'}}>
                    <Text style = {{color: '#939393'}}>자동 로그인</Text>
                    <CheckBox value={isSelected} 
                        onValueChange={setSelection}
                        style = {{
                            width: 15,
                            height: 15,
                            backgroundColor: '#DADADA',
                            borderWidth: 'none'
                        }} />
                </View>
                <TouchableOpacity>
                    <Text style = {{
                        fontSize: 15,
                        color: '#939393',
                        textAlign: 'center',
                        margin: 10
                    }}>비밀번호 찾기</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
// if CheckBox의 isSelected가 true이고, 로그인 버튼이 눌리는 이벤트가 발생했고, 로그인 정보가 맞으면 아이디와 비밀번호 저장
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B8D3D7'
    },
    inputBox: {
        flex: 7,
        backgroundColor: '#EAEEF2'
    },
    input: {
        backgroundColor: '#A4B9CD',
        height: '4%',
        width: '80%',
        margin: 10,
        color: 'white',
        borderRadius: 50,
        fontSize: 13,
        fontWeight: '500',
        alignSelf: 'center',
        textAlign:'center'
    },
    loginButtonContainer: {
        flex: 2
    },
    loginSaveContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#BAC6D1',
        alignSelf:'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        width: '60%',
        height: '7%',
        borderRadius: 65
    },
    text: {
        marginTop:20,
        fontStyle: 'normal',
        fontSize: 18,
        textAlign: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#B8D3D7'
    }
});