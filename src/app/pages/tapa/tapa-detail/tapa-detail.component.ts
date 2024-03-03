import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../../service/recipe.service';

import { Recipe }from '../../../models/recipe.model';

@Component({
  selector: 'app-tapa-detail',
  templateUrl: './tapa-detail.component.html',
  styleUrls: ['./tapa-detail.component.css']
})
export class TapaDetailComponent implements OnInit {

  public recipe:Recipe;
  public idRecipe:String;
  public onLoad: boolean = false;

  constructor(  private recipeSrv:RecipeService,
                private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit(): void {

    this.getId();

  }

   //Obtener id
   async getId() {
    //Obtenemos id url
    await this.route.paramMap.subscribe(params => {
     this.idRecipe = params.get("uid");
     console.log(this.idRecipe)
     });
    this.getRecipeById(this.idRecipe);
 }

  async getRecipeById(idRecipe) {
  //Obtenemos id url
  await this.recipeSrv.getRecipe(idRecipe).subscribe({
    next: recipe => {
       this.recipe = recipe.recipe;
      console.log(recipe);
      this.onLoad=true;
    },
    error: err=>console.log(err)}
  )}
}
