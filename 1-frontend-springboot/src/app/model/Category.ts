export class Category {
    id?: number | null;
    title: string;
    completedCount?: number | null;
    uncompletedCount?: number;

    // ? означает необязательный для передачи параметр
    constructor(id: number | null, title: string, completedCount?: number, uncompletedCount?: number) {
        this.id = id;
        this.title = title;
        this.completedCount = completedCount;
        this.uncompletedCount = uncompletedCount;
    }
}
