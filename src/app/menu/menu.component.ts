import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  constructor() { }

  @Input() menuName: string; 


  ngOnInit(): void {
    // console.log('menuName');
    // console.log(this.menuName);
  }

  ngAfterViewInit(): void {
    console.log('menuName');
    console.log(this.menuName);
  }

}
