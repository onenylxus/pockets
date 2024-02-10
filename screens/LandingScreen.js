import { Pressable, SafeAreaView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LandingScreen = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.replace('Main');
  };

  return (
    <SafeAreaView className="flex flex-1 px-8 py-16 items-center justify-end bg-zinc-50">
      <Text className="font-inter font-bold text-4xl text-center leading-[38px] text-teal-600">
        Spend Smarter{'\n'}Save More
      </Text>
      <Pressable className="w-full h-14 mt-6" onPress={onPress}>
        <View className="flex h-14 rounded-full items-center justify-center bg-teal-600">
          <Text className="font-inter font-semibold text-teal-50">
            Get Started
          </Text>
        </View>
      </Pressable>
      <View className="flex mt-4 flex-row">
        <Text className="font-inter font-normal text-zinc-800">
          Already have an account?
        </Text>
        <Pressable className="ml-1" onPress={onPress}>
          <Text className="font-inter font-medium text-teal-600">Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LandingScreen;
