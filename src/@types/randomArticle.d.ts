export interface IRandomArticle {
  description: string;
  id: number;
  name: string;
  picture: {
    id: number;
    name: string;
    url: string;
  }
  subcategory: {
    category: [];
    id: number;
    name: string;
  };
}