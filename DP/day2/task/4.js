class Book {
    constructor(title, pages) { this.pages = pages; this.title = title; }
    show(indent) { console.log("-".repeat(indent) + this.title + " (" + this.pages + ")"); }
}

class Box {
    constructor(name) { this.name = name; this.items = []; }
    add(item) { this.items.push(item); }
    show(indent = 0) {
        console.log("-".repeat(indent) + this.name);
        for (const item of this.items) item.show(indent + 2);
    }
}

const box = new Box("Library");
box.add(new Book("JS Guide", 200));
const sub = new Box("Fantasy");
sub.add(new Book("Hobbit", 300));
box.add(sub);
box.show();