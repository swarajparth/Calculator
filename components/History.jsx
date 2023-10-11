import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

const History = () => {
    const history = useSelector((state) => state.calculationHistory.history);

    return (
        <View className="w-full h-full">
            <ScrollView className="my-2 p-1 w-full h-full absolute left-0 bottom-0">
                <View className="flex-col-reverse">
                    {history.map((itr, index) =>
                        <View className="m-1 p-2 bg-white rounded-2xl" key={index}>
                            <Text className="text-right py-1 text-lg">
                                {itr[0]}
                            </Text>
                            <Text className="text-right text-2xl font-bold">
                                {itr[1]}
                            </Text>
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
    )
}

export default History