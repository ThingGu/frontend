import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Profile from './Profile';
import * as Font from 'expo-font';

export default class Chatting extends Component {
    constructor(props) {
        super(props);
        this.state = { isReady: false };
    }
    async componentDidMount() {
        Font.loadAsync({ 'BlackHanSans-Regular': require('./assets/fonts/BlackHanSans-Regular.ttf'), });
        this.setState({ isReady: true });
    }

    render() {
        if (this.state.isReady) {
            return (
                <View style={styles.container}>
                    <View style={styles.topBar}>
                        <Text style={styles.topBartext}>채팅</Text>
                    </View>

                    <View style={styles.chatContainer}>
                        <Profile name={'띵구1'} />
                        <Profile name={'띵구3'} />
                        <Profile name={'띵구2'} />
                    </View>

                    <View style={styles.adv}>
                        <Text style={styles.advText}>광고배너</Text>
                    </View>

                    <View style={styles.footer}>
                        <Text>하단 메뉴바</Text>
                    </View>
                </View>
            );
        }
        else {
            return <View><Text>Loading...</Text></View>;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topBar: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 35
    },
    topBartext: {
        fontFamily: 'BlackHanSans-Regular',
        color: '#545454',
        fontSize: 35,
    },
    chatContainer: {
        flex: 8,
        backgroundColor: '#D8D8D8'
    },
    imageContainer: {
        borderRadius: 30,
        backgroundColor: '#5E5E5E'
    },
    adv: {
        flex: 1,
        backgroundColor: '#A4B9CD',
        justifyContent: 'center',
        alignItems: 'center'
    },
    advText: {
        fontFamily: 'BlackHanSans-Regular',
        color: 'white',
        fontSize: 30
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});