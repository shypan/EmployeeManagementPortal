import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(text: string, length:number=20): string {
    if(!text)
      return " "

    return text.substring(0,length) + '. . . .'


  }

}
