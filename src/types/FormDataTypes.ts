export interface FilterFormDataType {
  location: string;
  type: "Buy" | "Rent";
  category: "Home" | "Appartment" | "Plot";
  minPrice: number;
  maxPrice: number;
  bedroom: number;
}
