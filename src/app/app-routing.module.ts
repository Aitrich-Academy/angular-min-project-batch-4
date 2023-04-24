import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooktableComponent } from './booktable/booktable.component';
import { MenupageComponent } from './menupage/menupage.component';

const routes: Routes = [
  { path:'', component:BooktableComponent},
  { path: 'home', component:BooktableComponent},
  { path:'menu', component:MenupageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
