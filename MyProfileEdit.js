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
                <View style={{flex: 3, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 0.5, borderBottomColor: '#D6D5D5'}}>
                    <View style={styles.circle}>
                        <Image style={{
                            marginTop: 5,
                            height: '80%',
                            resizeMode: 'contain',
                            alignItems: 'center',
                            justifyContent: 'center'}}
                            source={require('./assets/dog.png')} />
                    </View>
                    <TouchableOpacity style={styles.cameraButton}>
                        <Icon name="camera" size={25}/>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 3, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 0.5, borderBottomColor: '#D6D5D5'}}>
                    <View style={{alignItems: 'flex-end', justifyContent: 'center', paddingRight: '15%'}}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{marginRight: 33, fontSize: 16}}>이름</Text>
                            <TextInput style={styles.input}/>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{marginRight: 33, fontSize: 16}}>소개</Text>
                            <TextInput style={styles.input}/>
                            <TouchableOpacity style={{position: 'absolute', bottom: '40%', left: '77%',}}>
                                <Icon name="add-circle" size={30} color={'#545454'}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{marginRight: 33, fontSize: 16}}>추가정보</Text>
                            <TextInput style={styles.input}/>
                        </View>
                        <TextInput style={styles.input}/>
                    </View>
                </View>
                <View style={{flex: 4}}>

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
    text: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold'
    },
    circle: {
        margin:15,
        width:165,
        height:165,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C4C4C4',
        borderRadius: 80
    },
    cameraButton: {
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        top: '70%',
        left: '60%',
        width: 35,
        height: 35,
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: 200,
        height: 20,
        color: 'black',
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#7A7A7A'
    },
    plusButton: {
        backgroundColor: '#626262',
        position: 'absolute',
        top: '15%',
        left: '65%',
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
})