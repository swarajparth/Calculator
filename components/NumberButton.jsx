import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { numberOperation, decimal, zero, doubleZero } from '../features/calculationSlice';

const NumberButton = ({ number }) => {
    const dispatch = useDispatch();

    const numberFunction = () => {
        switch (number) {
            case '.': return decimal();
            case '0': return zero();
            case '00': return doubleZero();
            default: return numberOperation(number);
        }
    }

    return (
        <View>
            <Pressable className="w-16 h-16 flex justify-center items-center rounded-full bg-white" onPress={() => dispatch(numberFunction())}>
                <Text className="text-xl font-bold">{number}</Text>
            </Pressable>
        </View>
    )
}

export default NumberButton
