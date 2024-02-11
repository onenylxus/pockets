import { Pressable, Text, View } from 'react-native';

export const BorderButton = ({ onPress, text, ...props }) => {
  return (
    <Pressable className="h-14 w-full" onPress={onPress} {...props}>
      <View className="h-full items-center justify-center rounded-full border border-teal-600">
        <Text className="font-inter text-lg font-semibold text-teal-600">
          {text}
        </Text>
      </View>
    </Pressable>
  );
};
