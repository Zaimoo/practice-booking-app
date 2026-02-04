import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./src/types/navigation";
import { RootNavigator } from "./src/navigation/RootNavigator";
import LoginScreen from "./src/screens/LoginScreen";
import CreateAccountScreen from "./src/screens/CreateAccountScreen";
import ForgotScreen from "./src/screens/ForgotScreen";
import SendCodeScreen from "./src/screens/SendCodeScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
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
          <Stack.Screen
            name="MainTabs"
            component={RootNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
