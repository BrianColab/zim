export interface Property {
  id: number;
  image: string;
  price: number;
  beds: number;
  baths: number;
  distance: string;
  city: string;
  school: string;
  title: string;
}

export const properties: Property[] = [
  {
    id: 1,
    image: "/images/gallery/photo-5.jpg",
    price: 875,
    beds: 4,
    baths: 2,
    distance: "6 min to campus",
    city: "Waterloo",
    school: "University of Waterloo",
    title: "Bright shared suite with updated kitchen",
  },
  {
    id: 2,
    image: "/images/gallery/photo-6.jpg",
    price: 825,
    beds: 3,
    baths: 2,
    distance: "7 min to campus",
    city: "London",
    school: "Western University",
    title: "Quiet student home near transit",
  },
  {
    id: 3,
    image: "/images/gallery/photo-9.jpg",
    price: 925,
    beds: 2,
    baths: 2,
    distance: "5 min to campus",
    city: "Toronto",
    school: "University of Toronto",
    title: "Clean furnished rooms in central location",
  },
  {
    id: 4,
    image: "/images/gallery/photo-10.jpg",
    price: 895,
    beds: 5,
    baths: 2,
    distance: "9 min to campus",
    city: "Hamilton",
    school: "McMaster University",
    title: "Well-kept house for focused student living",
  },
];
