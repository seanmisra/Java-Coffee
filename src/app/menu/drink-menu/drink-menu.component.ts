import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menuItem.model';

@Component({
  selector: 'app-drink-menu',
  templateUrl: './drink-menu.component.html',
  styleUrls: ['./drink-menu.component.scss']
})
export class DrinkMenuComponent implements OnInit {

  constructor() { }

  menuItems: MenuItem[] = [
    {
      name: "Coffee",
      description: "Our signature house blend, available with milk, cream, and sugar",
      price: 2.99  
    },
    {
      name: "Iced Coffee",
      description: "Freshly brewed signature coffee, served chilled with a touch of sweetner",
      price: 3.99  
    },
    {
      name: "Cold Brew",
      description: "Slow-steeped for 24 hours, made from our signature house blend",
      price: 4.99  
    },
    {
      name: "Cortado",
      description: "2 shots of expresso, mixed with steamed milk and a slight hint of cocoa",
      price: 4.25  
    },
    {
      name: "Red Eye",
      description: "4 shots of expresso, with with our house-blend coffee, topped with foamed milk and sprinkling of cinnamon",
      price: 5.25  
    }
  ]

  ngOnInit(): void {
  }

}
