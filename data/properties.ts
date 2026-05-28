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
    priceLabel: "$900 / month",
    occupancy: "Exclusive female occupancy",
    baths: "6 bedrooms / 2.5 bathrooms",
    availability: "Rooms available",
    title: "Unit A Private Room",
    description:
      "All-inclusive furnished room with internet, located on the upper floor.",
    details: [
      "Room with 1 double-size bed",
      "Bed, mattress, desk, and office chair included",
      "Kitchen with dining table and essential appliances",
    ],
  },
  {
    id: 2,
    image: "/images/gallery/photo-5.jpg",
    address: "Unit B - 1658-1660 Baseline Road",
    priceLabel: "$850 single / $1000 double",
    occupancy: "Co-ed unit",
    baths: "5 bedrooms / 2 bathrooms",
    availability: "Limited shared rooms",
    title: "Unit B Room",
    description:
      "All-inclusive furnished room in the semi-basement, with single or double bed options.",
    details: [
      "Single occupancy: $850 per month",
      "Double occupancy: $1000 per month",
      "Shared rooms are limited to 2 people only",
    ],
  },
];
