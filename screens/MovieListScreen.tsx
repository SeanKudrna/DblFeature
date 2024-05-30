/**
 * MovieListScreen.tsx
 * 
 * This file defines the MovieList screen component, which displays a list of
 * movies for the user to browse through using a swipe deck.
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SwipeDeck from '../components/SwipeDeck';

// Define the MovieList screen component
const MovieListScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie List</Text>
      <SwipeDeck />
    </View>
  );
};

// Define the styles for the MovieList screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 20,
  },
});

export default MovieListScreen;
