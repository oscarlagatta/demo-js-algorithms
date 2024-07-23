// 1 => 2 => 3 => 4 => 5 => 6 => 7 => null   // m = 3 & n = 5
const reverseBetween = function (head, m, n) {
    let currentPos = 1;
    let currentNode = head;
    let start = head;

    while(currentPos < m) {
        start = currentNode;
        currentNode = currentNode.next;
        currentPos++;
    }

    let newList = null;
    let tail = currentNode;

    while(currentPos <= n) {
        const next = currentNode.next;
        currentNode.next = newList;
        newList = currentNode;
        currentNode = next;
        currentPos++;
    }

    start.next = newList;
    tail.next = currentNode;

    if (m > 1) {
        return head;
    } else {
        return newList;
    }
}