import React, { useState, useRef } from 'react';
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

export default function OTPVerificationScreen({ navigation, route }) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    // Auto-focus previous input on backspace
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleVerify = () => {
    const otpCode = otp.join('');
    console.log('OTP:', otpCode);
    
    // Check if coming from forgot password or registration
    const fromForgotPassword = route?.params?.fromForgotPassword;
    
    if (fromForgotPassword) {
      navigation.navigate('CreateNewPassword');
    } else {
      // From registration, go to onboarding
      navigation.navigate('CreateLink');
    }
  };

  const handleResend = () => {
    console.log('Resend OTP');
    setOtp(['', '', '', '']);
    inputRefs[0].current?.focus();
  };

  const handleBack = () => {
    navigation.goBack();
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
          <Text style={styles.titleText}>OTP Verification</Text>
          <Text style={styles.subtitleText}>
            Enter the verification code we just sent on your email address.
          </Text>

          {/* OTP Input Boxes */}
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={inputRefs[index]}
                style={[
                  styles.otpInput,
                  digit ? styles.otpInputFilled : styles.otpInputEmpty
                ]}
                value={digit}
                onChangeText={(value) => handleOtpChange(value, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                keyboardType="number-pad"
                maxLength={1}
                selectTextOnFocus
              />
            ))}
          </View>

          {/* Verify Button */}
          <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
            <Text style={styles.verifyButtonText}>Verify</Text>
          </TouchableOpacity>

          {/* Resend Link */}
          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Didn't received code? </Text>
            <TouchableOpacity onPress={handleResend}>
              <Text style={styles.resendLink}>Resend</Text>
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
    marginBottom: 10,
    fontFamily: 'Urbanist',
  },
  subtitleText: {
    fontSize: 16,
    color: '#8391A1',
    marginBottom: 40,
    lineHeight: 24,
    fontFamily: 'Urbanist',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    gap: 15,
  },
  otpInput: {
    flex: 1,
    height: 60,
    borderRadius: 8,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'Urbanist',
  },
  otpInputEmpty: {
    backgroundColor: '#F7F8F9',
    borderWidth: 1,
    borderColor: '#E8ECF4',
    color: '#1E232C',
  },
  otpInputFilled: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#35C2C1',
    color: '#1E232C',
  },
  verifyButton: {
    backgroundColor: '#2D3748',
    borderRadius: 30,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 200,
  },
  verifyButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Urbanist',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resendText: {
    color: '#1E232C',
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Urbanist',
  },
  resendLink: {
    color: '#35C2C1',
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'Urbanist',
  },
});
