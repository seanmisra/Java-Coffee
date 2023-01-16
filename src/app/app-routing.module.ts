import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountComponent } from "./account/account.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { MenuComponent } from "./menu/menu.component";

const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'drink-menu',
        component: MenuComponent
    },
    {
        path: 'food-menu',
        component: MenuComponent
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