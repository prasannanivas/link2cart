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

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // TODO: Implement registration logic
    console.log('Register:', { name, mobileNumber, password, confirmPassword });
    navigation.navigate('OTPVerification', { fromForgotPassword: false });
  };

  const handleLoginNow = () => {
    navigation.navigate('Login');
  };

  const handleBack = () => {
    navigation.navigate('LoginOptions');
  };

  const handleTermsPress = () => {
    console.log('Terms of service pressed');
  };

  const handlePrivacyPress = () => {
    console.log('Privacy policy pressed');
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

          {/* Title */}
          <Text style={styles.titleText}>Register to get started</Text>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Your Name"
              placeholderTextColor="#8391A1"
              value={name}
              onChangeText={setName}
            />

            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              placeholderTextColor="#8391A1"
              value={mobileNumber}
              onChangeText={setMobileNumber}
              keyboardType="phone-pad"
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#8391A1"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#8391A1"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>

          {/* Register Button */}
          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>

          {/* Terms and Privacy */}
          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>By continuing, you agree to our{'\n'}</Text>
            <View style={styles.termsLinksRow}>
              <TouchableOpacity onPress={handleTermsPress}>
                <Text style={styles.termsLink}>Terms of service</Text>
              </TouchableOpacity>
              <Text style={styles.termsText}> and </Text>
              <TouchableOpacity onPress={handlePrivacyPress}>
                <Text style={styles.termsLink}>privacy policy</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Login Link */}
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <TouchableOpacity onPress={handleLoginNow}>
              <Text style={styles.loginLink}>Login Now</Text>
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
  titleText: {
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
  registerButton: {
    backgroundColor: '#2D3748',
    borderRadius: 30,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 20,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Urbanist',
  },
  termsContainer: {
    alignItems: 'center',
    marginBottom: 80,
  },
  termsText: {
    color: '#1E232C',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: 'Urbanist',
  },
  termsLinksRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  termsLink: {
    color: '#35C2C1',
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'Urbanist',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#1E232C',
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Urbanist',
  },
  loginLink: {
    color: '#35C2C1',
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'Urbanist',
  },
});
