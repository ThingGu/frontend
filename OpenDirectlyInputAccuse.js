import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Icon4 from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import * as Font from 'expo-font';


export default class OpenDirectlyInputAccuse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isReady: false,
            openDirectlyInputAccuse: false
        }
    }
    async componentDidMount() {
        Font.loadAsync({ 'BlackHanSans-Regular': require('./assets/fonts/BlackHanSans-Regular.ttf'), });
        this.setState({ isReady: true });
    }
    render() {
        if (this.state.isReady) {
            return (
                <Modal
                    visible={this.state.openDirectlyInputAccuse}
                    transparent={true}
                    animationType="slide"
                    ModalDidColose={() => this.setState({ openDirectlyInputAccuse: false })}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.modalBackground}>
                            < KeyboardAvoidingView style={styles.modal}>
                                <View style={styles.top}>
                                    <TouchableOpacity onPress={() => null}>
                                        <Icon1 name='left' size={30} color='black' />
                                    </TouchableOpacity>
                                    <Text style={styles.topBartext}>신고 사유</Text>
                                    <TouchableOpacity onPress={() => this.setState({ openDirectlyInputAccuse: false })}>
                                        <Icon4 name='ios-close-circle' size={30} color='black' />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.middle}>
                                    <TextInput style={styles.textInput} placeholder={'신고 사유를 입력해주세요'}></TextInput>
                                </View>

                                <View style={styles.foot}>
                                    <TouchableOpacity style={{
                                        backgroundColor: '#526285',
                                        borderRadius: 20,
                                        width: 80,
                                        height: 40,
                                        justifyContent: 'center'
                                    }}
                                    onPress={() => this.setState({ openDirectlyInputAccuse: false })}>
                                        <Text style={{
                                            fontFamily: 'BlackHanSans-Regular',
                                            color: 'white',
                                            textAlign: 'center',
                                            fontSize: 20
                                        }}>완료</Text>
                                    </TouchableOpacity>
                                </View>
                            </ KeyboardAvoidingView>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            )
        }
        else {
            return <View><Text>Loading...</Text></View>;
        }
    }
}

const styles = StyleSheet.create({
    topBartext: {
        fontFamily: 'BlackHanSans-Regular',
        color: '#545454',
        fontSize: 30,
        marginLeft: 60,
        marginRight: 60
    },
    top: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        top : '5%'
    },
    middle: {
        flex: 5,
        backgroundColor: 'white',
        margin: 10,
        justifyContent: 'center'
    },
    textInput: {
        backgroundColor: '#EAEEF2',
        height: '90%',
        width: 250
    },
    foot: {
        flex: 1,
        marginBottom: 70,
        justifyContent : 'center',
        alignItems : 'center'
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0.71, 0.71, 0.85, 0.2)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        backgroundColor: '#FFFFFF',
        width: '80%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.15)',
        shadowOpacity: 2,
        shadowOffset: { height: 2, width: 2 },
        shadowRadius: 2
    }
})