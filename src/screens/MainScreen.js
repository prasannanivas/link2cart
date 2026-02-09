import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import EditProfile from './EditProfile';

export default function MainScreen({ navigation }) {
  const [isEditProfileVisible, setIsEditProfileVisible] = useState(false);
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <TouchableOpacity onPress={() => setIsEditProfileVisible(true)}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>D</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.profileName}>David Billa</Text>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Text style={styles.notificationIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      {/* Business Card */}
      <View style={styles.businessCard}>
        <View style={styles.businessHeader}>
          <View style={styles.businessLogoContainer}>
            <View style={styles.businessLogo}>
              <Text style={styles.businessLogoText}>D</Text>
              <View style={styles.onlineIndicator} />
            </View>
          </View>
          <View style={styles.businessInfo}>
            <Text style={styles.businessName}>Business Name</Text>
            <Text style={styles.businessId}>@BusinessInstaID</Text>
            <Text style={styles.businessLink}>businessname.link2cart.com</Text>
            <TouchableOpacity style={styles.viewStoreButton}>
              <Text style={styles.viewStoreText}>View Store ▶</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>
        
        {/* Carousel Indicators */}
        <View style={styles.carouselIndicators}>
          <View style={[styles.indicator, styles.indicatorInactive]} />
          <View style={[styles.indicator, styles.indicatorInactive]} />
          <View style={[styles.indicator, styles.indicatorActive]} />
        </View>
      </View>

      {/* Payouts Section */}
      <TouchableOpacity style={styles.payoutsCard}>
        <Text style={styles.payoutsText}>Payouts And Settelments</Text>
        <Text style={styles.arrowIcon}>→</Text>
      </TouchableOpacity>

      {/* Order Analytics */}
      <View style={styles.analyticsSection}>
        <View style={styles.analyticsSectionHeader}>
          <Text style={styles.sectionTitle}>Order Analytics</Text>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Today ▼</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.analyticsCard}>
          <Text style={styles.earningsText}>$ 1000.6776 Earned !</Text>
          
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>150</Text>
              <Text style={styles.statLabel}>Store Visitors</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>60</Text>
              <Text style={styles.statLabel}>Initiated</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>50</Text>
              <Text style={styles.statLabel}>Completed</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>10</Text>
              <Text style={styles.statLabel}>Abandoned</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Premium Button */}
      <TouchableOpacity style={styles.premiumButton}>
        <Text style={styles.premiumButtonText}>Subscribe to Premium pro</Text>
      </TouchableOpacity>

      {/* Delivery Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Delivery Settings</Text>
        <View style={styles.deliveryGrid}>
          <View style={styles.deliveryPlaceholder} />
          <View style={styles.deliveryPlaceholder} />
          <View style={styles.deliveryPlaceholder} />
          <View style={styles.deliveryPlaceholder} />
        </View>
      </View>

      {/* Integrations */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Integrations</Text>
        <View style={styles.integrationsGrid}>
          <View style={styles.integrationCard}>
            <View style={styles.integrationIcon} />
            <Text style={styles.integrationTitle}>Integration 1</Text>
            <Text style={styles.integrationDescription}>
              Lorem ips um dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>
          <View style={styles.integrationCard}>
            <View style={styles.integrationIcon} />
            <Text style={styles.integrationTitle}>Integration 2</Text>
            <Text style={styles.integrationDescription}>
              Lorem ips um dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>
        </View>
      </View>

      {/* News Feeds */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>News Feeds</Text>
        <View style={styles.newsGrid}>
          <View style={styles.newsCard}>
            <Text style={styles.newsTitle}>News 1</Text>
            <Text style={styles.newsDescription}>
              Lorem ips um dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>
          <View style={styles.newsCard}>
            <Text style={styles.newsTitle}>News 1</Text>
            <Text style={styles.newsDescription}>
              Lorem ips um dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>
        </View>
      </View>

      <View style={{ height: 100 }} />

      <EditProfile 
        visible={isEditProfileVisible}
        onClose={() => setIsEditProfileVisible(false)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 63,
    paddingVertical: 15,
    backgroundColor: '#000000',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
  },
  profileName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: 'Urbanist',
  },
  notificationButton: {
    padding: 8,
  },
  notificationIcon: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  businessCard: {
    backgroundColor: '#E8E8E8',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 12,
    padding: 20,
  },
  businessHeader: {
    flexDirection: 'row',
    gap: 12,
  },
  businessLogoContainer: {
    position: 'relative',
  },
  businessLogo: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  businessLogoText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000000',
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#10B981',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  businessInfo: {
    flex: 1,
    gap: 2,
  },
  businessName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    fontFamily: 'Urbanist',
  },
  businessId: {
    fontSize: 13,
    color: '#6A707C',
    fontFamily: 'Urbanist',
  },
  businessLink: {
    fontSize: 13,
    color: '#3B82F6',
    fontFamily: 'Urbanist',
  },
  viewStoreButton: {
    marginTop: 5,
  },
  viewStoreText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000000',
    fontFamily: 'Urbanist',
  },
  editButton: {
    backgroundColor: '#D1D5DB',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 15,
    height: 30,
  },
  editButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000000',
    fontFamily: 'Urbanist',
  },
  carouselIndicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginTop: 15,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  indicatorActive: {
    backgroundColor: '#1E232C',
  },
  indicatorInactive: {
    backgroundColor: '#D1D5DB',
  },
  payoutsCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 12,
  },
  payoutsText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    fontFamily: 'Urbanist',
  },
  arrowIcon: {
    fontSize: 24,
    color: '#6A707C',
  },
  analyticsSection: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  analyticsSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    fontFamily: 'Urbanist',
  },
  filterButton: {
    backgroundColor: '#E8E8E8',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    fontFamily: 'Urbanist',
  },
  analyticsCard: {
    backgroundColor: '#E8E8E8',
    padding: 20,
    borderRadius: 12,
  },
  earningsText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3B82F6',
    marginBottom: 15,
    fontFamily: 'Urbanist',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000000',
    fontFamily: 'Urbanist',
  },
  statLabel: {
    fontSize: 12,
    color: '#3B82F6',
    marginTop: 5,
    textAlign: 'center',
    fontFamily: 'Urbanist',
  },
  premiumButton: {
    backgroundColor: '#A855F7',
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  premiumButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    fontFamily: 'Urbanist',
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  deliveryGrid: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 12,
    padding: 10,
  },
  deliveryPlaceholder: {
    flex: 1,
    height: 80,
    backgroundColor: '#D1D5DB',
    borderRadius: 8,
  },
  integrationsGrid: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  integrationCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 12,
    padding: 15,
  },
  integrationIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#D1D5DB',
    marginBottom: 10,
  },
  integrationTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 8,
    fontFamily: 'Urbanist',
  },
  integrationDescription: {
    fontSize: 12,
    color: '#6A707C',
    lineHeight: 18,
    fontFamily: 'Urbanist',
  },
  newsGrid: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  newsCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 12,
    padding: 15,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 8,
    fontFamily: 'Urbanist',
  },
  newsDescription: {
    fontSize: 12,
    color: '#6A707C',
    lineHeight: 18,
    fontFamily: 'Urbanist',
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalBackdrop: {
    flex: 1,
  },
  modalContent: {
    width: '85%',
    backgroundColor: '#F5F5F5',
    height: '100%',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  backIcon: {
    fontSize: 32,
    color: '#000000',
  },
  modalProfileSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  modalAvatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E8C4D4',
    marginBottom: 15,
    overflow: 'hidden',
  },
  modalAvatarImage: {
    width: '100%',
    height: '100%',
  },
  modalProfileName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    fontFamily: 'Urbanist',
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 18,
    fontSize: 16,
    color: '#000000',
    marginBottom: 15,
    fontFamily: 'Urbanist',
  },
  subscriptionButton: {
    backgroundColor: '#8B5CF6',
    borderRadius: 30,
    padding: 20,
    alignItems: 'center',
    marginBottom: 15,
  },
  subscriptionButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Urbanist',
  },
  actionButton: {
    backgroundColor: '#1F2937',
    borderRadius: 30,
    padding: 20,
    alignItems: 'center',
    marginBottom: 15,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Urbanist',
  },
});
