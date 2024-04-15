import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() house : any;

  buttonLabel : string = "Show more";
  showDescription : boolean = false;
  toggleDescription(){
    this.showDescription = !this.showDescription;
    this.buttonLabel = this.showDescription ? 'Show less' : 'Show more';
  }
}
