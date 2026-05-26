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
    availability: "Limited availability",
    title: "Furnished Private Room",
    description: "A calm personal room with natural light and space to study.",
  },
  {
    id: 2,
    image: "/images/gallery/photo-5.jpg",
    price: 875,
    beds: "Shared suite",
    baths: "2 baths",
    availability: "September move-in",
    title: "Shared Suite",
    description: "Modern kitchen, bright common area, and practical storage.",
  },
  {
    id: 3,
    image: "/images/gallery/photo-6.jpg",
    price: 995,
    beds: "Studio layout",
    baths: "Private bath",
    availability: "Join waitlist",
    title: "Studio Option",
    description: "Extra independence with a compact, efficient living plan.",
  },
];
