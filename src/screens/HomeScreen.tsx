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
import { HomeStackParamList } from "../types/navigation";
import { Property } from "../types/types";
import { RFValue, responsiveFontSize } from "../utils/responsive";

type Props = NativeStackScreenProps<HomeStackParamList, "HomeScreen">;

export default function HomeScreen({ navigation }: Props) {
  const [searchText, setSearchText] = useState("");

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

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={require("../../assets/images/profileimg.jpg")}
            style={styles.profileImage}
          />
          <Text style={styles.headerName}>John Smith</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
          <Ionicons name="notifications" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search by Location..."
          placeholderTextColor="#999"
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.filterIcon}>
          <Ionicons name="settings" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={propertyData}
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
                  <Ionicons name="bed" size={16} color="#FF8C00" />
                  <Text style={styles.infoText}>{item.rooms} Rooms</Text>
                </View>
                <View style={styles.iconTextContainer}>
                  <Ionicons name="water-outline" size={16} color="#FF8C00" />
                  <Text style={styles.infoText}>{item.baths} Baths</Text>
                </View>
                {item.hasPool && (
                  <View style={styles.iconTextContainer}>
                    <Ionicons name="water" size={16} color="#FF8C00" />
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
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000000",
  },
  container: {
    flex: 1,
    backgroundColor: "#000000",
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
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  profileImage: {
    width: RFValue(40),
    height: RFValue(40),
    borderRadius: RFValue(20),
    marginRight: RFValue(12),
  },
  headerName: {
    fontSize: responsiveFontSize(18),
    fontWeight: "bold",
    color: "#FFF",
  },
  bellIcon: {
    fontSize: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: RFValue(24),
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#2A2A2A",
    borderRadius: RFValue(24),
    paddingHorizontal: RFValue(16),
    paddingVertical: RFValue(12),
    fontSize: responsiveFontSize(14),
    color: "#FFF",
  },
  filterIcon: {
    width: RFValue(44),
    height: RFValue(44),
    borderRadius: RFValue(22),
    backgroundColor: "#FF8C00",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: RFValue(8),
  },
  card: {
    marginBottom: RFValue(20),
    borderRadius: RFValue(12),
    overflow: "hidden",
    backgroundColor: "#2A2A2A",
  },
  cardImage: {
    width: "100%",
    height: RFValue(200),
    borderTopLeftRadius: RFValue(12),
    borderTopRightRadius: RFValue(12),
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "space-between",
    padding: RFValue(16),
    borderRadius: RFValue(12),
  },
  cardContent: {
    flex: 0,
  },
  cardTitle: {
    fontSize: responsiveFontSize(16),
    fontWeight: "bold",
    color: "#FFF",
    marginTop: RFValue(12),
    marginHorizontal: RFValue(12),
  },
  cardLocation: {
    fontSize: responsiveFontSize(12),
    color: "#999",
    marginHorizontal: RFValue(12),
    marginTop: RFValue(4),
    marginBottom: 0,
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  cardInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: RFValue(12),
    paddingVertical: RFValue(8),
    backgroundColor: "#2A2A2A",
    borderBottomLeftRadius: RFValue(12),
    borderBottomRightRadius: RFValue(12),
  },
  cardDetailsLeft: {
    flexDirection: "row",
    gap: RFValue(16),
  },
  infoText: {
    fontSize: responsiveFontSize(12),
    color: "#999",
  },
  price: {
    fontSize: responsiveFontSize(14),
    fontWeight: "bold",
    color: "#FF8C00",
  },
});
