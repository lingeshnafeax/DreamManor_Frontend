import { ListHouseDataType, SinglePostDataType } from "../types/HouseDataTypes";
import { UserDataType } from "../types/UserDataTypes";

export const dummyListData: ListHouseDataType[] = [
  {
    id: 1,
    title: "Luxury Penthouse",
    image:
      "https://www.properties.market/in/blog/wp-content/uploads/2024/01/5-Most-Lavish-And-Expensive-Celebrity-Owned-Houses-In-Hyderabad-1200x675.png",
    bedroom: 3,
    bathroom: 2,
    price: 2500000,
    address: "123 Park Avenue, New York, NY",
    latitude: 40.7612,
    longitude: -73.9762,
  },
  {
    id: 2,
    title: "Modern Loft",
    image:
      "https://www.properties.market/in/blog/wp-content/uploads/2024/01/5-Most-Lavish-And-Expensive-Celebrity-Owned-Houses-In-Hyderabad-1200x675.png",
    bedroom: 2,
    bathroom: 1,
    price: 1800000,
    address: "456 Broadway, New York, NY",
    latitude: 40.7223,
    longitude: -73.9986,
  },
  {
    id: 3,
    title: "Cozy Cottage",
    image:
      "https://www.properties.market/in/blog/wp-content/uploads/2024/01/5-Most-Lavish-And-Expensive-Celebrity-Owned-Houses-In-Hyderabad-1200x675.png",
    bedroom: 4,
    bathroom: 3,
    price: 1200000,
    address: "789 Greenwich Street, New York, NY",
    latitude: 40.7397,
    longitude: -74.0059,
  },
  {
    id: 4,
    title: "Charming Brownstone",
    image:
      "https://www.properties.market/in/blog/wp-content/uploads/2024/01/5-Most-Lavish-And-Expensive-Celebrity-Owned-Houses-In-Hyderabad-1200x675.png",
    bedroom: 3,
    bathroom: 2,
    price: 2200000,
    address: "1010 5th Avenue, New York, NY",
    latitude: 40.7794,
    longitude: -73.9632,
  },
  {
    id: 5,
    title: "Spacious Suburban Home",
    image:
      "https://www.properties.market/in/blog/wp-content/uploads/2024/01/5-Most-Lavish-And-Expensive-Celebrity-Owned-Houses-In-Hyderabad-1200x675.png",
    bedroom: 5,
    bathroom: 4,
    price: 3200000,
    address: "202 Elm Street, Brooklyn, NY",
    latitude: 40.6782,
    longitude: -73.9442,
  },
  {
    id: 6,
    title: "Elegant Townhouse",
    image:
      "https://www.properties.market/in/blog/wp-content/uploads/2024/01/5-Most-Lavish-And-Expensive-Celebrity-Owned-Houses-In-Hyderabad-1200x675.png",
    bedroom: 4,
    bathroom: 3,
    price: 2800000,
    address: "303 Madison Avenue, New York, NY",
    latitude: 40.751,
    longitude: -73.9845,
  },
  {
    id: 7,
    title: "Urban Studio",
    image:
      "https://www.properties.market/in/blog/wp-content/uploads/2024/01/5-Most-Lavish-And-Expensive-Celebrity-Owned-Houses-In-Hyderabad-1200x675.png",
    bedroom: 1,
    bathroom: 1,
    price: 950000,
    address: "404 Lexington Avenue, New York, NY",
    latitude: 40.7516,
    longitude: -73.9765,
  },
];

export const singlePostData:SinglePostDataType = {
  id: 1,
  title: "Luxury Penthouse",
  images: [
    "https://www.properties.market/in/blog/wp-content/uploads/2024/01/5-Most-Lavish-And-Expensive-Celebrity-Owned-Houses-In-Hyderabad-1200x675.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZNMdSv1SKgloyVeqRrTk7ksR8hE0juNJpTg&s",
    "https://assets-news.housing.com/news/wp-content/uploads/2022/04/07013406/ELEVATED-HOUSE-DESIGN-FEATURE-compressed.jpg",
    "https://cms.interiorcompany.com/wp-content/uploads/2023/11/simple-house-design-stick-with-the-classics.png",
  ],
  bedroom: 3,
  bathroom: 2,
  size: 1200,
  price: 2500000,
  city: "New York, NY",
  address: "123 Park Avenue, New York, NY",
  latitude: 40.7612,
  school: "5 kms away",
  bus: "500 ms away",
  restaurant: "1 km away",
  description:
    "A beautifully maintained 3-bedroom, 2-bathroom home, located in a quiet, family-friendly neighborhood, is now on the market. This charming residence features a spacious open-concept living area, a modern kitchen with stainless steel appliances, and a master suite with an en-suite bathroom.",

  longitude: -73.9762,
};

export const userData:UserDataType = {
  id: 1,
  name: "Lingesh",
  img:
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/03/15/15/andrew-garfield.jpg",
  email:"wlingesh260@gmail.com"
};
