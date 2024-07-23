const flatten = function(head) {

  if (!head) {
    return head;
  }

  let currentNode = head;

  while(currentNode != null) {
    if (currentNode.child === null) {
      currentNode = currentNode.next;
    } else {
      let tail = currentNode.child;
      while (tail.next !== null) {
        tail = tail.next;
      }
      tail.next = currentNode.next;

      // if( tail.next !== null) {
      //   tail.next.prev = tail;
      // }

      if (currentNode.next !== null) {
        currentNode.next.prev = tail;
      }
      currentNode.next = currentNode.child;

      // currentNode.next.prev = currentNode;
      currentNode.child.prev = currentNode;
      currentNode.child = null;
    }
  }


}