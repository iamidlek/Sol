class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    insertFirst(data) {
        this.head = new Node(data, this.head)
        this.size++
        console.log(`LL: ${data} inserted first`)
    }

    insertLast(data) {
        const NewNode = new Node(data)
        let current

        if (!this.head) {
            this.head = NewNode
            console.log(`LL: ${data} inserted first`)
        } else {
            current = this.head

            while (current.next) {
                current = current.next
            }

            current.next = NewNode
            console.log(`LL: ${data} inserted last`)
        }
        this.size++
    }

    insertAt(data, index) {
        if (index > 0 && index > this.size) {
            return false
        }

        if (index === 0) {
            this.insertFirst(data)
            return true
        }

        const NewNode = new Node(data)
        let curr, prev

        curr = this.head
        let count = 0

        while (count < index) {
            prev = curr
            count++
            curr = curr.next
        }

        NewNode.next = curr
        prev.next = NewNode
        console.log(`LL: new Node ${data} inserted in front of ${NewNode.next.data}`)
        this.size++
    }

    getFrom(index) {
        if ((index > 0 && index > this.size) || this.size === null) {
            return false
        }
        let curr = this.head
        let count = 0

        while (curr) {
            if (count === index) {
                console.log(curr.data)
                break
            }
            count++
            curr = curr.next
        }
        console.log(`LL: ${curr.data} from ${index}`)
        return curr.data
    }

    removeFrom(index) {
        if (index > 0 && index > this.size) {
            return false
        }

        let curr = this.head
        let prev
        let count = 0

        if (index === 0) {
            this.head = curr.next
        } else {
            while (count < index) {
                count++
                prev = curr
                curr = curr.next
            }
            prev.next = curr.next
        }
        console.log(`${curr.data} has removed`)
        this.size--
    }
    // TODO
    clear() {
        this.head = null
        this.size = null
        return true
    }
    countNode() {
        console.log(`LL size: ${this.size}`)
        return this.size
    }
    printListData() {
        let curr = this.head
        const res = []
        while (curr) {
            res.push(curr.data)
            curr = curr.next
        }
        console.log(res.join(' => '))
    }
}

const LList = new LinkedList()
LList.countNode()
LList.insertFirst(11)
LList.insertLast(12)
LList.insertLast(13)
LList.insertLast(14)

LList.insertAt(15, 2)
LList.insertAt(16, 2)
LList.printListData()
// LList.getFrom(0)
// LList.removeFrom(3)

// LList.clear()
// LList.countNode()
