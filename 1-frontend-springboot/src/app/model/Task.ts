import {Priority} from './Priority';
import {Category} from './Category';

export class Task {
    id?: number | null;
    title?: string | null;
    completed?: number | null; // вместо boolean, чтобы удобный было записывать в БД
    priority?: Priority | null;
    category?: Category;
    date?: Date | null;

// сюда будет записывать старое значение,
// которое изменили на новое (нужно для правильного обновления счетчиков категорий)
    oldCategory?: Category;


    constructor(id?: number | null, title?: string | null, completed?: number | null, priority?: Priority | null, category?: Category, oldCategory?: Category, date?: Date) {
        this.id = id;
        this.title = title;
        this.completed = completed;
        this.priority = priority;
        this.category = category;
        this.oldCategory = oldCategory;
        this.date = date;
    }
}
