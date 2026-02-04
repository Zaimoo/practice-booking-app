import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
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
		Alert.alert("Success", "Code sent to email (mock)", [{ text: "OK", onPress: () => navigation.navigate("Login") }]);
	};

	return (
		<View style={styles.page}>
			<View style={styles.card}>
				<Text style={styles.brand}>Booking</Text>
				<Text style={styles.title}>Send verification code</Text>

				<TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" placeholderTextColor="#9aa0a6" keyboardType="email-address" autoCapitalize="none" />

				<TouchableOpacity style={styles.primaryButton} onPress={handleSend}>
					<Text style={styles.buttonText}>Send code</Text>
				</TouchableOpacity>

				{sent && <Text style={styles.hint}>A code was sent (mock). Check your inbox.</Text>}
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
	hint: {
		marginTop: 12,
		color: "#6b6f76",
		textAlign: "center",
	},
});
