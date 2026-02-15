import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  StatusBar
} from 'react-native';
import Colors from '../constants/colors';

export default function SettingsScreen({ navigation }) {
  const handleLogout = () => {
    navigation.replace('LoginOptions');
  };

  const socialIcons = ['🌐', '🐦', '📘'];
  const platformIcons = ['📱', '🍎', '🎯'];

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
      <View style={styles.content}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <Image 
              source={{ uri: 'https://i.pravatar.cc/150?img=33' }}
              style={styles.profileImage}
            />
          </View>
          <Text style={styles.profileName}>Ranjhith Salvamani</Text>
          
          {/* Social Media Icons */}
          <View style={styles.socialIconsRow}>
            {socialIcons.map((icon, index) => (
              <TouchableOpacity key={index} style={styles.socialIcon}>
                <Text style={styles.socialIconText}>{icon}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Platform Icons + Add Button */}
        <View style={styles.platformSection}>
          <View style={styles.platformIconsRow}>
            {platformIcons.map((icon, index) => (
              <View key={index} style={styles.platformIcon}>
                <Text style={styles.platformIconText}>{icon}</Text>
              </View>
            ))}
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Input Fields */}
        <View style={styles.formSection}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#999"
          />
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Email ID"
            placeholderTextColor="#999"
            keyboardType="email-address"
          />
        </View>

        {/* Action Buttons */}
        <TouchableOpacity style={styles.changePasswordButton}>
          <Text style={styles.changePasswordButtonText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteAccountButton}>
          <Text style={styles.deleteAccountButtonText}>Delete Account</Text>
        </TouchableOpacity>
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
  content: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 15,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  profileName: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 20,
  },
  socialIconsRow: {
    flexDirection: 'row',
    gap: 15,
  },
  socialIcon: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: Colors.backgroundDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIconText: {
    fontSize: 20,
  },
  platformSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  platformIconsRow: {
    flexDirection: 'row',
    gap: 15,
  },
  platformIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.cardBackground,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  platformIconText: {
    fontSize: 28,
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.backgroundDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 32,
    color: Colors.textLight,
    fontWeight: '300',
  },
  formSection: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
    padding: 18,
    fontSize: 16,
    color: Colors.textPrimary,
    marginBottom: 15,
  },
  changePasswordButton: {
    backgroundColor: Colors.backgroundDark,
    borderRadius: 30,
    padding: 18,
    alignItems: 'center',
    marginBottom: 15,
  },
  changePasswordButtonText: {
    color: Colors.textLight,
    fontSize: 16,
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: Colors.backgroundDark,
    borderRadius: 30,
    padding: 18,
    alignItems: 'center',
    marginBottom: 15,
  },
  logoutButtonText: {
    color: Colors.textLight,
    fontSize: 16,
    fontWeight: '600',
  },
  deleteAccountButton: {
    backgroundColor: Colors.error,
    borderRadius: 30,
    padding: 18,
    alignItems: 'center',
    marginBottom: 15,
  },
  deleteAccountButtonText: {
    color: Colors.textLight,
    fontSize: 16,
    fontWeight: '600',
  },
});
