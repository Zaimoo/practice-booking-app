import { createContext, ReactNode, useContext, useState } from "react";

export interface Booking {
  id: string;
  propertyId: string;
  propertyName: string;
  propertyImage: any;
  propertyPrice: number;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  status: "active" | "completed" | "cancelled";
}

interface ActiveBookingsContextType {
  activeBookings: Booking[];
  addBooking: (booking: Booking) => void;
  removeBooking: (bookingId: string) => void;
  getBooking: (bookingId: string) => Booking | undefined;
  getBookingsByProperty: (propertyId: string) => Booking[];
}

// Create the context
const ActiveBookingsContext = createContext<
  ActiveBookingsContextType | undefined
>(undefined);

// Provider component
export const ActiveBookingsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [activeBookings, setActiveBookings] = useState<Booking[]>([]);

  // Add new booking
  const addBooking = (booking: Booking) => {
    setActiveBookings((prev) => [...prev, booking]);
  };

  // Remove booking
  const removeBooking = (bookingId: string) => {
    setActiveBookings((prev) => prev.filter((b) => b.id !== bookingId));
  };

  // Get single booking by ID
  const getBooking = (bookingId: string) => {
    return activeBookings.find((b) => b.id === bookingId);
  };

  // Get all bookings for a specific property
  const getBookingsByProperty = (propertyId: string) => {
    return activeBookings.filter((b) => b.propertyId === propertyId);
  };

  return (
    <ActiveBookingsContext.Provider
      value={{
        activeBookings,
        addBooking,
        removeBooking,
        getBooking,
        getBookingsByProperty,
      }}
    >
      {children}
    </ActiveBookingsContext.Provider>
  );
};

// Custom hook to use active bookings
export const useActiveBookings = () => {
  const context = useContext(ActiveBookingsContext);
  if (!context) {
    throw new Error(
      "useActiveBookings must be used within ActiveBookingsProvider",
    );
  }
  return context;
};
