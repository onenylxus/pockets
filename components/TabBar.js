import { CircleButton } from './CircleButton';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';

export const TabBar = ({ state, descriptors, navigation, ...props }) => {
  const onCirclePress = () => {
    navigation.navigate('Add Transaction');
  };

  return (
    <>
      <View
        className="absolute flex bottom-0 w-full h-20 bg-zinc-50 flex-row justify-evenly items-center space-x-8"
        style={{ elevation: 8 }}
        {...props}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

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
          if (!isFocused) {
            iconName += '-outline';
          }

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const isSpacing = state.index === 0 && index === 1;
          return (
            <TouchableOpacity
              className={`flex justify-center items-center ${isSpacing && 'mr-16'}`}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              key={route.name}
            >
              <View>
                <Ionicons
                  name={iconName}
                  size={36}
                  color={isFocused ? '#0d9488' : '#a1a1aa'}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      {state.index === 0 && (
        <View className="absolute flex bottom-12 w-full items-center">
          <CircleButton onPress={onCirclePress} iconName="add" />
        </View>
      )}
    </>
  );
};
