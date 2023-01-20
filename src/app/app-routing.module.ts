import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DividerComponent } from './divider/divider.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { SliderComponent } from './slider/slider.component';
import { TabsComponent } from './tabs/tabs.component';



const routes: Routes = [
  {path: "nav", component: NavComponent },
  {path: "button", component: ButtonComponent },
  {path: "card", component: CardComponent },
  {path: "checkbox", component: CheckboxComponent },
  {path: "datepicker", component: DatepickerComponent },
  {path: "divider", component: DividerComponent },
  {path: "lists", component: ListsComponent },
  {path: "slider", component: SliderComponent },
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent },
  {path: "tabs", component: TabsComponent },
  {path: "", component: LoginComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }