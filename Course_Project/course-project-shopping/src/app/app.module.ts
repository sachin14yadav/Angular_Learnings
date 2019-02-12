import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HttpModule } from '@angular/http';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeService } from './recipes/recipe.service';
import { AuthenticationService } from './auth/authentication.service';
import { AuthenticationGuard } from './auth/authguard.service';
import { AuthenticationModule } from './auth/auth.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      AuthenticationModule,
      ShoppingListModule,
      AppRoutingModule,
      HttpModule,
      SharedModule,
      CoreModule
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
