import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProductsScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('products'); // 'products' or 'collections'
  const [searchQuery, setSearchQuery] = useState('');
  
  const products = [
    {
      id: '1',
      name: 'Product Name',
      price: '$ 199.99',
      stock: '10000',
      image: 'https://i.imgur.com/KXUJM8e.png',
    },
    {
      id: '2',
      name: 'Product Name',
      price: '$ 199.99',
      stock: '10000',
      image: 'https://i.imgur.com/KXUJM8e.png',
    },
    {
      id: '3',
      name: 'Product Name',
      price: '$ 199.99',
      stock: '10000',
      image: 'https://i.imgur.com/KXUJM8e.png',
    },
  ];

  const collections = [
    { id: '1', name: 'Louis Vuitton', logo: '🏢' },
    { id: '2', name: 'IBM', logo: '💼' },
    { id: '3', name: 'The Walt Disney Company', logo: '🏰' },
    { id: '4', name: 'Louis Vuitton', logo: '👜' },
    { id: '5', name: 'Apple', logo: '🍎' },
    { id: '6', name: 'The Walt Disney Company', logo: '🎬' },
    { id: '7', name: 'Ferrari', logo: '🏎️' },
    { id: '8', name: 'eBay', logo: '🛒' },
    { id: '9', name: "McDonald's", logo: '🍔' },
  ];

  const renderProductItem = ({ item }) => (
    <View style={styles.productCard}>
      <View style={styles.productImageContainer}>
        <Image source={{ uri: item.image }} style={styles.productImage} resizeMode="contain" />
      </View>
      
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <Text style={styles.productStock}>{item.stock}</Text>
      </View>

      <View style={styles.productActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>☰</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>👁️‍🗨️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderCollectionItem = ({ item }) => (
    <View style={styles.collectionCard}>
      <View style={styles.collectionLogo}>
        <Text style={styles.collectionLogoText}>{item.logo}</Text>
      </View>
      <Text style={styles.collectionName}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Business Name</Text>
        <TouchableOpacity style={styles.notificationButton}>
          <Text style={styles.notificationIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'products' && styles.activeTab]}
          onPress={() => setActiveTab('products')}
        >
          <Text style={[styles.tabText, activeTab === 'products' && styles.activeTabText]}>
            Products
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'collections' && styles.activeTab]}
          onPress={() => setActiveTab('collections')}
        >
          <Text style={[styles.tabText, activeTab === 'collections' && styles.activeTabText]}>
            Collections
          </Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Products"
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Text style={styles.searchIcon}>🔍</Text>
      </View>

      {/* Content */}
      {activeTab === 'products' ? (
        <View style={styles.content}>
          {/* Action Buttons */}
          <View style={styles.actionBar}>
            <TouchableOpacity style={styles.gridButton}>
              <Text style={styles.gridIcon}>⊞</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.importButton}>
              <Text style={styles.importButtonText}>Import / Export</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>Non catagoried</Text>
            </TouchableOpacity>
          </View>

          {/* Products List */}
          <FlatList
            data={products}
            renderItem={renderProductItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.productsList}
          />
        </View>
      ) : (
        <View style={styles.content}>
          {/* Menu Icon */}
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>

          {/* Collections Grid */}
          <FlatList
            data={collections}
            renderItem={renderCollectionItem}
            keyExtractor={item => item.id}
            numColumns={3}
            contentContainerStyle={styles.collectionsList}
          />
        </View>
      )}

      {/* Floating Add Button */}
      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  notificationButton: {
    padding: 5,
  },
  notificationIcon: {
    fontSize: 24,
    color: '#fff',
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 8,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#000',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  activeTabText: {
    color: '#fff',
  },
  searchContainer: {
    marginHorizontal: 20,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  searchIcon: {
    fontSize: 20,
    color: '#999',
    marginLeft: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  actionBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    gap: 10,
  },
  gridButton: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  gridIcon: {
    fontSize: 20,
  },
  importButton: {
    flex: 1,
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  importButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  categoryButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  categoryButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  productsList: {
    paddingTop: 20,
    paddingBottom: 100,
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  productImageContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#000',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  productImage: {
    width: 70,
    height: 70,
  },
  productImagePlaceholder: {
    fontSize: 40,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
  productStock: {
    fontSize: 14,
    color: '#000',
  },
  productActions: {
    flexDirection: 'row',
    gap: 10,
  },
  actionButton: {
    padding: 5,
  },
  actionIcon: {
    fontSize: 20,
  },
  menuButton: {
    marginTop: 20,
    marginBottom: 10,
  },
  menuIcon: {
    fontSize: 24,
  },
  collectionsList: {
    paddingTop: 20,
    paddingBottom: 100,
  },
  collectionCard: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 25,
    marginHorizontal: 5,
  },
  collectionLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  collectionLogoText: {
    fontSize: 35,
  },
  collectionName: {
    fontSize: 11,
    color: '#000',
    textAlign: 'center',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 90,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#888',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  floatingButtonText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '300',
  },
});
