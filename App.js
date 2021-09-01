import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainOption from './MainOption';
import BabCard from './BabCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return <MainOption />;
}

function AlarmScreen(){
  return <BabCard />;
}

function MyTabs() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === '홈') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === '알림'){
              iconName = focused ? 'bell' : 'bell-outline';
            } else if (route.name === '채팅'){
              iconName = focused ? 'message-processing' : 'message-processing-outline';
            }
            else if (route.name === '프로필'){
              iconName = focused ? 'account-circle' : 'account-circle-outline';
            }
            // You can return any component that you like here!
            return <Icon name={iconName} size={size}  color={color}/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen name="홈" component={HomeScreen} />
        <Tab.Screen name="알림" component={AlarmScreen} />
        <Tab.Screen name="채팅" component={HomeScreen} />
        <Tab.Screen name="프로필" component={AlarmScreen} />
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
