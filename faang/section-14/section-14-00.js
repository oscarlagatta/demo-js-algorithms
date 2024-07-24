// Queue with stacks

class QueueWithStacks {
    constructor() {
        this.in = []; // the stack we push values in order of what stack expect
        this.out = []; // where we want to dequeue values out of or queue we remove them from this.in and push them to this.out

    }

    enqueue(value) {
        this.in.push(value);
        // if (this.out.length === 0) {
        //     while (this.in.length > 0) {
        //         this.out.push(this.in.pop());
        //     }
        // }
    }

    dequeue() {
        // retrieve from the head
        if (this.out.length === 0) {
            while (this.in.length) {
                this.out.push(this.in.pop())
            }
        }
        return this.out.pop();
    }

    peek() {
        if (this.out.length === 0) {
            while (this.in.length) {
                this.out.push(this.in.pop());
            }
        }
        return this.out[this.out.length - 1];
    }


    empty() {
        return this.in.length === 0 && this.out.length === 0;
    }

}