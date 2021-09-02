import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import RNPickerSelect from 'react-native-picker-select';

export default class SearchBob extends Component {
  constructor() {
    super();

    this.inputRefs = {};

    this.state = {
      selectedButton: '',

      checked: false,

      food: undefined,
      items: [
        { label: '한식', value: 'korea' },
        { label: '일식', value: 'japan' },
        { label: '중식', value: 'china' },
        { label: '양식', value: 'america' }
      ],
      major: undefined,
      items2: [
        { label: '국어국문학과', value: 'korean' },
        { label: '경영학과', value: 'business' },
        { label: '융합소프트웨어학부', value: 'software' },
        { label: '청소년지도학과', value: 'youth' }
      ],

      sex: undefined
    };
  }

  setChecked(curCheck) {
    this.setState(() => {
      return {checked: !curCheck};
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>밥띵구 탐색</Text>
        </View>

        <View style={styles.contents}>

          <View style={{marginTop: 50}}>
            <Text style={styles.texts}>음식 카테고리</Text>
            <RNPickerSelect 
              placeholder={{
                label: '모든 음식보기',
                value: null,
              }}
              items={this.state.items}
              onValueChange={(value) => {
                this.setState({
                  food: value,
                });
              }}
              
              style={{ ...pickerSelectStyles }}
              value={this.state.food}
              ref={(el) => {
                  this.inputRefs.picker = el;
              }}
            />
          </View>

          <View>  
            <Text style={styles.texts}>성별</Text>
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={[styles.button,
                {backgroundColor: this.state.selectedButton === 'male' ? '#A4B9CD' : '#fff'}]}
                onPress={() => this.setState({selectedButton: 'male'})}>
                <Text style={styles.buttonText}>남</Text>
              </TouchableOpacity>          
              <TouchableOpacity
              style={[styles.button,
                {backgroundColor: this.state.selectedButton === 'female' ? '#A4B9CD' : '#fff'}]}
                onPress={() => this.setState({selectedButton: 'female'})}>
                <Text style={styles.buttonText}>여</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.texts}>학과</Text>
            <RNPickerSelect 
              placeholder={{
                label: '모든 학과보기',
                value: null,
              }}
              items={this.state.items2}
              onValueChange={(value) => {
                this.setState({
                  major: value,
                });
              }}
              style={{ ...pickerSelectStyles }}
              value={this.state.major}
              ref={(el) => {
                  this.inputRefs.picker = el;
              }}
            />
          </View>

          <TouchableOpacity onPress={()=> this.setChecked(this.state.checked)} style={styles.CheckBoxContainer}>
            <View style={styles.CheckBoxHolder}>
              {
              (this.state.checked) ? (
                <View style={styles.checkIcon} />
              ) : null
              }
            </View>
            <Text style={styles.checkText}>다음 설정을 저장합니다.</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={styles.match}>
            <Text style={styles.matchText}>매칭</Text>
          </TouchableOpacity>
            
        </View>

        <View style = {styles.container}>
          <Text>하단 메뉴바</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  title: {
    flex: 2.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 25,
    color: '#000000',
    margin: 10
  },
  contents: {
    flex: 20,
    backgroundColor: '#EAEEF2',
    alignItems: 'flex-start',
    paddingLeft: 80,
  },

  texts: {
    fontSize: 18,
    padding: 10,
    marginTop: 10
  },
  button: {
    height: 40,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 70,
    marginRight: 10,
    backgroundColor: '#fff'
  },
  buttonText: {
    fontSize: 16
  },
  CheckBoxContainer: {
    flexDirection: 'row',
    marginTop: 100
  },
  CheckBoxHolder: {
    height: 25,
    width: 25,
    backgroundColor: '#BAC6D1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkIcon: {
    height: 15,
    width: 15,
    backgroundColor: '#526285',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkText: {
    fontSize: 18,
    paddingLeft: 15
  },
  match: {
    width: 130,
    height: 40,
    backgroundColor: '#526285',
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 60,
    marginTop: 30
  },
  matchText: {
    fontSize: 24,
    color: '#fff',
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
      fontSize: 16,
      paddingLeft: 30,
      borderColor: 'gray',
      borderRadius: 70,
      backgroundColor: 'white',
      color: 'black',
      marginVertical: 5,
      height: 40,
      width: 250,
  },
});