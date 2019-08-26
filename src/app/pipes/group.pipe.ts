import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'group'
})
export class GroupPipe implements PipeTransform {

  transform(all: any, gName: any): any{
    // console.log(gName)
    if( gName === undefined){
      return all;
    }
      return all.filter((item)=>{
        console.log(item)
      return item.get_group[0].name.toLowerCase().includes(gName.toLowerCase());
   })
  }

}
