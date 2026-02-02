import React from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Booking App</Text>
      <Text style={styles.subtitle}>Sign In</Text>
      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>Sign In</Text>
      </Pressable>
      <Text style={styles.subtitle}>Create an Account</Text>
      <Pressable>
        <Text style={styles.link}>Sign Up</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: "#666",
  },
  link: {
    color: "#0a0404",
    fontSize: 16,
    marginBottom: 30,
  },
});
