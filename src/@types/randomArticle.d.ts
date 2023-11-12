export interface IrandomArticle {
  id: number;
  name: string;
  description: string;
  subcategory: {
    name: string;
  };
  picture: string | null;
}