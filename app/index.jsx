import {  Text, View } from 'react-native'
import { StatusBar } from 'react-native'
import { Redirect,router } from 'expo-router'
import "../global.css";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { Image } from 'react-native';
import images from '../assets/images';
import CustomButtom from '../components/CustomButtom';

const index = () => {

  return (
    <SafeAreaView className = 'bg-primary h-full'>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="w-full items-center min-h-[85vh] px-4">
          <Image
            source={images.Header}
            className="object-top w-[441px] h-[439px]"
            resizeMode='contain'
          />
          <Image
            source={images.icon}
            className= "w-[100px] h-[74px]"
            resizeMode='contain'
          />
          <View className= "relative mt-5">
            <Text className= "text-3xl font-sfbold text-white">
                Have any Problems with your car?
            </Text>
          </View>
          <Text className="mt-3 font-sfregular text-white text-center">
          If you have any problems with your car please contact us. And we'll get you working ASAP.
          </Text>
          <CustomButtom 
            title="Getting Started"
            handlePress= {()=> router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />

        </View>

      </ScrollView>
      <StatusBar 
        backgroundColor='#08041D'
        style='light'
      />

    </SafeAreaView>
  )
}

export default index
