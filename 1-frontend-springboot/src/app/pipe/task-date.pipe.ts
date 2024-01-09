import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

// преобразовывает дату в нужный текстовый формат
@Pipe({
    name: 'taskDate'
})
export class TaskDatePipe implements PipeTransform {

    private datePipe: DatePipe = new DatePipe('ru-RU');
  
    transform(date: Date | string, format: string = 'mediumDate', timezone?: string, locale?: string): string {
      if (date == null) {
        return 'Без срока';
      }
  
      date = new Date(date);
  
      const currentDate = new Date().getDate();
  
      if (date.getDate() === currentDate) {
        return 'Сегодня';
      }
  
      if (date.getDate() === currentDate - 1) {
        return 'Вчера';
      }
  
      if (date.getDate() === currentDate + 1) {
        return 'Завтра';
      }
  
      return this.datePipe.transform(date, format, timezone, locale) as string;
    }
  }
