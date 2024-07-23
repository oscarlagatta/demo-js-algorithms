// Option 1
const findCycle = function (head) {
    let tortoise = head;
    let hare = head;
    while (true) {
        hare = hare.next;
        tortoise = tortoise.next;
        if (hare === null || hare.next === null) {
            return false;
        } else {
            hare = hare.next;
        }

        if (tortoise === hare) break;
    }

    let p1 = head;
    let p2 = tortoise;

    while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;

    }

    return p1;

}

// Option 2
const hasCycle = function (head) {
    if (head === null) return false;

    let tortoise = head, hare = head;

    while (hare !== null && hare.next !== null) {
        tortoise = tortoise.next;
        hare = hare.next.next;

        if (tortoise === hare) return true;
    }

    return false;
}