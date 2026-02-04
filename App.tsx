import { StatusBar } from "expo-status-bar";
<<<<<<< HEAD
import { RootNavigator } from "./src/navigation/RootNavigator";

export default function App() {
  return (
    <>
      <RootNavigator />
=======
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./src/types/navigation";
import LoginScreen from "./src/screens/LoginScreen";
import CreateAccountScreen from "./src/screens/CreateAccountScreen";
import ForgotScreen from "./src/screens/ForgotScreen";
import SendCodeScreen from "./src/screens/SendCodeScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Log In" }}
        />
        <Stack.Screen
          name="SignUp"
          component={CreateAccountScreen}
          options={{ title: "Create Account" }}
        />
        <Stack.Screen
          name="Forgot"
          component={ForgotScreen}
          options={{ title: "Forgot" }}
        />
        <Stack.Screen
          name="SendCode"
          component={SendCodeScreen}
          options={{ title: "Send Code" }}
        />
      </Stack.Navigator>
>>>>>>> 164522e82837707dc73b2e5a73024db8fba29f43
      <StatusBar style="auto" />
    </>
  );
}
