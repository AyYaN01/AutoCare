import React from "react";
import { View, Text, TouchableOpacity, Image, Switch, ScrollView } from "react-native";
import { AntDesign, Feather, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const ProfileScreen = () => {
  const [isNotificationEnabled, setIsNotificationEnabled] = React.useState(true);

  const toggleNotificationSwitch = () => setIsNotificationEnabled((previousState) => !previousState);

  return (
    <View className="flex-1 bg-primary px-1 pt-10">
      {/* Header */}
      <View className="flex-row items-center mb-6">
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text className="text-white text-xl font-semibold ml-4">Profile</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Information */}
        <View className="items-center mb-6">
          <Image
            source={{ uri: "https://via.placeholder.com/150" }} // Replace with the user's profile image URL
            className="w-24 h-24 rounded-full mb-4"
          />
          <Text className="text-white text-lg font-semibold">Denuyel</Text>
          <Text className="text-gray-400 text-sm text-center mt-1">
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </Text>
          <TouchableOpacity className="flex-row items-center bg-red-500 px-4 py-2 rounded-full mt-4">
            <Text className="text-white text-sm font-medium mr-2">Edit</Text>
            <Feather name="edit" size={16} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Profile Menu */}
        <View className="bg-[#1E293B]  rounded-lg divide-y divide-gray-700">
          {/* History */}
          <TouchableOpacity className="flex-row items-center justify-between px-4 py-4">
            <View className="flex-row items-center">
              <FontAwesome5 name="history" size={20} color="#22C55E" />
              <Text className="text-white text-base font-medium ml-4">History</Text>
            </View>
            <AntDesign name="right" size={18} color="#FFFFFF" />
          </TouchableOpacity>

          {/* Notification */}
          <View className="flex-row items-center justify-between px-4 py-4">
            <View className="flex-row items-center">
              <Feather name="bell" size={20} color="#F59E0B" />
              <Text className="text-white text-base font-medium ml-4">Notification</Text>
            </View>
            <Switch
              value={isNotificationEnabled}
              onValueChange={toggleNotificationSwitch}
              trackColor={{ false: "#374151", true: "#22C55E" }}
              thumbColor={isNotificationEnabled ? "#FFFFFF" : "#6B7280"}
            />
          </View>

          {/* Settings */}
          <TouchableOpacity className="flex-row items-center justify-between px-4 py-4">
            <View className="flex-row items-center">
              <Feather name="settings" size={20} color="#3B82F6" />
              <Text className="text-white text-base font-medium ml-4">Setting</Text>
            </View>
            <AntDesign name="right" size={18} color="#FFFFFF" />
          </TouchableOpacity>

          {/* Support */}
          <TouchableOpacity className="flex-row items-center justify-between px-4 py-4">
            <View className="flex-row items-center">
              <MaterialIcons name="support-agent" size={20} color="#F59E0B" />
              <Text className="text-white text-base font-medium ml-4">Support</Text>
            </View>
            <AntDesign name="right" size={18} color="#FFFFFF" />
          </TouchableOpacity>

          {/* Logout */}
          <TouchableOpacity className="flex-row items-center justify-between px-4 py-4">
            <View className="flex-row items-center">
              <AntDesign name="logout" size={20} color="#EF4444" />
              <Text className="text-white text-base font-medium ml-4">Logout</Text>
            </View>
            <AntDesign name="right" size={18} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
