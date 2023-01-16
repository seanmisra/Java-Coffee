import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../model/menuItem.model';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  @Input() menuName: string; 
  @Input() menuItems: MenuItem[] = [];


  ngOnInit(): void {
  }

}
