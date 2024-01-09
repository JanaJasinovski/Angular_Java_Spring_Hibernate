import {Component, Input, OnInit} from '@angular/core';
import {DashboardData} from '../../object/DashboardData';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})

// "presentational component": отображает полученные данные и отправляет какие-либо действия обработчику
// назначение - показать статистику
export class StatComponent implements OnInit {


  // ----------------------- входящие параметры ----------------------------


  @Input()
  dash!: DashboardData; // данные дэшбоарда

  @Input()
  showStat!: boolean; // показать или скрыть статистику


  // -------------------------------------------------------------------------


  constructor() {
  }

  ngOnInit() {
  }

  getTotal(): number {
    if (this.dash) {
      return this.dash.completedTotal! + this.dash.uncompletedTotal!
    }
    return 0; // или любое другое значение по умолчанию
  }

  getCompletedCount(): number {
    if (this.dash) {
      return this.dash.completedTotal!;
    }else {
      return 0;
    }
  }

  getUncompletedCount() : number {
    if (this.dash) {
      return this.dash.uncompletedTotal as number;
    }else {
      return 0;
    }
  }

  getCompletedPercent() : number {
    if (this.dash) {
      return this.dash.completedTotal ? (this.dash.completedTotal / this.getTotal()) : 0;
    }else {
      return 0;
    }
  }

  getUncompletedPercent() : number {
    if (this.dash) {
      return this.dash.uncompletedTotal ? (this.dash.uncompletedTotal / this.getTotal()) : 0;
    } else {
      return 0;
    }
  }
}
