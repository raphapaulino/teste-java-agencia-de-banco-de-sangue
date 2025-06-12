import { Routes } from '@angular/router';
import { ImportarJsonComponent } from './pages/importar-json/importar-json.component';

export const routes: Routes = [
  { path: '', redirectTo: 'importar-json', pathMatch: 'full' },
  { path: 'importar-json', component: ImportarJsonComponent },
];
