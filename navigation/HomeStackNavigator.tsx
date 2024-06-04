/**
 * HomeStackNavigator.tsx
 * 
 * This file defines the stack navigator for home-related screens,
 * including the Home and Profile screens.
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from '../components/BottomTabNavigator';
import { RootStackParamList } from '../types/types';

// Create a stack navigator for home-related screens
const Stack = createStackNavigator<RootStackParamList>();

const HomeStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{ headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
