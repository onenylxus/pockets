import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import WalletScreen from '../screens/WalletScreen';

export default MainTab = () => {
	const Tab = createBottomTabNavigator();

  const screenOptions = ({ route }) => ({
		headerShown: false,
		tabBarIcon: ({ focused }) => {
			let iconName = '';
			switch (route.name) {
				case 'Home':
					iconName = 'home';
					break;
				case 'Statistics':
					iconName = 'stats-chart';
					break;
				case 'Wallet':
					iconName = 'wallet';
					break;
				case 'Profile':
					iconName = 'person-circle';
					break;
			}
			if (!focused) {
				iconName += '-outline';
			}
			return <Ionicons name={iconName} />;
		}
	});

	return (
		<Tab.Navigator screenOptions={screenOptions}>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Statistics" component={StatisticsScreen} />
			<Tab.Screen name="Wallet" component={WalletScreen} />
			<Tab.Screen name="Profile" component={ProfileScreen} />
		</Tab.Navigator>
	);
};
