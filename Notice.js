import React, {Component} from 'react';
import {StyleSheet, Text, View, Switch, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class Notice extends Component {
    constructor() {
        super();
        this.state = {
          switchOn1: false,
          switchOn2: false,
          switchOn3: false,
          switchOn4: false
        };
    }
    
    onPress1 = () => {
        this.setState({ switchOn1: !this.state.switchOn1 });
    }
    onPress2 = () => {
        this.setState({ switchOn2: !this.state.switchOn2 });
    }
    onPress3 = () => {
        this.setState({ switchOn3: !this.state.switchOn3 });
    }
    onPress4 = () => {
        this.setState({switchOn4: !this.state.switchOn4});
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.statusBarBackground}/>
                <View style = {styles.titleBackground}>
                    <TouchableOpacity>
                        <Icon name="chevron-back" size={30} color='black' style={{marginLeft: 18, marginRight: 140}}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>알림</Text>
                </View>
                <View style={styles.contentBackground}>
                    <View style={styles.box}>
                        <Text style={styles.text}>푸시 알림</Text>
                        <Switch trackColor={{ false: "#EAEEF2", true: "#526285" }}
                        ios_backgroundColor="#EAEEF2"
                        onValueChange={this.onPress1}
                        value={this.state.switchOn1}
                        style={{marginRight: 23}}/>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text}>채팅 알림</Text>
                        <Switch trackColor={{ false: "#EAEEF2", true: "#526285" }}
                        ios_backgroundColor="#EAEEF2"
                        onValueChange={this.onPress2}
                        value={this.state.switchOn2}
                        style={{marginRight: 23}}/>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text}>매칭 알림</Text>
                        <Switch trackColor={{ false: "#EAEEF2", true: "#526285" }}
                        ios_backgroundColor="#EAEEF2"
                        onValueChange={this.onPress3}
                        value={this.state.switchOn3}
                        style={{marginRight: 23}}/>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text}>경고 알림</Text>
                        <Switch trackColor={{ false: "#EAEEF2", true: "#526285" }}
                        ios_backgroundColor="#EAEEF2"
                        onValueChange={this.onPress4}
                        value={this.state.switchOn4}
                        style={{marginRight: 23}}/>
                    </View>
                </View>
                <View style = {styles.bottomMenuBackground}>
                    <Text>하단 메뉴바</Text>
                </View>
            </View>
        );
    }
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
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#D6D5D5'
    },
    text: {
        fontSize: 18,
        paddingLeft: 40
    }
});