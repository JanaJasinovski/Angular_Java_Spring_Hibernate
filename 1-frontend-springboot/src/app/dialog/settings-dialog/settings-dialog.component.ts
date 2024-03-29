import {Component, OnInit} from '@angular/core';
import {Priority} from '../../model/Priority';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-settings-dialog',
    templateUrl: './settings-dialog.component.html',
    styleUrls: ['./settings-dialog.component.css']
})

// диалоговое окно настроек приложения
// т.к. настройки не привязаны к другим компонентам (окнам),
// то он самостоятельно может загружать нужные данные с помощью dataHandler (а не получать их с помощью @Input)

export class SettingsDialogComponent implements OnInit {

    priorities?: Priority[];

    constructor(
        private  dialogRef: MatDialogRef<SettingsDialogComponent> // для возможности работы с текущим диалог. окном
    ) {
    }

    ngOnInit() {
        // получаем все значения, чтобы отобразить настроку цветов
        // this.dataHandler.getAllPriorities().subscribe(priorities => this.priorities = priorities);
    }

    // нажали Закрыть
    onClose() {

        this.dialogRef.close(false);

    }


    // т.к. мы меняем значения в массивах, то изменения сразу отражаются на списке задач (не требуется доп. обновления)

    // добавили приоритет
    onAddPriority(priority: Priority): void {
        // this.dataHandler.addPriority(priority).subscribe();
    }

    // удалили приоритет
    onDeletePriority(priority: Priority): void {
        // this.dataHandler.deletePriority(priority.id).subscribe();
    }

    // обновили приоритет
    onUpdatePriority(priority: Priority): void {
        // this.dataHandler.updatePriority(priority).subscribe();
    }

}
