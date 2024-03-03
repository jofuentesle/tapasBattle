import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../service/recipe.service';

import { Recipe }from '../../models/recipe.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tapa',
  templateUrl: './tapa.component.html',
  styleUrls: ['./tapa.component.css']
})
export class TapaComponent implements OnInit {

  @Input() idEvent: string;
  public recipes:Recipe[]=[];
  public onLoad: boolean = false;
  public idRecipe: string;

  constructor(  private recipeSrv:RecipeService,
                private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit(): void {

    this.idEvent;

    this.getRecipes();

    }

  //cargamos recetas
  async getRecipes() {
    await this.recipeSrv.getRecipes().subscribe({
      next: recipes => {
        this.recipes = recipes.recipes
        console.log("recipes",recipes.recipes);
      },
      error: err=>console.log(err)
    })
  }


  //Obtener id
  async getId() {
    //Obtenemos id url
    await this.route.paramMap.subscribe(params => {
     this.idRecipe = params.get("id");
     
     });
 }

 //Obtenemos receta por id

 async recipeDetail(uid) {
  let uid2 = uid.toString()
  this.router.navigateByUrl(`dashboard/recipes/${ uid }`);
  
  }
}