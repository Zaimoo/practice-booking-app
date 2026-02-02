import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Pressable,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { useState } from "react";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <TextInput onChangeText={(input) => setUname(input)} />
      <Text style={styles.subtitle}>Password</Text>
      <TextInput onChangeText={(input) => setPass(input)} />
      <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate("Forgot")}>
          <Text style={styles.link}>Forgot password?</Text>
        </Pressable>
      </View>
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
    fontSize: 14,
  },
});
