//  interface pour les catégories
export interface Categories {
    id: number;
    name: string;
    description: string;
    picture: {
        id: number;
        name: string;
        url: string;
    };
    subCategories: SubCategories[];
}

// interface pour les sous-catégories
export interface SubCategories {
    id: number;
    name: string;
    description: string;
    picture: {
        id: number;
        name: string;
        url: string;
    };
    category: {
        id: number;
        name: string;
    };
    articles: Articles[];
}

//  interface pour les articles
export interface Articles {
    id: number;
    name: string;
    description: string;
    subcategory: {
        id: number;
        name: string;
        description: string;
        category: {
            id: number;
            name: string;
            description: string;
        }
    }
    picture: {
        name: string;
        url: string;
    };
}