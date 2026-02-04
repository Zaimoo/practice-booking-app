import React, { useState } from "react";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "../types/navigation";
import { Property } from "../types/types";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

type Props = BottomTabScreenProps<BottomTabParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  const [searchText, setSearchText] = useState("");

  const propertyData: Property[] = [
    {
      id: "1",
      name: "Balay Ni Cezar",
      location: "Purok Sudlonon",
      rooms: 1,
      baths: 1,
      price: 5000,
    },
    {
      id: "2",
      name: "Bilyaaran ni Jinly",
      location: "Tibanga Creek",
      rooms: 2,
      baths: 4,
      price: 2500,
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerName}>John Smith</Text>
          <Text style={styles.headerLocation}>Paris, France</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.bellIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search by Location..."
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.filterIcon}>
          <Text>⚙️</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={propertyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardImagePlaceholder}>
              <Text style={styles.imagePlaceholder}>🏠</Text>
            </View>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardLocation}>{item.location}</Text>
            <View style={styles.cardInfo}>
              <Text style={styles.infoText}>🛏️ {item.rooms} Rooms</Text>
              <Text style={styles.infoText}>🚿 {item.baths} Baths</Text>
              <Text style={styles.price}>${item.price}/night</Text>
            </View>
          </View>
        )}
        scrollEnabled={false}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 20,
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
    color: "#000",
  },
  headerLocation: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  bellIcon: {
    fontSize: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: "#333",
  },
  filterIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  card: {
    marginBottom: 20,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  cardImagePlaceholder: {
    width: "100%",
    height: 200,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  imagePlaceholder: {
    fontSize: 60,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 12,
    marginHorizontal: 12,
    color: "#000",
  },
  cardLocation: {
    fontSize: 12,
    color: "#999",
    marginHorizontal: 12,
    marginTop: 4,
  },
  cardInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  infoText: {
    fontSize: 12,
    color: "#666",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
});
