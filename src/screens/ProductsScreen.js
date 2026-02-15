import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar
} from 'react-native';

export default function ProductsScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('Items');
  const [searchQuery, setSearchQuery] = useState('');
  
  const products = [
    {
      id: '1',
      name: 'Product Name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: '1500',
      stock: '10000',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: '2',
      name: 'Product Name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: '1500',
      stock: '10000',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: '3',
      name: 'Product Name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: '1500',
      stock: '10000',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: '4',
      name: 'Product Name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: '1500',
      stock: '10000',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: '5',
      name: 'Product Name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: '1500',
      stock: '10000',
      image: 'https://via.placeholder.com/100',
    },
  ];

  const renderProductItem = ({ item }) => (
    <View style={styles.productCard}>
      <View style={styles.productImageContainer}>
        <Image 
          source={{ uri: item.image }} 
          style={styles.productImage} 
          resizeMode="cover" 
        />
      </View>
      
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={styles.productStock}>In Stock : {item.stock}</Text>
        <Text style={styles.productPrice}>₹ {item.price}</Text>
      </View>

      <View style={styles.productActions}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editIcon}>✏</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.deleteIcon}>🗑</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" />
      {/* Fixed Header */}
      <View style={styles.header}>
        <View style={styles.storeLogo}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/60' }}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.storeInfo}>
          <Text style={styles.storeName}>Cubies Apparel</Text>
          <Text style={styles.storeUrl}>cubiesapparel.sellify.cloud</Text>
        </View>
      </View>

      {/* Scrollable Content */}
      <View style={styles.contentContainer}>
        {/* Tabs */}
        <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Items' && styles.activeTab]}
          onPress={() => setActiveTab('Items')}
        >
          <Text style={[styles.tabText, activeTab === 'Items' && styles.activeTabText]}>
            Items
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Groups' && styles.activeTab]}
          onPress={() => setActiveTab('Groups')}
        >
          <Text style={[styles.tabText, activeTab === 'Groups' && styles.activeTabText]}>
            Groups
          </Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Items"
            placeholderTextColor="#2F7D6D"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Text style={styles.searchIcon}>🔍</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Products List */}
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.productsList}
        showsVerticalScrollIndicator={false}
        style={styles.listContainer}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 13,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  listContainer: {
    flex: 1,
  },
  storeLogo: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  storeInfo: {
    marginLeft: 13,
  },
  storeName: {
    fontFamily: 'Urbanist',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
    letterSpacing: -0.8,
    color: '#F9FAFB',
  },
  storeUrl: {
    fontFamily: 'Urbanist',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 21,
    letterSpacing: 0.15,
    color: '#F9FAFB',
    marginTop: 0,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 16,
    gap: 5,
    backgroundColor: '#FFFFFF',
  },
  tab: {
    width: 143,
    height: 40,
    backgroundColor: '#FAFAFA',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  activeTab: {
    backgroundColor: '#0742A0',
  },
  tabText: {
    fontFamily: 'Urbanist',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 21,
    letterSpacing: 0.15,
    textAlign: 'center',
    color: '#1A1A1A',
  },
  activeTabText: {
    color: '#FAFAFA',
  },
  searchContainer: {
    marginHorizontal: 15,
    marginTop: 11,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 17,
  },
  searchBar: {
    flex: 1,
    height: 45,
    backgroundColor: '#FAFAFA',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Urbanist',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0.14,
    textAlign: 'left',
    color: '#2F7D6D',
    paddingVertical: 0,
  },
  searchIcon: {
    fontSize: 18,
    color: '#2F7D6D',
  },
  addButton: {
    width: 45,
    height: 45,
    borderRadius: 0,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 32,
    color: '#1A1A1A',
    fontWeight: '300',
  },
  productsList: {
    paddingHorizontal: 16,
    paddingBottom: 100,
    gap: 11,
  },
  productCard: {
    width: '100%',
    height: 121,
    flexDirection: 'row',
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    paddingHorizontal: 11,
    paddingVertical: 0,
    marginBottom: 11,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  productImageContainer: {
    width: 100,
    height: 100,
    backgroundColor: '#E8E8E8',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  productDetails: {
    flex: 1,
    paddingLeft: 9,
    paddingRight: 5,
    justifyContent: 'flex-start',
    paddingTop: 7,
  },
  productName: {
    fontFamily: 'Urbanist',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
    letterSpacing: -0.8,
    textAlign: 'left',
    color: '#1A1A1A',
    marginBottom: 0,
  },
  productDescription: {
    fontFamily: 'Nunito Sans',
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 14,
    letterSpacing: 0.1,
    color: '#1A1A1A',
    marginTop: 0,
    height: 32,
  },
  productStock: {
    fontFamily: 'Urbanist',
    fontSize: 14,
    fontWeight: '900',
    lineHeight: 20,
    letterSpacing: -0.7,
    color: '#1A1A1A',
    marginTop: 3,
  },
  productPrice: {
    fontFamily: 'Urbanist',
    fontSize: 14,
    fontWeight: '900',
    lineHeight: 20,
    letterSpacing: -0.7,
    color: '#1A1A1A',
    marginTop: 0,
  },
  productActions: {
    flexDirection: 'column',
    gap: 8,
    position: 'absolute',
    right: 11,
    bottom: 14,
  },
  editButton: {
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIcon: {
    fontSize: 16,
    color: '#1A1A1A',
  },
  deleteButton: {
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteIcon: {
    fontSize: 16,
    color: '#1A1A1A',
  },
});
