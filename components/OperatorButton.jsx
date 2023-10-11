import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { clear, backspace, operation, result } from '../features/calculationSlice';
import { add } from '../features/calculationHistorySlice';

const OperatorButton = ({ operator }) => {
    const dispatch = useDispatch();

    const operatorFunction = () => {
        switch (operator) {
            case 'C': return clear();
            case '<=': return backspace();
            default: return operation(operator);
        }
    }

    const expression = useSelector((state) => state.calculation.expression);

    return (
        <View>
            {operator === '=' ?
                <Pressable className="w-16 h-16 flex justify-center items-center rounded-full bg-orange-400" onPress={() => {
                    dispatch(add(expression));
                    dispatch(result());
                }}>
                    <Text className="text-xl text-white font-bold">{operator}</Text>
                </Pressable>
                :
                <Pressable className="w-16 h-16 flex justify-center items-center rounded-full bg-gray-400" onPress={() => dispatch(operatorFunction())}>
                    <Text className="text-xl font-bold">{operator}</Text>
                </Pressable>
            }
        </View>
    )
}

export default OperatorButton
