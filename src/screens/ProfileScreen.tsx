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
    <Ionicons name={icon as any} size={24} color="#FF8C00" />
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
    backgroundColor: "#000000",
  },
  avatarSection: {
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "#2A2A2A",
    borderBottomWidth: 1,
    borderBottomColor: "#3A3A3A",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: "#FF6B35",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: "#999",
  },
  statsSection: {
    flexDirection: "row",
    backgroundColor: "#2A2A2A",
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
    color: "#FF8C00",
  },
  statLabel: {
    fontSize: 12,
    color: "#999",
    marginTop: 5,
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: "#3A3A3A",
  },
  settingsList: {
    backgroundColor: "#2A2A2A",
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
    borderBottomColor: "#3A3A3A",
  },
  settingLabel: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: "#FFF",
  },
  logoutBtn: {
    backgroundColor: "#FF8C00",
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
