// You are given the heads of two sorted linked lists list1 and list2.
//
//     Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
//
//     Return the head of the merged linked list.
//
//
//
//     Example 1:
//
//
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:
//
// Input: list1 = [], list2 = []
// Output: []
// Example 3:
//
// Input: list1 = [], list2 = [0]
// Output: [0]
//
//
// Constraints:
//
//     The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.


 //Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }



/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) =>{
    if(!list1 && !list2 ){
        return null
    }
    const res = new ListNode()
    let pointer = res;
    let prev = null
    while ( list1 || list2 ) {
        console.log(pointer, res)
        if(list1 && (!list2 || list1.val <= list2.val)){
            pointer.val=list1.val
            list1 = list1.next
        }
        else{
            pointer.val=list2.val
            list2= list2.next
        }
        pointer.next = new ListNode()
        prev = pointer
        pointer = pointer.next
    }
    if(prev){
        prev.next = null
    }
    return res;
};

const list1 = {val:4, next:{val:7, next:undefined}}
const list2 = {val:2, next:null}

console.log(mergeTwoLists(null,null))