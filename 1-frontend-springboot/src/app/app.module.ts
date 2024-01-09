import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CategoriesComponent} from './views/categories/categories.component';
import {TaskListComponent} from "./views/tasks/tasks.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {EditTaskDialogComponent} from './dialog/edit-task-dialog/edit-task-dialog.component';

import {ConfirmDialogComponent} from './dialog/confirm-dialog/confirm-dialog.component';
import {TaskDatePipe} from './pipe/task-date.pipe';

import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {EditCategoryDialogComponent} from './dialog/edit-category-dialog/edit-category-dialog.component';
import {FooterComponent} from './views/footer/footer.component';
import {AboutDialogComponent} from './dialog/about/about-dialog.component';
import {HeaderComponent} from './views/header/header.component';
import {StatComponent} from './views/stat/stat.component';
import {StatCardComponent} from "./views/stat/stat-card/stat-card.component";
import {PrioritiesComponent} from "./views/priorities/priorities.component";
import {SettingsDialogComponent} from "./dialog/settings-dialog/settings-dialog.component";
import {EditPriorityDialogComponent} from "./dialog/edit-priority-dialog/edit-priority-dialog.component";
import { SidebarModule } from 'ng-sidebar';
import { DeviceDetectorService } from 'ngx-device-detector';
import {HttpClientModule} from "@angular/common/http";

import {STAT_URL_TOKEN} from "./data/dao/impl/StatService";
import {TASK_URL_TOKEN} from "./data/dao/impl/TaskService";
import {CATEGORY_URL_TOKEN} from "./data/dao/impl/CategoryService";
import {PRIORITY_URL_TOKEN} from "./data/dao/impl/PriorityService";
import { MaterialModule } from './material-module';

registerLocaleData(localeRu);

@NgModule({
    declarations: [
        AppComponent,
        CategoriesComponent,
        TaskListComponent,
        EditTaskDialogComponent,
        ConfirmDialogComponent,
        TaskDatePipe,
        EditCategoryDialogComponent,
        FooterComponent,
        AboutDialogComponent,
        HeaderComponent,
        StatComponent,
        StatCardComponent,
        PrioritiesComponent,
        SettingsDialogComponent,
        EditPriorityDialogComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        SidebarModule.forRoot(),
        HttpClientModule,
    ],
    providers: [

        {
            provide: TASK_URL_TOKEN,
            useValue: 'http://localhost:8080/task'
        },

        {
            provide: CATEGORY_URL_TOKEN,
            useValue: 'http://localhost:8080/category'
        },


        {
            provide: PRIORITY_URL_TOKEN,
            useValue: 'http://localhost:8080/priority'
        },


        {
            provide: STAT_URL_TOKEN,
            useValue: 'http://localhost:8080/stat'
        },



    ],
    entryComponents: [
        EditTaskDialogComponent,
        ConfirmDialogComponent,
        EditCategoryDialogComponent,
        AboutDialogComponent,
        SettingsDialogComponent,
        EditPriorityDialogComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
