import { Pressable, SafeAreaView, Text, View } from 'react-native';
import { SolidButton } from '../components/SolidButton';
import { useNavigation } from '@react-navigation/native';
import TransferSvg from '../assets/transfer.svg';

export const LandingScreen = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.replace('Main');
  };

  return (
    <SafeAreaView className="flex flex-1 px-8 py-16 items-center justify-end bg-zinc-50">
      <TransferSvg width="80%" />
      <Text className="font-inter font-bold text-4xl text-center leading-[38px] text-teal-600">
        Spend Smarter{'\n'}Save More
      </Text>
      <SolidButton className="mt-6" onPress={onPress} text="Get Started" />
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
