# JavaScript

## string

[string interpolation](https://en.wikipedia.org/wiki/String_interpolation)

```js
const a = "a";
const b = "b";
if (a < b) {
  console.log(`${a} is less than ${b}`);
}
```

[string on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Function

[Function on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

## Array

[Array on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

get a random item from an array:

```js
let dice = ["one","two","three","four","five","six"];
let roll = dice[Math.floor(Math.random() * dice.length)];
```

## Object

Objects are created from class. They exist in the run-time. Classes exist in design time and compile time.

Classes and modules are useful for organizing things conceptually and physically.

## Events

[Events on MDN](https://developer.mozilla.org/en-US/docs/Web/Events)

### key events

[keyCode](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode) is not recommended. Consider [KeyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) or [KeyboardEvent.code](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode) for new code.

* [keydown](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event) could fire many times when holding.
* [keyup](https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event) only file once.
* [keypress](https://developer.mozilla.org/en-US/docs/Web/API/Element/keypress_event) is not recommended.

## References

[JavaScript on DevDocs](https://devdocs.io/javascript/)
