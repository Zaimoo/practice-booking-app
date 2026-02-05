# 🏡 BookingHub - Villa Booking App

A modern, sleek React Native mobile application for browsing and booking luxury villas and vacation properties. Built with Expo and TypeScript, featuring a stunning black and orange theme.

![App Version](https://img.shields.io/badge/version-2.0.0-orange)
![React Native](https://img.shields.io/badge/React%20Native-0.76-blue)
![Expo](https://img.shields.io/badge/Expo-SDK%2052-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)

## ✨ Features

### 🎨 Modern Dark Theme UI
- **Professional Design**: Sleek black (#000000) and orange (#FF8C00) color scheme
- **BookingHub Branding**: Distinctive split-color logo across authentication screens
- **Consistent Experience**: Unified design language throughout the app
- **Responsive Layout**: Adaptive design for various screen sizes

### 🏠 Property Management
- **Property Browsing**: Explore luxury villas with detailed information
- **High-Quality Images**: Professional property photography
- **Comprehensive Details**:
  - Number of bedrooms and bathrooms
  - Pool availability
  - Nightly pricing
  - Location information
  - User ratings with star display
  - Full property descriptions with expand/collapse

### 🔍 Advanced Search & Filtering
- **Smart Search**: Real-time search by property name or location
- **Comprehensive Filter Modal**:
  - Category filters (House, Hotels, All Categories)
  - Price range slider ($50-$500)
  - Bedroom count selection
  - Bathroom count selection
  - Facilities (Wi-Fi, Parking, Pool, Breakfast)
  - Rating filters (5.0, 4.0, 3.0, Any)
- **User-Friendly**: Tap outside modal to dismiss
- **Visual Feedback**: Selected filters highlighted in orange

### 📅 Booking Management System
- **Easy Booking**: One-tap booking with filter preferences
- **Active Bookings Tab**: Dedicated screen for viewing all bookings
- **Booking Details**:
  - Check-in and check-out dates
  - Number of guests
  - Property information
  - Booking status tracking
- **Context-Based State**: Persistent booking data using React Context API

### ❤️ Favorites System
- **Quick Favorites**: Add/remove properties with heart icon tap
- **Visual Indicators**: Filled heart (orange) for favorited properties
- **Favorites Screen**: Dedicated view for all saved properties
- **Persistent Storage**: Favorites maintained using Context API
- **Search Favorites**: Filter through saved properties

### 👤 User Profile
- **Profile Management**: Centralized user settings
- **Statistics Dashboard**:
  - Total bookings count
  - Favorites count
- **Quick Access Menu**:
  - Edit Profile
  - Change Password
  - Notifications settings
  - Payment Methods
  - About & Help
- **Secure Logout**: Safe sign-out with navigation reset

### 🧭 Intuitive Navigation
- **Bottom Tab Navigation**:
  - 🏠 Home - Property browsing
  - 📅 Bookings - Active bookings
  - ❤️ Favorites - Saved properties
  - 👤 Profile - User settings
- **Stack Navigation**: Seamless screen transitions
- **Themed Tab Bar**: Orange active indicators with black background
- **Header Management**: Clean interface without redundant headers

### 🔐 Complete Authentication Flow
- **Login Screen**: Secure user authentication with BookingHub branding
- **Sign Up**: New user registration with validation
- **Forgot Password**: Password recovery workflow
- **Verification Code**: SMS/Email code verification
- **Form Validation**: Real-time input validation

## 🛠️ Tech Stack

### Core
- **Framework**: React Native with Expo SDK 52
- **Language**: TypeScript 5.3
- **Navigation**: React Navigation v6
  - Stack Navigator
  - Bottom Tab Navigator
- **State Management**: React Context API

### UI & Components
- **UI Library**: React Native core components
- **Icons**: Expo Vector Icons (Ionicons)
- **Slider**: @react-native-community/slider
- **Styling**: StyleSheet API with custom utilities

### Development Tools
- **Package Manager**: npm/yarn
- **Development**: Expo CLI
- **Type Checking**: TypeScript strict mode

## 📱 Screens Overview

### Authentication Screens
1. **Login Screen** - User sign-in with BookingHub branding
2. **Sign Up Screen** - New account creation
3. **Forgot Password Screen** - Initiate password recovery
4. **Send Code Screen** - Verification code entry

### Main Application Screens
5. **Home Screen** - Property listings with search
6. **Villa Detail Screen** - Detailed property view with booking
7. **Active Bookings Screen** - View and manage bookings
8. **Favorites Screen** - Saved properties
9. **Profile Screen** - User settings and information

### Modals
10. **Filter Modal** - Advanced booking filters

## 🚀 Getting Started

### Prerequisites
```bash
node >= 18.x
npm >= 9.x or yarn >= 1.22.x
expo-cli
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/practice-booking-app.git
cd practice-booking-app
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Install iOS dependencies (macOS only)**
```bash
cd ios && pod install && cd ..
```

4. **Start the development server**
```bash
npx expo start
```

5. **Run on your device**
- **iOS**: Press `i` or scan QR with Camera app
- **Android**: Press `a` or scan QR with Expo Go app
- **Web**: Press `w` (if supported)

### Troubleshooting

**Black Screen Issue:**
```bash
npx expo start --clear
```

**Port Conflict:**
```bash
npx kill-port 8081
npx expo start --port 8082
```

**Metro Bundler Issues:**
```bash
rm -rf node_modules
npm install
npx expo start --clear
```

## 📂 Project Structure

```
practice-booking-app/
├── assets/
│   ├── images/              # Property and profile images
│   │   ├── image1.jpg
│   │   ├── image2.jpg
│   │   ├── image3.jpg
│   │   └── profileimg.jpg
│   └── adaptive-icon.png
├── src/
│   ├── components/
│   │   └── FilterModal.tsx  # Booking filter modal component
│   ├── context/
│   │   ├── ActiveBookingsContext.tsx  # Bookings state management
│   │   └── FavoritesContext.tsx       # Favorites state management
│   ├── navigation/
│   │   └── RootNavigator.tsx          # App navigation setup
│   ├── screens/
│   │   ├── ActiveBookingsScreen.tsx   # View bookings
│   │   ├── CreateAccountScreen.tsx    # Sign up
│   │   ├── FavoritesScreen.tsx        # Saved properties
│   │   ├── ForgotScreen.tsx           # Password recovery
│   │   ├── HomeScreen.tsx             # Property listings
│   │   ├── LoginScreen.tsx            # Authentication
│   │   ├── ProfileScreen.tsx          # User profile
│   │   ├── SendCodeScreen.tsx         # Verification
│   │   └── VillaDetailScreen.tsx      # Property details
│   ├── types/
│   │   ├── navigation.ts              # Navigation types
│   │   └── types.ts                   # App types
│   └── utils/
│       └── responsive.ts              # Responsive utilities
├── App.tsx                            # App entry point
├── app.json                           # Expo configuration
├── package.json                       # Dependencies
├── tsconfig.json                      # TypeScript config
└── README.md                          # This file
```

## 🎨 Design System

### Color Palette
```typescript
// Primary Colors
PRIMARY_BLACK    = '#000000'  // Main background
SECONDARY_GRAY   = '#2A2A2A'  // Cards & surfaces
ACCENT_ORANGE    = '#FF8C00'  // Primary actions & highlights

// Text Colors
TEXT_PRIMARY     = '#FFFFFF'  // Main text
TEXT_SECONDARY   = '#999999'  // Subtitles & labels
TEXT_INPUT       = '#9AA0A6'  // Placeholder text

// Borders & Dividers
BORDER_COLOR     = '#3A3A3A'  // Subtle borders

// Highlights
STAR_GOLD        = '#FFD700'  // Rating stars
```

### Typography Scale
```typescript
HEADER_LARGE     = 28px  // Brand name
HEADER_MEDIUM    = 22px  // Screen titles
HEADER_SMALL     = 18px  // Section headers
BODY_LARGE       = 16px  // Primary text
BODY_MEDIUM      = 14px  // Secondary text
BODY_SMALL       = 12px  // Captions & labels
```

### Component Styles
- **Border Radius**: 10-24px for modern, rounded corners
- **Spacing**: Consistent padding and margins using RFValue
- **Shadows**: Subtle elevation for depth
- **Icons**: Ionicons with orange/white color scheme

## 🔄 Version History

### Version 2.0.0 - Complete Redesign (Current)
- ✅ Implemented professional dark theme (black & orange)
- ✅ Added BookingHub split branding
- ✅ Enhanced filter modal with tap-outside-dismiss
- ✅ Implemented booking context and active bookings system
- ✅ Added favorites context and persistence
- ✅ Updated all screen designs for consistency
- ✅ Fixed icon inconsistencies (proper bath icons)
- ✅ Unified color palette (#000000 and #FF8C00)
- ✅ Removed redundant navigation headers
- ✅ Added SafeAreaView for proper device handling
- ✅ Improved responsive design utilities

### Version 1.0.0 - Initial Release
- ✅ Basic property browsing
- ✅ User authentication
- ✅ Simple navigation structure

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

### Coding Standards
- Use TypeScript for type safety
- Follow React hooks best practices
- Maintain consistent styling with existing code
- Add comments for complex logic
- Test on both iOS and Android

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Property images from [Unsplash](https://unsplash.com)
- Icons from [Expo Vector Icons](https://icons.expo.fyi)
- Design inspiration from modern booking platforms
- React Native community for excellent documentation

## 📧 Support

For support, email your.email@example.com or open an issue on GitHub.

---

**Made with ❤️ using React Native & Expo**

*BookingHub - Find Your Perfect Stay* 🏡✨
