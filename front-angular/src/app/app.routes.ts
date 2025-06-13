import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ImportarJsonComponent } from './pages/importar-json/importar-json.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'importar-json', component: ImportarJsonComponent },
  { path: '', redirectTo: 'importar-json', pathMatch: 'full' },
];
