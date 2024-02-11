import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, Text, View } from 'react-native';

export const SolidButton = ({ onPress, text, ...props }) => {
  return (
    <Pressable
      className="h-14 w-full rounded-full shadow-md shadow-zinc-950"
      onPress={onPress}
      {...props}
    >
      <View className="h-full">
        <LinearGradient
          className="h-full w-full items-center justify-center rounded-full"
          colors={['#0d9488', '#0f766e']}
        >
          <Text className="font-inter text-lg font-semibold text-teal-50">
            {text}
          </Text>
        </LinearGradient>
      </View>
    </Pressable>
  );
};
