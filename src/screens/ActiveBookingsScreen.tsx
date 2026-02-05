import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useActiveBookings } from "../context/ActiveBookingsContext";
import { Property } from "../types/types";
import { RFValue, responsiveFontSize } from "../utils/responsive";

type Props = NativeStackScreenProps<any, "ActiveBooking">;

export default function ActiveBookingsScreen({ navigation }: Props) {
  const [searchText, setSearchText] = useState("");
  const { activeBookings } = useActiveBookings();

  // Sample property data - same as HomeScreen
  const propertyData: Property[] = [
    {
      id: "1",
      name: "Neo Classic Villa House",
      location: "Avenue Montaigne, Paris",
      rooms: 4,
      baths: 3,
      price: 280,
      hasPool: true,
      rating: 4.8,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar laoreet felis nec erat. Aliquam egestas, velit at condimentum placerat, sem sapien laoreet mauris, dictum porttitor nunc enim.",
      image: require("../../assets/images/image1.jpg"),
    },
    {
      id: "2",
      name: "Castle Mansion Villa House",
      location: "Rue Saint-Rustigue, Paris",
      rooms: 3,
      baths: 2,
      price: 170,
      hasPool: false,
      rating: 4.9,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar laoreet felis nec erat. Aliquam egestas, velit at condimentum placerat, sem sapien laoreet mauris, dictum porttitor nunc enim.",
      image: require("../../assets/images/image2.jpg"),
    },
    {
      id: "3",
      name: "Hollywood Mansion Villa House",
      location: "Los Angeles, United States",
      rooms: 7,
      baths: 5,
      price: 1250,
      hasPool: true,
      rating: 4.7,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar laoreet felis nec erat. Aliquam egestas, velit at condimentum placerat, sem sapien laoreet mauris, dictum porttitor nunc enim.",
      image: require("../../assets/images/image3.jpg"),
    },
  ];

  // Filter properties: only show booked villas that match search text
  const filteredBookings = propertyData.filter(
    (property) =>
      activeBookings.some((b) => b.propertyId === property.id) &&
      (property.name.toLowerCase().includes(searchText.toLowerCase()) ||
        property.location.toLowerCase().includes(searchText.toLowerCase())),
  );

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Active Bookings</Text>
        <TouchableOpacity>
          <Ionicons name="notifications" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search Bookings..."
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.filterIcon}>
          <Ionicons name="settings" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Favorites List */}
      {filteredBookings.length > 0 ? (
        <FlatList
          data={filteredBookings}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate("VillaDetail", { propertyId: item.id })
              }
            >
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardLocation}>{item.location}</Text>
              <View style={styles.cardInfo}>
                <View style={styles.cardDetailsLeft}>
                  <View style={styles.iconTextContainer}>
                    <Ionicons name="bed" size={16} color="#666" />
                    <Text style={styles.infoText}>{item.rooms} Rooms</Text>
                  </View>
                  <View style={styles.iconTextContainer}>
                    <Ionicons name="water" size={16} color="#666" />
                    <Text style={styles.infoText}>{item.baths} Baths</Text>
                  </View>
                  {item.hasPool && (
                    <View style={styles.iconTextContainer}>
                      <Ionicons name="water" size={16} color="#666" />
                      <Text style={styles.infoText}>Pool</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.price}>${item.price}/night</Text>
              </View>
            </TouchableOpacity>
          )}
          scrollEnabled={false}
        />
      ) : (
        // Empty state
        <View style={styles.emptyContainer}>
          <Ionicons name="calendar-outline" size={64} color="#ccc" />
          <Text style={styles.emptyText}>No Active Bookings yet</Text>
          <Text style={styles.emptySubText}>
            Book now to see your bookings here
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: RFValue(16),
    paddingTop: RFValue(35),
  },
  scrollContent: {
    paddingBottom: RFValue(20),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: RFValue(20),
  },
  headerTitle: {
    fontSize: responsiveFontSize(22),
    fontWeight: "bold",
    color: "#000",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: RFValue(24),
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: RFValue(24),
    paddingHorizontal: RFValue(16),
    paddingVertical: RFValue(12),
    fontSize: responsiveFontSize(14),
    color: "#333",
  },
  filterIcon: {
    width: RFValue(44),
    height: RFValue(44),
    borderRadius: RFValue(22),
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: RFValue(8),
  },
  card: {
    marginBottom: RFValue(20),
    borderRadius: RFValue(12),
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  cardImage: {
    width: "100%",
    height: RFValue(200),
    borderTopLeftRadius: RFValue(12),
    borderTopRightRadius: RFValue(12),
  },
  cardTitle: {
    fontSize: responsiveFontSize(16),
    fontWeight: "bold",
    color: "#000",
    marginTop: RFValue(12),
    marginHorizontal: RFValue(12),
  },
  cardLocation: {
    fontSize: responsiveFontSize(12),
    color: "#666",
    marginHorizontal: RFValue(12),
    marginTop: RFValue(4),
    marginBottom: 0,
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: RFValue(4),
  },
  cardInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: RFValue(12),
    paddingVertical: RFValue(8),
    backgroundColor: "#fff",
    borderBottomLeftRadius: RFValue(12),
    borderBottomRightRadius: RFValue(12),
  },
  cardDetailsLeft: {
    flexDirection: "row",
    gap: RFValue(16),
  },
  infoText: {
    fontSize: responsiveFontSize(12),
    color: "#666",
  },
  price: {
    fontSize: responsiveFontSize(14),
    fontWeight: "bold",
    color: "#000",
  },
  emptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFValue(100),
  },
  emptyText: {
    fontSize: responsiveFontSize(18),
    fontWeight: "bold",
    color: "#333",
    marginTop: RFValue(16),
  },
  emptySubText: {
    fontSize: responsiveFontSize(14),
    color: "#999",
    marginTop: RFValue(8),
    textAlign: "center",
  },
});
