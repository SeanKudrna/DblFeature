/**
 * MovieStackNavigator.tsx
 * 
 * This file defines the stack navigator for movie-related screens,
 * including the MovieListScreen.
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MovieListScreen from '../screens/MovieListScreen';
import { RootStackParamList } from '../types/types';

// Create a stack navigator for movie-related screens
const Stack = createStackNavigator<RootStackParamList>();

const MovieStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="MovieListScreen">
      <Stack.Screen name="MovieListScreen" component={MovieListScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default MovieStackNavigator;
