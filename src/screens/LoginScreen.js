import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen({ navigation }) {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Navigate to Home after login
    navigation.replace('Home');
  };

  const handleForgotPassword = () => {
    navigation.navigate('OTPVerification', { fromForgotPassword: true });
  };

  const handleRegisterNow = () => {
    navigation.navigate('Register');
  };

  const handleBack = () => {
    navigation.navigate('LoginOptions');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Back Button */}
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>

          {/* Welcome Text */}
          <Text style={styles.welcomeText}>Welcome back!</Text>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              placeholderTextColor="#8391A1"
              value={mobileNumber}
              onChangeText={setMobileNumber}
              keyboardType="phone-pad"
            />

            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Enter your password"
                placeholderTextColor="#8391A1"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity 
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Text style={styles.eyeIconText}>👁</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          {/* Register Link */}
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Don't have an account? </Text>
            <TouchableOpacity onPress={handleRegisterNow}>
              <Text style={styles.registerLink}>Register Now</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 40,
    paddingTop: 20,
  },
  backButton: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#F7F8F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: '#1E232C',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: '700',
    color: '#1E232C',
    marginBottom: 40,
    fontFamily: 'Urbanist',
  },
  inputContainer: {
    gap: 15,
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#F7F8F9',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 18,
    fontSize: 15,
    color: '#1E232C',
    borderWidth: 1,
    borderColor: '#E8ECF4',
    fontFamily: 'Urbanist',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F8F9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8ECF4',
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 18,
    fontSize: 15,
    color: '#1E232C',
    fontFamily: 'Urbanist',
  },
  eyeIcon: {
    paddingHorizontal: 15,
  },
  eyeIconText: {
    fontSize: 20,
  },
  forgotPassword: {
    color: '#6A707C',
    fontSize: 14,
    textAlign: 'right',
    fontWeight: '600',
    fontFamily: 'Urbanist',
  },
  loginButton: {
    backgroundColor: '#2D3748',
    borderRadius: 30,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 250,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Urbanist',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    color: '#1E232C',
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Urbanist',
  },
  registerLink: {
    color: '#35C2C1',
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'Urbanist',
  },
});
