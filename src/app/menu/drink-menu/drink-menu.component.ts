import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuItem } from 'src/app/model/menuItem.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-drink-menu',
  templateUrl: './drink-menu.component.html',
  styleUrls: ['./drink-menu.component.scss']
})
export class DrinkMenuComponent implements OnInit, OnDestroy {

  constructor(private menuService: MenuService) { }

  menuItems: MenuItem[] = [];
  drinkSubscription = new Subscription();

  ngOnInit(): void {
    this.drinkSubscription = this.menuService.getAllDrinksItems().subscribe(allDrinks => {
      this.menuItems = allDrinks;
    });
  }

  ngOnDestroy(): void {
    if (this.drinkSubscription) {
      this.drinkSubscription.unsubscribe();
    }
  }

}
