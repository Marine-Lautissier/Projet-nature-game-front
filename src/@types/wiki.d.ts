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
}

export interface Articles {
    id: number;
    name: string;
    description: string;
    subCategory: {
        name: string;
    };
    picture: null;
}
