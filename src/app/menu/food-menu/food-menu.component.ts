import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuItem } from 'src/app/model/menuItem.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.scss']
})
export class FoodMenuComponent implements OnInit, OnDestroy {

  menuItems: MenuItem[] = [];
  foodSubscription = new Subscription();

  constructor(private menuService: MenuService) { 
  }

  ngOnInit(): void {
    this.menuService.getAllFoodItems().subscribe(foodItems => {
      this.menuItems = foodItems;
    })
  }

  ngOnDestroy(): void {
    if (this.foodSubscription) {
      this.foodSubscription.unsubscribe();
    }
  }

}
