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

export default function TellAboutBusinessScreen({ navigation, route }) {
  const [description, setDescription] = useState('');
  const { businessName } = route?.params || {};

  const handleNext = () => {
    navigation.navigate('AddLocation', { businessName, description });
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
          <Text style={styles.titleText}>Tell About Your Business</Text>

          {/* Description Input */}
          <TextInput
            style={styles.descriptionInput}
            placeholder="Shop Description"
            placeholderTextColor="#8391A1"
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={8}
            textAlignVertical="top"
          />

          {/* Next Button */}
          <TouchableOpacity 
            style={styles.nextButton} 
            onPress={handleNext}
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
  descriptionInput: {
    backgroundColor: '#F7F8F9',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 18,
    fontSize: 15,
    color: '#1E232C',
    borderWidth: 1,
    borderColor: '#E8ECF4',
    fontFamily: 'Urbanist',
    height: 200,
    marginBottom: 40,
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
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Urbanist',
  },
});
