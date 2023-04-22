import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BooktableComponent } from './booktable/booktable.component';
import { SpecialmenuComponent } from './specialmenu/specialmenu.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ChefdetailsComponent } from './chefdetails/chefdetails.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BooktableComponent,
    SpecialmenuComponent,
    TestimonialsComponent,
    ChefdetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
