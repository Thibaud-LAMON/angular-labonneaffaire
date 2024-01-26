import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  /* listeArticles = [
    {
      id: 1,
      titreArticle: 'Vélo',
      prixArticle: 80,
      description: 'Un super vélo tout terrain',
      urlImg: '../assets/images/velo.jpeg',
      textAltImg: 'Un vélo',
      available: false,
    },
    {
      id: 2,
      titreArticle: 'TV',
      prixArticle: 230,
      description: "Très bonne qualité d'écran",
      urlImg: '../assets/images/tv.jpeg',
      textAltImg: 'Une télévision',
      available: true,
    },
    {
      id: 3,
      titreArticle: 'Jouet',
      prixArticle: 14,
      description: 'Neuf, jamais utilisé',
      urlImg: '../assets/images/jouet.jpeg',
      textAltImg: 'Un jouet pour enfant',
      available: true,
    },
  ]; */
  listeArticles: any = [];
  constructor(private httpClient: HttpClient) {}

  getArticle(id: number) {
    const articles = this.listeArticles.find((a) => {
      return a.id == id;
    });
    return articles;
  }

  /*
   *  Placer le fichier de référence data.json sur un serveur
   *  Puis récupérer l'adresse URL correspondante afin de tester la requête
   */

  getListFromServer() {
    //sert à se connecter à la base de données
    return this.httpClient.get<any[]>('lien_vers_serveur');
  }
}
