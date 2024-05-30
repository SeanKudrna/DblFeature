/**
 * SwipeDeck.tsx
 * 
 * This file defines the SwipeDeck component, which manages a deck of movie
 * cards that users can swipe through to browse movies.
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import MovieCard from './MovieCard';

// Define a list of movies for demonstration purposes
const movies = [
  { title: 'Inception', poster: 'https://example.com/inception.jpg' },
  { title: 'Titanic', poster: 'https://example.com/titanic.jpg' },
  // Add more movie objects here
];

// Define the SwipeDeck component
const SwipeDeck: React.FC = () => {
  return (
    <View style={styles.deck}>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </View>
  );
};

// Define the styles for the SwipeDeck component
const styles = StyleSheet.create({
  deck: {
    flex: 1,
    padding: 20,
  },
});

export default SwipeDeck;
