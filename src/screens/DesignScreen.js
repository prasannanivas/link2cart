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
import CartIcon from '../components/icons/CartIcon';
import MenuIcon from '../components/icons/MenuIcon';
import ShirtIcon from '../components/icons/ShirtIcon';
import PantsIcon from '../components/icons/PantsIcon';
import ShoesIcon from '../components/icons/ShoesIcon';
import BagIcon from '../components/icons/BagIcon';
import HeartIcon from '../components/icons/HeartIcon';
import TruckIcon from '../components/icons/TruckIcon';
import StarIcon from '../components/icons/StarIcon';

export default function DesignScreen({ navigation }) {
  const [selectedSection, setSelectedSection] = useState('1');
  const [selectedOption, setSelectedOption] = useState('Background');
  
  // Store colors for each section
  const [sectionColors, setSectionColors] = useState({
    '1': { background: '#4A90E2', highlighter: '#6366F1' }, // Site Theme
    '2': { background: '#E24A90', highlighter: '#F43F5E' }, // Site Banner
    '3': { background: '#90E24A', highlighter: '#10B981' }, // Review
    '4': { background: '#E2904A', highlighter: '#F59E0B' }, // Header
    '5': { background: '#4AE290', highlighter: '#0EA5E9' }, // Courier Detail
  });

  const categoryButtons = [
    { id: '1', title: 'Site Theme', color: '#4A90E2' },
    { id: '2', title: 'Site Banner', color: '#E24A90' },
    { id: '3', title: 'Review', color: '#90E24A' },
    { id: '4', title: 'Header', color: '#E2904A' },
    { id: '5', title: 'Courier Detail', color: '#4AE290' },
  ];
  
  const colorPalette = [
    '#DC143C', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A',
    '#98D8C8', '#F7DC6F', '#BB8FCE', '#85929E', '#F39C12',
    '#8E44AD', '#3498DB', '#1ABC9C', '#2ECC71', '#E74C3C',
    '#34495E', '#9B59B6', '#16A085', '#27AE60', '#2980B9',
  ];
  
  const currentSection = sectionColors[selectedSection];
  
  const updateColor = (color) => {
    setSectionColors(prev => ({
      ...prev,
      [selectedSection]: {
        ...prev[selectedSection],
        [selectedOption.toLowerCase()]: color
      }
    }));
  };

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

      {/* Section Selection Buttons */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>🎨 Design Sections</Text>
        <Text style={styles.sectionSubtitle}>Select a section to customize</Text>
      </View>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScrollView}
        contentContainerStyle={styles.categoryContainer}
      >
        {categoryButtons.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.categoryButton, 
              { backgroundColor: sectionColors[item.id].background },
              selectedSection === item.id && styles.categoryButtonSelected
            ]}
            onPress={() => setSelectedSection(item.id)}
          >
            <Text style={styles.categoryButtonText}>{item.title}</Text>
            {selectedSection === item.id && <Text style={styles.checkmark}>✓</Text>}
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
            { backgroundColor: currentSection.background }
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
            { backgroundColor: currentSection.highlighter }
          ]} />
          <Text style={styles.selectionText}>Highlighter</Text>
        </TouchableOpacity>
      </View>
      
      {/* Color Picker */}
      <View style={styles.colorPickerContainer}>
        <Text style={styles.colorPickerTitle}>
          Choose {selectedOption} Color
        </Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.colorPickerScroll}
        >
          {colorPalette.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.colorPickerItem,
                { backgroundColor: color },
                (selectedOption === 'Background' ? currentSection.background : currentSection.highlighter) === color && styles.colorPickerSelected
              ]}
              onPress={() => updateColor(color)}
            >
              {(selectedOption === 'Background' ? currentSection.background : currentSection.highlighter) === color && (
                <Text style={styles.colorPickerCheck}>✓</Text>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* iPhone Mockup Preview */}
      <View style={styles.previewContainer}>
        <Text style={styles.previewTitle}>📱 Live Preview</Text>
        <View style={styles.phoneMockup}>
          {/* iPhone Notch */}
          <View style={styles.phoneNotch}>
            <View style={styles.notchCutout} />
          </View>
          
          <View style={styles.phoneScreen}>
            {/* Scrollable Content */}
            <ScrollView 
              style={styles.phoneContent}
              showsVerticalScrollIndicator={true}
            >
              {/* Header - Section 4 */}
              <View style={[
                styles.storeHeader, 
                { backgroundColor: selectedSection === '4' ? sectionColors['4'].background : '#6366F1' }
              ]}>
                <View style={styles.headerRow}>
                  <Text style={styles.menuIcon}>☰</Text>
                  <Text style={styles.headerTitle}>Cubies Apparel</Text>
                  <View style={styles.cartIconContainer}>
                    <Text style={styles.cartIcon}>🛒</Text>
                    <View style={[
                      styles.cartBadge,
                      { backgroundColor: selectedSection === '4' ? sectionColors['4'].highlighter : '#EF4444' }
                    ]}>
                      <Text style={styles.cartBadgeText}>3</Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* Banner Section - Section 2 */}
              <View style={[
                styles.banner, 
                { backgroundColor: selectedSection === '2' ? sectionColors['2'].background : '#F43F5E' }
              ]}>
                <Text style={styles.bannerText}>Quality Products. Honest Deals.</Text>
                <View style={styles.logoContainer}>
                  <View style={[
                    styles.logo, 
                    { backgroundColor: selectedSection === '2' ? sectionColors['2'].highlighter : '#FB7185' }
                  ]}>
                    <Text style={[
                      styles.logoText, 
                      { color: selectedSection === '2' ? sectionColors['2'].background : '#F43F5E' }
                    ]}>CA</Text>
                  </View>
                  <TouchableOpacity style={[
                    styles.favoriteButton, 
                    { borderColor: selectedSection === '2' ? sectionColors['2'].highlighter : '#FB7185' }
                  ]}>
                    <Text style={[
                      styles.favoriteIcon, 
                      { color: selectedSection === '2' ? sectionColors['2'].highlighter : '#FB7185' }
                    ]}>♥</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Product Categories - Site Theme Section 1 */}
              <View style={styles.categoriesSection}>
                <Text style={styles.categoriesTitle}>Shop by Category</Text>
                <View style={styles.categoryGrid}>
                  {['👕 Shirts', '👖 Pants', '👟 Shoes', '🎒 Bags'].map((cat, idx) => (
                    <View key={idx} style={[
                      styles.categoryItem, 
                      { borderColor: selectedSection === '1' ? sectionColors['1'].background : '#6366F1' }
                    ]}>
                      <Text style={styles.categoryItemText}>{cat}</Text>
                    </View>
                  ))}
                </View>
              </View>

              {/* Featured Products - Site Theme Section 1 */}
              <View style={styles.productsSection}>
                <Text style={styles.productsTitle}>Featured Products</Text>
                <View style={styles.productCard}>
                  <View style={[
                    styles.productImagePlaceholder, 
                    { backgroundColor: (selectedSection === '1' ? sectionColors['1'].highlighter : '#818CF8') + '30' }
                  ]}>
                    <Text style={styles.productIconLarge}>👕</Text>
                  </View>
                  <Text style={styles.productName}>Cotton T-Shirt</Text>
                  <Text style={[
                    styles.productPrice, 
                    { color: selectedSection === '1' ? sectionColors['1'].background : '#6366F1' }
                  ]}>₹599</Text>
                  <TouchableOpacity style={[
                    styles.addToCartButton, 
                    { backgroundColor: selectedSection === '1' ? sectionColors['1'].background : '#6366F1' }
                  ]}>
                    <Text style={styles.addToCartText}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
                
                {/* Review Section - Section 3 */}
                <View style={[
                  styles.reviewCard,
                  { 
                    backgroundColor: selectedSection === '3' ? sectionColors['3'].background + '15' : '#10B98115',
                    borderLeftColor: selectedSection === '3' ? sectionColors['3'].background : '#10B981'
                  }
                ]}>
                  <View style={styles.reviewHeader}>
                    <Text style={styles.reviewerName}>John Doe</Text>
                    <View style={styles.starsContainer}>
                      {[1,2,3,4,5].map((star) => (
                        <Text key={star} style={[
                          styles.star,
                          { color: selectedSection === '3' ? sectionColors['3'].highlighter : '#34D399' }
                        ]}>★</Text>
                      ))}
                    </View>
                  </View>
                  <Text style={styles.reviewText}>Great quality products! Highly recommended.</Text>
                </View>
                
                {/* Courier Detail - Section 5 */}
                <View style={[
                  styles.courierCard,
                  { borderColor: selectedSection === '5' ? sectionColors['5'].background : '#0EA5E9' }
                ]}>
                  <View style={[
                    styles.courierIcon,
                    { backgroundColor: selectedSection === '5' ? sectionColors['5'].background : '#0EA5E9' }
                  ]}>
                    <Text style={styles.courierIconText}>🚚</Text>
                  </View>
                  <View style={styles.courierInfo}>
                    <Text style={styles.courierTitle}>Fast Delivery</Text>
                    <Text style={styles.courierSubtitle}>Estimated delivery: 2-3 days</Text>
                  </View>
                  <View style={[
                    styles.courierBadge,
                    { backgroundColor: selectedSection === '5' ? sectionColors['5'].highlighter : '#38BDF8' }
                  ]}>
                    <Text style={styles.courierBadgeText}>Express</Text>
                  </View>
                </View>
              </View>

              <View style={{ height: 40 }} />
            </ScrollView>
          </View>
          
          {/* iPhone Home Indicator */}
          <View style={styles.homeIndicator} />
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
  sectionHeader: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  categoryScrollView: {
    marginTop: 5,
  },
  categoryContainer: {
    paddingHorizontal: 20,
    gap: 10,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  categoryButtonSelected: {
    borderWidth: 3,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  categoryButtonText: {
    color: Colors.textLight,
    fontSize: 13,
    fontWeight: '600',
  },
  checkmark: {
    color: Colors.textLight,
    fontSize: 16,
    fontWeight: '700',
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
  colorPickerContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  colorPickerTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 12,
  },
  colorPickerScroll: {
    gap: 10,
    paddingVertical: 5,
  },
  colorPickerItem: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'transparent',
  },
  colorPickerSelected: {
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  colorPickerCheck: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  previewContainer: {
    paddingHorizontal: 20,
    marginTop: 30,
    alignItems: 'center',
  },
  previewTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 15,
    alignSelf: 'flex-start',
  },
  phoneMockup: {
    width: '100%',
    maxWidth: 350,
    aspectRatio: 9 / 19,
    backgroundColor: '#1F2937',
    borderRadius: 35,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 15,
    position: 'relative',
  },
  phoneNotch: {
    position: 'absolute',
    top: 0,
    left: '50%',
    marginLeft: -70,
    width: 140,
    height: 25,
    backgroundColor: '#1F2937',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notchCutout: {
    width: 100,
    height: 15,
    backgroundColor: '#000',
    borderRadius: 10,
    marginTop: 3,
  },
  phoneScreen: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    borderRadius: 27,
    overflow: 'hidden',
  },
  phoneContent: {
    flex: 1,
  },
  homeIndicator: {
    position: 'absolute',
    bottom: 5,
    left: '50%',
    marginLeft: -60,
    width: 120,
    height: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    opacity: 0.4,
  },
  storeHeader: {
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 12,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    flex: 1,
    textAlign: 'center',
  },
  cartIconContainer: {
    position: 'relative',
  },
  cartIcon: {
    fontSize: 20,
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#EF4444',
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    fontSize: 9,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  banner: {
    padding: 20,
  },
  bannerText: {
    color: Colors.textLight,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 28,
    fontWeight: '800',
  },
  favoriteButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  favoriteIcon: {
    fontSize: 20,
  },
  categoriesSection: {
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  categoriesTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 12,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  categoryItem: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: '#F9FAFB',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 12,
    borderWidth: 1.5,
    alignItems: 'center',
  },
  categoryItemText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  productsSection: {
    padding: 16,
    backgroundColor: '#F9FAFB',
  },
  productsTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 12,
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  productImagePlaceholder: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  productIconLarge: {
    fontSize: 50,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 10,
  },
  addToCartButton: {
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  reviewCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderLeftWidth: 4,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  reviewerName: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  starsContainer: {
    flexDirection: 'row',
    gap: 2,
  },
  star: {
    fontSize: 14,
  },
  reviewText: {
    fontSize: 12,
    color: Colors.textSecondary,
    lineHeight: 18,
  },
  courierCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    gap: 12,
  },
  courierIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  courierIconText: {
    fontSize: 24,
  },
  courierInfo: {
    flex: 1,
  },
  courierTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  courierSubtitle: {
    fontSize: 11,
    color: Colors.textSecondary,
  },
  courierBadge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  courierBadgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
});
