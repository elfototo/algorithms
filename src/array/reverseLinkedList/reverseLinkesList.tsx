type ListNode = {
  val: number;
  next: ListNode | null;
};
export function reverseLinkedList(head: ListNode | null) {
  let prev: ListNode | null = null;
  let current = head;

  while (current !== null) {
    const next: ListNode | null = current.next;

    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}



const third: ListNode = { val: 3, next: null };
const second: ListNode = { val: 2, next: third };
const first: ListNode = { val: 1, next: second };

const reversed = reverseLinkedList(first);

function toArray(head: ListNode | null): number[] {
  const result: number[] = [];

  let current = head;

  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}
console.log(toArray(reversed));
