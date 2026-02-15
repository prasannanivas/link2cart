import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar
} from 'react-native';
import Colors from '../constants/colors';

export default function DesignScreen({ navigation }) {
  const [selectedOption, setSelectedOption] = useState('Background');

  const categoryButtons = [
    { id: '1', title: 'Site Theme', color: '#4A90E2' },
    { id: '2', title: 'Site Banner', color: '#E24A90' },
    { id: '3', title: 'Review', color: '#90E24A' },
    { id: '4', title: 'Header', color: '#E2904A' },
    { id: '5', title: 'Courier Detail', color: '#4AE290' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle={Colors.statusBarText} backgroundColor={Colors.backgroundDark} />
      {/* Fixed Header */}
      <View style={styles.header}>
        <View style={styles.storeLogo}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/50' }}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.storeInfo}>
          <Text style={styles.storeName}>Cubies Apparel</Text>
          <Text style={styles.storeUrl}>cubiesapparel.sellify.cloud</Text>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView 
        style={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

      {/* Category Buttons */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScrollView}
        contentContainerStyle={styles.categoryContainer}
      >
        {categoryButtons.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.categoryButton, { backgroundColor: item.color }]}
          >
            <Text style={styles.categoryButtonText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Background/Highlighter Selection */}
      <View style={styles.selectionContainer}>
        <TouchableOpacity
          style={[
            styles.selectionButton,
            selectedOption === 'Background' && styles.selectedButton
          ]}
          onPress={() => setSelectedOption('Background')}
        >
          <View style={[
            styles.colorCircle,
            { backgroundColor: '#DC143C' }
          ]} />
          <Text style={styles.selectionText}>Background</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.selectionButton,
            selectedOption === 'Highlighter' && styles.selectedButton
          ]}
          onPress={() => setSelectedOption('Highlighter')}
        >
          <View style={[
            styles.colorCircle,
            { backgroundColor: '#DC143C', borderWidth: 3, borderColor: '#FFF' }
          ]} />
          <Text style={styles.selectionText}>Highlighter</Text>
        </TouchableOpacity>
      </View>

      {/* Phone Mockup Preview */}
      <View style={styles.previewContainer}>
        <View style={styles.phoneMockup}>
          <View style={styles.phoneScreen}>
            {/* Status Bar */}
            <View style={styles.statusBar}>
              <Text style={styles.statusTime}>9:30</Text>
              <View style={styles.statusIcons}>
                <Text style={styles.statusIcon}>📶 📡 🔋</Text>
              </View>
            </View>

            {/* Browser Bar */}
            <View style={styles.browserBar}>
              <Text style={styles.browserUrl}>🔒 cubicsapparel.sellify.com</Text>
              <Text style={styles.shareIcon}>⤴</Text>
            </View>

            {/* Banner Image */}
            <View style={styles.banner}>
              <Text style={styles.bannerText}>**Uality Cars. Honest Deals. **</Text>
              <View style={styles.logoContainer}>
                <View style={styles.logo}>
                  <Text style={styles.logoText}>M</Text>
                </View>
                <TouchableOpacity style={styles.favoriteButton}>
                  <Text style={styles.favoriteIcon}>♥</Text>
                </TouchableOpacity>
              </View>
              <Image 
                source={{ uri: 'https://via.placeholder.com/300x200' }}
                style={styles.bannerImage}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>
      </View>

      <View style={{ height: 120 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.backgroundDark,
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  storeLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.cardBackground,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  storeInfo: {
    marginLeft: 12,
  },
  storeName: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.textLight,
  },
  storeUrl: {
    fontSize: 12,
    color: '#888888',
    marginTop: 2,
  },
  categoryScrollView: {
    marginTop: 15,
  },
  categoryContainer: {
    paddingHorizontal: 20,
    gap: 10,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryButtonText: {
    color: Colors.textLight,
    fontSize: 13,
    fontWeight: '600',
  },
  selectionContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 25,
    gap: 15,
  },
  selectionButton: {
    flex: 1,
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: Colors.transparent,
  },
  selectedButton: {
    borderColor: Colors.secondary,
  },
  colorCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  selectionText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  previewContainer: {
    paddingHorizontal: 20,
    marginTop: 30,
    alignItems: 'center',
  },
  phoneMockup: {
    width: '100%',
    maxWidth: 350,
    aspectRatio: 9 / 19,
    backgroundColor: Colors.shadow,
    borderRadius: 30,
    padding: 10,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  phoneScreen: {
    flex: 1,
    backgroundColor: Colors.cardBackground,
    borderRadius: 22,
    overflow: 'hidden',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 5,
  },
  statusTime: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  statusIcons: {
    flexDirection: 'row',
  },
  statusIcon: {
    fontSize: 12,
  },
  browserBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    marginHorizontal: 10,
    marginTop: 5,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  browserUrl: {
    fontSize: 11,
    color: Colors.textPrimary,
  },
  shareIcon: {
    fontSize: 14,
  },
  banner: {
    backgroundColor: '#DC143C',
    padding: 15,
    marginTop: 10,
  },
  bannerText: {
    color: Colors.textLight,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#DC143C',
  },
  favoriteButton: {
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: Colors.cardBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteIcon: {
    fontSize: 20,
    color: '#DC143C',
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
});
