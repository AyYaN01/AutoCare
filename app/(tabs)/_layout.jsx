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
            title: "Home",
          }}
        />
        <Tabs.Screen
          name="location"
          options={{
            title: "Location"
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            title: "History"
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile"
          }}
        />
    </Tabs>
  )
}

export default TabLayout