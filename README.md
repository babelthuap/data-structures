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
| `*list*.equals(otherList)` | Returns true if all matching nodes in the two lists are strictly equal. |


## Object Oriented Features

I'm making heavy use of the ES2015 `class` syntax to facilitate object-oriented design. This project is cool because I'm exploring many of the fundamentals of OOP.

#### Encapsulation

#### Inheritance

#### Polymorphism

#### Open recursion

***

_This uses a lot of the new ES2015 features. It works on Node v5.7.0, but may not work on older versions._
