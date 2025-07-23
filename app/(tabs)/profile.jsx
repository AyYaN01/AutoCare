import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, Switch, ScrollView, Alert } from "react-native";
import { AntDesign, Feather, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import LoginScreen from "../(auth)/sign-in";
import { getAuth, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseconfig";
import { router } from "expo-router";

const ProfileScreen = () => {
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const toggleNotificationSwitch = () => setIsNotificationEnabled(prev => !prev);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const user = auth.currentUser;
        if (!user) return;

        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setUsername(userDoc.data().username);
        } else {
          console.log("User document does not exist.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsername();
  }, []);

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to log out?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: () => {
          signOut(auth)
            .then(() => {
              router.replace("sign-in"); // Use navigation.navigate if using stack
            })
            .catch((error) => {
              console.error("Logout error:", error);
              Alert.alert("Error", "Failed to log out.");
            });
        },
      },
    ]);
  };

  return (
    <View className="flex-1 bg-primary px-1 pt-10">
      <View className="flex-row items-center mb-6">
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text className="text-white text-xl font-semibold ml-4">Profile</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="items-center mb-6">
          <Image
            source={{ uri: "https://via.placeholder.com/150" }}
            className="w-24 h-24 rounded-full mb-4"
          />
          <Text className="text-white text-lg font-semibold">
            {loading ? "Loading..." : username || "No username"}
          </Text>
          <Text className="text-gray-400 text-sm text-center mt-1">
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </Text>
          <TouchableOpacity className="flex-row items-center bg-red-500 px-4 py-2 rounded-full mt-4">
            <Text className="text-white text-sm font-medium mr-2">Edit</Text>
            <Feather name="edit" size={16} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Profile Menu */}
        <View className="bg-[#1E293B] rounded-lg divide-y divide-gray-700">
          <TouchableOpacity className="flex-row items-center justify-between px-4 py-4">
            <View className="flex-row items-center">
              <FontAwesome5 name="history" size={20} color="#22C55E" />
              <Text className="text-white text-base font-medium ml-4">History</Text>
            </View>
            <AntDesign name="right" size={18} color="#FFFFFF" />
          </TouchableOpacity>

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

          <TouchableOpacity className="flex-row items-center justify-between px-4 py-4">
            <View className="flex-row items-center">
              <Feather name="settings" size={20} color="#3B82F6" />
              <Text className="text-white text-base font-medium ml-4">Setting</Text>
            </View>
            <AntDesign name="right" size={18} color="#FFFFFF" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-between px-4 py-4">
            <View className="flex-row items-center">
              <MaterialIcons name="support-agent" size={20} color="#F59E0B" />
              <Text className="text-white text-base font-medium ml-4">Support</Text>
            </View>
            <AntDesign name="right" size={18} color="#FFFFFF" />
          </TouchableOpacity>

          {/* 🚪 Logout Button */}
          <TouchableOpacity
            onPress={handleLogout}
            className="flex-row items-center justify-between px-4 py-4"
          >
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
