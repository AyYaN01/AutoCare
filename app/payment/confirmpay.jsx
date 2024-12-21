import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { FontAwesome, MaterialIcons, AntDesign } from '@expo/vector-icons';

const ConfirmPayScreen = () => {
  return (
    <ScrollView className="flex-1 bg-primary px-6 pt-8">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-8 pt-8">
              <TouchableOpacity>
                <AntDesign name="arrowleft" size={30} color="#FFFFFF" />
              </TouchableOpacity>
              <Text className="text-white text-3xl font-sfbold flex-1 text-center">Confirm Pay</Text>
      </View>

      {/* Service Section */}
      <View className="flex-row items-center mb-8">
        <View className="bg-yellow-500 rounded-full w-14 h-14 items-center justify-center">
          <FontAwesome name="cogs" size={28} color="white" />
        </View>
        <Text className="text-2xl font-bold text-white ml-5">Repair Service</Text>
      </View>

      {/* Information Section */}
      <View className="bg-gray-900 p-6 rounded-xl space-y-8">
        {/* Location */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center w-4/5">
            <FontAwesome name="map-marker" size={28} color="white" />
            <Text className="text-white ml-6 text-lg">
              2972 Westheimer Rd, Santa Ana, Illinois 85486
            </Text>
          </View>
          <TouchableOpacity>
            <MaterialIcons name="edit" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Date and Time */}
        <View className="flex-row items-center justify-between pt-10">
          <View className="flex-row items-center">
            <FontAwesome name="calendar" size={24} color="white" />
            <View className="ml-6">
              <Text className="text-white text-lg font-semibold">16 Jan 2023</Text>
              <Text className="text-white text-lg">12:00 PM</Text>
            </View>
          </View>
          <TouchableOpacity>
            <MaterialIcons name="edit" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Total Amount */}
        <View className="flex-row items-center justify-between pt-10">
          <View className="flex-row items-center">
            <FontAwesome name="dollar" size={28} color="white" />
            <Text className="text-white ml-6 text-lg font-semibold">
              Total Amount
            </Text>
          </View>
          <Text className="text-white text-2xl font-bold">$100</Text>
        </View>
      </View>

      {/* Confirm Button */}
      <View className="mt-16 mb-10">
        <TouchableOpacity className="bg-secondary rounded-lg py-4 shadow-lg">
          <Text className="text-center text-white text-xl font-sfbold">
            Confirm Pay
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ConfirmPayScreen;
