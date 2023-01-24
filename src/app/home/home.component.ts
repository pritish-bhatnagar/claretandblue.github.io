import { Component } from '@angular/core';
import {Breakpoints} from '@angular/cdk/layout';
interface Food {
  value: string;
  viewValue: string;
}
console.log('Web ' + Breakpoints.Web);
console.log('WebLandscape ' + Breakpoints.WebLandscape);
console.log('WebPortrait ' + Breakpoints.WebPortrait);

console.log('Tablet ' + Breakpoints.Tablet);
console.log('TabletPortrait ' + Breakpoints.TabletPortrait);
console.log('TabletLandscape ' + Breakpoints.TabletLandscape);

console.log('Handset ' + Breakpoints.Handset);
console.log('HandsetLandscape ' + Breakpoints.HandsetLandscape);
console.log('HandsetPortrait ' + Breakpoints.HandsetPortrait);

console.log('XSmall ' + Breakpoints.XSmall);
console.log('Small ' + Breakpoints.Small);
console.log('Medium ' + Breakpoints.Medium);
console.log('Large ' + Breakpoints.Large);
console.log('XLarge ' + Breakpoints.XLarge);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'material';
  showFiller = false;
  theme="primary";
  foods: Food[] = [
    {value: 'primary', viewValue: 'Primary'},
    {value: 'accent', viewValue: 'Accent'},
    {value: 'warn', viewValue: 'Warn'},
  ];
  progress=0;
  constructor(){setInterval(()=>{
    if(this.progress !=100){
    this.progress=this.progress+20;
    }
    else{
      clearInterval(this.progress);
    }
  }, 400)}

    
    
  
  themec(){
    if(this.theme=="primary"){
    this.theme="accent";
    }
    else{
      this.theme="primary"
    }

    return this.theme;
  }
  // ngOnInit(){
  //   setInterval(this.themec(),2000)
  // }





  
  
}


