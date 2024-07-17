### Doubled Linked Lists

Has an extra piece of data that links to the previous node a pointer to the previous node
Single vs Double ?

### Single:

PRO: simple implementation compared with the doubly, lesser memory needed, fewer operations and faster.
CONS: cannot be iterated and traversed from back to front.

**Summary: when the main goal is fast insertions and deletions, not much searching.**

### Doubly:

PRO: CAN BE iterated from the front or back, not need to traverse to delete.
CONS: fairly complex, and requires memory and storage for the extra property, and extra operations we may need when
inserting and delete

**Summary: Good when no memory limitations.** 
