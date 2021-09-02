import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import Icon4 from 'react-native-vector-icons/Ionicons';
import OpenCancel from './OpenCancel';
import * as Font from 'expo-font';

export default class OpenInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isReady: false,
            openInfo: true,
        }
    }
    async componentDidMount() {
        Font.loadAsync({ 'BlackHanSans-Regular': require('./assets/fonts/BlackHanSans-Regular.ttf'), });
        this.setState({ isReady: true });
    }
    onPressCancel = () => {
        this.setState({ openInfo: false });
        OpenCancel.setState({ openCancel: true });
    }
    render() {
        if (this.state.isReady) {
            return (
                <View>
                    <Modal style={{
                        justifyContent: 'center',
                        alignContent: 'center'
                    }}
                        visible={this.state.openInfo}
                        transparent={true}
                        overlayBackground={'rgba(0, 0, 0, 0.85)'}
                        animationType="slide"
                        ModalDidClose={() => this.setState({ openInfo: false })}
                    >
                        <View style={styles.modalBackground}>
                            <View style={styles.modal}>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Icon4 name='ios-close-circle' size={30} color='black'
                                        onPress={() => this.setState({ openInfo: false })} />
                                </View>

                                <View style={{
                                    flex: 6,
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'white'
                                }}>
                                    <Text style={{
                                        fontFamily: 'BlackHanSans-Regular',
                                        color: 'black',
                                        fontSize: 30,
                                        marginBottom: 20,
                                        textAlign: 'center'
                                    }}>두부님의 프로필</Text>
                                    <View style={styles.imageContainer}>
                                        <Image style={styles.image} source={require('./assets/images/띵구_숟가락.png')} />
                                    </View>
                                    <Text style={{
                                        fontFamily: 'BlackHanSans-Regular',
                                        color: 'black', fontSize: 40, marginTop: 20, textAlign: 'center'
                                    }}>두부</Text>
                                </View>
                                <View style={{ flex: 1, backgroundColor: 'white' }}>
                                    <Text style={{
                                        fontFamily: 'BlackHanSans-Regular',
                                        color: 'black', fontSize: 25, marginTop: 20
                                    }}>#ESFP #영문과 #20학번</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'white', marginTop: 22 }}>
                                    <Text style={{
                                        fontFamily: 'BlackHanSans-Regular',
                                        color: 'black', fontSize: 25, marginRight: 20
                                    }}>식사시간</Text>
                                    <Text style={{
                                        fontSize: 20
                                    }}>13 : 00 ~ 14 : 00</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'white', marginBottom: 5 }}>
                                    <Text style={{
                                        fontFamily: 'BlackHanSans-Regular',
                                        color: 'black', fontSize: 25, marginRight: 20
                                    }}>세부사항</Text>
                                    <Text style={{
                                        fontSize: 20
                                    }}>초밥 좋아해요!      </Text>
                                </View>
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    marginBottom: 30
                                }}>
                                    <TouchableOpacity style={styles.button}
                                        onPress={() => this.onPressCancel}>
                                        <Text style={{ color: 'white', fontSize: 20 }}>약속 취소</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.button}
                                        onPress={() => this.setState({ openModify: true })}>
                                        <Text style={{ color: 'white', fontSize: 20 }}>수정하기</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal >
                    <OpenCancel />
                </View>

            )
        }
        else {
            return <View><Text>Loading...</Text></View>
        }
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#526285',
        padding: 5,
        borderRadius: 30,
        margin: 5,
        width: 120,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 190,
        height: 230,
        resizeMode: 'cover'
    },
    imageContainer: {
        width: 190,
        height: 190,
        borderRadius: 150,
        backgroundColor: '#BAC6D1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalBackground : {
        flex: 1,
        backgroundColor: 'rgba(0.71, 0.71, 0.85, 0.2)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal : {
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