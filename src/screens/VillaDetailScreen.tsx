import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { VillaDetailScreenProps } from "../types/navigation";
import { Property } from "../types/types";

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

export default function VillaDetailScreen({
  navigation,
  route,
}: VillaDetailScreenProps) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const property = propertyData.find((p) => p.id === route.params.propertyId);

  if (!property) {
    return (
      <View style={styles.container}>
        <Text>Property not found</Text>
      </View>
    );
  }

  const descriptionLength = 120;
  const isLongDescription = property.description.length > descriptionLength;
  const displayedDescription = showFullDescription
    ? property.description
    : property.description.substring(0, descriptionLength) + "...";

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Villa Detail</Text>
        <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={28}
            color={isFavorite ? "#FF6B6B" : "#000"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image source={property.image} style={styles.image} />
      </View>

      <View style={styles.content}>
        <View style={styles.titleRatingContainer}>
          <Text style={styles.title}>{property.name}</Text>
          <View style={styles.ratingCard}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>{property.rating}</Text>
          </View>
        </View>

        <Text style={styles.location}>{property.location}</Text>

        <View style={styles.detailsRow}>
          <View style={styles.detailCard}>
            <View style={styles.detailItemContainer}>
              <Ionicons name="bed" size={18} color="#333" />
              <Text style={styles.detailItem}>{property.rooms} Rooms</Text>
            </View>
          </View>
          <View style={styles.detailCard}>
            <View style={styles.detailItemContainer}>
              <Ionicons name="water" size={18} color="#333" />
              <Text style={styles.detailItem}>{property.baths} Baths</Text>
            </View>
          </View>
          {property.hasPool && (
            <View style={styles.detailCard}>
              <View style={styles.detailItemContainer}>
                <Ionicons name="water" size={18} color="#333" />
                <Text style={styles.detailItem}>Pool</Text>
              </View>
            </View>
          )}
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{displayedDescription}</Text>
          {isLongDescription && (
            <TouchableOpacity
              onPress={() => setShowFullDescription(!showFullDescription)}
            >
              <Text style={styles.readMore}>
                {showFullDescription ? "Read less..." : "Read more..."}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.priceContainer}>
          <View>
            <Text style={styles.priceLabel}>Price</Text>
            <Text style={styles.price}>${property.price}/night</Text>
          </View>
          <TouchableOpacity style={styles.bookingButton}>
            <Text style={styles.bookingButtonText}>Booking</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 25,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  backButton: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  favoriteButton: {
    fontSize: 24,
  },
  imageContainer: {
    height: 250,
    borderRadius: 20,
    marginHorizontal: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  titleRatingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    flex: 1,
  },
  ratingCard: {
    marginLeft: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#e8e8e8",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  location: {
    fontSize: 14,
    color: "#666",
    marginTop: 8,
  },
  detailsRow: {
    flexDirection: "row",
    marginTop: 16,
    gap: 20,
  },
  detailCard: {
    backgroundColor: "#e8e8e8",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  detailItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  detailItem: {
    fontSize: 12,
    color: "#333",
  },
  descriptionContainer: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 12,
    color: "#666",
    lineHeight: 18,
  },
  readMore: {
    fontSize: 12,
    color: "#007AFF",
    fontWeight: "bold",
    marginTop: 8,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 80,
  },
  priceLabel: {
    fontSize: 12,
    color: "#666",
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginTop: 4,
  },
  bookingButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 24,
  },
  bookingButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
