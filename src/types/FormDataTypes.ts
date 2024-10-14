export interface FilterFormDataType {
  location: string;
  type: "Buy" | "Rent";
  category: "Home" | "Appartment" | "Plot";
  minPrice: number;
  maxPrice: number;
  bedroom: number;
}

export interface SearchFormDataType {
  location: string;
  minPrice: number;
  maxPrice: number;
}

export interface LoginFormData {
  username: string;
  password: string;
}

export interface RegisterFormData extends LoginFormData {
  email: string;
}

export interface UpdateFormData {
  username?: string;
  email?: string;
  password?: string;
  avatar?: string;
}

export interface AddHouseFormData {
  title: string;
  price: number;
  desc: string;
  images: string[];
  address: string;
  city: string;
  bedroom: number;
  bathroom: number;
  type: string;
  property: string;
  utilities?: string;
  pet?: string;
  income?: string;
  size?: number;
  school?: number;
  bus?: number;
  restaurant?: number;
  latitude: number;
  longitude: number;
}
