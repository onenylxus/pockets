import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

export const CircleButton = ({ onPress, iconName, ...props }) => {
  return (
    <Pressable
      className="flex w-16 h-16 rounded-full justify-center items-center flex-1 bg-teal-600"
      onPress={onPress}
      {...props}
    >
      <Ionicons name={iconName} size={36} color="#fafafa" />
    </Pressable>
  );
};
