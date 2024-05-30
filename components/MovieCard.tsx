/**
 * MovieCard.tsx
 * 
 * This file defines the MovieCard component, which displays individual movie
 * details, including the movie title and poster.
 */

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Define the props type for the MovieCard component
type MovieCardProps = {
  movie: {
    title: string;
    poster: string;
  };
};

// Define the MovieCard component
const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: movie.poster }} style={styles.image} />
      <Text style={styles.title}>{movie.title}</Text>
    </View>
  );
};

// Define the styles for the MovieCard component
const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
});

export default MovieCard;
