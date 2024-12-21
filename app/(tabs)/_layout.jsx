import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import  ColorfulTabBar from '../ColorfulTabBar/ColorfulTabBar';
import Icon from 'react-native-vector-icons/AntDesign';
import home from './home'
import location from './location'
import history from './history'
import profile from './profile'
import { Entypo, FontAwesome } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();


const App = () => {
  return (
    
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={(props) => <ColorfulTabBar {...props} />}
      >
        <Tab.Screen
          name="Home"
          component={home}
          options={{
            headerShown: false,
            title: 'Home',
            icon: ({ focused, color, size }) => (
              <Entypo name="home" size={size} color={color} />
            ),
            color: 'primary',
          }}
        />
        <Tab.Screen
          name="location"
          component={location}
          options={{
            headerShown: false,
            title: 'location',
            icon: ({ focused, color, size }) => (
              <Entypo name="location-pin" size={size} color={color} />
            ),
            color: 'primary',
          }}
        />
        <Tab.Screen
          name="history"
          component={history}
          options={{
            headerShown: false,
            title: 'history',
            icon: ({ focused, color, size }) => (
              <FontAwesome name="history" size={size} color={color} />
            ),
            color: 'primary',
          }}
        />
        <Tab.Screen
          name="profile"
          component={profile}
          options={{
            headerShown: false,
            title: 'profile',
            icon: ({ focused, color, size }) => (
              <FontAwesome name="user" size={size} color={color} />
            ),
            color: 'primary',
          }}
        />
      </Tab.Navigator>
    
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});