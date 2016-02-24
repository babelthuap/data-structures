# Fun With Basic Data Structures In JavaScript!

## Setup and Testing

To run the tests I've written, you first need to install `mocha` and `expect.js`. You can do this easily by running

```bash
npm run setup
```

Then you can do `mocha` to automatically run all the tests in the `test` folder.

## API

There's no difference in using `LinkedList`s and `DoublyLinkedList`s. The difference is that `DoublyLinkedList`s use slightly more memory but do some operations faster. These are the "public" methods that work on either:

| Method | Description |
| --- | --- |
| `new LinkedList([array])` | Creates a new list, empty by default, but can be initialized with an array. |
| `list.equals(otherList)` | Returns `true` if all matching nodes in the two lists are strictly equal, otherwise returns `false`. |
| `list.get(index)` | Return the value at the specified 0-based index. |
| `list.set(value, index)` | Overwrite the value at the specified index, returning the new value. |
| `list.includes(value)` | Determines whether the list includes a certain value, returning `true` or `false` as appropriate. |
| `list.clear()` | Resets the list to be empty. |
| `list.pushHead(value)` | Adds a new node at the head of the list with the specified value. |
| `list.popHead()` | Removes the head and returns its value. |
| `list.pushTail(value)` | Adds a new node at the tail of the list with the specified value. |
| `list.popTail()` | Removes the tail and returns its value. |
| `list.insert(value, index)` | Insert a value so that it *becomes* the node at the specified index, pushing others out of the way. |
| `list.remove(index)` | Remove the node at the specified index. |
| `list.slice([start[, end]])` | Returns a shallow copy of a portion of the list as a new list. Works the same as [`Array.prototype.slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice). |

## Object Oriented Features

I'm making heavy use of the ES2015 `class` syntax to facilitate object-oriented design. This project is cool because I'm exploring many of the fundamentals of OOP.

#### Encapsulation

#### Inheritance

#### Polymorphism

#### Open recursion

***

_This uses a lot of the new ES2015 features. It works on Node v5.7.0, but may not work on older versions._
