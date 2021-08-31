import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'


export default function BabCard() {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <View style = {styles.container}>
            <View style={styles.statusBarBackground}/>
            <View style = {styles.titleBackground}>
                <TouchableOpacity style={{position: 'absolute', left: '3%'}}>
                    <Icon name="chevron-back" size={30} color='black'/>
                </TouchableOpacity>
                <Text style={styles.title}>나의 식사 카드</Text>
            </View>
            <View style={styles.contentBackground}>
                <View style={styles.card}>
                    <Text style={{fontSize: 36, color:'#808080', fontWeight: 'bold', marginTop: 40}}>밥띵구</Text>
                    <View style={styles.circle}>
                        <Image style={{
                            marginTop: 5,
                            height: '80%',
                            resizeMode: 'contain',
                            alignItems: 'center',
                            justifyContent: 'center'}}
                            source={require('./assets/dog.png')} />
                    </View>
                    <Text style = {{fontSize: 25, fontWeight: 'bold',textAlign: 'center'}}> 두부 </Text>
                    <View style = {{flexDirection:'row', justifyContent: 'center', marginTop: 25}}>
                        <Text style = {{fontSize: 20, fontWeight: 'bold', color: '#7D7D7D'}}>식사시간 </Text>
                        <Text style = {{fontSize: 20, marginLeft: 20}}>13:00 ~14:00</Text>
                    </View>
                    <View style = {{flexDirection:'row', justifyContent: 'center', margin: 10}}>
                        <Text style = {{fontSize: 20, fontWeight: 'bold', color: '#7D7D7D'}}>세부사항 </Text>
                        <Text style = {{fontSize: 20, marginLeft: 20}}>초밥 좋아해요!</Text>
                    </View>
                    <View style = {{flexDirection:'row', justifyContent: 'center', margin: 10}}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{color: '#FFFFFF', fontSize: 22, fontWeight:'bold'}}>수정하기</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={()=> setModalOpen(true)}>
                            <Text style={{color: '#FFFFFF', fontSize: 22, fontWeight:'bold'}}>삭제하기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style = {styles.bottomMenuBackground}>
                <Text>하단 메뉴바</Text>
            </View>

            <Modal visible = {modalOpen} animationType = 'slide'
            transparent = {true}
            overlayBackground={'rgba(0, 0, 0, 0.15)'}>
                <View style = {styles.modalBackground}>
                    <View style = {styles.modalBox}>
                        <Text style = {{fontSize: 24, margin: 20, marginTop: 40}}>삭제하시겠습니까?</Text>
                        <View style = {{flexDirection:'row', justifyContent: 'center', margin: 10}}>
                            <TouchableOpacity style={styles.modalButton} onPress={()=> setModalOpen(false)}>
                                <Text style={{color: '#FFFFFF', fontSize: 22, fontWeight:'bold'}}>취소</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton} onPress={()=> setModalOpen(true)}>
                                <Text style={{color: '#FFFFFF', fontSize: 22, fontWeight:'bold'}}>확인</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentBackground: {
        flex: 17,
        backgroundColor: '#EAEEF2',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomMenuBackground: {
        flex: 2,
        backgroundColor: '#FFFFFF'
    },
    title: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold'
    },
    card: {
        backgroundColor: '#FFFFFF',
        margin: 25,
        width: "85%",
        height: "75%",
        alignItems: 'center',
        borderRadius: 30,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 2,
        shadowOffset: {height: 4, width: 4},
        shadowRadius: 2
    },
    circle: {
        marginTop: 30,
        marginBottom: 20,
        width: 170,
        height: 170,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C4C4C4',
        borderRadius: 100
    },
    button: {
        backgroundColor: '#526285',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: 120,
        height: 50,
        borderRadius: 80
    },
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0.71, 0.71, 0.71, 0.2)'
    },
    modalBox: {
        backgroundColor: '#FFFFFF',
        width: '70%',
        height: '20%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.15)',
        shadowOpacity: 2,
        shadowOffset: {height: 4, width: 4},
        shadowRadius: 2
    },
    modalButton: {
        backgroundColor: '#526285',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: 90,
        height: 40,
        borderRadius: 80
    }
});