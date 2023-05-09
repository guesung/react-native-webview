import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
