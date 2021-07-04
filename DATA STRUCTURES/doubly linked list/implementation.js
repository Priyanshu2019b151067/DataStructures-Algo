class BasicNode{
    constructor(val)
    {
        this.prev = null;
        this.val = val;
        this.next = null;
    }
}
class DoublyLinkedList{
    constructor()
    {
        this.head = null;
        this.length = 0;
        this.tail = null;
    }
    push(val)
    {
        let new_node = new BasicNode(val);
        if(!this.head)
        {
            this.head = this.tail = new_node;
        }
        else
        {
            new_node.prev = this.tail;
            this.tail.next = new_node;
            this.tail = new_node
        }
        this.length++;
        return this;
    }
    pop()
    {
        if(!this.head)
        {
            return undefined;
        }
        else if(this.head.next===null)
        {
            this.head = this.tail = null;
         
        }
        else{
            let new_tail = this.tail.prev;
            new_tail.next = null;
            this.tail=new_tail;
        }
        this.length--;
        return this;
    }
    shift()
    {
        if(!this.head)
        {
            return undefined;
        }
        else if(this.head.next===null)
        {
            this.head=this.tail=null;
        }
        else{
            let new_head = this.head.next;
            new_head.prev = null;
            this.head = new_head;
        }
        this.length--;
        return this;
    }
    unshift(val)
    {
        let new_node = new BasicNode(val);
        if(!this.head)
        {
            this.head=this.tail = new_node;
        }
        else
        {
            new_node.next = this.head;
            this.head = new_node
        }
        this.length++;
        return this;
    }
    get(index)
    {
        if(index<0 || index >= this.length )
        {
            return null;
        }
        else
        {
            let i=0;
            let cmp = this.head;
            while(i!==index)
            {
                cmp = cmp.next;
                i++;
            }
            return cmp;
        }
    }
    set(value,index)
    {
        let current = this.get(index)
        if(!current)
        {
            return false;
        }
        current.val = value;
        return true;
    }
    insert(value,index)
    {
        if(index < 0 || index > this.length)
        {
            return false;
        }
        else
        {
            if(index === 0)
            {
                this.unshift(value);
            }
            else if(index === this.length)
            {
                this.push(value);
            }
            else
            {
                let current = this.get(index);
                let new_node = new BasicNode(value);
                new_node.next = current;
                new_node.prev = current.prev;
                current.prev.next = new_node;
                current.prev = new_node;
                this.length++;
                return this;
            }
        }
    }
    remove(index)
    {
        if(index < 0 || index > this.length)
        {
            return false;
        }
        else
        {
            if(index === 0)
            {
                this.shift();
            }
            else if(index === this.length)
            {
                this.pop();
            }
            else{
                let current = this.get(index);
                current.prev.next = current.next;
                current.next.prev = current.prev;
                this.length--;
                return this;
            }
        }
    }
}

let arr = new DoublyLinkedList();
arr.push(20);
arr.push(21);
arr.push(22);
arr.push(23);
arr.push(24);
arr.push(25);
// arr.insert(45,1)
// for (let index = 0; index < arr.length; index++) {
//     console.log(arr.get(index))
// }
arr.remove(1);

console.log(arr);