import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type HomeStackParamList = {
  HomeScreen: undefined;
  VillaDetail: { propertyId: string };
};

export type RootStackParamList = {
  MainTabs: NavigatorScreenParams<BottomTabParamList>;
  Details: { itemId: number };
  Login: undefined;
  SignUp: undefined;
  Forgot: undefined;
  SendCode: undefined;
};

export type BottomTabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  ActiveBooking: undefined;
  Favorites: undefined;
  Profile: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  "HomeScreen"
>;
export type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Details"
>;
export type VillaDetailScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  "VillaDetail"
>;
