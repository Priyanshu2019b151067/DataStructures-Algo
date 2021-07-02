reversing  a linked list

Normal linked list
 [10][200]->[20][300]->[30][400]->[40][500]->[50][null]
    100          200        300       400        500
    head
Reversed Linked List

[10][null]<-[20][100]<-[30][200]<-[40][300]<-[50][400]
 
step1 : 
ALGORITHM
-> head -> 10 (currently)
 node = head;
 prev = null
 next;
for(i=0;i<5;i++>)
{
  next = node.next
  node.next = prev
  prev = node
  node = next   
}
head = prev;

-----------------------first iteration -----------------------------------------------------------------------
node = head (10)
prev = null
next = ->(20)
node.next = null(prev)
prev = node(10)
node = (20)

[10]
prev

-----------------------second iteration ----------------------------------------------------------------------
node = (20) 
prev = 10
next = ->(30)
node.next = (10)
prev = node(20)
node = (30)

[10]<-[20]
      prev
-----------------------third iteration ----------------------------------------------------------------------
node = (30) 
prev = 20
next = ->(40)
node.next = (20)
prev = node(30)
node = (40)

[10]<-[20]<-[30]
            prev
-----------------------fourth iteration ----------------------------------------------------------------------
node = (40) 
prev = 30
next = ->(50)
node.next = (30)
prev = node(40)
node = (50)

[10]<-[20]<-[30]<-[40]
                  prev

-----------------------fifth iteration ----------------------------------------------------------------------
node = (50) 
prev = 40
next = ->(null)
node.next = (40)
prev = node(50)
node = (null)

[10]<-[20]<-[30]<-[40]<-[50]
                        prev
                        head

(REVERSED)
[50]->[40]->[30]->[20]->[10]
head