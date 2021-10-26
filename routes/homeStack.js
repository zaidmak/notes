import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Bot from '../screens/Bot' ;


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          name="Home"
          component={Home}
          
        />
        <Stack.Screen 
        name = 'Bot'
        component = {Bot}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack