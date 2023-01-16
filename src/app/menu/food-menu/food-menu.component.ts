import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menuItem.model';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.scss']
})
export class FoodMenuComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      name: "Grilled Cheese",
      description: "Provolone, parmesan, mozzarella, American cheese and our fan-favorite sourdough bread",
      price: 7.99  
    },
    {
      name: "Croque Monsieur",
      description: "Grilled cheese with hickory-smoked ham and bechamel sauce",
      price: 13.99  
    },
    {
      name: "Tomato Soup",
      description: "Creamy and delicious, with oregano, pepper, and garlic croutons",
      price: 4.99  
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
