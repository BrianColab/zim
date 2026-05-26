export interface Resource {
  id: number;
  image: string;
  title: string;
  category: string;
}

export const resources: Resource[] = [
  {
    id: 1,
    image: "/images/gallery/photo-6.jpg",
    title: "What to prepare before move-in day at ZIM.ca",
    category: "Move-in planning",
  },
  {
    id: 2,
    image: "/images/gallery/photo-3.jpg",
    title: "How to set up a quiet, study-friendly room",
    category: "Study spaces",
  },
  {
    id: 3,
    image: "/images/gallery/photo-9.jpg",
    title: "Shared suite basics: routines, respect, and comfort",
    category: "Student living",
  },
];
