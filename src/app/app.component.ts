import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  prix1: number = 80;
  prix2: number = 230;
  prix3: number = 15;
  message: string = '';

  onAffiche(arg: string) {
    return (this.message = "Merci d'avoir voté pour l'article : " + arg);
  }

  liste = [
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
}
