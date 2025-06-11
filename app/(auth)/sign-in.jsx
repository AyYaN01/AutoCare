import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
<<<<<<< HEAD
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { router, Link } from "expo-router";
import { auth } from "../../firebaseconfig"; // 🔄 Adjust path if needed
import { signInWithEmailAndPassword } from "firebase/auth";
=======
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { router,Link } from "expo-router";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
>>>>>>> 6113913c270dd4c9e25d6832af71b6cfbe97f2e8

const { width } = Dimensions.get("window");

const LoginScreen = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
<<<<<<< HEAD
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in");
      router.push("../home"); // 🚀 Navigate to home on success
    } catch (error) {
      console.error("Login error:", error.message);
      alert(error.message); // Show error to user
    }
  };
=======
>>>>>>> 6113913c270dd4c9e25d6832af71b6cfbe97f2e8

  return (
    <SafeAreaView className="flex-1 bg-primary px-6 pt-12">
      <ScrollView>
<<<<<<< HEAD
        {/* Toggle Header for Login and Signup */}
        <View className="flex-row justify-center mb-10 pt-10">
          <TouchableOpacity className="bg-secondary px-8 py-3 rounded-lg">
            <Text className="text-white text-lg font-sfsemibold">Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="px-8 py-3 rounded-lg"
            onPress={() => router.push("/sign-up")}
          >
            <Text className="text-gray-500 text-lg font-sfsemibold">Sign up</Text>
          </TouchableOpacity>
        </View>

        {/* Login Text */}
        <Text className="text-center text-white text-2xl font-sfbold mb-2">
          Let's log you in
        </Text>
        <Text className="text-center text-gray-400 font-sfregular mb-8">
          Welcome back. You've been missed!
        </Text>

        {/* Email Input */}
        <View className="mb-6">
          <Text className="text-white font-sfregular mb-2">Email</Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#737373"
            className="bg-[#1e293b] text-white font-sfregular rounded-lg h-16 px-4 py-3"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
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
              className="text-white font-sfregular flex-1"
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

        <TouchableOpacity className="mb-8">
          <Text className="text-[#ef4444] font-medium font-sfregular text-right">
            Forget password?
          </Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          onPress={handleLogin}
          className="bg-[#ef4444] py-4 rounded-lg mb-8"
        >
          <Text className="text-center text-white text-base font-sfsemibold">
            Login
          </Text>
        </TouchableOpacity>

        {/* OR Separator */}
        <View className="flex-row items-center mb-8">
          <View className="flex-1 h-px bg-gray-500"></View>
          <Text className="text-gray-500 text-sm mx-4">Or</Text>
          <View className="flex-1 h-px bg-gray-500"></View>
        </View>

        {/* Sign Up Footer */}
        <View className="flex-row justify-center">
          <Text className="text-gray-500 font-sfregular">
            Don't Have an Account?{" "}
          </Text>
          <TouchableOpacity>
            <Link href={"/sign-up"} className="text-[#ef4444] font-semibold">
              Sign Up
            </Link>
          </TouchableOpacity>
        </View>
=======
      {/* Toggle Header for Login and Signup */}
      <View className="flex-row justify-center mb-10 pt-10">
        <TouchableOpacity className="bg-secondary px-8 py-3 rounded-lg" >
          <Text className="text-white text-lg font-sfsemibold">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-8 py-3 rounded-lg" onPress={()=> router.push('/sign-up')}>
          <Text className="text-gray-500 text-lg font-sfsemibold">Sign up</Text>
        </TouchableOpacity>
      </View>

      {/* Login Form */}
      <Text className="text-center text-white text-2xl font-sfbold mb-2">
        Let's log you in
      </Text>
      <Text className="text-center text-gray-400 font-sfregular mb-8">
        Welcome back You've been missed!
      </Text>

      {/* Email Input */}
      <View className="mb-6">
        <Text className="text-white font-sfregular mb-2">Email</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#737373"
          className="bg-[#1e293b] text-white font-sfregular rounded-lg h-16 px-4 py-3"
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
            className="text-white font-sfregular flex-1"
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

      <TouchableOpacity className="mb-8">
        <Text className="text-[#ef4444] font-medium font-sfregular text-right">
          Forget password?
        </Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity onPress={()=> router.push('../home')} className="bg-[#ef4444] py-4 rounded-lg mb-8">
        <Text className="text-center text-white text-base font-sfsemibold">
          Login
        </Text>
      </TouchableOpacity>

      {/* OR Separator */}
      <View className="flex-row items-center mb-8">
        <View className="flex-1 h-px bg-gray-500"></View>
        <Text className="text-gray-500 text-sm mx-4">Or</Text>
        <View className="flex-1 h-px bg-gray-500"></View>
      </View>

      {/* Sign Up Footer */}
      <View className="flex-row justify-center">
        <Text className="text-gray-500 font-sfregular">Don't Have an Account? </Text>
        <TouchableOpacity >
          <Link href={"/sign-up"} className="text-[#ef4444] font-semibold">Sign Up</Link>
        </TouchableOpacity>
      </View>
>>>>>>> 6113913c270dd4c9e25d6832af71b6cfbe97f2e8
      </ScrollView>
    </SafeAreaView>
  );
};

<<<<<<< HEAD
export default LoginScreen;
=======
export default LoginScreen;
>>>>>>> 6113913c270dd4c9e25d6832af71b6cfbe97f2e8
