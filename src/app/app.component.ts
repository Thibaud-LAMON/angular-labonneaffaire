import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  secondes: number = 0;
  constructor() {}

  ngOnInit(): void {
    const compteur = interval(1000); //initialisation d'intervale

    //écoute d'intervale
    compteur.subscribe({
      next: (v) => (this.secondes = v), //propriété d'objet donc entre accolade
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }
}
