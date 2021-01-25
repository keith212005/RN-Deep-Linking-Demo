import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import People from '../screens/People';

const Stack = createStackNavigator();

export default class AppContainer extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="People" component={People} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
