import { Ionicons } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BottomTabParamList } from "../types/navigation";

type Props = NativeStackScreenProps<BottomTabParamList, "Profile">;

interface SettingItemProps {
  icon: string;
  label: string;
  onPress?: () => void;
}

const SettingItem: React.FC<SettingItemProps> = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.settingItem} onPress={onPress}>
    <Ionicons name={icon as any} size={24} color="#333" />
    <Text style={styles.settingLabel}>{label}</Text>
    <Ionicons name="chevron-forward" size={20} color="#999" />
  </TouchableOpacity>
);

export default function ProfileScreen({ navigation }: Props) {
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    avatar: require("../../assets/images/profileimg.jpg"),
    bookings: 5,
    favorites: 12,
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarSection}>
        <Image source={user.avatar} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      <View style={styles.statsSection}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{user.bookings}</Text>
          <Text style={styles.statLabel}>Bookings</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{user.favorites}</Text>
          <Text style={styles.statLabel}>Favorites</Text>
        </View>
      </View>

      <View style={styles.settingsList}>
        <SettingItem icon="person" label="Edit Profile" />
        <SettingItem icon="lock-closed" label="Change Password" />
        <SettingItem icon="notifications" label="Notifications" />
        <SettingItem icon="card" label="Payment Methods" />
        <SettingItem icon="help-circle" label="About & Help" />
      </View>

      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: "Login" }],
            }),
          );
        }}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  avatarSection: {
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: "#999",
  },
  statsSection: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginVertical: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    paddingVertical: 20,
    justifyContent: "space-around",
    alignItems: "center",
  },
  statBox: {
    alignItems: "center",
    flex: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007AFF",
  },
  statLabel: {
    fontSize: 12,
    color: "#999",
    marginTop: 5,
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: "#eee",
  },
  settingsList: {
    backgroundColor: "#fff",
    marginHorizontal: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  settingLabel: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: "#333",
  },
  logoutBtn: {
    backgroundColor: "#FF3B30",
    marginHorizontal: 15,
    marginVertical: 30,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
