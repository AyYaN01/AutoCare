import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Switch, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "react-native";
import images from "../../assets/images";

const AddCardScreen = () => {
  const [isSaveCardEnabled, setIsSaveCardEnabled] = useState(false);

  return (
    <View className="flex-1 bg-primary px-6 pt-14">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-8 pt-8">
              <TouchableOpacity>
                <AntDesign name="arrowleft" size={30} color="#FFFFFF" />
              </TouchableOpacity>
              <Text className="text-white text-3xl font-sfbold flex-1 text-center">Add Card</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Card Display */}
        <View className="bg-secondary rounded-2xl p-6 mb-8 shadow-lg">
          <View className="flex-row justify-between">
            <Text className="text-white text-2xl font-sfsemibold">Master Card</Text>
            <Image
              source={images.master}
              resizeMode="contain"
              className="w-10 h-10"
            />
          </View>

          <View className="mt-6 mb-4">
            <Text className="text-white text-xl tracking-widest">**** **** **** ****</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-200 text-base font-sfsemibold">Ayo</Text>
            <Text className="text-gray-200 text-base font-sfsemibold">15/36</Text>
          </View>
        </View>

        {/* Input Fields */}
        <View className="space-y-6">
          {/* Cardholder Name */}
          <View>
            <Text className="text-gray-400 font-sfregular mb-2">Cardholder Name</Text>
            <TextInput
              placeholder="Placeholder text"
              placeholderTextColor="#6B7280"
              className="bg-[#1E293B] text-white font-sfregular p-4 rounded-xl"
            />
          </View>

          {/* Card Number */}
          <View>
            <Text className="text-gray-400 mb-2 pt-2">Card Number</Text>
            <TextInput
              placeholder="Placeholder text"
              placeholderTextColor="#6B7280"
              keyboardType="numeric"
              className="bg-[#1E293B] text-white font-sfregular p-4 rounded-xl"
            />
          </View>

          {/* Expires and CVV */}
          <View className="flex-row justify-between space-x-4 pt-2">
            <View className="flex-1">
              <Text className="text-gray-400 mb-2">Expires</Text>
              <TextInput
                placeholder="01/27"
                placeholderTextColor="#6B7280"
                keyboardType="numeric"
                className="bg-[#1E293B] text-white w-32 font-sfregular p-4 rounded-xl"
              />
            </View>
            <View className="flex-1">
              <Text className="text-gray-400 mb-2">CVV</Text>
              <TextInput
                placeholder="CVV"
                placeholderTextColor="#6B7280"
                secureTextEntry
                keyboardType="numeric"
                className="bg-[#1E293B] text-white font-sfregular w-32 p-4 rounded-xl"
              />
            </View>
          </View>

          {/* Save Card Toggle */}
          <View className="flex-row items-center mt-4">
            <Switch
              value={isSaveCardEnabled}
              onValueChange={setIsSaveCardEnabled}
              thumbColor={isSaveCardEnabled ? "#22C55E" : "#6B7280"}
              trackColor={{ true: "#22C55E", false: "#1E293B" }}
            />
            <Text className="text-gray-400 font-sfregular ml-3">Save Card details for next time.</Text>
          </View>

          {/* Add Card Button */}
          <TouchableOpacity className="bg-secondary py-5 rounded-xl items-center shadow-lg mt-6">
            <Text className="text-white text-2xl font-sfbold">Add Card</Text>
          </TouchableOpacity>
        </View>

        <View className="mb-10" />
      </ScrollView>
    </View>
  );
};

export default AddCardScreen;
