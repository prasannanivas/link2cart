import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default function DesignScreen({ navigation }) {
  const storeDesigns = [
    { id: '1', title: 'Site Theme', icon: '🎨', color: '#FF9500' },
    { id: '2', title: 'Site Banner', icon: '🖼️', color: '#FF9500' },
    { id: '3', title: 'Header Image', icon: '🖼️', color: '#FF9500' },
    { id: '4', title: 'Review Images', icon: '⭐', color: '#FF9500' },
    { id: '5', title: 'About Shop', icon: '🏪', color: '#FF9500' },
  ];

  const storePolicies = [
    { id: '6', title: 'Privacy Policy', icon: '📄', color: '#A855F7' },
    { id: '7', title: 'Tearms & Conditions', icon: '📋', color: '#A855F7' },
    { id: '8', title: 'Shipping & Returns', icon: '🚚', color: '#A855F7' },
    { id: '9', title: 'Contact Information', icon: '✉️', color: '#A855F7' },
  ];

  const renderMenuItem = (item) => (
    <TouchableOpacity key={item.id} style={styles.menuItem}>
      <View style={[styles.iconContainer, { backgroundColor: `${item.color}20` }]}>
        <Text style={[styles.icon, { color: item.color }]}>{item.icon}</Text>
      </View>
      <Text style={styles.menuText}>{item.title}</Text>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.storeDropdown}>
          <Text style={styles.storeText}>Store 1</Text>
          <Text style={styles.dropdownIcon}>▼</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {/* Store Designs Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Store Designs</Text>
          <View style={styles.menuList}>
            {storeDesigns.map(renderMenuItem)}
          </View>
        </View>

        {/* Store Policy Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Store Policy</Text>
          <View style={styles.menuList}>
            {storePolicies.map(renderMenuItem)}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#000000',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  storeDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#9CA3AF',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  storeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 10,
    fontFamily: 'Urbanist',
  },
  dropdownIcon: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 15,
    fontFamily: 'Urbanist',
  },
  menuList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  icon: {
    fontSize: 22,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    fontFamily: 'Urbanist',
  },
  arrow: {
    fontSize: 24,
    color: '#000000',
    fontWeight: '400',
  },
});
