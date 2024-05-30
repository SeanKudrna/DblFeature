/**
 * AuthStackNavigator.tsx
 * 
 * This file defines the stack navigator for authentication-related screens,
 * including the Login and SignUp screens.
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { RootStackParamList } from '../types/types';

// Create a stack navigator for authentication-related screens
const Stack = createStackNavigator<RootStackParamList>();

const AuthStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
