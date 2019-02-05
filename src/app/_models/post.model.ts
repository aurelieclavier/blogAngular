export class Post {
    id: number;
    loveIts= 0;
    created_at: Date = new Date();
    constructor(public title: string, public content: string) {
    }
}