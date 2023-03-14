import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], filter: string, propName:string): any {
const resultarray =[];
if(value.length ===0||filter===''||propName===''){
    return value;
  }
  for (const item of value){
    if(item[propName]===filter){
      resultarray.push(item);
    }
  }
return resultarray;

  }
}
