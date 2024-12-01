import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { Feather, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import images from '../../assets/images';


const Home = () => {
  return (
    <View className="flex-1 bg-primary px-4 pt-10">
      {/* Greeting Header */}
      <View className="flex-row items-center justify-between mb-4">
        <View>
          <Text className="text-white text-lg font-sfregular">Welcome,</Text>
          <Text className="text-white text-2xl font-sfsemibold">Ayo</Text>
        </View>
        <TouchableOpacity>
          <MaterialCommunityIcons name="bell-outline" size={28} color="#ffffff" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center bg-[#1e293b] rounded-lg px-4 py-2 mb-6">
        <Feather name="search" size={20} color="#737373" />
        <TextInput
          placeholder="Find your need service..."
          placeholderTextColor="#737373"
          className="text-white flex-1 ml-2"
        />
        <TouchableOpacity>
          <Feather name="filter" size={20} color="#737373" />
        </TouchableOpacity>
      </View>

      {/* Discount Banner */}
      <View className="bg-secondary rounded-xl p-4 mb-6 relative">
        <Text className="text-white text-xl font-sfsemibold">We provide</Text>
        <Text className="text-white text-3xl font-sfbold mb-2">20% DISCOUNT</Text>
        <TouchableOpacity>
          <Text className="text-white underline font-sfregular">Explore Now</Text>
        </TouchableOpacity>
        <View className="absolute right-4 top-4 flex-row">
          <Image
            source={images.discount} // Replace with image URL
            className="w-24 h-24 rounded-full"
          />
        </View>
      </View>

      {/* Categories */}
      <View className="flex-row justify-between mb-6">
        <TouchableOpacity className="flex-1 bg-secondary rounded-lg items-center py-3 mr-2">
          <FontAwesome name="briefcase" size={24} color="white" />
          <Text className="text-white mt-2 font-sfregular">Services</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 bg-[#1e293b] rounded-lg items-center py-3 ml-2">
          <Feather name="shopping-cart" size={24} color="white" />
          <Text className="text-white mt-2 font-sfregular">Selling</Text>
        </TouchableOpacity>
      </View>

      {/* Vehicle Services */}
      <Text className="text-white text-xl font-sfsemibold mb-4">Vehicle Services</Text>
      <ScrollView>
        <View className="flex-row flex-wrap justify-between">
          {/* Example Service Card */}
          {[
            { title: "Repair Service", icon: "tools", key: "repair" },
            { title: "Flat Tyre Service", icon: "car", key: "flat" },
            { title: "Flat Battery", icon: "battery-alert", key: "battery" },
            { title: "Wash Service", icon: "car-wash", key: "wash" },
            { title: "Recovery Service", icon: "tow-truck", key: "recovery" },
            { title: "Oil Change", icon: "oil", key: "oil" },
          ].map((service) => (
            <TouchableOpacity
              key={service.key}
              className="bg-[#1e293b] rounded-lg w-[48%] mb-4 p-4"
            >
              <MaterialCommunityIcons
                name={service.icon}
                size={28}
                color="#ef4444"
                className="mb-2"
              />
              <Text className="text-white text-base font-sfsemibold">{service.title}</Text>
              <Text className="text-gray-500 text-sm mt-1font-sfregular">24/7</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
