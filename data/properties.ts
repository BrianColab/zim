export interface Property {
  id: number;
  image: string;
  imageAlt: string;
  imageDouble?: string;
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
    imageDouble: "/images/UnitA Double.png",
    imageAlt:
      "Furnished student bedroom in unit 1660A at 1660 Baseline Road in Ottawa",
    address: "1660A - 1660 Baseline Road",
    priceLabel: "$900 single / $1200 pair",
    occupancy: "Single room or two-friend pair",
    baths: "6 bedrooms / 2.5 bathrooms",
    availability: "Rooms available",
    title: "Unit 1660A",
    description:
      "All-inclusive furnished room with internet, located on the upper floor at 1660 Baseline Road.",
    details: [
      "Single rooms are rented to one student only",
      "Pair room option is only for 2 friends applying together",
      "ZIM.ca does not place a second student into a room booked as single",
      "Pair rooms can be set up with single beds or bunk beds",
      "Bed, mattress, desk, and office chair included",
      "Hydro, water, heat, central A/C, gigabit internet, and laundry included",
    ],
  },
  {
    id: 2,
    image: "/images/UnitB Single.png",
    imageDouble: "/images/Unit B Double.png",
    imageAlt:
      "Furnished student room in unit 1660B at 1660 Baseline Road in Ottawa",
    address: "1660B - 1660 Baseline Road",
    priceLabel: "$850 single / $1000 pair",
    occupancy: "Single room or two-friend pair",
    baths: "5 bedrooms / 2 bathrooms",
    availability: "Rooms available",
    title: "Unit 1660B",
    description:
      "All-inclusive furnished room in the semi-basement with single or two-friend pair options at 1660 Baseline Road.",
    details: [
      "Single occupancy: $850 per month",
      "Pair room: $1000 per month for 2 friends applying together",
      "ZIM.ca does not place a second student into a room booked as single",
      "Bed, mattress, desk, and office chair included",
      "Hydro, water, heat, central A/C, gigabit internet, and laundry included",
    ],
  },
  {
    id: 3,
    image: "/images/gallery/photo-9.jpg",
    imageDouble: "/images/UnitA Double.png",
    imageAlt:
      "Furnished student bedroom in unit 1658A at 1658 Baseline Road in Ottawa",
    address: "1658A - 1658 Baseline Road",
    priceLabel: "$900 single / $1200 pair",
    occupancy: "Single room or two-friend pair",
    baths: "6 bedrooms / 2.5 bathrooms",
    availability: "Rooms available",
    title: "Unit 1658A",
    description:
      "All-inclusive furnished room with internet, located on the upper floor at 1658 Baseline Road.",
    details: [
      "Single rooms are rented to one student only",
      "Pair room option is only for 2 friends applying together",
      "ZIM.ca does not place a second student into a room booked as single",
      "Pair rooms can be set up with single beds or bunk beds",
      "Bed, mattress, desk, and office chair included",
      "Hydro, water, heat, central A/C, gigabit internet, and laundry included",
    ],
  },
  {
    id: 4,
    image: "/images/UnitB Single.png",
    imageDouble: "/images/Unit B Double.png",
    imageAlt:
      "Furnished student room in unit 1658B at 1658 Baseline Road in Ottawa",
    address: "1658B - 1658 Baseline Road",
    priceLabel: "$850 single / $1000 pair",
    occupancy: "Single room or two-friend pair",
    baths: "5 bedrooms / 2 bathrooms",
    availability: "Rooms available",
    title: "Unit 1658B",
    description:
      "All-inclusive furnished room in the semi-basement with single or two-friend pair options at 1658 Baseline Road.",
    details: [
      "Single occupancy: $850 per month",
      "Pair room: $1000 per month for 2 friends applying together",
      "ZIM.ca does not place a second student into a room booked as single",
      "Bed, mattress, desk, and office chair included",
      "Hydro, water, heat, central A/C, gigabit internet, and laundry included",
    ],
  },
];
