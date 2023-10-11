import React from 'react';
import { View } from 'react-native';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';
import { numbers } from '../assets/utils';

const ButtonGroup = ({ buttonList }) => {
    return (
        <View className="flex flex-row justify-evenly justify-items-center my-1">
            {
                buttonList.map((itr) => {
                    return (
                        numbers.includes(itr) ?
                            <NumberButton
                                key={itr}
                                number={itr}
                            />
                            :
                            <OperatorButton
                                key={itr}
                                operator={itr}
                            />
                    )
                })
            }
        </View>
    )
}

export default ButtonGroup
