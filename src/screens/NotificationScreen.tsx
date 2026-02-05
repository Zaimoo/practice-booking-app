import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  isRead: boolean;
}

export default function NotificationScreen() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "Booking Confirmed",
      message: "Your booking for Neo Classic Villa has been confirmed.",
      time: "2 hours ago",
      isRead: false,
    },
    {
      id: "2",
      title: "Payment Received",
      message: "Payment of $280 for your recent booking has been processed.",
      time: "1 day ago",
      isRead: true,
    },
    {
      id: "3",
      title: "Check-in Reminder",
      message: "Don't forget to check-in at Neo Classic Villa tomorrow.",
      time: "3 days ago",
      isRead: false,
    },
    {
      id: "4",
      title: "New Property Available",
      message: "A new villa matching your preferences is now available.",
      time: "1 week ago",
      isRead: true,
    },
  ]);

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, isRead: true } : notif,
      ),
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  const renderRightActions = (id: string) => (
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => deleteNotification(id)}
    >
      <Ionicons name="trash" size={24} color="#FFF" />
      <Text style={styles.deleteText}>Delete</Text>
    </TouchableOpacity>
  );

  const renderNotification = ({ item }: { item: Notification }) => (
    <Swipeable
      renderRightActions={() => renderRightActions(item.id)}
      rightThreshold={75}
    >
      <TouchableOpacity
        style={[styles.notificationCard, !item.isRead && styles.unreadCard]}
        onPress={() => markAsRead(item.id)}
      >
        <View style={styles.notificationContent}>
          <Text
            style={[
              styles.notificationTitle,
              !item.isRead && styles.unreadText,
            ]}
          >
            {item.title}
          </Text>
          <Text style={styles.notificationMessage}>{item.message}</Text>
          <Text style={styles.notificationTime}>{item.time}</Text>
        </View>
        {!item.isRead && <View style={styles.unreadDot} />}
      </TouchableOpacity>
    </Swipeable>
  );

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerName}>Notifications</Text>
          <Text style={styles.headerLocation}>Stay updated</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="settings" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderNotification}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingHorizontal: 16,
    paddingTop: 35,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerLeft: {
    flex: 1,
  },
  headerName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
  headerLocation: {
    fontSize: 14,
    color: "#999",
    marginTop: 4,
  },
  notificationCard: {
    backgroundColor: "#2A2A2A",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  unreadCard: {
    borderLeftWidth: 4,
    borderLeftColor: "#FF6B35",
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 4,
  },
  unreadText: {
    color: "#FF6B35",
  },
  notificationMessage: {
    fontSize: 14,
    color: "#CCC",
    marginBottom: 8,
    lineHeight: 20,
  },
  notificationTime: {
    fontSize: 12,
    color: "#999",
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FF6B35",
    marginLeft: 12,
  },
  deleteButton: {
    backgroundColor: "#FF3B30",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    borderRadius: 12,
    marginBottom: 12,
  },
  deleteText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 4,
  },
});
