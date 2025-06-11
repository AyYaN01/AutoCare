import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import images from '../../assets/images';

const BookingSuccessScreen = () => {
  return (
    <View className="flex-1 bg-primary justify-center items-center px-6">
      {/* Image Section */}
      <Image
        source={images.booking}
        className="w-72 h-72 mb-12"
        resizeMode="contain"
      />

      {/* Text Section */}
      <Text className="text-2xl font-bold text-white text-center mb-4">
        Booking placed successfully
      </Text>
      <Text className="text-gray-400 text-lg text-center mb-12">
        Please check your email and enter your{'\n'}4 digit code
      </Text>

      {/* Buttons */}
      <TouchableOpacity className="bg-secondary w-full py-4 rounded-lg mb-6">
        <Text className="text-white text-xl text-center font-semibold">
          Go Track
        </Text>
      </TouchableOpacity>

      <TouchableOpacity className="border border-white w-full py-4 rounded-lg">
        <Text className="text-white text-xl text-center font-semibold">
          Back to Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookingSuccessScreen;
