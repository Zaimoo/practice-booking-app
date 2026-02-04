import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
<<<<<<< HEAD
  MainTabs: NavigatorScreenParams<BottomTabParamList>;
  Details: { itemId: number };
=======
>>>>>>> 164522e82837707dc73b2e5a73024db8fba29f43
  Login: undefined;
  SignUp: undefined;
  Forgot: undefined;
  SendCode: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Favorites: undefined;
  Profile: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "MainTabs"
>;
export type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Details"
>;
