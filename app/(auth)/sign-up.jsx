import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { auth } from "../../firebaseconfig"; 
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpScreen = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (!email || !password) {
      Alert.alert("Missing Info", "Please enter all fields");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up");
      router.push("/home"); // Navigate to home after signup
    } catch (error) {
      console.error("Signup error:", error.message);
      Alert.alert("Signup Error", error.message);
    }
  };

  return (
    <View className="flex-1 bg-primary px-6 pt-12">
      {/* Header: Login & Sign Up Tabs */}
      <View className="flex-row justify-center mb-10 pt-10">
        <TouchableOpacity 
          className="px-8 py-3 rounded-lg"
          onPress={() => router.push('/sign-in')}
        >
          <Text className="text-gray-500 text-lg font-sfsemibold">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-secondary px-8 py-3 rounded-lg">
          <Text className="text-white text-lg font-sfsemibold">Sign up</Text>
        </TouchableOpacity>
      </View>

      <Text className="text-center text-white text-2xl font-sfsemibold mb-2">
        Create an account
      </Text>
      <Text className="text-center text-gray-400 font-sfregular mb-8">
        Create your new account and find more service
      </Text>

      {/* Username Input */}
      <View className="mb-6">
        <Text className="text-white font-sfregular mb-2">User name</Text>
        <TextInput
          placeholder="User Name"
          placeholderTextColor="#737373"
          className="bg-[#1e293b] text-white rounded-lg px-4 py-3 h-16"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      {/* Email Input */}
      <View className="mb-6">
        <Text className="text-white font-sfregular mb-2">Email</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#737373"
          className="bg-[#1e293b] text-white rounded-lg px-4 py-3 h-16"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Password Input */}
      <View className="mb-6">
        <Text className="text-white font-sfregular mb-2">Password</Text>
        <View className="flex-row items-center justify-between bg-[#1e293b] rounded-lg px-4 py-3">
          <TextInput
            placeholder="●●●●●●●"
            placeholderTextColor="#737373"
            secureTextEntry={!isPasswordVisible}
            className="text-white flex-1"
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Feather
              name={isPasswordVisible ? "eye-off" : "eye"}
              size={20}
              color="#737373"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Sign-Up Button */}
      <TouchableOpacity onPress={handleSignUp} className="bg-secondary py-4 rounded-lg mb-8">
        <Text className="text-center text-white text-base font-sfsemibold">
          Sign up
        </Text>
      </TouchableOpacity>

      {/* Or Separator */}
      <View className="flex-row items-center mb-8">
        <View className="flex-1 h-px bg-gray-500"></View>
        <Text className="text-gray-500 font-sfregular mx-4">Or</Text>
        <View className="flex-1 h-px bg-gray-500"></View>
      </View>

      {/* Social Buttons */}
      <View className="flex-row justify-around mb-8">
        <TouchableOpacity className="flex-row items-center justify-center bg-[#1e293b] py-3 px-4 rounded-lg">
          <FontAwesome name="facebook" size={20} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center justify-center bg-[#1e293b] py-3 px-4 rounded-lg">
          <FontAwesome name="google" size={20} color="#DB4437" />
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View className="flex-row justify-center">
        <Text className="text-gray-500 font-sfregular">
          Already Have an Account?{" "}
        </Text>
        <TouchableOpacity onPress={() => router.push('/sign-in')}>
          <Text className="text-secondary font-sfsemibold">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;
