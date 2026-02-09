import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AddLocationScreen({ navigation, route }) {
  const { businessName, description } = route?.params || {};
  const [location, setLocation] = useState({
    city: 'Chennai',
    address: '2972 Westheimer Rd. Santa Ana, Illinois 85486'
  });

  const handleNext = () => {
    navigation.navigate('StoreCreated', { businessName, description, location });
  };

  const handleSave = () => {
    console.log('Save for later');
    navigation.replace('Home');
  };

  const handleChangeLocation = () => {
    console.log('Change location - Open map picker');
    // TODO: Implement location picker
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greetingText}>Hi Mernal</Text>
          <TouchableOpacity onPress={handleSave}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>

        {/* Title */}
        <Text style={styles.titleText}>Add Location</Text>

        {/* Location Card */}
        <TouchableOpacity 
          style={styles.locationCard}
          onPress={handleChangeLocation}
        >
          <View style={styles.locationIcon}>
            <Text style={styles.locationIconText}>📍</Text>
          </View>
          <View style={styles.locationInfo}>
            <Text style={styles.cityText}>{location.city}</Text>
            <Text style={styles.addressText}>{location.address}</Text>
          </View>
        </TouchableOpacity>

        {/* Next Button */}
        <TouchableOpacity 
          style={styles.nextButton} 
          onPress={handleNext}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
  locationCard: {
    backgroundColor: '#F7F8F9',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E8ECF4',
    marginBottom: 40,
  },
  locationIcon: {
    marginBottom: 10,
  },
  locationIconText: {
    fontSize: 24,
  },
  locationInfo: {
    gap: 5,
  },
  cityText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E232C',
    fontFamily: 'Urbanist',
  },
  addressText: {
    fontSize: 14,
    color: '#8391A1',
    lineHeight: 20,
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
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Urbanist',
  },
});
