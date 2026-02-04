import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  MainTabs: NavigatorScreenParams<BottomTabParamList>;
  Details: { itemId: number };
  Login: undefined;
  SignUp: undefined;
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
