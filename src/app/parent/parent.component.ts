import { Component } from '@angular/core';
import { HousesService } from '../houses.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  houses : any[] = [];
  cityFilter: string = '';
  constructor(private housesService : HousesService){}

  ngOnInit() : void{
    this.houses = this.housesService.houses;
  }
}
