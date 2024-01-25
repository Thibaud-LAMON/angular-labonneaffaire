import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css'],
})
export class AjouterComponent implements OnInit {
  //titleToAdd = '';
  //priceToAdd = '';
  titleToAdd = new FormControl(''); //on va lier la variable au champ correspondant
  priceToAdd = new FormControl('');

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    //const newTitle = this.titleToAdd;
    //const newPrice = this.priceToAdd;
    const newTitle = this.titleToAdd.value; //on précise qu'on souhaite la valeur
    const newPrice = this.priceToAdd.value;
    console.log('newTitle : ' + newTitle);
    console.log('newPrice : ' + newPrice);
  }
}
