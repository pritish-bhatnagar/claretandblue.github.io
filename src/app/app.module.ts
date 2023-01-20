import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavComponent } from './nav/nav.component';
import {MatSelectModule} from '@angular/material/select';
import { SidedataComponent } from './sidedata/sidedata.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list'; 
import {MatTabsModule} from '@angular/material/tabs';
import { DividerComponent } from './divider/divider.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSliderModule} from '@angular/material/slider';
import { SliderComponent } from './slider/slider.component';
import { ListsComponent } from './lists/lists.component';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { LoginComponent } from './login/login.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import {LayoutModule} from '@angular/cdk/layout';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidedataComponent,
    DividerComponent,
    CardComponent,
    ButtonComponent,
    DatepickerComponent,
    CheckboxComponent,
    SliderComponent,
    ListsComponent,
    LoginComponent,
    HomeComponent,
    TabsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule,
    MatTabsModule,
    MatBadgeModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatNativeDateModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    LayoutModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
