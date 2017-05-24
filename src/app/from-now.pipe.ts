import { PipeTransform, Pipe } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/es';

@Pipe({name: 'fromNow'})
export class FromNowPipe implements PipeTransform {
  transform(value, args){
    let mydate = moment(new Date(value));
    return mydate.fromNow();
  }
}
