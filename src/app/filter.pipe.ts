import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, sortby: string) :any{
   return value.sort((a: any,b: any)=>a[sortby].localcompare(b[sortby]));

    // const sortfield = args[0];
    // value.sort((a: any,b: any)=>{
    //   if(a[sortfield]<b[sortfield]){
    //     return -1;
    //   }else if(a[sortfield]>b[sortfield]){
    //     return 1;
    //   }else {
    //     return 0;
    //   }

    // }

    // );
  }
}