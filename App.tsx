import React from 'react';
import { View } from 'react-native';

import NumPad from './components/NumPad';
import HistoryButton from './components/HistoryButton';
import Display from './components/Display';
import History from './components/History';
import DeleteButton from './components/DeleteButton';

import { Provider } from 'react-redux';
import store from './app/store';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View className="bg-slate-200 w-full h-full">
      <HistoryButton navigation={navigation} />
      <Display />
      <NumPad />
    </View>
  );
}

function HistoryScreen() {
  return (
    <View className="bg-slate-200 w-full h-full">
      <History />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{
            headerShown: false
          }} />
          <Stack.Screen name="History"
            component={HistoryScreen}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: 'rgb(226 232 240)',
              },
              headerShadowVisible: false,
              headerRight: () => <DeleteButton />
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
