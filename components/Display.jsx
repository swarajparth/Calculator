import React, { useRef } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

const Display = () => {
  const scrollViewRef = useRef(null);

  const expression = useSelector(state => state.calculation.expression);
  const result = useSelector(state => state.calculation.result);

  return (
    <View className="my-16 flex items-end">
      {
        expression.length ?
          <ScrollView ref={scrollViewRef} onContentSizeChange={() => { scrollViewRef.current?.scrollToEnd() }} horizontal={true} showsHorizontalScrollIndicator={false}>
            <Text className="text-4xl font-bold">{expression}</Text>
          </ScrollView>
          :
          <ScrollView horizontal={true} ref={scrollViewRef} onContentSizeChange={() => { scrollViewRef.current?.scrollTo({ x: 0, animated: false }) }} >
            <Text className="text-4xl font-bold">{result}</Text>
          </ScrollView>
      }
    </View>
  )
}

export default Display
