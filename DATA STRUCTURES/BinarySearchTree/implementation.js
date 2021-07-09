class BasicNode{
    constructor(value)
    {
        this.value = value;
        this.left = null;
        this.right = null;
        this.count = 1;
    }
}
class BinarySearchTree{
    constructor()
    {
        this.root = null;
    }
    insert(value)
    {
        let new_node = new BasicNode(value);
        if(!this.root)
        {
            this.root = new_node;
            return this
        }
        else
        {
            let current = this.root;
            while(true)
            {
                if(value=== current.value)
                {
                    current.count++;
                    return this;
                }
                else if(value > current.value)
                {
                    if(current.right===null)
                    {
                      current.right = new_node;  
                      return this;
                    }
                    else
                    {
                        current= current.right;
                    }
                }
                else if(value < current.value)
                {
                    if(current.left === null)
                    {
                        current.left = new_node;
                        return this;
                    }
                    else
                    {
                        current = current.left;
                    }
                }
                   
            }
        }
       
    }
    find(value)
    {
        if(!this.root)
        {
            return false;
        }
        else
        {
            let current = this.root;
            while(true)
            {
                if(value ===current.value)
                {
                    return true;
                }
                else if(value  > current.value)
                {
                    if(current.right===null)
                    {
                        return false;
                    }
                    current = current.right;
                }
                else if(value < current.value)
                {
                    if(current.left===null)
                    {
                        return false;
                    }
                    current = current.left;
                }
            }
        }
    }
}

let b1 = new BinarySearchTree()
b1.insert(10);
b1.insert(5);
b1.insert(13);
b1.insert(11);
b1.insert(2);
b1.insert(16);
b1.insert(7);
b1.insert(10);
console.log(b1.find(13))
console.log(b1);
