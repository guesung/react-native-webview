import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  const Stack = createStackNavigator();
  return (
    <SafeAreaView>
      <Text>ddd</Text>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
      <Home />
    </SafeAreaView>
  );
}

export default App;
