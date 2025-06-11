import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons";

const HistoryScreen = () => {
  const historyData = [
    { id: 1, name: "Parts sells Service", shop: "120Ab38", date: "12 Jan 2023", icon: "tools" },
    { id: 2, name: "Flat Battery Service", shop: "120Ab38", date: "12 Jan 2023", icon: "bolt" },
    { id: 3, name: "Car Repair Service", shop: "120Ab38", date: "12 Jan 2023", icon: "cogs" },
    { id: 4, name: "Flat Tyre Service", shop: "120Ab38", date: "12 Jan 2023", icon: "car" },
    { id: 5, name: "Car Rent Service", shop: "120Ab38", date: "12 Jan 2023", icon: "car-alt" },
  ];

  return (
    <View className="flex-1 bg-[#0F172A] px-4 pt-10">
      {/* Header */}
      <View className="flex-row items-center mb-6">
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text className="text-white text-xl font-semibold ml-4">History</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Upcoming Section */}
        <View className="mb-6">
          <Text className="text-gray-400 text-lg font-semibold mb-4">Upcoming</Text>
          <View className="bg-[#1E293B] rounded-lg flex-row items-center justify-between px-4 py-3">
            <View>
              <Text className="text-white text-base font-semibold">Track your service</Text>
              <Text className="text-[#F59E0B] text-sm font-medium mt-1">Car Repair Service →</Text>
            </View>
            <TouchableOpacity className="bg-[#273444] p-3 rounded-full">
              <Feather name="settings" size={20} color="#F59E0B" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Previous Services Section */}
        <View>
          <Text className="text-gray-400 text-lg font-semibold mb-4">Previous</Text>
          {historyData.map((item) => (
            <View
              key={item.id}
              className="flex-row items-center justify-between bg-[#1E293B] rounded-lg px-4 py-3 mb-4"
            >
              <View className="flex-row items-center">
                <View className="bg-[#273444] p-3 rounded-full">
                  <FontAwesome5 name={item.icon} size={20} color="#F59E0B" />
                </View>
                <View className="ml-4">
                  <Text className="text-white text-base font-medium">{item.name}</Text>
                  <Text className="text-gray-500 text-sm mt-1">Shop no: {item.shop}</Text>
                </View>
              </View>
              <Text className="text-gray-500 text-sm">{item.date}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HistoryScreen;
