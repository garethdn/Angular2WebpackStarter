import { Component } from '@angular/core';
import { BaseComponent } from '../common/base.component';
import '../../public/css/styles.css';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent { 

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
