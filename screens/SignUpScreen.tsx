import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import useThemeColors from '../styles/colors/useThemeColors';
import createStyles from '../styles/LoginScreenStyles';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../config/firebaseConfig';

type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

const SignUpScreen: React.FC = () => {
  const navigation = useNavigation<SignUpScreenNavigationProp>();
  const colors = useThemeColors();
  const styles = createStyles(colors);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      navigation.navigate('Home');
      // Store additional user info in your database
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Sign Up Error', error.message);
      } else {
        Alert.alert('Sign Up Error', 'An unknown error occurred.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/appicon-transparent.png')} style={styles.logo} />
      <Text style={styles.title}>Register</Text>
      <View style={styles.row}>
        {/* We dont currently do anything with Firstname or Lastname... will be good once we have a database*/}
        <TextInput 
          style={[styles.input, styles.halfInput]}
          placeholder="First Name"
          placeholderTextColor={colors.placeholder}
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput 
          style={[styles.input, styles.halfInput]}
          placeholder="Last Name"
          placeholderTextColor={colors.placeholder}
          value={lastName}
          onChangeText={setLastName}
        />
      </View>
      
      <TextInput 
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={colors.placeholder}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput 
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={colors.placeholder}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput 
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor={colors.placeholder}
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity onPress={handleSignUp} style={styles.buttonContainer}>
        <LinearGradient
          colors={['#d82239', '#fea14c']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </LinearGradient>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={{ color: colors.text }}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.footerText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;