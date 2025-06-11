import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const PaymentScreen = ({navigation}) => {
  const [selectedPayment, setSelectedPayment] = useState("digital");

  return (
    <View className="flex-1 bg-primary px-6 pt-12">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-8 pt-8">
              <TouchableOpacity>
                <AntDesign name="arrowleft" size={30} color="#FFFFFF" />
              </TouchableOpacity>
              <Text className="text-white text-3xl font-sfbold flex-1 text-center">Payment</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="space-y-8">
        {/* Location Section */}
        <View>
          <Text className="text-gray-400 text-lg font-sfregular mb-4 mt-4">Your Current Location</Text>
          <View className="bg-[#1E293B] rounded-xl flex-row items-center p-6">
            <MaterialIcons name="location-pin" size={28} color="#FFFFFF" />
            <Text className="text-gray-300 text-base font-sfregular ml-4 leading-6">
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </Text>
          </View>
        </View>

        {/* Payment System */}
        <View>
          <Text className="text-gray-400 text-lg font-sfregular mb-4 pt-4">Payment System</Text>
          {/* Payment Options */}
                    <View className="space-y-6 pt-4">
                      {/* MasterCard */}
                      <TouchableOpacity
                        onPress={() => setSelectedPayment("digital")}
                        className={`flex-row items-center justify-between p-5 rounded-2xl border-hairline border-grey ${
                          selectedPayment === "digital" ? "bg-primary" : "bg-primary"
                        }`}
                      >
                        <View className="flex-row items-center space-x-4">
                          <MaterialIcons
                            name="payment"
                            color="white"
                            size={40}
                          />
                          <Text className="text-white text-xl pl-5 font-sfregular">Digital Pay</Text>
                        </View>
                        {selectedPayment === "digital" && (
                          <MaterialIcons name="radio-button-checked" size={28} color="#22C55E" />
                        )}
                      </TouchableOpacity>
          
                      {/* Visa Card */}
                      <TouchableOpacity
                        onPress={() => setSelectedPayment("cash")}
                        className={`flex-row items-center justify-between p-5 rounded-2xl border-hairline border-grey ${
                          selectedPayment === "cash" ? "bg-primary" : "bg-primary"
                        }`}
                      >
                        <View className="flex-row items-center space-x-4">
                          <MaterialCommunityIcons
                            name="cash-multiple"
                            size={40}
                            color="white"
                          />
                          <Text className="text-white text-xl pl-5 font-sfregular">Cash on Pay</Text>
                        </View>
                        {selectedPayment === "cash" && (
                          <MaterialIcons name="radio-button-checked" size={28} color="#22C55E" />
                        )}
                      </TouchableOpacity>
                    </View>
        </View>

        {/* Total Amount */}
        <View className="flex-row items-center justify-between mb-4 pt-4">
          <Text className="text-gray-400 text-xl font-sfsemibold">Total Amount</Text>
          <Text className="text-white text-3xl font-sfbold">$100</Text>
        </View>

        
      </ScrollView>
      {/* Pay Now Button */}
      <TouchableOpacity className="bg-red-500 py-5 rounded-lg items-center mb-8 shadow-lg"  onPress={()=> router.push('./digital')}>
          <Text className="text-white text-xl font-sfbold">Pay Now</Text>
        </TouchableOpacity>
    </View>
  );
};

export default PaymentScreen;
