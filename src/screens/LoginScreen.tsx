import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
  TouchableOpacity,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { useState } from "react";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");

  return (
    <View style={styles.page}>
      <View style={styles.card}>
        <Text style={styles.brand}>Booking</Text>
        <Text style={styles.title}>Sign in</Text>

        <TextInput
          style={styles.input}
          value={uname}
          onChangeText={(input) => setUname(input)}
          placeholder="Email"
          placeholderTextColor="#9aa0a6"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          value={pass}
          onChangeText={(input) => setPass(input)}
          placeholder="Password"
          placeholderTextColor="#9aa0a6"
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => {
            if (!uname.trim() || !pass.trim()) {
              Alert.alert("Validation", "Please enter email and password");
              return;
            }
            Alert.alert("Success", "Logged in (mock)");
          }}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <Pressable onPress={() => navigation.navigate("Forgot")}>
          <Text style={styles.link}>Forgot password?</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.linkSecondary}>Create an account</Text>
        </Pressable>
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
  link: {
    marginTop: 12,
    textAlign: "center",
    color: "#6b6f76",
  },
  linkSecondary: {
    marginTop: 8,
    textAlign: "center",
    color: "#0b6478",
    fontWeight: "600",
  },
});
