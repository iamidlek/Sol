class StackToQ {
    constructor() {
        this.items = []
        this.count = 0
    }

    enqueue(element) {
        this.items[this.count] = element
        console.log(`stack[${this.count}]: ${element} Added`)
        this.count++
        return this.count - 1
    } // someStack.push('simpsons')

    dequeue() {
        if (this.count === 0) return undefined
        
        const itemsOut = []
        let index = this.count - 1
        let countOut = 0
        while (index >= 0) {
            itemsOut[countOut] = this.items[index]
            countOut++
            index--
        }
        countOut--
        let toRemove = itemsOut[countOut]
        countOut--
        this.items.splice(0, this.items.length)
        this.count = 0

        while (countOut >= 0) {
            this.items[this.count] = itemsOut[countOut]
            this.count++
            countOut--
        }
        console.log('dd',this.items)
        console.log(`stack[0]: ${toRemove} removed`)
        return toRemove
    } // someStack.pop()

    peek() {
        console.log(`stack[peek> ${this.count-1}]: ${this.items[this.count-1]}`)
        return this.items[this.count - 1]
    }

    isEmpty() {
        console.log(this.count === 0)
        return this.count === 0
    } // return true or false

    size() {
        console.log(`Stack size: ${this.count}`)
        return this.count
    }

    print() {
        console.log(`${this.items.toString()}`)
        return this.items.toString()
    }

    clear() {
        //0. this.items = []
        //1. this.items.length = 0
        this.items.splice(0, this.items.length)
        this.count = 0
        console.log('Reset Stack complete')
        return this.items
    } // initialize
}

const stack = new StackToQ()

stack.isEmpty()
stack.enqueue('apple')
stack.enqueue('banana')
stack.enqueue('coconut')

stack.dequeue()
stack.dequeue()

stack.isEmpty()
stack.peek()
stack.enqueue('bike')
stack.peek()

stack.size()
stack.print()

stack.clear()
stack.size()
stack.print()
// ----------------------''
// ----------------------''
// ----------------------''


class Stack {
    constructor() {
        this.items = []
        this.count = 0
    }

    push(element) {
        this.items[this.count] = element
        //console.log(`stack[${this.count}]: ${element} Added`)
        this.count += 1
        return this.count - 1
    }

    pop() {
        if(this.count==0) return undefined
        let toDelete = this.items.pop()
        this.count -= 1
        //console.log(`stack[${this.count}]: ${toDelete} removed`)
        return toDelete
    }

    peek() {
        console.log(`stack[peek]: ${this.items[this.count-1]}`)
        return this.items[this.count-1]
    }

    isEmpty() {
        console.log(this.count == 0)
        return this.count == 0
    }

    size() {
        //console.log(`Stack Size: ${this.count}`)
        return this.count
    }

    print() {
        console.log(`${this.items.toString()}`)
        return this.items.toString()
    }

    clear() {
        this.items = []
        this.count = 0
        console.log('Reset Stack complete')
        return this.items
    }
}

class QueueWithStacks {
    constructor(){
        this.stack1 = new Stack()
        this.stack2 = new Stack()
    }

    enqueue(value){
        this.stack1.push(value)
        return true
    }
    dequeue(){
        while (this.stack1.items.length>0) {
            this.stack2.push(this.stack1.pop())
        }

        const toDequeue = this.stack2.pop()

        while (this.stack2.items.length>0){
            this.stack1.push(this.stack2.pop())
        }
        return toDequeue
    }
    print(){
        console.log(`${this.stack1.items.toString()}`)
    }
}

const queueStacks = new QueueWithStacks()

queueStacks.enqueue(1)
queueStacks.enqueue(2)
queueStacks.enqueue(3)
queueStacks.print()

queueStacks.dequeue()
queueStacks.print()
queueStacks.dequeue()
queueStacks.print()
