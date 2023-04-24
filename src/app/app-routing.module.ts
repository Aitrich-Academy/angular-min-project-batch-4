import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooktableComponent } from './booktable/booktable.component';
import { MenupageComponent } from './menupage/menupage.component';
import { OurstoryComponent } from './ourstory/ourstory.component';

const routes: Routes = [
  { path:'', component:BooktableComponent},
  { path: 'home', component:BooktableComponent},
  { path:'menu', component:MenupageComponent},
  { path: 'about', component:OurstoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
