import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActiveBookingsProvider } from "./src/context/ActiveBookingsContext";
import { FavoritesProvider } from "./src/context/FavoritesContext";
import { RootNavigator } from "./src/navigation/RootNavigator";
import CreateAccountScreen from "./src/screens/CreateAccountScreen";
import ForgotScreen from "./src/screens/ForgotScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SendCodeScreen from "./src/screens/SendCodeScreen";
import { RootStackParamList } from "./src/types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ActiveBookingsProvider>
      <FavoritesProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={CreateAccountScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Forgot"
              component={ForgotScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SendCode"
              component={SendCodeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainTabs"
              component={RootNavigator}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesProvider>
    </ActiveBookingsProvider>
  );
}
