import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input() title:string;
  @Input() backBut:string;
  @Input() isModal:boolean;
  @Input() color:string;
  @Input() centerTitle:boolean;


  constructor() { }

  ngOnInit() {}

}
