import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidedata',
  templateUrl: './sidedata.component.html',
  styleUrls: ['./sidedata.component.css']
})
export class SidedataComponent {
@Output() opener = new EventEmitter<void>();

evemittor(){
  this.opener.emit();
}


}
