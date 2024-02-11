import { Pressable, Text, View } from 'react-native';

export const BorderButton = ({ onPress, text, ...props }) => {
  return (
    <Pressable className="w-full h-14" onPress={onPress} {...props}>
      <View className="h-full border border-teal-600 rounded-full items-center justify-center">
        <Text className="font-inter font-semibold text-lg text-teal-600">
          {text}
        </Text>
      </View>
    </Pressable>
  );
};
