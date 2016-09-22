import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShellComponent }      from '../shell/shell.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ShellComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);