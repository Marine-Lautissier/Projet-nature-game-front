// Interface pour les données de connexion
export interface ConnectData {
  email: string;
  password: string;
}


// Interface pour les données d'inscription
export interface RegisterData {
  email: string;
  password: string;
  pseudo: string;
}

export interface User {
  id: number;
  email: string;
  pseudo: string;
  avatar: string;
  quizzScore: number;
}

