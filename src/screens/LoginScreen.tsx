import { CommonActions } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");

  return (
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
            // Navigate to MainTabs (bottom tab navigation with Home screen)
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "MainTabs" }],
              }),
            );
          }}
        >
          <Text style={styles.buttonText}>Log In</Text>
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
  link: {
    marginTop: 12,
    textAlign: "center",
    color: "#FF8C00",
  },
  linkSecondary: {
    marginTop: 8,
    textAlign: "center",
    color: "#FF8C00",
    fontWeight: "600",
  },
});
