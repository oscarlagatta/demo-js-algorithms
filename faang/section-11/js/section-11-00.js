const findCycle = function(head) {
    let currentNode = head;

    const seenNode = new Set();

    while(!seenNode.has(currentNode)) {
        if (currentNode.next === null) {
            return false;
        }
        seenNode.add(currentNode);
        currentNode = currentNode.next;
    }

    return currentNode;
}
