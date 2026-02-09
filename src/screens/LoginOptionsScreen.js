import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

const placeholderImage = require('../../assets/images/loginScreenImage.png');

const { width, height } = Dimensions.get('window');

export default function LoginOptionsScreen({ navigation }) {
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      {/* Plant Image */}
      <View style={styles.imageContainer}>
        <View style={styles.imagePlaceholder}>
          <Image source={placeholderImage} style={styles.placeholderImage} />  
        </View>
      </View>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>
          link<Text style={styles.logoHighlight}>2</Text><Text style={styles.logoHighlightgrey}>cart</Text>
        </Text>
      </View>

      {/* Spacer */}
      <View style={styles.spacer} />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D5E3E8',
    justifyContent: 'space-between',
    paddingBottom: 80,
  },
  placeholderImage: {
    width: width * 1,
    height: height * 1,
    resizeMode: 'cover',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 0,
    width: '100%',
  },
  imagePlaceholder: {
    width: '100%',
    height: height * 0.45,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  logoText: {
    fontSize: 48,
    fontWeight: '600',
    color: '#1E232C',
    letterSpacing: -1,
    fontFamily: 'Urbanist',
  },
  logoHighlight: {
    fontSize: 48,
    color: '#6CB1BC',
    fontWeight: '600',
    fontFamily: 'Urbanist',
    letterSpacing: -1,
  },
  logoHighlightgrey: {
    fontSize: 48,
    color: '#6A707C',
    fontWeight: '600',
    fontFamily: 'Urbanist',
    letterSpacing: -1,
  },
  spacer: {
    flex: 0.5,
  },
  buttonContainer: {
    paddingHorizontal: 40,
    gap: 20,
  },
  loginButton: {
    backgroundColor: '#2D3748',
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Urbanist',
  },
  registerButton: {
    backgroundColor: 'transparent',
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2D3748',
  },
  registerButtonText: {
    color: '#2D3748',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Urbanist',
  },
});
