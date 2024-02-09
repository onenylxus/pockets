import { Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default LandingScreen = () => {
  const navigation = useNavigation();

  const onPress = (e) => {
    navigation.replace('Main');
  };

	return (
		<Pressable className="flex-1 items-center justify-center bg-zinc-100" onPress={onPress}>
			<Text>Landing Screen</Text>
		</Pressable>
	);
};