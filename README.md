# Fun With Basic Data Structures In JavaScript!

## Setup and Testing

To start, clone this repo down and `cd` into the project directory. To run the tests I've written, you first need to install `mocha` and `expect.js`. You can do this easily by running

```bash
npm run setup
```

Now you can `cd` into one of the directories (e.g. "lists") and do `mocha`. This will automatically run all the tests in that directory's `test` folder. Alternatively, you can do `npm test` from the main project folder to run all available tests.

## API For `LinkedList` and `DoublyLinkedList`

There's no difference in using `LinkedList`s and `DoublyLinkedList`s. The difference is that `DoublyLinkedList`s use slightly more memory but do some operations faster. These are the "public" methods that work on either:

| Method                               | Description |
| ------------------------------------ | ----------- |
| `let list = new LinkedList([array])` | Creates a new list, empty by default, but can be initialized with an array. |
| `list.clear()`                       | Resets the list to be empty. |
| `list.equals(otherList)`             | Returns `true` if all matching nodes in the two lists are strictly equal, otherwise returns `false`. |
| `list.get(index)`                    | Return the value at the specified 0-based index. |
| `list.includes(value)`               | Determines whether the list includes a certain value, returning `true` or `false` as appropriate. |
| `list.insert(value, index)`          | Insert a value so that it *becomes* the node at the specified index, pushing others out of the way. |
| `list.popHead()`                     | Removes the head and returns its value. |
| `list.popTail()`                     | Removes the tail and returns its value. |
| `list.pushHead(value)`               | Adds a new node at the head of the list with the specified value. |
| `list.pushTail(value)`               | Adds a new node at the tail of the list with the specified value. |
| `list.remove(index)`                 | Remove the node at the specified index. |
| `list.reverse()`                     | Reverses (and mutates) the list. |
| `list.set(value, index)`             | Overwrite the value at the specified index, returning the new value. |
| `list.slice([start[, end]])`         | Returns a shallow copy of a portion of the list as a new list. Works the same as [`Array.prototype.slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice). |
| `list.sort([comparator])`            | Sorts (and mutates) the list, with an optional comparator function. |
| `list.toArray()`                     | Returns the array representation of the list. |
| `LinkedList.fromArray(array)`        | Returns a new list with values taken from the input array. |

## Object Oriented Features

I'm making heavy use of the ES2015 `class` syntax to facilitate object-oriented design. This project is fun because I'm using some brand-new features of JavaScript to explore many of the fundamentals of object-oriented programming.

#### Classes!

My first real programming language was Java. Needless to say, it was a shock transferring to JavaScript and losing things like static types and class inheritance. I've learned to like JavaScript's looseness, but I still miss the straightforward organization provided by classes. I understand that the ES2015 `class` syntax in JavaScript does *not* make it a classical language. Everything stills rests on prototypal inheritance. However, I find it much easier to read the new `class` stuff.

#### Encapsulation

The one thing missing from ES2015 `class`es is a way to make true private fields. There are certainly some workarounds ([see here](http://www.2ality.com/2016/01/private-data-classes.html), for example), but these make the code less readable; hence, I decided to embrace JavaScript's looseness once again.

#### Inheritance

When I typed `class DoublyLinkedList extends LinkedList`, shivers ran down my back. I swear.

#### Polymorphism

This is what `extends` does for you, really. I think of it more with the term "delegation," but no matter. For instance, I can call `toArray()` on a `DoublyLinkedList` even though that method isn't defined directly on a `DoublyLinkedList`. Because it "`extends`" a `LinkedList`, it knows to fall back to the `toArray` method on `LinkedList`.

***

*This project uses a lot of the new ES2015 features. It works on Node v5.7.0, but may not work on older versions. To update your Node version, do `nvm install v5.7` and then `nvm alias default 5.7`.*
