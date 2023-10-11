import React from 'react';
import { Pressable, Image, View } from 'react-native';
import { clear } from '../features/calculationHistorySlice';
import { useDispatch } from 'react-redux';

const DeleteButton = () => {
    const dispatch = useDispatch();

    return (
        <View className="flex items-end">
            <Pressable className="w-16 h-16 flex justify-center items-center rounded-full" onPress={() => dispatch(clear())}>
                <Image className="w-7 h-7"
                    source={require('../assets/bin.png')}
                />
            </Pressable>
        </View>
    )
}

export default DeleteButton
