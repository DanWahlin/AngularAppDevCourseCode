import { RouterModule, Routes } from '@angular/router';


const app_routes: Routes = [
  { path: '',  pathMatch:'full', redirectTo: '/someRoute' }
];

export const app_routing = RouterModule.forRoot(app_routes);