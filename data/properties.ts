export interface Property {
  id: number;
  image: string;
  address: string;
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
    address: "1660A Baseline Road",
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
    address: "1668A Baseline Road",
    price: 925,
    beds: "Private room",
    baths: "Shared bath",
    availability: "Available",
    title: "Private Room",
    description: "A private room in a separated unit with shared common areas.",
  },
  {
    id: 3,
    image: "/images/gallery/photo-6.jpg",
    address: "1660B Baseline Road",
    price: 875,
    beds: "Shared room",
    baths: "2 people only",
    availability: "Limited",
    title: "Limited Shared Room",
    description: "A shared room option for two students only, with limited spots.",
  },
  {
    id: 4,
    image: "/images/gallery/photo-10.jpg",
    address: "1658B Baseline Road",
    price: 875,
    beds: "Shared room",
    baths: "2 people only",
    availability: "Limited",
    title: "Limited Shared Room",
    description: "A limited two-person room in a segregated lower unit.",
  },
];
