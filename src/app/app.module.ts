import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

import { BudgetComponent } from './budget/budget.component';
import { ListComponent } from './list/list.component';
import { DataService } from './data.service';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    HeaderComponent,
    BudgetComponent,
    ListComponent,
    AddItemFormComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
