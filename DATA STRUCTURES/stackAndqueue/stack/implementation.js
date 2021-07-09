class BasicNode {
    constructor(val)
    {
        this.value = val;
        this.next = null;

    }
}
class Stack { 
    constructor()
    {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val)
    {
        let new_node = new BasicNode(val);
        if(!this.first)
        {
            this.first= this.last = new_node;
        }
       else{
           new_node.next = this.first;
           this.first = new_node;
       }
       this.size++;
       return this.size;
    }
    pop()
    {
        if(this.size===0)
        {
            return null;
        }
        else if(this.size===1)
        {
            this.first = this.last = null;
        }
        else
        {
            let current_first = this.first;
            this.first= this.first.next;
            this.size--;
            return current_first.value;
        }

    }
}
let s1 = new Stack();
s1.push(25);
s1.push(24);
s1.push(23);
s1.push(22);
s1.push(21);
s1.push(20);
s1.push(19);
s1.pop()
console.log(s1);