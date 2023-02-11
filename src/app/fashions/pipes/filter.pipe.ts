import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allfashions:any[],searchkey:string,propname:string): any[] {
    const result:any=[]
    if(!allfashions || searchkey==''|| propname==''){
      return allfashions
    }
    //searching
    allfashions.forEach((fashion:any)=>{
      if(fashion[propname].trim().toLowerCase().includes(searchkey.toLowerCase())){
        result.push(fashion)
      }
    })
    return result;
  }

}
