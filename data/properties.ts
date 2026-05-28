export interface Property {
  id: number;
  image: string;
  address: string;
  priceLabel: string;
  occupancy: string;
  baths: string;
  availability: string;
  title: string;
  description: string;
  details: string[];
}

export const properties: Property[] = [
  {
    id: 1,
    image: "/images/gallery/photo-9.jpg",
    address: "Unit A - 1658-1660 Baseline Road",
    priceLabel: "$900 single / $1200 double",
    occupancy: "Unit A private or double occupancy",
    baths: "6 bedrooms / 2.5 bathrooms",
    availability: "Rooms available",
    title: "Unit A Private Room",
    description:
      "All-inclusive furnished room with internet, located on the upper floor.",
    details: [
      "Private room or double occupancy option",
      "Double occupancy: 2 students sharing with single beds or bunk beds",
      "Bed, mattress, desk, and office chair included",
      "Hydro, water, heat, central A/C, gigabit internet, and laundry included",
    ],
  },
  {
    id: 2,
    image: "/images/gallery/photo-5.jpg",
    address: "Unit B - 1658-1660 Baseline Road",
    priceLabel: "$850 / month",
    occupancy: "Unit B single occupancy",
    baths: "5 bedrooms / 2 bathrooms",
    availability: "Limited double occupancy",
    title: "Unit B Room",
    description:
      "All-inclusive furnished room in the semi-basement for single occupancy.",
    details: [
      "Single occupancy: $850 per month",
      "Bed, mattress, desk, and office chair included",
      "Hydro, water, heat, central A/C, gigabit internet, and laundry included",
    ],
  },
];
