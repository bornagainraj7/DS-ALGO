const circular = require('./index');
const L = require('./linkedlist');
const List = L.LinkedList;
const Node = L.Node;

test('circular', () => {
  expect(typeof circular).toEqual('function');
});

test('circular detects circular linked lists', () => {
  const l = new List();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');

  l.head = a;
  a.next = b;
  b.next = c;
  c.next = null;

  expect(circular(l)).toEqual(false);
});

test('circular detects circular linked lists linked at the head', () => {
  const l = new List();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  const d = new Node('d');
  const e = new Node('e');
  const f = new Node('f');

  l.head = a;
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;
  f.next = d;

  expect(circular(l)).toEqual(true);
});

test('circular detects non-circular linked lists', () => {
  const l = new List();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');

  l.head = a;
  a.next = b;
  b.next = c;
  c.next = null;

  expect(circular(l)).toEqual(false);
});
