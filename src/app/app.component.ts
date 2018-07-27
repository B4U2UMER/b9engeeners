import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // toggleMenu = false;


  // onToggleMenu(){
  //   if(this.toggleMenu === true) {
  //     this.toggleMenu = false;
  //   } else{
  //     this.toggleMenu = true;
  //   }
  // }

  isIn = false;   // store state
  toggleState() { // click handler
      let bool = this.isIn;
      this.isIn = bool === false ? true : false; 
  }

  ngOnInit() { }
}
