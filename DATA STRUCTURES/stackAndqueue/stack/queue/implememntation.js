class BasicNode {
    constructor(val)
    {
        this.value = val;
        this.next = null;

    }
}
class Queue { 
    constructor()
    {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        let new_node = new BasicNode(val);
        if(!this.first)
        {
            this.first = this.last = new_node;
        }
        else
        {
            this.last.next = new_node;
            this.last = new_node
        }
        return ++this.size;
    }
    dequeue()
    {
        if(this.size===0)
        {
            return null;
        }
        else if(this.size===1)
        {
            let cuu = this.first.value;
            this.first = this.last = null;
            return cuu;
        }
        else
        {
            let cuu = this.first.val;
            this.first = this.first.next
            this.size--;
            return cuu;
        }
    }

}
let q1 = new Queue();
q1.enqueue(21)
console.log(q1.dequeue())