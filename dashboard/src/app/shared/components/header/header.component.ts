import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() ToggleSideBar: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {}
  toggleSideBar() {
    this.ToggleSideBar.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
    );
    },400);
  }
}
