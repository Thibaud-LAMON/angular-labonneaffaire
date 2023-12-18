import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  titreArticle: string = "Titre de l'article";
  prixArticle: number = 12;
  textAltImg: string = "Titre alternatif de l'image";
  urlImg: string = 'https://via.placeholder.com/400x250';
  totalNbrLike: number = 0;

  constructor() {}

  ngOnInit(): void {}

  //nomenclature méthodes events : onNomDeMethode
  onLike() {
    //this permet de manipuler des variables dans une classe
    this.totalNbrLike++;
  }
}
