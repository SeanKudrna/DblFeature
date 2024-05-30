/**
 * LoginScreen.tsx
 * 
 * This file defines the Login screen component, which allows users to log in
 * using their email and password. It also provides navigation to the SignUp screen.
 */

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import useThemeColors from '../styles/colors/useThemeColors';
import createStyles from '../styles/LoginScreenStyles';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../config/firebaseConfig';

// Define the navigation prop type for the Login screen
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen: React.FC = () => {
  // Get the navigation prop
  const navigation = useNavigation<LoginScreenNavigationProp>();
  
  // Get the theme colors and styles
  const colors = useThemeColors();
  const styles = createStyles(colors);

  // Define state variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle login action
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      navigation.navigate('Home');
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Login Error', error.message);
      } else {
        Alert.alert('Login Error', 'An unknown error occurred.');
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* App icon */}
      <Image source={require('../assets/appicon-transparent.png')} style={styles.logo} />
      {/* App title */}
      <Text style={styles.title}>
        <Text style={styles.highlight}>Dbl</Text>Feature
      </Text>
      {/* Email input */}
      <TextInput 
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={colors.placeholder}
        value={email}
        onChangeText={setEmail}
      />
      {/* Password input */}
      <TextInput 
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={colors.placeholder}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {/* Login button */}
      <TouchableOpacity onPress={handleLogin} style={styles.buttonContainer}>
        <LinearGradient
          colors={['#d82239', '#fea14c']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </LinearGradient>
      </TouchableOpacity>
      {/* Navigation to SignUp screen */}
      <View style={styles.footer}>
        <Text style={{ color: colors.text }}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.footerText}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
