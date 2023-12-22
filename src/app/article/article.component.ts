import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  //titreArticle: string = "Titre de l'article";
  //prixArticle: number = 12;
  //urlImg: string = 'https://via.placeholder.com/400x250';
  //textAltImg: string = "Titre alternatif de l'image";
  //available: boolean = false;

  totalNbrLike: number = 0;
  comment: string = 'Ceci est un commentaire';
  @Output() info = new EventEmitter<string>();

  @Input() titreArticle: string;
  @Input() prixArticle: number;
  @Input() description: string;
  @Input() urlImg: string;
  @Input() textAltImg: string;
  @Input() available: boolean;
  @Input() idArticle: number;
  jaime: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  //nomenclature méthodes events : onNomDeMethode
  onLike() {
    //this permet de manipuler des variables dans une classe
    if (this.jaime == true) {
      this.totalNbrLike++;
      this.jaime = false;
    } else {
      this.totalNbrLike--;
      this.jaime = true;
    }
    this.info.emit(this.titreArticle);
  }

  getColor() {
    if (this.available === true) {
      return 'green';
    } else {
      return 'red';
    }
  }
}
