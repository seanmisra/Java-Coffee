import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountComponent } from "./account/account.component";
import { MyAccountComponent } from "./account/my-account/my-account.component";
import { AuthGuard } from "./auth/auth-guard.guard";
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
    },
    {
        path: 'my-account',
        component: MyAccountComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }