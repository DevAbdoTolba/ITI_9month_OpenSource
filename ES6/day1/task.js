const student = {
    name: "Tolba",
    University: "AAST",
    faculty: "CS",
    finalGrade: "A+"
};

console.log(`${student.name} is a student in faculty of ${student.faculty} in university ${student.University}
And his final grad is ${student.finalGrade}.`);

function Queue(maxSize) {
    let toq = -1;
    let elements = [];

    this.getCurrentSize = function () {
        console.log("Queue Length:", elements.length);
        return elements.length;
    };

    const getQueueElements = function () {
        console.log("Queue elements:", elements);
        return elements;
    };

    this.viewQueue = function () {
        return getQueueElements();
    };

    this.inQueue = function (item) {
        if (elements.length < maxSize) {
            elements.push(item);
            toq++;
        } else {
            console.log("Queue is full");
        }
    };

    this.deQueue = function () {
        if (elements.length > 0) {
            let removed = elements.shift();
            toq--;
            return removed;
        } else {
            console.log("Queue is empty");
        }
    };

    this.returnQueue = function () {
        return getQueueElements;
    };
}

Queue.prototype.isEmpty = function () {
    return this.getCurrentSize() === 0;
};

const myQueue = new Queue(5);

myQueue.inQueue(10);
myQueue.inQueue(20);
myQueue.inQueue(30);

console.log("Current size:", myQueue.getCurrentSize());
myQueue.viewQueue();

console.log("Dequeued:", myQueue.deQueue());
console.log("After dequeue:");
myQueue.viewQueue();

console.log("Is empty?", myQueue.isEmpty());

let queueFunc = myQueue.returnQueue();
console.log("Calling returned function:");
queueFunc();
