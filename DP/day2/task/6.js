class Task {
    constructor() { this.state = new InProgress(); }
    next() { this.state.next(this); }
}

class InProgress {
    next(task) {
        console.log("Working -> Review");
        task.state = new ReadyForReview();
    }
}
class ReadyForReview {
    next(task) {
        console.log("Review -> Done");
        task.state = new Done();
    }
}
class Done {
    next() { console.log("Task is already finished."); }
}

const t = new Task();
t.next();
t.next();