import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import images from '../../assets/images';
import { router } from "expo-router";


const digital = () => {
  const [selectedMethod, setSelectedMethod] = useState("MasterCard");

  return (
    <View className="flex-1 bg-primary px-6 pt-14">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-8 pt-8">
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={30} color="#FFFFFF" />
        </TouchableOpacity>
        <Text className="text-white text-3xl font-sfbold flex-1 text-center">Payment</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="space-y-8">
        {/* Current Location */}
        <View>
          <Text className="text-gray-400 text-lg font-sfregular mb-3">Your Current Location</Text>
          <View className="bg-[#1E293B] rounded-2xl flex-row items-center p-5 space-x-4">
            <MaterialIcons name="location-pin" size={30} color="#FFFFFF" />
            <Text className="text-gray-300 text-lg font-sfregular">
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </Text>
          </View>
        </View>

        {/* Payment Method */}
        <View>
          <View className="flex-row items-center justify-between mb-4 pt-4">
            <Text className="text-gray-400 text-lg font-sfregular">Payment Method</Text>
            <TouchableOpacity onPress={()=> router.push('./addcard')}>
              <Text className="text-secondary font-medium font-sfregular">Add new Card</Text>
            </TouchableOpacity>
          </View>

          {/* Payment Options */}
          <View className="space-y-6 pt-4">
            {/* MasterCard */}
            <TouchableOpacity
              onPress={() => setSelectedMethod("MasterCard")}
              className={`flex-row items-center justify-between p-5 rounded-2xl border-hairline border-grey ${
                selectedMethod === "MasterCard" ? "bg-primary" : "bg-primary"
              }`}
            >
              <View className="flex-row items-center space-x-4">
                <Image
                  source={images.master}
                  resizeMode="contain"
                  className="w-10 h-10"
                />
                <Text className="text-white text-xl pl-5 font-sfregular">Master Card</Text>
              </View>
              {selectedMethod === "MasterCard" && (
                <MaterialIcons name="radio-button-checked" size={28} color="#22C55E" />
              )}
            </TouchableOpacity>

            {/* Visa Card */}
            <TouchableOpacity
              onPress={() => setSelectedMethod("VisaCard")}
              className={`flex-row items-center justify-between p-5 rounded-2xl border-hairline border-grey ${
                selectedMethod === "VisaCard" ? "bg-primary" : "bg-primary"
              }`}
            >
              <View className="flex-row items-center space-x-4">
                <Image
                  source={images.visa}
                  resizeMode="contain"
                  className="w-10 h-10 "
                />
                <Text className="text-white text-xl pl-5 font-sfregular">Visa Card</Text>
              </View>
              {selectedMethod === "VisaCard" && (
                <MaterialIcons name="radio-button-checked" size={28} color="#22C55E" />
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Total Amount */}
        <View className="flex-row items-center justify-between pt-4">
          <Text className="text-gray-400 text-2xl font-sfsemibold">Total Amount</Text>
          <Text className="text-white text-4xl font-sfbold">$100</Text>
        </View>

      </ScrollView>
      {/* Pay Now Button */}
      <TouchableOpacity className="bg-secondary py-5 rounded-xl items-center shadow-lg mt-4 mb-8" onPress={()=>router.push("./confirmpay")}>
          <Text className="text-white text-2xl font-sfbold">Pay Now</Text>
        </TouchableOpacity>
    </View>
  );
};

export default digital;
