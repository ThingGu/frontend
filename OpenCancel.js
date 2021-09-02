import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Icon4 from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import OpenDirectlyInputCancel from './OpenDirectlyInputCancel';
import * as Font from 'expo-font';

export default class OpenCancel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isReady: false,
            openCancel: true,
            openDirectlyInputCancel: false
        }
    }
    async componentDidMount() {
        Font.loadAsync({ 'BlackHanSans-Regular': require('./assets/fonts/BlackHanSans-Regular.ttf'), });
        this.setState({ isReady: true });
    }
    render() {
        if (this.state.isReady) {
            return (
                <View style={{flex:1}}>
                <OpenDirectlyInputCancel/>
                <Modal 
                    visible={this.state.openCancel}
                    transparent={true}
                    animationType="slide"
                    ModalDidColose={() => this.setState({ openCacel: false })}>
                    <View style={styles.modalBackground}>
                        <View style={styles.modal}>
                            <View style={styles.top}>
                                <TouchableOpacity onPress={() => null}>
                                    <Icon1 name='left' size={30} color='black' />
                                </TouchableOpacity>
                                <Text style={styles.topBartext}>약속 취소 사유</Text>
                                <TouchableOpacity onPress={() => this.setState({ openCancel: false })}>
                                    <Icon4 name='ios-close-circle' size={30} color='black' />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.middle}>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.text}>급한 일정이 생겼어요</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.text}>시간이 부족해요</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.text}>식사 시간이 바뀌었어요</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.text}>먹고 싶은 메뉴가 바뀌었어요</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.text}>단순 변심</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button}
                                    onPress={() => this.setState({ openDirectlyInputCancel: true })}>
                                    <Text style={styles.text}>직접 입력</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </Modal>
                </View>


            )
        }
        else {
            return <View><Text>Loading...</Text></View>;
        }
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#BAC6D1',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius: 30,
        padding: 10,
        marginBottom : 20,
        width : 250,
        height : 50
    },
    top: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        top : '5%',
        marginBottom : 40
    },
    middle: {
        flex: 10,
        backgroundColor: 'white',
        margin: 10,
        justifyContent: 'center'
    },
    topBartext: {
        fontFamily: 'BlackHanSans-Regular',
        color: '#545454',
        fontSize: 30,
        marginLeft : 30,
        marginRight : 30
    },
    text : {
        textAlign : 'center',
        fontSize : 20
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        backgroundColor: '#FFFFFF',
        width: '80%',
        height: '70%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.15)',
        shadowOpacity: 2,
        shadowOffset: { height: 2, width: 2 },
        shadowRadius: 2
    }

})