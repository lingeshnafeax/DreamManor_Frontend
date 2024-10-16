export interface FilterFormDataType {
  location: string;
  type: "buy" | "rent";
  category: "apartment" | "condo" | "house" | "land";
  minPrice: number;
  maxPrice: number;
  bedroom: number;
}

export interface SearchFormDataType {
  city: string;
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
