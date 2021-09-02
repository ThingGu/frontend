import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainOption from './MainOption';
import BabCard from './BabCard';

function HomeScreen() {
  return <MainOption />;
}

function AlarmScreen(){
  return <BabCard />;
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="name" component={HomeScreen} />
      <Tab.Screen name="Alarm" component={AlarmScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
