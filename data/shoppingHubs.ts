export interface ShoppingHub {
  id: number;
  name: string;
  address: string;
  description: string;
  distance: string;
  driveTime: string;
  walkTime: string;
  tags: string[];
  mapLabel: string;
}

export interface NearbyStoreLogo {
  name: string;
  label: string;
}

export const zimAddress = "1660 Baseline Road, Ottawa, ON";

export const nearbyStoreLogos: NearbyStoreLogo[] = [
  { name: "McDonald's", label: "McDonald's" },
  { name: "Walmart", label: "Walmart" },
  { name: "Loblaws", label: "Loblaws" },
  { name: "Home Depot", label: "Home Depot" },
  { name: "LCBO", label: "LCBO" },
  { name: "Rexall", label: "Rexall" },
  { name: "Shoppers", label: "Shoppers Drug Mart" },
  { name: "Dollarama", label: "Dollarama" },
  { name: "FreshCo", label: "FreshCo" },
  { name: "PetSmart", label: "PetSmart" },
  { name: "Staples", label: "Staples" },
  { name: "TD", label: "TD Bank" },
  { name: "BMO", label: "BMO" },
  { name: "Sport Chek", label: "Sport Chek" },
  { name: "Metro", label: "Metro" },
  { name: "Winners", label: "Winners" },
  { name: "Canadian Tire", label: "Canadian Tire" },
  { name: "Toys R Us", label: "Toys R Us" },
  { name: "Starbucks", label: "Starbucks" },
  { name: "Popeyes", label: "Popeyes" },
  { name: "Tim Hortons", label: "Tim Hortons" },
  { name: "Subway", label: "Subway" },
  { name: "Movati", label: "Movati Athletic" },
  { name: "The Beer Store", label: "The Beer Store" },
];

export const shoppingHubs: ShoppingHub[] = [
  {
    id: 1,
    name: "College Square",
    address: "1900-1980 Baseline Road",
    description: "Beside Algonquin College with groceries, banking, and essentials.",
    distance: "2.0 km",
    driveTime: "4 min drive",
    walkTime: "24 min walk",
    tags: ["Loblaws", "Home Depot", "LCBO", "Rexall", "BMO"],
    mapLabel: "College Square Ottawa",
  },
  {
    id: 2,
    name: "Baseline and Clyde Retail",
    address: "1375 Baseline Road",
    description: "A close everyday stop near ZIM.ca for quick errands.",
    distance: "1.1 km",
    driveTime: "3 min drive",
    walkTime: "14 min walk",
    tags: ["Walmart Supercentre", "McDonald's", "Everyday essentials"],
    mapLabel: "1375 Baseline Road Ottawa",
  },
  {
    id: 3,
    name: "Merivale Mall",
    address: "1642 Merivale Road",
    description: "Indoor mall and services south of Baseline Road.",
    distance: "2.2 km",
    driveTime: "5 min drive",
    walkTime: "28 min walk",
    tags: ["Sport Chek", "Shoppers", "Dollarama", "Food and services"],
    mapLabel: "Merivale Mall Ottawa",
  },
  {
    id: 4,
    name: "Meadowlands Mall",
    address: "Meadowlands Drive and Merivale Road",
    description: "Groceries, pet supplies, office essentials, and banking.",
    distance: "2.8 km",
    driveTime: "7 min drive",
    walkTime: "35 min walk",
    tags: ["FreshCo", "Movati", "PetSmart", "Staples", "TD"],
    mapLabel: "Meadowlands Mall Ottawa",
  },
  {
    id: 5,
    name: "Merivale Road Corridor",
    address: "Merivale near Baseline and Meadowlands",
    description: "Retail strips, restaurants, and specialty services.",
    distance: "2-3 km",
    driveTime: "5-8 min drive",
    walkTime: "25-40 min walk",
    tags: ["Metro", "Toys R Us", "Restaurants", "Specialty retail"],
    mapLabel: "Merivale Road and Baseline Road Ottawa",
  },
  {
    id: 6,
    name: "Carlingwood / Westgate Edge",
    address: "Carling Avenue shopping area",
    description: "West-end shopping and services within a short trip.",
    distance: "4.5 km",
    driveTime: "9 min drive",
    walkTime: "Transit recommended",
    tags: ["Canadian Tire", "Shoppers", "Services", "Bus-accessible"],
    mapLabel: "Carlingwood Shopping Centre Ottawa",
  },
];
