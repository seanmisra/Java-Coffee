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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyAccountComponent } from './account/my-account/my-account.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuService } from './menu/menu.service';
import { AccountService } from './account/account.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.guard';


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
    FoodMenuComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    })
  ],
  providers: [MenuService, AccountService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
