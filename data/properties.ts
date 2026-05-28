export interface Property {
  id: number;
  image: string;
  price: number;
  beds: string;
  baths: string;
  availability: string;
  title: string;
  description: string;
}

export const properties: Property[] = [
  {
    id: 1,
    image: "/images/gallery/photo-9.jpg",
    price: 925,
    beds: "Private room",
    baths: "Shared bath",
    availability: "Available",
    title: "Private Room",
    description: "A calm personal room with natural light and space to study.",
  },
  {
    id: 2,
    image: "/images/gallery/photo-5.jpg",
    price: 875,
    beds: "Shared room",
    baths: "2 people only",
    availability: "Limited",
    title: "Limited Shared Room",
    description: "A shared room option for two students only, with limited spots.",
  },
];
