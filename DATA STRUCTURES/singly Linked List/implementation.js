class BasicNode{
    constructor(val)
    {
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val)
    {
        let newnode = new BasicNode(val);
        if(!this.head)
        {
            this.head = this.tail = newnode;
        }
        else
        {
            this.tail.next = newnode;
            this.tail = newnode;
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
            let value = this.head.val;
            this.head=this.tail=null
            this.length = 0;
            return value
        }
        else
        {
            let cmp = this.head;
            let current = cmp;
            while(cmp.next!==null)
            {
                current = cmp;
                cmp = cmp.next;
            }
            current.next = null;
            this.length--;
            this.tail = current;
            return cmp.val;
        }
    }
    shift()
    {
        if(!this.head)
        {
            return undefined;
        }
        else if(this.head.next===null)
        {
            let value = this.head.val;
            this.head=this.tail=null
            this.length = 0;
            return value
        }
        else
        {
            let cmp = this.head;
            this.head =  cmp.next;
            this.length--;
            return cmp.val;
        }
    }
    unshift(val)
    {
        let newnode = new BasicNode(val);
        if(!this.head)
        {
            this.head= this.tail = newnode;
        }
        else
        {
            newnode.next = this.head;
            this.head = newnode;
        }
        this.length++;
        return this;
    }
    get(indi)
    {
        if(indi < 0 || indi > this.length)
        {
            return null;
        }
        else
        {
            let output = this.head;
            while(indi!==0)
            {
                output = output.next;
                indi--;
            }
            return output;
        }
    }
    set(value,indi)
    {
        if (!this.get(indi))
        {
            return false;
        }
        else
        {
            let output = this.get(indi);
            output.val = value;
            return true;
        }
    }
    insert_auto(value,index)
    {
        if(index < 0 || index > this.length)
        {
            return false;
        }
        if(index === this.length)
        {
            this.push(value);
        }
        else if(index === 0)
        {
            this.unshift(value);
        }
        else
        {
            let new_node = new BasicNode(value);
            let previous = this.get(index-1)
            new_node.next = previous.next
            previous.next = new_node
            this.length++;
            return true;
        }
    }
    insert_manual(value,indi)
    {
        if(indi < 0 || indi > this.length)
        {
            return undefined;
        }
        else if(!this.head)
        {
            
            let new_node = new BasicNode(value);
            this.head= this.tail = new_node;
            this.length++;
            return this;

        }
        else
        {
            let new_node = new BasicNode(value);
            let index = 0;
            let cmp  = this.head;
            let prev = cmp;
            while(index!==indi)
            {
                prev = cmp;
                cmp = cmp.next;
                index++;
            }
            new_node.next = cmp;
            prev.next = new_node;
            this.length++;
            return this;
            
        }
    }
    reverse()
    {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i = 0; i < this.length; i++){
          next = node.next;
          node.next = prev;
          prev = node;
          node = next;
        }
        return this;
    }
    remove(index)
    {
        if(index < 0 || index > this.length) 
        {
            return undefined;
        }
        else
        {
           
            if(index === 0)
            {
                let value = this.shift();
                return value;
            }
            else if(index === this.length -1)
            {
                let value = this.pop();
                return value;
            }
            else
            {
                let prev = this.get(index -1);
                // let deleting = ;
                prev.next = prev.next.next;
                this.length--;
                return deleting.val;
            }
        }
    }
    
}
let arr1 = new SinglyLinkedList();
arr1.push(23);
arr1.push(24);
arr1.push(25);
arr1.push(26);
arr1.push(27);
arr1.push(28);
arr1.remove(5);
// arr1.insert_auto(89,0);
// arr1.insert_auto(90,7);
// arr1.insert_auto(45,5);
// arr1.unshift(22)
// arr1.unshift(21)
// arr1.insert(69,1);
// arr1.push(25);
// console.log(arr1.shift())
// console.log(arr1.shift())
// console.log(arr1.shift())
// console.log(arr1.shift())

// console.log(arr1.pop());
// arr1.pop();
// arr1.pop();
// arr1.pop();
// arr1.pop();
// arr1.push(24);
// arr1.push(25);
// arr1.push(26);
// arr1.push(27);
// arr1.push(28);
// arr1.set(100,2);

// console.log(arr1.set(10,-1))
// console.log(arr1.get(2))
arr1.reverse()
console.log(arr1)