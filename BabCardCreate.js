import React  from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, Modal} from 'react-native';

export default function BabCardCreate() {
    return (
        <View style = {styles.container}>
            <View style = {{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style = {{top: '20%', fontWeight:'bold', fontSize: 20}}> 식사 카드 생성 </Text>
            </View>
            <View style = {styles.background}>
                <View>
                    
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    background: {
        flex: 7,
        backgroundColor: '#EAEEF2',
        alignItems: 'center',
        justifyContent: 'center'
    }
});