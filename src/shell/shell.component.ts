import { Component } from '@angular/core';
import { BaseComponent } from '../common/base.component';
@Component({
  selector: 'shell',
  template: `
    <h3>This is the shell</h3>
  `
})
export class ShellComponent extends BaseComponent { 

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
