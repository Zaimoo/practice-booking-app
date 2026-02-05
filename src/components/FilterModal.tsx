import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useActiveBookings } from "../context/ActiveBookingsContext";

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
  onApply: (filters: FilterOptions) => void;
  propertyId: string;
  propertyName: string;
  propertyImage: any;
  propertyPrice: number;
}

export interface FilterOptions {
  category: string;
  priceRange: [number, number];
  bedrooms: string;
  bathrooms: string;
  facilities: string[];
  rating: string;
  checkIn?: Date;
  checkOut?: Date;
  guests?: number;
}

export default function FilterModal({
  visible,
  onClose,
  onApply,
  propertyId,
  propertyName,
  propertyImage,
  propertyPrice,
}: FilterModalProps) {
  const { addBooking } = useActiveBookings();

  const [category, setCategory] = useState("All Category");
  const [priceRange, setPriceRange] = useState<[number, number]>([50, 500]);
  const [bedrooms, setBedrooms] = useState("3 Bedroom");
  const [bathrooms, setBathrooms] = useState("2 Rooms");
  const [facilities, setFacilities] = useState<string[]>([]);
  const [rating, setRating] = useState("Any");

  const categories = ["All Category", "House", "Hotels"];
  const bedroomOptions = ["1 Bedroom", "2 Bedroom", "3 Bedroom", "4+ Bedroom"];
  const bathroomOptions = ["1 Room", "2 Rooms", "3 Rooms", "4+ Rooms"];
  const facilityOptions = ["Wi-Fi", "Parking", "Pool", "Breakfast"];
  const ratingOptions = ["Any", "5.0", "4.0", "3.0"];

  const toggleFacility = (facility: string) => {
    if (facilities.includes(facility)) {
      setFacilities(facilities.filter((f) => f !== facility));
    } else {
      setFacilities([...facilities, facility]);
    }
  };

  const handleApply = () => {
    const checkInDate = new Date();
    const checkOutDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const guestsCount = 2;

    const filters: FilterOptions = {
      category,
      priceRange,
      bedrooms,
      bathrooms,
      facilities,
      rating,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guests: guestsCount,
    };

    const booking = {
      id: Date.now().toString(),
      propertyId,
      propertyName,
      propertyImage,
      propertyPrice,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guests: guestsCount,
      status: "active" as const,
    };

    addBooking(booking);
    onApply(filters);
    onClose();
  };

  const handleClearAll = () => {
    setCategory("All Category");
    setPriceRange([50, 500]);
    setBedrooms("3 Bedroom");
    setBathrooms("2 Rooms");
    setFacilities([]);
    setRating("Any");
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <TouchableOpacity
          style={styles.modalContent}
          activeOpacity={1}
          onPress={(e) => e.stopPropagation()}
        >
          <View style={styles.header}>
            <Text style={styles.title}>Filter Place</Text>
            <TouchableOpacity onPress={handleClearAll}>
              <Text style={styles.clearAll}>Clear all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Category */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Category</Text>
              <View style={styles.optionsRow}>
                {categories.map((cat) => (
                  <TouchableOpacity
                    key={cat}
                    style={[
                      styles.chip,
                      category === cat && styles.chipSelected,
                    ]}
                    onPress={() => setCategory(cat)}
                  >
                    <Text
                      style={[
                        styles.chipText,
                        category === cat && styles.chipTextSelected,
                      ]}
                    >
                      {cat}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Range Price */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Range Price</Text>
              <View style={styles.priceLabels}>
                <Text style={styles.priceText}>${priceRange[0]}</Text>
                <Text style={styles.priceText}>${priceRange[1]}</Text>
              </View>
              <Slider
                style={styles.slider}
                minimumValue={50}
                maximumValue={500}
                value={priceRange[1]}
                onValueChange={(value) =>
                  setPriceRange([priceRange[0], Math.round(value)])
                }
                minimumTrackTintColor="#007AFF"
                maximumTrackTintColor="#E0E0E0"
                thumbTintColor="#007AFF"
              />
            </View>

            {/* Bed & Bath Rooms */}
            <View style={styles.section}>
              <View style={styles.twoColumns}>
                <View style={styles.column}>
                  <Text style={styles.sectionTitle}>Bed Rooms</Text>
                  <View style={styles.dropdown}>
                    <Text style={styles.dropdownText}>{bedrooms}</Text>
                    <Ionicons name="chevron-down" size={20} color="#666" />
                  </View>
                </View>
                <View style={styles.column}>
                  <Text style={styles.sectionTitle}>Bath Rooms</Text>
                  <View style={styles.dropdown}>
                    <Text style={styles.dropdownText}>{bathrooms}</Text>
                    <Ionicons name="chevron-down" size={20} color="#666" />
                  </View>
                </View>
              </View>
            </View>

            {/* Facilities */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Facilities</Text>
              <View style={styles.facilitiesGrid}>
                {facilityOptions.map((facility) => (
                  <TouchableOpacity
                    key={facility}
                    style={[
                      styles.facilityChip,
                      facilities.includes(facility) &&
                        styles.facilityChipSelected,
                    ]}
                    onPress={() => toggleFacility(facility)}
                  >
                    <Ionicons
                      name={
                        facility === "Wi-Fi"
                          ? "wifi"
                          : facility === "Parking"
                            ? "car"
                            : facility === "Pool"
                              ? "water"
                              : "restaurant"
                      }
                      size={18}
                      color={facilities.includes(facility) ? "#007AFF" : "#666"}
                    />
                    <Text
                      style={[
                        styles.facilityText,
                        facilities.includes(facility) &&
                          styles.facilityTextSelected,
                      ]}
                    >
                      {facility}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Ratings */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Ratings</Text>
              <View style={styles.optionsRow}>
                {ratingOptions.map((rate) => (
                  <TouchableOpacity
                    key={rate}
                    style={[
                      styles.ratingChip,
                      rating === rate && styles.ratingChipSelected,
                    ]}
                    onPress={() => setRating(rate)}
                  >
                    {rate !== "Any" && (
                      <Ionicons
                        name="star"
                        size={16}
                        color={rating === rate ? "#FFF" : "#FFD700"}
                      />
                    )}
                    <Text
                      style={[
                        styles.ratingText,
                        rating === rate && styles.ratingTextSelected,
                      ]}
                    >
                      {rate}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>

          {/* Apply Button */}
          <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
            <Text style={styles.applyButtonText}>Apply Now</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#1A1A1A",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
    maxHeight: "85%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  clearAll: {
    fontSize: 14,
    color: "#FF8C00",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFF",
    marginBottom: 12,
  },
  optionsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  chip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#2A2A2A",
    borderWidth: 1,
    borderColor: "#3A3A3A",
  },
  chipSelected: {
    backgroundColor: "#FF8C00",
    borderColor: "#FF8C00",
  },
  chipText: {
    fontSize: 14,
    color: "#999",
  },
  chipTextSelected: {
    color: "#FFF",
    fontWeight: "600",
  },
  priceLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  priceText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FF8C00",
  },
  slider: {
    width: "100%",
    height: 40,
  },
  twoColumns: {
    flexDirection: "row",
    gap: 12,
  },
  column: {
    flex: 1,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2A2A2A",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#3A3A3A",
  },
  dropdownText: {
    fontSize: 14,
    color: "#FFF",
  },
  facilitiesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  facilityChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#2A2A2A",
    borderWidth: 1,
    borderColor: "#3A3A3A",
  },
  facilityChipSelected: {
    backgroundColor: "#FF8C00",
    borderColor: "#FF8C00",
  },
  facilityText: {
    fontSize: 14,
    color: "#999",
  },
  facilityTextSelected: {
    color: "#FFF",
    fontWeight: "600",
  },
  ratingChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#2A2A2A",
    borderWidth: 1,
    borderColor: "#3A3A3A",
  },
  ratingChipSelected: {
    backgroundColor: "#FF8C00",
    borderColor: "#FF8C00",
  },
  ratingText: {
    fontSize: 14,
    color: "#999",
  },
  ratingTextSelected: {
    color: "#FFF",
    fontWeight: "600",
  },
  applyButton: {
    backgroundColor: "#FF8C00",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
  },
  applyButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
