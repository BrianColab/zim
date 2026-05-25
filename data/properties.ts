export interface Property {
  id: number;
  image: string;
  price: number;
  beds: number;
  baths: number;
  distance: string;
  city: string;
}

export const properties: Property[] = [
  {
    id: 1,
    image: "/images/gallery/photo-3.jpg",
    price: 875,
    beds: 4,
    baths: 2,
    distance: "6 min to UW",
    city: "Waterloo",
  },
  {
    id: 2,
    image: "/images/gallery/photo-5.jpg",
    price: 825,
    beds: 3,
    baths: 2,
    distance: "7 min to Western",
    city: "London",
  },
  {
    id: 3,
    image: "/images/gallery/photo-7.jpg",
    price: 925,
    beds: 2,
    baths: 2,
    distance: "5 min to U of T",
    city: "Toronto",
  },
  {
    id: 4,
    image: "/images/gallery/photo-9.jpg",
    price: 895,
    beds: 5,
    baths: 2,
    distance: "9 min to McMaster",
    city: "Hamilton",
  },
];
