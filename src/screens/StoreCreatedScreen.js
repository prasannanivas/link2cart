import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function StoreCreatedScreen({ navigation }) {
  const handleGoToStore = () => {
    navigation.replace('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Success Icon */}
        <View style={styles.iconContainer}>
          <View style={styles.successIcon}>
            <Text style={styles.checkmark}>✓</Text>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.titleText}>Store Created!</Text>
        
        {/* Subtitle */}
        <Text style={styles.subtitleText}>
          Your Store has been changed successfully.
        </Text>

        {/* Go to Store Button */}
        <TouchableOpacity 
          style={styles.goToStoreButton} 
          onPress={handleGoToStore}
        >
          <Text style={styles.goToStoreButtonText}>Go to Store</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  iconContainer: {
    marginBottom: 30,
  },
  successIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  checkmark: {
    fontSize: 50,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  titleText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1E232C',
    marginBottom: 15,
    fontFamily: 'Urbanist',
  },
  subtitleText: {
    fontSize: 16,
    color: '#8391A1',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
    fontFamily: 'Urbanist',
  },
  goToStoreButton: {
    backgroundColor: '#2D3748',
    borderRadius: 30,
    paddingVertical: 18,
    paddingHorizontal: 60,
    alignItems: 'center',
    width: '100%',
  },
  goToStoreButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Urbanist',
  },
});
