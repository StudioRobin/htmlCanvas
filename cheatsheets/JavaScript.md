# JavaScript

## Array


## key events

[keyCode](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode) is not recommended. Consider [KeyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) or [KeyboardEvent.code](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode) for new code.

* [keydown](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event) could fire many times when holding.
* [keyup](https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event) only file once.
* [keypress](https://developer.mozilla.org/en-US/docs/Web/API/Element/keypress_event) is not recommended.
