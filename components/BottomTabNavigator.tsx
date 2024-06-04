// BottomTabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen'
import MovieListScreen from '../screens/MovieListScreen';
import Ionicon from 'react-native-vector-icons/Ionicons'; 
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';



const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {

          if (route.name === 'Home') {
            return <Ionicon name="home-outline" size={size} color={color}  />
          } else if (route.name === 'Profile') {
            return <Ionicon name="person-outline" size={size} color={color}  />
          } else if (route.name === 'Movie') {
            return <MaterialCommunityIcon name="movie-filter-outline" size={size} color={color}  />
          }

        },
        tabBarActiveTintColor: '#42f44b',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#1f1f1f' },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Movie" component={MovieListScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
