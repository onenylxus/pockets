import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

export const CircleButton = ({ onPress, iconName, ...props }) => {
  return (
    <Pressable
      className="flex h-16 w-16 flex-1 items-center justify-center rounded-full bg-teal-600"
      onPress={onPress}
      {...props}
    >
      <Ionicons name={iconName} size={36} color="#fafafa" />
    </Pressable>
  );
};
