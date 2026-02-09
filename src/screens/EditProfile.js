import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
  TextInput,
  Animated
} from 'react-native';

export default function EditProfile({ visible, onClose }) {
  const slideAnim = React.useRef(new Animated.Value(-500)).current;

  React.useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      slideAnim.setValue(-500);
    }
  }, [visible]);

  const handleClose = () => {
    Animated.timing(slideAnim, {
      toValue: -500,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      onClose();
    });
  };

  return (
    <Modal
      visible={visible}
      animationType="none"
      transparent={true}
      onRequestClose={handleClose}
    >
      <View style={styles.modalOverlay}>
        <TouchableOpacity 
          style={styles.modalBackdrop} 
          activeOpacity={1} 
          onPress={handleClose}
        />
        <Animated.View 
          style={[
            styles.modalContent,
            {
              transform: [{ translateX: slideAnim }]
            }
          ]}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Back Button */}
            <TouchableOpacity 
              style={styles.backButton}
              onPress={handleClose}
            >
              <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>

            {/* Profile Image */}
            <View style={styles.modalProfileSection}>
              <View style={styles.modalAvatar}>
                <Image 
                  source={{ uri: 'https://i.pravatar.cc/150?img=33' }}
                  style={styles.modalAvatarImage}
                />
              </View>
              <Text style={styles.modalProfileName}>David Billa</Text>
            </View>

            {/* Form Fields */}
            <View style={styles.formContainer}>
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
              <TextInput
                style={styles.input}
                placeholder="Insta ID"
                placeholderTextColor="#999"
              />
            </View>

            {/* Action Buttons */}
            <TouchableOpacity style={styles.subscriptionButton}>
              <Text style={styles.subscriptionButtonText}>Manage Subscriptions</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Change Password</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Logout</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Delete Account</Text>
            </TouchableOpacity>

            <View style={{ height: 40 }} />
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalBackdrop: {
    flex: 1,
  },
  modalContent: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
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
