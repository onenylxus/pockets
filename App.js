import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AppStack from './routes/AppStack';

export default App = () => {
	return (
    <>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
	);
};
