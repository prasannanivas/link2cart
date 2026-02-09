import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';

export default function OrdersScreen({ navigation }) {
  const [selectedTab, setSelectedTab] = useState('NEW ORDERS');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const tabs = ['NEW ORDERS', 'Confirmed', 'Delivered'];
  const filters = ['All', 'Prepaid', 'Express', 'Partial COD'];
  
  const orders = [
    {
      id: '1',
      orderNumber: 'ORDER#5t435435F',
      fullName: 'Full Name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni...',
      price: '105.33',
      date: 'Dec 30, 2019 05:18',
    },
    {
      id: '2',
      orderNumber: 'ORDER#5t435435F',
      fullName: 'Full Name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni...',
      price: '105.33',
      date: 'Dec 30, 2019 05:18',
    },
    {
      id: '3',
      orderNumber: 'ORDER#5t435435F',
      fullName: 'Full Name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni...',
      price: '105.33',
      date: 'Dec 30, 2019 05:18',
    },
  ];

  const renderOrder = ({ item }) => (
    <View style={styles.orderCard}>
      <View style={styles.orderHeader}>
        <Text style={styles.orderNumber}>{item.orderNumber}</Text>
        <Text style={styles.orderDate}>{item.date}</Text>
      </View>
      
      <Text style={styles.fullName}>{item.fullName}</Text>
      <Text style={styles.description}>{item.description}</Text>
      
      <View style={styles.orderFooter}>
        <Text style={styles.price}>{item.price}</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>I</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>W</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Store Dropdown and Payment Banner */}
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.storeDropdown}>
          <Text style={styles.storeText}>Store 1</Text>
          <Text style={styles.dropdownIcon}>▼</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.paymentBanner}>
        <View style={styles.paymentIcon}>
          <Text style={styles.iconEmoji}>💰</Text>
        </View>
        <Text style={styles.paymentText}>payment And Settelement</Text>
        <Text style={styles.arrowIcon}>→</Text>
      </TouchableOpacity>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by products or buyer name"
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, selectedTab === tab && styles.activeTab]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Filters */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.filtersContainer}
      >
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[styles.filterBtn, selectedFilter === filter && styles.activeFilter]}
            onPress={() => setSelectedFilter(filter)}
          >
            <Text style={[styles.filterText, selectedFilter === filter && styles.activeFilterText]}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.iconBtn}>
          <Text style={styles.iconBtnText}>☰</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}>
          <Text style={styles.iconBtnText}>↓</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Orders List */}
      <FlatList
        data={orders}
        renderItem={renderOrder}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  topSection: {
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
  paymentBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 35,
    marginBottom: 20,
    padding: 18,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  paymentIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FEF3C7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  iconEmoji: {
    fontSize: 24,
  },
  paymentText: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    fontFamily: 'Urbanist',
  },
  arrowIcon: {
    fontSize: 24,
    color: '#000000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E7EB',
    marginHorizontal: 20,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderRadius: 12,
  },
  searchIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Urbanist',
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 8,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  activeTab: {
    backgroundColor: '#EEF2FF',
  },
  tabText: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
    fontFamily: 'Urbanist',
  },
  activeTabText: {
    color: '#4F46E5',
    fontWeight: '600',
  },
  filtersContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  filterBtn: {
    backgroundColor: '#000000',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginRight: 8,
  },
  activeFilter: {
    backgroundColor: '#000000',
  },
  filterText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Urbanist',
  },
  activeFilterText: {
    fontWeight: '600',
  },
  iconBtn: {
    width: 36,
    height: 36,
    backgroundColor: '#000000',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  iconBtnText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  orderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  orderNumber: {
    fontSize: 14,
    color: '#9CA3AF',
    fontFamily: 'Urbanist',
  },
  orderDate: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '600',
    fontFamily: 'Urbanist',
  },
  fullName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 8,
    fontFamily: 'Urbanist',
  },
  description: {
    fontSize: 13,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 15,
    fontFamily: 'Urbanist',
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    fontFamily: 'Urbanist',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  actionBtn: {
    width: 42,
    height: 42,
    backgroundColor: '#E5E7EB',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtnText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    fontFamily: 'Urbanist',
  },
});
