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

export default function CreateLinkScreen({ navigation }) {
  const [businessName, setBusinessName] = useState('');

  const handleNext = () => {
    if (businessName.trim()) {
      navigation.navigate('TellAboutBusiness', { businessName });
    }
  };

  const handleSave = () => {
    console.log('Save for later');
    navigation.replace('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.greetingText}>Hi Mernal</Text>
            <TouchableOpacity onPress={handleSave}>
              <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
          </View>

          {/* Title */}
          <Text style={styles.titleText}>Create a link</Text>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Business Name"
              placeholderTextColor="#8391A1"
              value={businessName}
              onChangeText={setBusinessName}
            />

            <View style={styles.domainInput}>
              <Text style={styles.domainText}>.link2cart.in</Text>
            </View>
          </View>

          {/* Next Button */}
          <TouchableOpacity 
            style={[styles.nextButton, !businessName.trim() && styles.nextButtonDisabled]} 
            onPress={handleNext}
            disabled={!businessName.trim()}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 60,
  },
  greetingText: {
    fontSize: 30,
    fontWeight: '700',
    color: '#1E232C',
    fontFamily: 'Urbanist',
  },
  saveText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#35C2C1',
    fontFamily: 'Urbanist',
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
    marginBottom: 40,
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
  domainInput: {
    backgroundColor: '#F7F8F9',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderWidth: 1,
    borderColor: '#E8ECF4',
  },
  domainText: {
    fontSize: 15,
    color: '#1E232C',
    fontFamily: 'Urbanist',
  },
  nextButton: {
    backgroundColor: '#2D3748',
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 40,
    alignItems: 'center',
    alignSelf: 'flex-end',
    minWidth: 120,
  },
  nextButtonDisabled: {
    backgroundColor: '#8391A1',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Urbanist',
  },
});
