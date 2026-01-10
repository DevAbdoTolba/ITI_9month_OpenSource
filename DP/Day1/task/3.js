class Document{
    constructor(
        header,
        footer,
        pages,
        text
    ){
        this.header = header;
        this.footer = footer;
        this.pages = pages;
        this.text = text;
    }

    clone(proto){
        this.proto = proto
        return new Document(
            this.header,
            this.footer,
            this.pages,
            this.text
        );
    }

    equals(doc) {
    return this.header === doc.header &&
           this.footer === doc.footer &&
           this.pages === doc.pages &&
           this.text === doc.text;
}

}

const doc1 = new Document(
    "Document Header",
    "Document Footer",
    10,
    "Document Text"
);

const doc2 = doc1.clone(doc1);

console.log(doc1 == doc1);
console.log(doc1 == doc2);
console.log(doc1.equals(doc2));


