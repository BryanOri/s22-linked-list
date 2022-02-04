// Step 1: Create a ListNode class that holds a generic "value"
//         variable and a "next" variable to hold the next ListNode in
//         the Linked List
class ListNode{
    constructor(_value){
        this.value = _value;
        this.next = null;
    } 
}

// Step 2: Create a LinkedList class that holds a "head" variable to
//         represent the first ListNode in the Linked List and a "tail"
//         variable to represent the last ListNode in the Linked List.
//         Keep in mind, these will need to be updated if the first
//         ListNode or the last ListNode in the Linked List ever
//         changes.
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    getNodeValue(index){
        if(index === 0 && this.head === null){
            throw new RangeError("nothing in link-list")
        }
        if(index === 0){
            return this.head.value;
        }
        if(index > 0){
            let _value = this.head
            for(let i = 0; i < index; i++){
                _value = _value.next;
                if(_value === null){
                    throw new RangeError("No more index")
                }
            } 
            return _value.value;
        }
        // if(index === 0){
        //     return this.head;
        // }
        // if(index === 1){
        //     return this.head.next;
        // }
        // if(index === 2){
        //     let headTwo = this.head.next;
        //     return headTwo.next;
        // }
        // if (index === 3){
        //     let headTWo = this.head.next;
        //     let headThree = headTWo.next;
        //     return headThree.next;
        // }
        // if(index === 4){
        //     let headTwo = this.head.next;
        //     let headThree = headTwo.next;
        //     let headFour = headThree.next;
        //     for(i = 0; i < 5; i++){
            
        //     }
        //     return headFour.next;
        // }
    }
    pushFront(_value){
        let something = new ListNode(_value)
        if(this.head === null){
            this.head = something;
            this.tail = something;
        } else {
            let oldValue = this.head;
            this.head = something;
            this.head.next = oldValue;
        }
    }
    pushBack(_value){
        let something = new ListNode(_value);
        if(this.head === null){
            this.head = something;
            this.tail = something;
        } else {
            this.tail.next = something;
            this.tail = something;
        }
    }
    popBack(){
        if(this.head !== null){
            if(this.head.next !== null){
                let nodeBeforeLast = this.head;
                while(nodeBeforeLast !== null && nodeBeforeLast.next !== this.tail){
                    nodeBeforeLast = nodeBeforeLast.next;
                }
                nodeBeforeLast.next = null;
                this.tail = nodeBeforeLast;
            }
            else{
                this.head = null;
                this.tail = null;
            }
        }
    }
}
let whatever = new LinkedList()
whatever.pushFront(25);
whatever.pushFront(34);
whatever.pushFront(44);
whatever.pushFront(77);
whatever.pushFront(88);
console.log(whatever.getNodeValue(0));
console.log(whatever.getNodeValue(1));
console.log(whatever.getNodeValue(2));
console.log(whatever.getNodeValue(3));
console.log(whatever.getNodeValue(4));


// Step 3: Add a "getNodeValue" function to the LinkedList class that
//         will retrieve a ListNode's "value" from the Linked List by
//         the ListNode's index in the Linked List
//
// Step 4: Add a "pushBack" function to the LinkedList class that will
//         add a new ListNode to the end of the Linked List
//
// Step 5: Add a "popBack" function to the LinkedList class that will
//         remove an existing ListNode from the end of the Linked List      
// console.time("answer time");
// let _array = []
// for(i = 0; i < 100000; i++){
// _array.push(i);
// }
// console.timeEnd("answer time")
// console.time("link time");
// let Link = new LinkedList()
// for(i = 0; i < 100000; i++){
// Link.pushBack(i);
// }
// console.timeEnd("link time");

let _array = []
for(i = 0; i < 100000; i++){
    _array.push(i);
}
console.time("answer time");
console.log(_array[99999])
console.timeEnd("answer time")
let Link = new LinkedList()
for(i = 0; i < 100000; i++){
    Link.pushBack(i);
}
console.time("link time");
console.log(Link.getNodeValue(99999))
console.timeEnd("link time");
