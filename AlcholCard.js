import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function AlcholCard() {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <View style = {styles.container}>

                    <Modal visible = {modalOpen} animationType = 'slide'
            transparent = {true}
            overlayBackground={'rgba(0, 0, 0, 0.75)'}>
                <View style = {styles.modalContent}>
                    <MaterialIcons
                        name = 'close'
                        size={30}
                        onPress={()=> setModalOpen(false)}
                    />
                    <View style = {styles.success}>
                        <View style={{
                            width: 160,
                            height: 160,
                            backgroundColor: '#C4C4C4',
                            borderRadius:80,
                            margin: 10
                        }}>
                            <Image 
                                style={styles.images}
                                source={require('./assets/icon.png')} />
                        </View>
                        <Text style = {{fontSize: 30, fontWeight: 'bold',textAlign: 'center', margin: 20}}>'두부' 님과 {"\n"} 매칭 성공</Text>
                        <TouchableOpacity style={{backgroundColor: '#526285',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: 10,
                            width: '30%',
                            height: '10%',
                            borderRadius: 65}}>
                            <Text style={{color: '#FFFFFF', fontSize: 20, fontWeight:'bold'}}>채팅하기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <View style = {{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style = {{top: '20%', fontWeight:'bold', fontSize: 20}}> 술띵구 탐색 </Text>
            </View>
            <View style={styles.foodbackground}>
                <Text style = {{
                    fontSize: 30, fontWeight: 'bold', color: '#808080', marginTop: 20}}>마시는 중</Text>
                <Image 
                    style={{
                        flex:2,
                        position: 'absolute',
                        resizeMode: 'contain', height: '100%', top: 40,
                        zIndex:1
                    }}
                    source={require('./assets/favicon.png')} />    
            </View>
            <View style = {styles.background}>
                <View style = {styles.profile}>
                    <View style={{
                        width: 180,
                        height: 180,
                        backgroundColor: '#C4C4C4',
                        borderRadius:90,
                        margin: 40
                    }}>
                        <Image 
                            style={styles.images}
                            source={require('./assets/icon.png')} />
                        <Text style = {{fontSize: 25, fontWeight: 'bold',textAlign: 'center', margin: 20}}> 두부 </Text>
                        <View style = {{flexDirection:'row', justifyContent: 'center', margin:20}}>
                            <Text style = {styles.info}>#ESFP </Text>
                            <Text style = {styles.info}>#영문과 </Text>
                            <Text style = {styles.info}>#20학번 </Text>
                        </View>
                        <View style = {{flexDirection:'row', justifyContent: 'center', margin: 10}}>
                            <Text style = {styles.info}> 장소 </Text>
                            <Text style = {{fontSize: 20, marginLeft: 20}}>홍대</Text>
                        </View>
                        <View style = {{flexDirection:'row', justifyContent: 'center', margin: 10}}>
                            <Text style = {styles.info}>세부사항 </Text>
                            <Text style = {{fontSize: 20, marginLeft: 20}}>소주 좋아해요!</Text>
                        </View>
                        <View style = {{flexDirection:'row', justifyContent: 'center', margin: 10}}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={{color: '#FFFFFF', fontSize: 25, fontWeight:'bold'}}>숨김</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}
                            onPress={()=> setModalOpen(true)}>
                                <Text style={{color: '#FFFFFF', fontSize: 25, fontWeight:'bold'}}>매칭</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
        backgroundColor: '#BAC6D1',
        zIndex:-1
    },
    foodbackground: {
        flex:1.2,
        backgroundColor: '#EAEEF2',
        alignItems: 'center'
    },
    images: {
        width:'100%',
        height: '100%',
        resizeMode: 'contain'
    },
    profile: {
        backgroundColor: '#FFFFFF',
        margin: 25,
        height: "90%",
        alignItems: 'center',
        borderRadius:50,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOpacity: 2,
        shadowOffset: {height: 4, width: 4},
        shadowRadius: 2
    },
    info: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#7D7D7D'
    },
    button: {
        backgroundColor: '#526285',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: '90%',
        height: '70%',
        borderRadius: 65
    },
    modalContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0.71, 0.71, 0.71, 0.2)'
    },
    success: {
        backgroundColor: '#FFFFFF',
        width: 400,
        height: 400,
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOpacity: 2,
        shadowOffset: {height: 4, width: 4},
        shadowRadius: 2
    }
});