import { Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LandingScreen = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.replace('Main');
  };

  return (
    <Pressable
      className="flex-1 items-center justify-center bg-zinc-100"
      onPress={onPress}
    >
      <Text>Landing Screen</Text>
    </Pressable>
  );
};

export default LandingScreen;
