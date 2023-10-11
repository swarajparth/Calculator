import React from 'react';
import { Pressable, View, Image } from 'react-native';

const HistoryButton = ({ navigation }) => {
  return (
    <View className="flex items-end">
      <Pressable className="w-16 h-16 flex justify-center items-center rounded-full" onPress={() => navigation.navigate('History')}>
        <Image className="w-10 h-10"
          source={require('../assets/history.png')}
        />
      </Pressable>
    </View>
  )
}

export default HistoryButton
