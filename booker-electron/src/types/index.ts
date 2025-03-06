export interface User {
    id: string;
    name: string;
    email: string;
}

export interface Product {
    id: string;
    name: string;
    price: number;
}

export interface Order {
    id: string;
    userId: string;
    productIds: string[];
    totalAmount: number;
}

export type AppState = 'loading' | 'loaded' | 'error';

export interface Booking {
  id?: string;
  name: string;
  date: string;
  time: string;
  service: string;
  status?: 'pending' | 'confirmed' | 'canceled';
  createdAt?: Date;
}

export interface AppConfig {
  businessName: string;
  businessHours: {
    open: string;
    close: string;
  };
  services: Service[];
}

export interface Service {
  id: string;
  name: string;
  duration: number; // in minutes
  price: number;
}