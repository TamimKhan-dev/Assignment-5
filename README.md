### 1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:  getElementById returns a single element with the given ID, or null if no such element is found. getElementsByClassName returns a live HTMLCollection of all elements that match the given class name, it automatically updates when the DOM changes. On the other hand, querySelector returns only the first element that matches a given CSS selector, while querySelectorAll returns a static NodeList of all matching elements, which does not update if the DOM changes.

### 2.How do you create and insert a new element into the DOM?
Ans:  we first use document.createElement() to create the element, then we can set its content or attributes.textContent or element.setAttribute(), and finally insert it into the HTML document using methods such as appendChild(), prepend(), before(), or after() on a parent element.

### 3.What is Event Bubbling and how does it work?
Ans:  Event bubbling is the process in which an event starts from the target element where it occurred and then propagates upward through its parent elements until it reaches the root of the DOM. For example, if a click happens on a button inside a div, the click event will first run on the button, then bubble up to the div, and then continue bubbling up through elements unless it is stopped using methods like event.stopPropagation().

### 4.What is Event Delegation in JavaScript? Why is it useful?
Ans:  Event delegation in JavaScript where instead of attaching event listeners to multiple child elements, we attach a single listener to their parent element and use event bubbling to handle events on the children. It is useful because it improves performance by reducing the number of event listeners, makes it easier to handle dynamically added elements, and provides cleaner, more maintainable code.

### 5.What is the difference between preventDefault() and stopPropagation() methods?
Ans:  The preventDefault() method is used to stop the default action of an element, such as preventing a form from submitting or a link from navigating to another page. On the other hand, the stopPropagation() method prevents the event from bubbling up or capturing down the DOM tree, meaning it stops the event from being passed to parent or ancestor elements.
