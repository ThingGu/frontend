import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Profile extends Component {
    static defaultProps = {
        profilePhoto: require('./assets/images/띵구_숟가락.png')
    }

    render() {
        return (

            <View style={styles.chatList}>
                <View style={styles.imageContainer}>
                    <View style={{position:'absolute'}}>  
                        <Image source={this.props.profilePhoto} style={styles.image} />
                    </View>
                </View>
                <View style={styles.chatInfo}>
                    <Text style={{ fontSize: 30 }, { marginBottom: 10 }}>{this.props.name}</Text>
                    <Text style={{ fontSize: 20 }, { marginTop: 10 }, { color: '#5E5E5E' }}> 채팅내용</Text>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    chatList: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#EAEEF2',
        marginBottom: 1,
        paddingTop : 10,
        paddingLeft : 10
    },
    chatInfo: {
        marginLeft : 10,
        paddingTop: 15
    },
    image: {
        width : '100%',
        height : '70%',
        resizeMode : 'cover',
        marginRight: 1
    },
    imageContainer: {
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: '#D8D8D8',
        paddingRight : 50
    }
});