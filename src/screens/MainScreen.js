import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar
} from 'react-native';
import Svg, { G, Circle, Defs, Filter, FeFlood, FeColorMatrix, FeOffset, FeGaussianBlur, FeComposite, FeBlend } from 'react-native-svg';

export default function MainScreen({ navigation }) {
  const settingsItems = [
    { id: '1', title: 'Delivery Settings', icon: '›' },
    { id: '2', title: 'Manage Coupon Codes', icon: '›' },
    { id: '3', title: 'Payment Settings', icon: '›' },
    { id: '4', title: 'Store Preference', icon: '›' },
    { id: '5', title: 'Integrations', icon: '›' },
    { id: '6', title: 'Help & Support', icon: '›' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" />
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
   
      {/* Action Buttons Row */}
      <View style={styles.actionButtonsRow}>
        <TouchableOpacity style={styles.subscribeButton} activeOpacity={0.8}>
          <Text style={styles.subscribeButtonText}>🔲 SUBSCRIBE TO PRO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <Text style={styles.iconButtonText}>🔔</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <Text style={styles.iconButtonText}>🔗</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <Text style={styles.iconButtonText}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <Text style={styles.iconButtonText}>🔗</Text>
        </TouchableOpacity>
      </View>

   <ScrollView 
        style={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
      {/* Revenue Card */}
      <View style={styles.revenueCardContainer}>
      <View style={styles.revenueCard}>
        <View style={styles.revenueIcon}>
          <Text style={styles.rupeeIcon}>₹</Text>
        </View>
        <Text style={styles.revenueAmount}>10,000.00 INR</Text>
      </View>

      {/* Stats Grid */}
      <View style={styles.statsGrid}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>120</Text>
          <Text style={styles.statLabel}>Visitors</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>120</Text>
          <Text style={styles.statLabel}>Initiated</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>120</Text>
          <Text style={styles.statLabel}>Ordered</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>120</Text>
          <Text style={styles.statLabel}>Cancelled</Text>
        </View>
      </View>

      {/* Failed Payments Section */}
      <TouchableOpacity style={styles.failedPaymentsCard}>
        <Text style={styles.failedPaymentsText}>Failed Payments User List</Text>
           <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <G filter="url(#filter0_dd_651_9606)">
            <Circle cx="15" cy="15" r="10" fill="#1A1A1A"/>
            <Circle cx="15" cy="15" r="9.5" stroke="#1A1A1A"/>
          </G>
          <Defs>
            <Filter id="filter0_dd_651_9606" x="0" y="0" width="30" height="30" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <FeFlood floodOpacity="0" result="BackgroundImageFix"/>
              <FeColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <FeOffset dx="-1" dy="-1"/>
              <FeGaussianBlur stdDeviation="2"/>
              <FeComposite in2="hardAlpha" operator="out"/>
              <FeColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <FeBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_651_9606"/>
              <FeColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <FeOffset dx="1" dy="1"/>
              <FeGaussianBlur stdDeviation="2"/>
              <FeComposite in2="hardAlpha" operator="out"/>
              <FeColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <FeBlend mode="normal" in2="effect1_dropShadow_651_9606" result="effect2_dropShadow_651_9606"/>
              <FeBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_651_9606" result="shape"/>
            </Filter>
          </Defs>
        </Svg>
        

      </TouchableOpacity>
      </View>

      {/* Payments and Settlements */}
      <TouchableOpacity style={styles.paymentsCard}>
        <Text style={styles.paymentsText}>Payments and Settelments</Text>
        <Text style={styles.arrowIcon}>→</Text>
      </TouchableOpacity>

      {/* Settings Section */}
      <View style={styles.settingsSection}>
        <Text style={styles.settingsTitle}>Settings</Text>
        {settingsItems.map((item) => (
          <TouchableOpacity key={item.id} style={styles.settingItem}>
            <Text style={styles.settingItemText}>{item.title}</Text>
            <Text style={styles.settingItemIcon}>{item.icon}</Text>
          </TouchableOpacity>
        ))}
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  scrollContent: {
    flex: 1,
  },
  header: {
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 13,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
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
  actionButtonsRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 0,
    gap: 6,
    backgroundColor: '#1A1A1A',
    marginBottom: 13,
    marginTop: 0,
    height: 40,
    alignItems: 'flex-end',
  },
  subscribeButton: {
    backgroundColor: '#0742A0',
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderRadius: 10,
    width: 231,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  subscribeButtonText: {
    fontFamily: 'Urbanist',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
    letterSpacing: -0.8,
    color: '#FAFAFA',
    textAlign: 'center',
  },
  iconButton: {
    backgroundColor: '#FAFAFA',
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  iconButtonText: {
    fontSize: 16,
    color: '#1A1A1A',
  },
  revenueCardContainer: {
    marginHorizontal: 0,
    backgroundColor: 'white',
    marginTop: 0,
  },
  revenueCard: {
    backgroundColor: '#FAFAFA',
    marginHorizontal: 35,
    marginTop: 11,
    marginBottom: 14,
    paddingHorizontal: 10,
    paddingVertical: 0,
    height: 33,
    borderRadius: 0,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  revenueIcon: {
    width: 33,
    height: 33,
    borderRadius: 0,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
  },
  rupeeIcon: {
    fontFamily: 'Urbanist',
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  revenueAmount: {
    fontFamily: 'Urbanist',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
    letterSpacing: -0.8,
    color: '#1A1A1A',
  },
  statsGrid: {
    flexDirection: 'row',
    paddingHorizontal: 35,
    gap: 11,
    marginBottom: 14,
  },
  statBox: {
    flex: 1,
    width: 80,
    height: 80,
    backgroundColor: '#FAFAFA',
    padding: 0,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
    shadowColor: '#000000',
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    overflow: 'hidden',
  },
  statValue: {
    fontFamily: 'Urbanist',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 45,
    letterSpacing: -1.28,
    color: '#1A1A1A',
    marginTop: 4,
    marginBottom: 0,
  },
  statLabel: {
    fontFamily: 'Urbanist',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 21,
    letterSpacing: 0.15,
    color: '#FAFAFA',
    textAlign: 'center',
    backgroundColor: '#1A1A1A',
    width: '100%',
    paddingVertical: 5,
    position: 'absolute',
    bottom: 0,
  },
  failedPaymentsCard: {
    backgroundColor: '#FAFAFA',
    marginHorizontal: 35,
    marginBottom: 14,
    paddingHorizontal: 10,
    paddingVertical: 7,
    height: 35,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  failedPaymentsText: {
    fontFamily: 'Urbanist',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 21,
    letterSpacing: 0.15,
    color: '#1A1A1A',
  },
  downloadIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1A1A1A',
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  downloadIconText: {
    fontSize: 12,
    color: '#FAFAFA',
  },
  paymentsCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    marginHorizontal: 0,
    marginBottom: 0,
    paddingHorizontal: 13,
    paddingVertical: 11,
    height: 50,
    borderRadius: 0,
    borderTopWidth: 1,
    borderTopColor: '#000000',
  },
  paymentsText: {
    fontFamily: 'Urbanist',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
    letterSpacing: -0.8,
    color: '#2F7D6D',
  },
  arrowIcon: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2F7D6D',
  },
  settingsSection: {
    backgroundColor: '#FAFAFA',
    marginHorizontal: 0,
    borderRadius: 0,
    paddingHorizontal: 10,
    paddingVertical: 18,
    marginBottom: 0,
    marginTop: 0,
  },
  settingsTitle: {
    fontFamily: 'Urbanist',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
    letterSpacing: -0.8,
    color: '#000000',
    marginBottom: 10,
    height: 28,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 0,
    height: 50,
    backgroundColor: '#FAFAFA',
    borderRadius: 15,
    marginBottom: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 0,
  },
  settingItemText: {
    fontFamily: 'Urbanist',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 21,
    letterSpacing: 0.15,
    color: '#1A1A1A',
  },
  settingItemIcon: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
  },
});
