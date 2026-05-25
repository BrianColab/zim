export interface Resource {
  id: number;
  image: string;
  title: string;
  category: string;
}

export const resources: Resource[] = [
  {
    id: 1,
    image: "/images/gallery/photo-1.jpg",
    title: "Moving Checklist: Don't Forget These Essentials",
    category: "Student Life",
  },
  {
    id: 2,
    image: "/images/gallery/photo-2.jpg",
    title: "Best Neighbourhoods for Students in Waterloo",
    category: "Neighbourhoods",
  },
  {
    id: 3,
    image: "/images/gallery/photo-4.jpg",
    title: "How to Talk to Your Future Roommates",
    category: "Roommates",
  },
];
