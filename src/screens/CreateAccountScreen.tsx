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

type Props = NativeStackScreenProps<RootStackParamList, "SignUp">;

export default function CreateAccountScreen({ navigation }: Props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirm, setConfirm] = React.useState("");

  const handleCreate = () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      Alert.alert("Validation", "Please fill all fields");
      return;
    }
    if (password !== confirm) {
      Alert.alert("Validation", "Passwords do not match");
      return;
    }
    Alert.alert("Success", "Account created (mock)", [
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
          <Text style={styles.title}>Create account</Text>

          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Full name"
            placeholderTextColor="#9aa0a6"
          />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#9aa0a6"
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#9aa0a6"
          />
          <TextInput
            style={styles.input}
            value={confirm}
            onChangeText={setConfirm}
            placeholder="Confirm Password"
            secureTextEntry
            placeholderTextColor="#9aa0a6"
          />

          <TouchableOpacity style={styles.primaryButton} onPress={handleCreate}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 12 }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.linkSecondary}>Back to login</Text>
          </TouchableOpacity>
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
  linkSecondary: {
    marginTop: 8,
    textAlign: "center",
    color: "#FF8C00",
    fontWeight: "600",
  },
});
