import React from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default function MyProfileEdit() {
    return (
        <View style={styles.container}>
            <View style={styles.statusBarBackground}/>
            <View style = {styles.titleBackground}>
                <TouchableOpacity>
                    <Icon name="chevron-back" size={30} color='black' style={{marginRight: 80}}/>
                </TouchableOpacity>
                <Text style={styles.title}>프로필 편집</Text>
                <TouchableOpacity>
                    <Text style={{fontSize: 16, marginLeft: 80}}>완료</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contentBackground}>
                <Text style={{fontSize: 24, color: '#545454', fontWeight: 'bold', paddingTop: 32, paddingBottom: 32, paddingLeft: 25}}>당신을 표현하는 키워드는?</Text>
                
                <View style={{marginLeft: 20, marginBottom: 20}}>
                    <Text style={{fontSize: 16, marginLeft: 5}}>#MBTI</Text>
                    <View style={styles.buttonBox}>
                        <TouchableOpacity style={styles.button}>
                            <Text>ISTJ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>ISFJ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>ISTP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>ISFP</Text>
                        </TouchableOpacity><TouchableOpacity style={styles.button}>
                            <Text>INFP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>INTP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>INTJ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>INFJ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>ESFP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>ENFP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>ENTP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>ESTJ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>ESFJ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>ENFJ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>ENTJ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>ESTP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={{marginLeft: 20, marginBottom: 60}}>
                    <Text style={{fontSize: 16, marginLeft: 5}}>#소속</Text>
                    <View style={styles.buttonBox}>
                        <TouchableOpacity style={styles.button}>
                            <Text>인문대</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>사과대</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>경영대</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>법대</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>ICT융합대</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{marginLeft: 20}}>
                    <Text style={{fontSize: 16, marginLeft: 5}}>#취미</Text>
                    <View style={styles.buttonBox}>
                        <TouchableOpacity style={styles.button}>
                            <Text>그림</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>운동</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>독서</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>요리</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>영화</Text>
                        </TouchableOpacity><TouchableOpacity style={styles.button}>
                            <Text>음악</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>게임</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>맛집</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>낮잠</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>악기</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>등산</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>뮤지컬</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>동물</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>청소</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>댄스</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>봉사</Text>
                        </TouchableOpacity>
                    </View>
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
    buttonBox: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    button: {
        width: 80,
        height: 33,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#A5A5A5',
        borderWidth: 1,
        margin: 6,
        borderRadius: 10
    }
})