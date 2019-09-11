function ListNode(val) {
  this.val = val
  this.next = null
}

var addTwoNumbers = (l1, l2) => {
  const node = new ListNode(0)
  let temp = node
  let carry = 0
  while (l1 !== null || l2 !== null || carry !== 0) {
    let val = 0
    if (carry !== 0) {
      val += carry
    }
    carry = 0
    if (l1 !== null) {
      val += l1.val
    }
    if (l2 !== null) {
      val += l2.val
    }
    if (val > 9) {
      carry = 1
      val -= 10
    }
    temp.next = new ListNode(val)
    temp = temp.next
    if (l1 !== null) {
      l1 = l1.next
    }
    if (l2 !== null) {
      l2 = l2.next
    }
  }
}
