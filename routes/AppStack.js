import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '../screens/LandingScreen';
import MainTab from './MainTab';

export default AppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Landing" component={LandingScreen} />
			<Stack.Screen name="Main" component={MainTab} />
		</Stack.Navigator>
	);
};
