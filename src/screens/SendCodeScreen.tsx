import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "SendCode">;

export default function SendCodeScreen({ navigation }: Props) {
  const [email, setEmail] = React.useState("");
  const [sent, setSent] = React.useState(false);

  const handleSend = () => {
    if (!email.trim()) {
      Alert.alert("Error", "Please enter your email");
      return;
    }
    // mock sending code
    setSent(true);
    Alert.alert("Success", "Code sent to email (mock)", [
      { text: "OK", onPress: () => navigation.navigate("Login") },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <View style={styles.page}>
        <View style={styles.card}>
          <View style={styles.brandContainer}>
            <View style={styles.brandBlack}>
              <Text style={styles.brandWhite}>Booking</Text>
            </View>
            <View style={styles.brandOrange}>
              <Text style={styles.brandDark}>Hub</Text>
            </View>
          </View>
          <Text style={styles.title}>Enter the code we sent to</Text>

          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="CODE"
            placeholderTextColor="#9aa0a6"
            keyboardType="number-pad"
            autoCapitalize="none"
          />

          <TouchableOpacity style={styles.primaryButton} onPress={handleSend}>
            <Text style={styles.buttonText}>Verify</Text>
          </TouchableOpacity>

          {sent && (
            <Text style={styles.hint}>
              A code was sent (mock). Check your inbox.
            </Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000000",
  },
  page: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  card: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "#000000",
    borderRadius: 14,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 20,
    elevation: 30,
    alignItems: "stretch",
  },
  brandContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 6,
    gap: 0,
  },
  brandBlack: {
    backgroundColor: "#000000",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  brandOrange: {
    backgroundColor: "#FF8C00",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  brandWhite: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  brandDark: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1a1a1a",
  },
  title: {
    fontSize: 18,
    color: "#ffffff",
    marginBottom: 18,
    textAlign: "center",
  },
  input: {
    height: 48,
    backgroundColor: "#f2f3f5",
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 12,
    color: "#111",
    textAlign: "center",
    fontSize: 20,
    letterSpacing: 4,
  },
  primaryButton: {
    marginTop: 8,
    backgroundColor: "#FF8C00",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  hint: {
    marginTop: 12,
    color: "#999",
    textAlign: "center",
  },
});
