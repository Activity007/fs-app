
export type ProductResponse = {
    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;
    category: Category;
    image: [""];
}
export type Category = {
    id: number; 
    name: string;
}