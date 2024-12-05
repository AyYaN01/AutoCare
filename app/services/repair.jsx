import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { AntDesign, MaterialIcons, FontAwesome5, Feather } from "@expo/vector-icons";

const RepairServiceScreen = () => {
  return (
    <View className="flex-1 bg-[#0F172A] px-4 pt-10">
      {/* Header */}
      <View className="flex-row items-center mb-6">
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text className="text-white text-xl font-semibold ml-4">Repair Service</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Service Image and Pricing */}
        <View className="bg-[#1E293B] rounded-xl overflow-hidden shadow-lg mb-6">
          <Image
            source={{
              uri: "https://via.placeholder.com/300x150", // Replace with your image URL
            }}
            className="w-full h-48"
            resizeMode="cover"
          />
          <View className="flex-row justify-between items-center px-4 py-3 bg-[#273444]">
            <Text className="text-white text-lg">Per Hour</Text>
            <Text className="text-white text-lg font-bold">$100</Text>
          </View>
        </View>

        {/* Service Description */}
        <View className="mb-6">
          <Text className="text-white text-lg font-bold mb-2">Service Description</Text>
          <View className="flex-row items-center mb-2">
            <FontAwesome5 name="user-alt" size={16} color="#737373" />
            <Text className="text-gray-500 text-sm ml-2">1605K Users</Text>
            <View className="flex-row items-center ml-4">
              <AntDesign name="star" size={16} color="#FBBF24" />
              <Text className="text-gray-500 text-sm ml-1">4.9</Text>
            </View>
          </View>
          <Text className="text-gray-400 leading-6">
            The Model B was a Ford automobile with production starting in 1932.
            It revolutionized the automotive industry with its reliable design and cost-effective build.
          </Text>
        </View>

        {/* Checkbox Option */}
        <View className="flex-row items-center mb-6">
          <TouchableOpacity className="w-6 h-6 border-2 border-gray-500 rounded-md justify-center items-center">
            <Feather name="check" size={16} color="#FFFFFF" /> {/* Add toggle logic */}
          </TouchableOpacity>
          <Text className="text-white ml-3">I need parts for my vehicle</Text>
        </View>

        {/* Emergency Vehicle Information */}
        <View className="mb-6">
          <Text className="text-white text-lg font-bold mb-4">Emergency Vehicle Information</Text>
          <View className="bg-[#1E293B] p-4 rounded-xl shadow-md">
            {/* Location Input */}
            <View className="flex-row items-center bg-[#273444] rounded-lg px-4 py-3 mb-4">
              <FontAwesome5 name="map-marker-alt" size={20} color="#737373" />
              <TextInput
                placeholder="Vehicle Location"
                placeholderTextColor="#737373"
                className="text-white flex-1 ml-3"
              />
              <TouchableOpacity>
                <Feather name="target" size={20} color="#EF4444" />
              </TouchableOpacity>
            </View>

            {/* Vehicle Model Input */}
            <View className="flex-row items-center bg-[#273444] rounded-lg px-4 py-3">
              <FontAwesome5 name="car" size={20} color="#737373" />
              <TextInput
                placeholder="Vehicle Model"
                placeholderTextColor="#737373"
                className="text-white flex-1 ml-3"
              />
            </View>
          </View>
        </View>

        {/* Book Now Button */}
        <TouchableOpacity className="bg-[#EF4444] rounded-lg py-4 shadow-lg">
          <Text className="text-white text-center text-lg font-bold">Book Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default RepairServiceScreen;
