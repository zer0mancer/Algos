class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}
    class LinkedList {
        constructor() {
            this.head = null;
        }
        addFront(val) {
            let new_node = new Node(val);
            
            if(!this.head) {
                this.head = new_node;
                return this;
            }
            new_node.next = this.head;
            this.head = new_node;
            return this;
            
        }
        display(){
            var string = "";
            if (this.head != null){
                string += this.head.data;
                var jumper = this.head.next;
                while(jumper !=null){
                    string += " & " + jumper.data; jumper = jumper.next;
                    // remember to return this OUTSIDE of the while loop otherwise it won't display the next.
                }
                return string;
            }
            return string;
            }
    }
const SLL = new LinkedList();
SLL.addFront(52);
SLL.addFront(44);
SLL.addFront(73);
SLL.addFront(666);
SLL.addFront("hello");
// SLL.addFront(goodbye);
SLL.addFront("All", "of", "this",  "is" , " true ");
// ^^this only brings out the first quotes.^^
SLL.addFront("All" + " " + " of " + " this " + " is " + " true ");
console.log(SLL.display());