import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityFilter'
})
export class CityFilterPipe implements PipeTransform {

  transform(value: any[], cityFilter: string): any[] {
    if (!cityFilter) {
      return value;
    }
    return value.filter(house => house.city.toLowerCase().includes(cityFilter.toLowerCase()));
  }

}
