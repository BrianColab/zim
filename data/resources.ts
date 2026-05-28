export interface Resource {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
  href: string;
}

export const resources: Resource[] = [
  {
    id: 1,
    image: "/images/gallery/photo-6.jpg",
    title: "Move-In Guide",
    category: "Before arrival",
    description: "What to bring, key pickup, setup basics, and first-day notes.",
    href: "/resources#move-in",
  },
  {
    id: 2,
    image: "/images/gallery/photo-3.jpg",
    title: "Shared Living Guide",
    category: "At ZIM.ca",
    description: "Quiet hours, shared spaces, guests, cleaning, and maintenance.",
    href: "/resources#shared-living",
  },
  {
    id: 3,
    image: "/images/gallery/photo-12.jpg",
    title: "Neighbourhood Guide",
    category: "Nearby",
    description: "Campus routes, transit, groceries, cafes, and study spots.",
    href: "/resources#neighbourhood",
  },
];
