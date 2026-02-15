import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  StatusBar
} from 'react-native';
import Colors from '../constants/colors';

export default function OrdersScreen({ navigation }) {
  const [selectedTab, setSelectedTab] = useState('New orders');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const tabs = ['New orders', 'Confirmed', 'Dispatched', 'Delivered'];
  const filters = ['All', 'Prepaid', 'Express', 'Partial COD'];
  
  const orders = [
    {
      id: '1',
      orderNumber: 'ORDER#5t435435F',
      customerName: 'Mrinal',
      description: 'Mrinal Placed an order for $ 100.00 on Jan 5, 2026',
      price: '₹ 105.33',
      date: 'Dec 30, 2019 05:18',
      badges: ['Prepaid Express', 'Ordered'],
    },
    {
      id: '2',
      orderNumber: 'ORDER#5t435435F',
      customerName: 'Mrinal',
      description: 'Mrinal Placed an order for $ 100.00 on Jan 5, 2026',
      price: '₹ 105.33',
      date: 'Dec 30, 2019 05:18',
      badges: ['Prepaid Express', 'Ordered'],
    },
    {
      id: '3',
      orderNumber: 'ORDER#5t435435F',
      customerName: 'Mrinal',
      description: 'Mrinal Placed an order for $ 100.00 on Jan 5, 2026',
      price: '₹ 105.33',
      date: 'Dec 30, 2019 05:18',
      badges: ['Prepaid Express', 'Ordered'],
    },
    {
      id: '4',
      orderNumber: 'ORDER#5t435435F',
      customerName: 'Mrinal',
      description: 'Mrinal Placed an order for $ 100.00 on Jan 5, 2026',
      price: '₹ 105.33',
      date: 'Dec 30, 2019 05:18',
      badges: ['Prepaid Express', 'Ordered'],
    },
  ];

  const renderOrder = ({ item }) => (
    <View style={styles.orderCard}>
      <View style={styles.orderHeader}>
        <View style={styles.orderNumberContainer}>
          <Text style={styles.orderNumber}>{item.orderNumber}</Text>
        </View>
        <Text style={styles.orderDate}>{item.date}</Text>
      </View>
      
      <View style={styles.customerRow}>
        <View style={styles.customerAvatar}>
          <Text style={styles.customerAvatarText}>{item.customerName[0]}</Text>
        </View>
        <View style={styles.customerInfo}>
          <Text style={styles.customerName}>{item.customerName}</Text>
          <Text style={styles.description} numberOfLines={1}>{item.description}</Text>
        </View>
      </View>
      
      <View style={styles.bottomRow}>
        <View style={styles.priceAndBadges}>
          <Text style={styles.priceText}>{item.price}</Text>
          <View style={styles.badgesRow}>
            {item.badges.map((badge, index) => (
              <View key={index} style={[
                styles.badge,
                index === 0 ? styles.badgePrimary : styles.badgeSecondary
              ]}>
                <Text style={styles.badgeText}>{badge}</Text>
              </View>
            ))}
          </View>
        </View>
        
        <View style={styles.orderFooter}>
          <TouchableOpacity style={styles.actionIcon} activeOpacity={0.7}>
            <Text style={styles.actionIconText}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionIcon} activeOpacity={0.7}>
            <Text style={styles.actionIconText}>👤</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionIcon} activeOpacity={0.7}>
            <Text style={styles.actionIconText}>📞</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionIcon} activeOpacity={0.7}>
            <Text style={styles.actionIconText}>⚙️</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

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

      {/* Content Area */}
      <View style={styles.contentContainer}>
        {/* Tabs */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.tabsContainer}
          contentContainerStyle={styles.tabsContent}
        >
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
        </ScrollView>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Items"
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.userIcon}>
          <Text style={styles.userIconText}>👤</Text>
        </TouchableOpacity>
      </View>

      {/* Filters */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.filtersContainer}
        contentContainerStyle={styles.filtersContent}
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
      </ScrollView>

      {/* Orders List */}
      <FlatList
        data={orders}
        renderItem={renderOrder}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
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
    backgroundColor: Colors.background,
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
  contentContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
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
  tabsContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.background,
    maxHeight: 50,
  },
  tabsContent: {
    gap: 6,
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: Colors.transparent,
    maxHeight: 30,
  },
  activeTab: {
    backgroundColor: Colors.primary,
  },
  tabText: {
    fontSize: 11,
    color: Colors.textSecondary,
    fontWeight: '500',
  },
  activeTabText: {
    color: Colors.textLight,
    fontWeight: '600',
  },
  searchContainer: {
    marginHorizontal: 20,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.cardBackground,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    fontSize: 12,
    color: Colors.textPrimary,
  },
  userIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userIconText: {
    fontSize: 14,
  },
  filtersContainer: {
    marginTop: 8,
    maxHeight: 40,
  },
  filtersContent: {
    paddingHorizontal: 20,
    gap: 5,
  },
  filterBtn: {
    backgroundColor: '#F3F4F6',
    borderRadius: 14,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'transparent',
    maxHeight: 28,
  },
  activeFilter: {
    backgroundColor: Colors.primaryLight,
    borderColor: Colors.primary,
  },
  filterText: {
    color: Colors.textSecondary,
    fontSize: 11,
    fontWeight: '500',
  },
  activeFilterText: {
    color: Colors.primary,
    fontWeight: '700',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 100,
  },
  orderCard: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    borderLeftWidth: 3,
    borderLeftColor: Colors.primary,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  orderNumberContainer: {
    flex: 1,
  },
  orderNumber: {
    fontSize: 11,
    color: Colors.primary,
    fontWeight: '700',
  },
  orderDate: {
    fontSize: 10,
    color: Colors.textTertiary,
    fontWeight: '500',
  },
  customerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    gap: 8,
  },
  customerAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customerAvatarText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.primary,
  },
  customerInfo: {
    flex: 1,
  },
  customerName: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 1,
  },
  description: {
    fontSize: 11,
    color: Colors.textTertiary,
    lineHeight: 14,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceAndBadges: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  priceText: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.primary,
  },
  badgesRow: {
    flexDirection: 'row',
    gap: 3,
  },
  badge: {
    borderRadius: 8,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  badgePrimary: {
    backgroundColor: Colors.success,
  },
  badgeSecondary: {
    backgroundColor: Colors.warning,
  },
  badgeText: {
    color: Colors.textLight,
    fontSize: 9,
    fontWeight: '700',
  },
  orderFooter: {
    flexDirection: 'row',
    gap: 4,
  },
  actionIcon: {
    width: 28,
    height: 28,
    backgroundColor: Colors.iconBackground,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  actionIconText: {
    fontSize: 12,
  },
});
