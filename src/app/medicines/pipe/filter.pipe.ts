import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allMedicines:[],searchKey:string,propName:string): any[] {
    const result:any=[]
    if(!allMedicines || searchKey==''|| propName==''){
      return allMedicines;

    }
    allMedicines.forEach((medicine:any)=>{
      if(medicine[propName].trim().toLowerCase().includes(searchKey.toLowerCase())){
        result.push(medicine)
      }
    })
    return result;
  }

}
