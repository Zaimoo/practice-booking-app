import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
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
    <View style={styles.page}>
      <View style={styles.card}>
        <Text style={styles.brand}>Booking</Text>
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
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#f7f7f8",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  card: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 20,
    elevation: 6,
    alignItems: "stretch",
  },
  brand: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0b0b0b",
    marginBottom: 6,
    textAlign: "center",
  },
  title: {
    fontSize: 18,
    color: "#60636a",
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
    backgroundColor: "#0b6478",
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
    color: "#0b6478",
    fontWeight: "600",
  },
});
