import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountComponent } from "./account/account.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { DrinkMenuComponent } from "./menu/drink-menu/drink-menu.component";
import { FoodMenuComponent } from "./menu/food-menu/food-menu.component";
import { MenuComponent } from "./menu/menu.component";

const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'drink-menu',
        component: DrinkMenuComponent
    },
    {
        path: 'food-menu',
        component: FoodMenuComponent
    },
    {
        path: 'account',
        component: AccountComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }