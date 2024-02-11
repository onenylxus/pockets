import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { StatisticsScreen } from '../screens/StatisticsScreen';
import { TabBar } from '../components/TabBar';
import { WalletScreen } from '../screens/WalletScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export const MainTab = () => {
  const Tab = createBottomTabNavigator();

  const screenOptions = () => ({
    headerShown: false,
  });

  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={screenOptions}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Statistics" component={StatisticsScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
