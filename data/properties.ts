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
      "Furnished student bedroom in Unit A at 1658-1660 Baseline Road in Ottawa",
    address: "Unit A - 1658-1660 Baseline Road",
    priceLabel: "$900 single / $1200 pair",
    occupancy: "Unit A single room or two-friend pair",
    baths: "6 bedrooms / 2.5 bathrooms",
    availability: "Rooms available",
    title: "Unit A Private Room",
    description:
      "All-inclusive furnished room with internet, located on the upper floor.",
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
      "Furnished student room in Unit B at 1658-1660 Baseline Road in Ottawa",
    address: "Unit B - 1658-1660 Baseline Road",
    priceLabel: "$850 single / $1000 pair",
    occupancy: "Unit B single room or two-friend pair",
    baths: "5 bedrooms / 2 bathrooms",
    availability: "Rooms available",
    title: "Unit B Room",
    description:
      "All-inclusive furnished room in the semi-basement with single or two-friend pair options.",
    details: [
      "Single occupancy: $850 per month",
      "Pair room: $1000 per month for 2 friends applying together",
      "ZIM.ca does not place a second student into a room booked as single",
      "Bed, mattress, desk, and office chair included",
      "Hydro, water, heat, central A/C, gigabit internet, and laundry included",
    ],
  },
];
