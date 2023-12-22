import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  listeArticles = [
    {
      titreArticle: 'Vélo',
      prixArticle: 80,
      description: 'Un super vélo tout terrain',
      urlImg: '../assets/images/velo.jpeg',
      textAltImg: 'Un vélo',
      available: false,
    },
    {
      titreArticle: 'TV',
      prixArticle: 230,
      description: "Très bonne qualité d'écran",
      urlImg: '../assets/images/tv.jpeg',
      textAltImg: 'Une télévision',
      available: true,
    },
    {
      titreArticle: 'Jouet',
      prixArticle: 14,
      description: 'Neuf, jamais utilisé',
      urlImg: '../assets/images/jouet.jpeg',
      textAltImg: 'Un jouet pour enfant',
      available: true,
    },
  ];
  constructor() {}
}
