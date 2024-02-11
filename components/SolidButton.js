import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, Text, View } from 'react-native';

export const SolidButton = ({ onPress, text, ...props }) => {
  return (
    <Pressable
      className="w-full h-14 rounded-full shadow-md shadow-zinc-950"
      onPress={onPress}
      {...props}
    >
      <View className="h-full">
        <LinearGradient
          className="w-full h-full rounded-full items-center justify-center"
          colors={['#0d9488', '#0f766e']}
        >
          <Text className="font-inter font-semibold text-lg text-teal-50">
            {text}
          </Text>
        </LinearGradient>
      </View>
    </Pressable>
  );
};
