import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthenticationGuard } from '../auth/authguard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const recipeRoutes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: RecipeStartComponent,
        pathMatch: 'full'
      },
      {
        path: 'new',
        component: RecipeEditComponent,
        canActivate: [AuthenticationGuard]
      },
      {
        path: ':recipeId',
        component: RecipeDetailComponent
      },
      {
        path: ':recipeId/new',
        component: RecipeEditComponent,
        canActivate: [AuthenticationGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(recipeRoutes)],
  exports: [RouterModule],
  providers: [AuthenticationGuard]
})
export class RecipesRoutingModule {}
