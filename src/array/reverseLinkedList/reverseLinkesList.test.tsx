import { reverseLinkedList } from "./reverseLinkesList.js";
import { describe, it, expect } from "vitest";

type ListNode = {
  val: number;
  next: ListNode | null;
};

function createList(values: number[]): ListNode | null {
  let head: ListNode | null = null;

  for (let i = values.length - 1; i >= 0; i--) {
    head = {
      val: values[i]!,
      next: head,
    };
  }

  return head;
}

function toArray(head: ListNode | null) {
    const result : number[] = [];
    let current = head;

    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }

    return result;
}

describe("reverseList", () => {
    it("returns null for an empty list", () => {
        expect(reverseLinkedList(null)).toBe(null)
    });

    it("returns the same node for a single-element list", () => {
        const list = createList([5]);

        expect(toArray(reverseLinkedList(list))).toEqual([5])
    });

    it("reverse a list with multiple elements", () => {
        const list = createList([1, 2, 3, 4, 5]);

        expect(toArray(reverseLinkedList(list))).toEqual([5, 4, 3, 2, 1])
    })
})
