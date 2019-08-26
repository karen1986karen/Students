import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'facultet'
})
export class FacultetPipe implements PipeTransform {

  transform(all: any, fName: any): any{
    if( fName === undefined){
      return all;
    }
      return all.filter((item)=>{
      return item.get_faculty.name.toLowerCase().includes(fName.toLowerCase());
   })
  }

}
