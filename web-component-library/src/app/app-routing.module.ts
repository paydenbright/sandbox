import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';

const routes: Routes = [
  { path: 'time-sheet', component: TimeSheetComponent },
  { path: '', redirectTo: '/time-sheet', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
