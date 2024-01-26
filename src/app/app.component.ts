import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  secondes;
  computerSubscription: Subscription;
  constructor() {}

  ngOnInit(): void {
    const compteur = interval(1000).pipe(
      filter((value) => value % 2 === 0),
      map((value) =>
        value % 2 === 0 ? `${value} est pair` : `${value} est impair`
      )
    ); //initialisation d'intervale

    //écoute d'intervale
    //l'observable est stocké dans une variable
    this.computerSubscription = compteur.subscribe({
      next: (v) => (this.secondes = v), //propriété d'objet donc entre accolade
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }

  ngOnDestroy() {
    this.computerSubscription.unsubscribe();
    //La subscription à lieu lors de la destruction du composant
  }
}
