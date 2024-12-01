import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '@/components/TabBar';
import "../../global.css";



const TabLayout = () => {
  return (
    <Tabs
      tabBar={props=> <TabBar {...props} />}
    >
      <Tabs.Screen 
          name="home"
          options={{
            headerShown:false,
            title: "Home",
          }}
        />
        <Tabs.Screen
          name="location"
          options={{
            headerShown:false,
            title: "Location"
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            headerShown:false,
            title: "History"
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerShown:false,
            title: "Profile"
          }}
        />
    </Tabs>
  )
}

export default TabLayout