import { Text, View } from 'react-native';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Pockets',
    });
  }, []);

	return (
		<View className="flex-1 items-center justify-center bg-zinc-100">
			<Text>Home Screen</Text>
		</View>
	);
};
