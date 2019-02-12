import { AuthenticationService } from './../../auth/authentication.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { RecipeService } from '../../recipes/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() headerClickEmit = new EventEmitter<string>();

  constructor(
    private recipeService: RecipeService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}
  onSave() {
    this.recipeService.storeRecipes().subscribe(error => console.log(error));
  }

  onFetch() {
    // console.log('Calling Fetch ' + this.authenticationService.token);
    this.recipeService.fetchRecipes();
    this.router.navigate(['../../recipes']);
  }

  onLogout() {
    this.authenticationService.logout();
    this.router.navigate(['/recipes']);
  }

  isAuthenticated() {
    return this.authenticationService.isAuthenticated();
  }
}
