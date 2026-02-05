import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

// Base design dimensions (use common device size as reference)
const baseWidth = 375;
const baseHeight = 667;

// Calculate responsive value based on screen width
export const RFValue = (value: number): number => {
  return (width / baseWidth) * value;
};

// Get screen dimensions
export const screenWidth = width;
export const screenHeight = height;

// Responsive padding/margin
export const responsivePadding = (base: number) => RFValue(base);
export const responsiveMargin = (base: number) => RFValue(base);

// Responsive font sizes
export const responsiveFontSize = (size: number) => {
  const scale = width / baseWidth;
  return Math.round(size * scale);
};

// Device type detection
export const isSmallDevice = width < 375;
export const isMediumDevice = width >= 375 && width < 768;
export const isLargeDevice = width >= 768;

// Responsive image heights
export const responsiveImageHeight = (baseHeight: number) => {
  return (width / 16) * (baseHeight / (width / 16)); // Maintain aspect ratio
};
