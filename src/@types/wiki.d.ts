export interface Categories {
    id: number;
    name: string;
    description: string;
    subCategories: SubCategories[];
}

export interface SubCategories {
    id: number;
    name: string;
    description: string;
    articles: Articles[];
    picture: {
        name: string;
        url: string;
    };
}

export interface Articles {
    id: number;
    name: string;
    description: string;
    subCategory: {
        id: number;
        name: string;
        description: string;
        category: {
         id: number;
         name: string;
         description: string;
    }}
    picture: {
        name: string;
        url: string;
    };
}
