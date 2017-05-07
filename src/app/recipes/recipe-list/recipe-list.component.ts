import {Component, OnInit} from '@angular/core';
import {Recipe} from './../recipe.model';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.less']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = [
      new Recipe('Melanzane allla Parmigiana', 'Melanzane alla parmigiana Howto', 'http://www.tuttogreen.it/wp-content/uploads/2016/08/Schermata-08-2457611-alle-11.22.20-400x250.png')
  ]

  constructor() {
  }

  ngOnInit() {
  }

}
