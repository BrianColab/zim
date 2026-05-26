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
    title: "A practical move-in plan for your first month",
    category: "Move-in planning",
  },
  {
    id: 2,
    image: "/images/gallery/photo-3.jpg",
    title: "How to choose a neighbourhood near campus",
    category: "Neighbourhoods",
  },
  {
    id: 3,
    image: "/images/gallery/photo-9.jpg",
    title: "Roommate, budget, and study-space questions to ask",
    category: "Student living",
  },
];
