import React from 'react';
import { View } from 'react-native';
import ButtonGroup from './ButtonGroup';
import { symbolMatrix } from '../assets/utils';

const NumPad = () => {
    return (
        <View className="flex flex-col absolute inset-x-0 bottom-4">
            {symbolMatrix.map((itr) =>
                <ButtonGroup
                    key={itr[0]}
                    buttonList={itr} />
            )}
        </View>
    )
}

export default NumPad
