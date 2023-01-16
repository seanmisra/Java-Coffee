import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './landing-page/main-content/main-content.component';
import { MenuComponent } from './menu/menu.component';
import { AccountComponent } from './account/account.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { DrinkMenuComponent } from './menu/drink-menu/drink-menu.component';
import { FoodMenuComponent } from './menu/food-menu/food-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FooterComponent,
    MainContentComponent,
    MenuComponent,
    AccountComponent,
    HeaderComponent,
    DrinkMenuComponent,
    FoodMenuComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
