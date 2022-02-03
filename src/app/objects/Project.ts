export class Project {
    private id: number = 0;
    private title: string;
    private short_description: string;
    private date: Date;

    constructor(title: string, short_description: string, date?: Date) {
        this.title = title;
        this.short_description = short_description;
        this.date = date != undefined ? date: new Date();
    }

    public get_title (): string {
        return this.title;
    }

    public get_short_description (): string {
        return this.short_description;
    }
}