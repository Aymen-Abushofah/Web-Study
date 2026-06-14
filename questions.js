const quizData = [
  {
    "id": 1,
    "section": "JavaScript Fundamentals",
    "question": "What is the correct order of steps when a browser processes JavaScript?",
    "options": {
      "A": "Parsing \u2192 Loading \u2192 Execution \u2192 Compilation",
      "B": "Loading \u2192 Parsing \u2192 Compilation \u2192 Execution \u2192 DOM Interaction \u2192 Event Handling",
      "C": "Execution \u2192 Loading \u2192 Compilation \u2192 Parsing",
      "D": "Compilation \u2192 Parsing \u2192 Loading \u2192 Execution"
    },
    "answer": "B"
  },
  {
    "id": 2,
    "section": "JavaScript Fundamentals",
    "question": "What is an Abstract Syntax Tree (AST)?",
    "options": {
      "A": "The rendered version of the HTML document",
      "B": "A list of all variables declared in a JavaScript file",
      "C": "A visual diagram of the webpage layout",
      "D": "An internal structure the JavaScript engine creates after parsing code to understand its meaning"
    },
    "answer": "D"
  },
  {
    "id": 3,
    "section": "JavaScript Fundamentals",
    "question": "What does the JavaScript event loop primarily do?",
    "options": {
      "A": "It connects JavaScript to the CSS stylesheet",
      "B": "It converts HTML elements into DOM nodes",
      "C": "It manages asynchronous operations and keeps the page responsive",
      "D": "It compiles JavaScript code before execution"
    },
    "answer": "C"
  },
  {
    "id": 4,
    "section": "JavaScript Fundamentals",
    "question": "What is the result of `10 % 3` in JavaScript?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "3",
      "D": "3.33"
    },
    "answer": "B"
  },
  {
    "id": 5,
    "section": "JavaScript Fundamentals",
    "question": "Which of the following correctly describes the `===` operator in JavaScript?",
    "options": {
      "A": "It assigns a value to a variable",
      "B": "It checks if two values are equal in both value AND data type",
      "C": "It compares two variables and returns the larger one",
      "D": "It checks only if two values are equal regardless of type"
    },
    "answer": "B"
  },
  {
    "id": 6,
    "section": "JavaScript Fundamentals",
    "question": "What is the output of the following code?\n```javascript\nlet x = 5;\nx += 3;\nconsole.log(x);\n```",
    "options": {
      "A": "3",
      "B": "8",
      "C": "53",
      "D": "5"
    },
    "answer": "B"
  },
  {
    "id": 7,
    "section": "JavaScript Fundamentals",
    "question": "Which logical operator returns `true` only when BOTH conditions are true?",
    "options": {
      "A": "`&&`",
      "B": "`!`",
      "C": "`||`",
      "D": "`==`"
    },
    "answer": "A"
  },
  {
    "id": 8,
    "section": "JavaScript Fundamentals",
    "question": "What is the purpose of the ternary operator `?:` in JavaScript?",
    "options": {
      "A": "To declare a variable with three data types",
      "B": "To compare three values simultaneously",
      "C": "To loop through an array of values",
      "D": "To write a concise one-line if...else statement"
    },
    "answer": "D"
  },
  {
    "id": 9,
    "section": "JavaScript Fundamentals",
    "question": "Which type of JavaScript loop is guaranteed to execute its code block at least once before checking the condition?",
    "options": {
      "A": "`for` loop",
      "B": "`for...of` loop",
      "C": "`while` loop",
      "D": "`do...while` loop"
    },
    "answer": "D"
  },
  {
    "id": 10,
    "section": "JavaScript Fundamentals",
    "question": "What is the key difference between `for...in` and `for...of` loops?",
    "options": {
      "A": "`for...of` iterates over keys; `for...in` iterates over values",
      "B": "They are functionally identical",
      "C": "`for...in` only works on arrays; `for...of` only works on strings",
      "D": "`for...in` iterates over object keys/properties; `for...of` iterates over values of iterables like arrays"
    },
    "answer": "D"
  },
  {
    "id": 11,
    "section": "JavaScript Fundamentals",
    "question": "What does the `break` statement do inside a loop?",
    "options": {
      "A": "Immediately exits the loop entirely",
      "B": "Pauses the loop temporarily",
      "C": "Restarts the loop from the beginning",
      "D": "Skips the current iteration and continues to the next one"
    },
    "answer": "A"
  },
  {
    "id": 12,
    "section": "JavaScript Fundamentals",
    "question": "What does the `continue` statement do inside a loop?",
    "options": {
      "A": "Terminates the entire program",
      "B": "Skips the rest of the current iteration and moves to the next",
      "C": "Restarts the loop from iteration zero",
      "D": "Exits the loop entirely"
    },
    "answer": "B"
  },
  {
    "id": 13,
    "section": "JavaScript Fundamentals",
    "question": "Which of the following is a benefit of using functions in JavaScript?",
    "options": {
      "A": "They prevent all runtime errors",
      "B": "They allow you to write code once and reuse it multiple times",
      "C": "They make the browser load pages faster automatically",
      "D": "They replace the need for variables"
    },
    "answer": "B"
  },
  {
    "id": 14,
    "section": "JavaScript Fundamentals",
    "question": "What does \"hoisting\" mean for JavaScript function declarations?",
    "options": {
      "A": "The function is available to be called before it appears in the source code",
      "B": "The function automatically returns `undefined`",
      "C": "The function can only be called inside other functions",
      "D": "The function is moved to the bottom of the file automatically"
    },
    "answer": "A"
  },
  {
    "id": 15,
    "section": "JavaScript Fundamentals",
    "question": "Which variable declaration keyword does NOT respect block scope in JavaScript?",
    "options": {
      "A": "`let`",
      "B": "`const`",
      "C": "All of them respect block scope",
      "D": "`var`"
    },
    "answer": "D"
  },
  {
    "id": 16,
    "section": "JavaScript Fundamentals",
    "question": "What is the difference between `let` and `const` in JavaScript?",
    "options": {
      "A": "They are completely identical",
      "B": "`let` is for strings only; `const` is for numbers only",
      "C": "`const` is block-scoped; `let` is function-scoped",
      "D": "`const` creates a variable that cannot be reassigned; `let` can be reassigned"
    },
    "answer": "D"
  },
  {
    "id": 17,
    "section": "JavaScript Fundamentals",
    "question": "Which of the following correctly creates an arrow function in JavaScript?",
    "options": {
      "A": "`const double = (x) => x * 2;`",
      "B": "`const double = function => x * 2;`",
      "C": "`arrow double(x) { return x * 2; }`",
      "D": "`function => (x) { return x * 2; }`"
    },
    "answer": "A"
  },
  {
    "id": 18,
    "section": "JavaScript Fundamentals",
    "question": "What is the first element's index in a JavaScript array?",
    "options": {
      "A": "-1",
      "B": "It depends on the array type",
      "C": "1",
      "D": "0"
    },
    "answer": "D"
  },
  {
    "id": 19,
    "section": "JavaScript Fundamentals",
    "question": "Which array method adds a new element to the END of an array?",
    "options": {
      "A": "`push()`",
      "B": "`pop()`",
      "C": "`shift()`",
      "D": "`unshift()`"
    },
    "answer": "A"
  },
  {
    "id": 20,
    "section": "JavaScript Fundamentals",
    "question": "What does `arr.slice(1, 3)` return?",
    "options": {
      "A": "Removes elements at index 1 and 3",
      "B": "Returns a new array with elements from index 1 up to (not including) index 3",
      "C": "Returns the element at index 1 and 3 only",
      "D": "Returns the entire array except the first element"
    },
    "answer": "B"
  },
  {
    "id": 21,
    "section": "JavaScript Fundamentals",
    "question": "How do you access the element in row 2, column 1 of a 2D array called `grid`?",
    "options": {
      "A": "`grid[1][2]`",
      "B": "`grid[2][1]`",
      "C": "`grid.row(2).col(1)`",
      "D": "`grid[2,1]`"
    },
    "answer": "B"
  },
  {
    "id": 22,
    "section": "JavaScript Fundamentals",
    "question": "What is the correct way to access the value of key `\"name\"` in a JavaScript object called `person`?",
    "options": {
      "A": "`person[name]`",
      "B": "`person::name`",
      "C": "`person.name` or `person[\"name\"]`",
      "D": "`person->name`"
    },
    "answer": "C"
  },
  {
    "id": 23,
    "section": "JavaScript Fundamentals",
    "question": "What is the primary difference between arrays and objects in JavaScript?",
    "options": {
      "A": "Arrays use ordered numeric indices; objects use named string keys",
      "B": "Arrays cannot be nested inside objects",
      "C": "Objects are faster than arrays for all operations",
      "D": "Arrays store numbers only; objects store strings only"
    },
    "answer": "A"
  },
  {
    "id": 24,
    "section": "JavaScript Events & DOM",
    "question": "Which of the following is an example of a browser action event (not a user action)?",
    "options": {
      "A": "The page finishing loading",
      "B": "Moving the mouse",
      "C": "Clicking a button",
      "D": "Pressing a key"
    },
    "answer": "A"
  },
  {
    "id": 25,
    "section": "JavaScript Events & DOM",
    "question": "What is the correct flow when an event occurs in JavaScript?",
    "options": {
      "A": "Event detected \u2192 Handler executes \u2192 Event occurs",
      "B": "Handler executes \u2192 Event detected \u2192 Event occurs",
      "C": "Event occurs \u2192 Event detected \u2192 Handler executes",
      "D": "Event occurs \u2192 Handler executes \u2192 Event detected"
    },
    "answer": "C"
  },
  {
    "id": 26,
    "section": "JavaScript Events & DOM",
    "question": "Which type of event fires when a user moves the mouse cursor over an HTML element?",
    "options": {
      "A": "`mouseover`",
      "B": "`scroll`",
      "C": "`keydown`",
      "D": "`focus`"
    },
    "answer": "A"
  },
  {
    "id": 27,
    "section": "JavaScript Events & DOM",
    "question": "Which event fires when a user clicks away from (leaves) an input field?",
    "options": {
      "A": "`submit`",
      "B": "`blur`",
      "C": "`focus`",
      "D": "`change`"
    },
    "answer": "B"
  },
  {
    "id": 28,
    "section": "JavaScript Events & DOM",
    "question": "Which of the three event handling methods allows you to attach multiple functions to the same event on the same element?",
    "options": {
      "A": "DOM property assignment (`element.onclick = function(){}`)",
      "B": "All three methods support multiple handlers equally",
      "C": "Inline HTML event attributes (`onclick=\"...\"`)",
      "D": "`addEventListener()`"
    },
    "answer": "D"
  },
  {
    "id": 29,
    "section": "JavaScript Events & DOM",
    "question": "What is the main disadvantage of using inline HTML event handling such as `onclick=\"myFunc()\"` directly in an HTML tag?",
    "options": {
      "A": "It cannot call functions with parameters",
      "B": "It mixes HTML and JavaScript together, making code harder to maintain",
      "C": "It is slower than all other methods",
      "D": "It only works on button elements"
    },
    "answer": "B"
  },
  {
    "id": 30,
    "section": "JavaScript Events & DOM",
    "question": "What does `event.target` refer to inside an event handler?",
    "options": {
      "A": "The parent element of the element that was clicked",
      "B": "The document root",
      "C": "The specific element that triggered the event",
      "D": "The event handler function itself"
    },
    "answer": "C"
  },
  {
    "id": 31,
    "section": "JavaScript Events & DOM",
    "question": "What is the default event propagation behavior in JavaScript?",
    "options": {
      "A": "Both happen simultaneously",
      "B": "Capturing \u2014 events travel from parent down to the target element",
      "C": "Events do not propagate by default",
      "D": "Bubbling \u2014 events travel from the target element upward to parent elements"
    },
    "answer": "D"
  },
  {
    "id": 32,
    "section": "JavaScript Events & DOM",
    "question": "Given this HTML: `<div> \u2192 <section> \u2192 <button>`. When the button is clicked, what is the correct bubbling order?",
    "options": {
      "A": "document \u2192 div \u2192 section \u2192 button",
      "B": "div \u2192 section \u2192 button \u2192 document",
      "C": "button \u2192 section \u2192 div \u2192 document",
      "D": "button \u2192 document \u2192 section \u2192 div"
    },
    "answer": "C"
  },
  {
    "id": 33,
    "section": "JavaScript Events & DOM",
    "question": "What is the main benefit of using Event Delegation?",
    "options": {
      "A": "It makes events propagate faster through the DOM",
      "B": "It allows you to attach one listener to a parent instead of many listeners to each child, improving performance",
      "C": "It converts bubbling phase to capturing phase",
      "D": "It prevents all events from propagating"
    },
    "answer": "B"
  },
  {
    "id": 34,
    "section": "JavaScript Events & DOM",
    "question": "Which of the following is a correct use case for `event.preventDefault()`?",
    "options": {
      "A": "Removing all event listeners from an element",
      "B": "Stopping JavaScript from executing",
      "C": "Stopping an event from bubbling to parent elements",
      "D": "Preventing a form from reloading the page when submitted"
    },
    "answer": "D"
  },
  {
    "id": 35,
    "section": "JavaScript Events & DOM",
    "question": "What does the DOM stand for?",
    "options": {
      "A": "Data Object Model",
      "B": "Document Object Model",
      "C": "Document Object Mapper",
      "D": "Dynamic Output Module"
    },
    "answer": "B"
  },
  {
    "id": 36,
    "section": "JavaScript Events & DOM",
    "question": "Which DOM method selects a SINGLE element by its unique HTML `id` attribute?",
    "options": {
      "A": "`document.getElementsByClassName()`",
      "B": "`document.getElementById()`",
      "C": "`document.getElementsByTagName()`",
      "D": "`document.querySelectorAll()`"
    },
    "answer": "B"
  },
  {
    "id": 37,
    "section": "JavaScript Events & DOM",
    "question": "What does `document.querySelector(\".card\")` return?",
    "options": {
      "A": "The first element that has the class \"card\"",
      "B": "All elements with the class \"card\"",
      "C": "An element with the id \"card\"",
      "D": "All elements of type `<card>`"
    },
    "answer": "A"
  },
  {
    "id": 38,
    "section": "JavaScript Events & DOM",
    "question": "What is the difference between `element.textContent` and `element.innerHTML`?",
    "options": {
      "A": "`textContent` supports HTML tags; `innerHTML` treats everything as plain text",
      "B": "They are completely identical in all situations",
      "C": "`textContent` sets plain text safely; `innerHTML` renders HTML tags \u2014 but can be a security risk with user input",
      "D": "`innerHTML` only works on `<div>` elements"
    },
    "answer": "C"
  },
  {
    "id": 39,
    "section": "JavaScript Events & DOM",
    "question": "Which CSS property name convention must be used when applying styles through `element.style` in JavaScript?",
    "options": {
      "A": "CamelCase: `element.style.backgroundColor`",
      "B": "Hyphenated: `element.style.background-color`",
      "C": "Snake_case: `element.style.background_color`",
      "D": "Uppercase: `element.style.BACKGROUNDCOLOR`"
    },
    "answer": "A"
  },
  {
    "id": 40,
    "section": "JavaScript Events & DOM",
    "question": "What does `element.parentNode` return?",
    "options": {
      "A": "The document root",
      "B": "The next sibling of the element",
      "C": "The element that directly contains (wraps) the given element",
      "D": "The first child of the element"
    },
    "answer": "C"
  },
  {
    "id": 41,
    "section": "JavaScript Events & DOM",
    "question": "What is the correct 3-step process to create and add a new element to the DOM?",
    "options": {
      "A": "`makeElement()` \u2192 `placeElement()` \u2192 `showElement()`",
      "B": "`createElement()` \u2192 set content/attributes \u2192 `appendChild()`",
      "C": "`findElement()` \u2192 `insertText()` \u2192 `display()`",
      "D": "`newNode()` \u2192 `addContent()` \u2192 `render()`"
    },
    "answer": "B"
  },
  {
    "id": 42,
    "section": "JavaScript Events & DOM",
    "question": "To remove an element from the DOM using the classic method, what do you need?",
    "options": {
      "A": "The element's parent \u2014 call `parentNode.removeChild(element)`",
      "B": "The element's CSS class name",
      "C": "Only the element itself \u2014 call `.remove()` directly",
      "D": "The element's ID and the document root"
    },
    "answer": "A"
  },
  {
    "id": 43,
    "section": "JavaScript Events & DOM",
    "question": "Which DOM node type represents the text content inside an HTML element?",
    "options": {
      "A": "Text Node",
      "B": "Element Node",
      "C": "Document Node",
      "D": "Attribute Node"
    },
    "answer": "A"
  },
  {
    "id": 44,
    "section": "PHP Fundamentals",
    "question": "Which of the following best describes the role of the back-end in a web application?",
    "options": {
      "A": "Manages CSS animations and transitions",
      "B": "Renders the visual design and layout for users",
      "C": "Runs entirely inside the user's browser",
      "D": "Processes data, manages databases, and handles application logic on the server"
    },
    "answer": "D"
  },
  {
    "id": 45,
    "section": "PHP Fundamentals",
    "question": "What does PHP stand for?",
    "options": {
      "A": "Preprocessed Hypertext Pages",
      "B": "Personal Home Page",
      "C": "Public HTML Processor",
      "D": "Hypertext Preprocessor"
    },
    "answer": "D"
  },
  {
    "id": 46,
    "section": "PHP Fundamentals",
    "question": "In the PHP request lifecycle, what does the server send back to the browser after executing PHP code?",
    "options": {
      "A": "Only HTML, CSS, and JavaScript \u2014 the PHP is never visible to the user",
      "B": "The raw PHP source code",
      "C": "A JSON file containing all variables",
      "D": "The MySQL database contents"
    },
    "answer": "A"
  },
  {
    "id": 47,
    "section": "PHP Fundamentals",
    "question": "What must every PHP statement end with?",
    "options": {
      "A": "A closing tag `?>`",
      "B": "A semicolon `;`",
      "C": "A period `.`",
      "D": "A colon `:`"
    },
    "answer": "B"
  },
  {
    "id": 48,
    "section": "PHP Fundamentals",
    "question": "Which symbol must prefix every PHP variable name?",
    "options": {
      "A": "`@`",
      "B": "`&`",
      "C": "`#`",
      "D": "`$`"
    },
    "answer": "D"
  },
  {
    "id": 49,
    "section": "PHP Fundamentals",
    "question": "What is the output of the following PHP code?\n```php\n$a = 5;\n$b = '5';\nvar_dump($a == $b);\n```",
    "options": {
      "A": "`NULL`",
      "B": "`bool(false)`",
      "C": "`bool(true)`",
      "D": "`int(5)`"
    },
    "answer": "C"
  },
  {
    "id": 50,
    "section": "PHP Fundamentals",
    "question": "In PHP, what operator is used to join (concatenate) two strings together?",
    "options": {
      "A": "`&`",
      "B": "`.`",
      "C": "`,`",
      "D": "`+`"
    },
    "answer": "B"
  },
  {
    "id": 51,
    "section": "PHP Fundamentals",
    "question": "What does `strtoupper(\"hello\")` return in PHP?",
    "options": {
      "A": "`5`",
      "B": "`\"HELLO\"`",
      "C": "`\"hello\"`",
      "D": "`\"Hello\"`"
    },
    "answer": "B"
  },
  {
    "id": 52,
    "section": "PHP Fundamentals",
    "question": "Which PHP function returns the number of characters in a string?",
    "options": {
      "A": "`str_length()`",
      "B": "`size()`",
      "C": "`strlen()`",
      "D": "`count()`"
    },
    "answer": "C"
  },
  {
    "id": 53,
    "section": "PHP Fundamentals",
    "question": "What does `substr(\"Emira\", 1, 3)` return in PHP?",
    "options": {
      "A": "`\"Emi\"`",
      "B": "`\"Emir\"`",
      "C": "`\"ira\"`",
      "D": "`\"mir\"`"
    },
    "answer": "D"
  },
  {
    "id": 54,
    "section": "PHP Fundamentals",
    "question": "Which PHP data type stores `true` or `false`?",
    "options": {
      "A": "Integer",
      "B": "Boolean",
      "C": "Float",
      "D": "String"
    },
    "answer": "B"
  },
  {
    "id": 55,
    "section": "PHP Fundamentals",
    "question": "What is the value of `$result` after this PHP code runs?\n```php\n$a = 10;\n$b = 3;\n$result = $a % $b;\n```",
    "options": {
      "A": "3.33",
      "B": "3",
      "C": "1",
      "D": "0"
    },
    "answer": "C"
  },
  {
    "id": 56,
    "section": "PHP Fundamentals",
    "question": "Which PHP loop is specifically designed to iterate over all elements in an array, including associative arrays?",
    "options": {
      "A": "`for`",
      "B": "`foreach`",
      "C": "`while`",
      "D": "`do-while`"
    },
    "answer": "B"
  },
  {
    "id": 57,
    "section": "PHP Fundamentals",
    "question": "What is the correct syntax to define a PHP function that accepts a parameter and returns a value?",
    "options": {
      "A": "`def greet($name) { return \"Hello \" . $name; }`",
      "B": "`function greet($name) { return \"Hello \" . $name; }`",
      "C": "`func greet($name) => \"Hello \" . $name;`",
      "D": "`function greet => ($name) { return \"Hello\"; }`"
    },
    "answer": "B"
  },
  {
    "id": 58,
    "section": "PHP Fundamentals",
    "question": "In PHP, what is function scope?",
    "options": {
      "A": "Variables declared inside a function only exist within that function and disappear after it ends",
      "B": "All PHP variables share one global scope regardless of where they are declared",
      "C": "`const` variables can be accessed inside functions but `$variables` cannot",
      "D": "Variables declared outside functions are accessible everywhere inside functions automatically"
    },
    "answer": "A"
  },
  {
    "id": 59,
    "section": "PHP Fundamentals",
    "question": "In PHP, what is the difference between an indexed array and an associative array?",
    "options": {
      "A": "Associative arrays are faster than indexed arrays",
      "B": "Indexed arrays cannot be looped through",
      "C": "Indexed arrays use numeric keys starting at 0; associative arrays use custom string keys",
      "D": "Indexed arrays can only hold strings; associative arrays can hold any type"
    },
    "answer": "C"
  },
  {
    "id": 60,
    "section": "PHP Fundamentals",
    "question": "Which PHP function adds an element to the beginning of an array?",
    "options": {
      "A": "`array_shift()`",
      "B": "`array_push()`",
      "C": "`array_unshift()`",
      "D": "`array_pop()`"
    },
    "answer": "C"
  },
  {
    "id": 61,
    "section": "PHP Fundamentals",
    "question": "What does `count($array)` return in PHP?",
    "options": {
      "A": "The index of the last element",
      "B": "The total number of elements in the array",
      "C": "The memory size of the array",
      "D": "The sum of all numeric elements in the array"
    },
    "answer": "B"
  },
  {
    "id": 62,
    "section": "PHP Fundamentals",
    "question": "What is a multidimensional array in PHP?",
    "options": {
      "A": "An array that uses both numeric and string keys at the same time",
      "B": "An array with more than 100 elements",
      "C": "An array that can only store one data type",
      "D": "An array containing other arrays as its elements, used to represent tables or grids"
    },
    "answer": "D"
  },
  {
    "id": 63,
    "section": "PHP Fundamentals",
    "question": "What does the `action` attribute in an HTML form specify?",
    "options": {
      "A": "The URL of the PHP script that will process the submitted form data",
      "B": "The form's unique CSS identifier",
      "C": "The HTTP method to use (GET or POST)",
      "D": "The type of input fields in the form"
    },
    "answer": "A"
  },
  {
    "id": 64,
    "section": "PHP Fundamentals",
    "question": "What is the key security advantage of using POST over GET for sensitive form data?",
    "options": {
      "A": "POST is encrypted by default; GET is not",
      "B": "POST data is hidden in the HTTP request body and not visible in the URL",
      "C": "POST automatically validates data before sending",
      "D": "POST has no character limit; GET does"
    },
    "answer": "B"
  },
  {
    "id": 65,
    "section": "PHP Fundamentals",
    "question": "Which PHP function checks if a variable exists AND is not null?",
    "options": {
      "A": "`isset()`",
      "B": "`empty()`",
      "C": "`exists()`",
      "D": "`is_null()`"
    },
    "answer": "A"
  },
  {
    "id": 66,
    "section": "PHP Fundamentals",
    "question": "What is the correct PHP call to validate that a string contains a properly formatted email address?",
    "options": {
      "A": "`filter_var($email, FILTER_VALIDATE_EMAIL)`",
      "B": "`filter_var($email, FILTER_SANITIZE_EMAIL)`",
      "C": "`validate_email($email)`",
      "D": "`check_format($email, \"email\")`"
    },
    "answer": "A"
  },
  {
    "id": 67,
    "section": "PHP Fundamentals",
    "question": "Which filter constant is used in PHP to remove HTML tags from user input to protect against XSS?",
    "options": {
      "A": "`FILTER_SANITIZE_NUMBER_INT`",
      "B": "`FILTER_SANITIZE_URL`",
      "C": "`FILTER_VALIDATE_EMAIL`",
      "D": "`FILTER_SANITIZE_STRING`"
    },
    "answer": "D"
  },
  {
    "id": 68,
    "section": "PHP Fundamentals",
    "question": "What is the difference between validation and sanitization in PHP?",
    "options": {
      "A": "Sanitization is only used for email addresses; validation is for numbers",
      "B": "They are the same thing with different names",
      "C": "Validation checks if input is correct and complete; sanitization cleans input to remove harmful characters",
      "D": "Validation cleans input; sanitization checks if it is correct"
    },
    "answer": "C"
  },
  {
    "id": 69,
    "section": "PHP Sessions, File Handling & Cookies",
    "question": "What is a PHP session?",
    "options": {
      "A": "A temporary variable stored in the HTML file",
      "B": "An encrypted file on the user's computer",
      "C": "A way to store user data across multiple pages on the server side",
      "D": "A cookie stored permanently in the browser"
    },
    "answer": "C"
  },
  {
    "id": 70,
    "section": "PHP Sessions, File Handling & Cookies",
    "question": "Where is session data stored compared to cookie data?",
    "options": {
      "A": "Sessions are stored on the server; cookies are stored in the user's browser",
      "B": "Sessions are stored in the database; cookies are stored in JavaScript",
      "C": "Both are stored in the browser",
      "D": "Both are stored on the server"
    },
    "answer": "A"
  },
  {
    "id": 71,
    "section": "PHP Sessions, File Handling & Cookies",
    "question": "What is the correct way to start or resume a PHP session?",
    "options": {
      "A": "`session_start();`",
      "B": "`session_open();`",
      "C": "`start_session();`",
      "D": "`$_SESSION = start();`"
    },
    "answer": "A"
  },
  {
    "id": 72,
    "section": "PHP Sessions, File Handling & Cookies",
    "question": "Which PHP superglobal array is used to store and access session variables?",
    "options": {
      "A": "`$_SERVER`",
      "B": "`$_GLOBAL`",
      "C": "`$_COOKIE`",
      "D": "`$_SESSION`"
    },
    "answer": "D"
  },
  {
    "id": 73,
    "section": "PHP Sessions, File Handling & Cookies",
    "question": "What is the correct PHP combination to fully log a user out and destroy all their session data?",
    "options": {
      "A": "`unset($_SESSION); session_end();`",
      "B": "`logout(); clear_session();`",
      "C": "`session_close();`",
      "D": "`session_unset(); session_destroy();`"
    },
    "answer": "D"
  },
  {
    "id": 74,
    "section": "PHP Sessions, File Handling & Cookies",
    "question": "What is the difference between `unset($_SESSION[\"key\"])` and `session_destroy()`?",
    "options": {
      "A": "`session_destroy()` removes one variable; `unset()` destroys the entire session",
      "B": "They do exactly the same thing",
      "C": "`session_destroy()` only works after the user logs out manually",
      "D": "`unset()` removes one specific session variable; `session_destroy()` wipes all session data"
    },
    "answer": "D"
  },
  {
    "id": 75,
    "section": "PHP Sessions, File Handling & Cookies",
    "question": "Where must `session_start()` be called in a PHP file?",
    "options": {
      "A": "Inside a function only",
      "B": "After all HTML output has been sent",
      "C": "Inside the `<body>` tag",
      "D": "At the very top of the file, before any HTML or output"
    },
    "answer": "D"
  },
  {
    "id": 76,
    "section": "PHP Sessions, File Handling & Cookies",
    "question": "What is a cookie in web development?",
    "options": {
      "A": "A PHP variable that persists between different user accounts",
      "B": "A database table used to track user activity",
      "C": "A small file stored in the user's browser used to remember data between visits",
      "D": "A small file stored on the server containing user login data"
    },
    "answer": "C"
  },
  {
    "id": 77,
    "section": "PHP Sessions, File Handling & Cookies",
    "question": "Which PHP function is used to create a cookie?",
    "options": {
      "A": "`$_COOKIE[] = value;`",
      "B": "`store_cookie()`",
      "C": "`setcookie()`",
      "D": "`create_cookie()`"
    },
    "answer": "C"
  },
  {
    "id": 78,
    "section": "PHP Sessions, File Handling & Cookies",
    "question": "Which PHP file mode opens a file for writing, creates it if it doesn't exist, and adds data to the END without overwriting?",
    "options": {
      "A": "`\"r+\"`",
      "B": "`\"x\"`",
      "C": "`\"a\"`",
      "D": "`\"w\"`"
    },
    "answer": "C"
  },
  {
    "id": 79,
    "section": "PHP Sessions, File Handling & Cookies",
    "question": "Which PHP file mode creates a NEW file for writing and returns an error if the file already exists?",
    "options": {
      "A": "`\"w\"`",
      "B": "`\"r\"`",
      "C": "`\"a\"`",
      "D": "`\"x\"`"
    },
    "answer": "D"
  },
  {
    "id": 80,
    "section": "PHP Sessions, File Handling & Cookies",
    "question": "What is the purpose of `fclose()` in PHP file handling?",
    "options": {
      "A": "Closes an open file after reading or writing to free server resources",
      "B": "Deletes the file from the server permanently",
      "C": "Checks if the file exists before opening it",
      "D": "Reads the last line of a file"
    },
    "answer": "A"
  },
  {
    "id": 81,
    "section": "PHP Sessions, File Handling & Cookies",
    "question": "Which PHP function reads an entire file's content as a single string?",
    "options": {
      "A": "`file_put_contents()`",
      "B": "`fread()`",
      "C": "`file_get_contents()`",
      "D": "`fgets()`"
    },
    "answer": "C"
  },
  {
    "id": 82,
    "section": "PHP Sessions, File Handling & Cookies",
    "question": "What does the `FILE_APPEND` flag do when passed to `file_put_contents()`?",
    "options": {
      "A": "Locks the file during writing",
      "B": "Adds data to the end of the file without overwriting existing content",
      "C": "Reads the file before writing",
      "D": "Creates a backup of the file before overwriting"
    },
    "answer": "B"
  },
  {
    "id": 83,
    "section": "PHP Sessions, File Handling & Cookies",
    "question": "What PHP function is used to permanently delete a file from the server?",
    "options": {
      "A": "`delete()`",
      "B": "`fdelete()`",
      "C": "`unlink()`",
      "D": "`remove()`"
    },
    "answer": "C"
  },
  {
    "id": 84,
    "section": "PHP Sessions, File Handling & Cookies",
    "question": "When uploading a file in PHP, which two form attributes are both required for the upload to work?",
    "options": {
      "A": "`method=\"post\"` and `enctype=\"text/plain\"`",
      "B": "`method=\"file\"` and `enctype=\"multipart/form-data\"`",
      "C": "`method=\"get\"` and `enctype=\"application/json\"`",
      "D": "`method=\"post\"` and `enctype=\"multipart/form-data\"`"
    },
    "answer": "D"
  },
  {
    "id": 85,
    "section": "PHP Sessions, File Handling & Cookies",
    "question": "Which `$_FILES` key gives you the temporary server location of an uploaded file?",
    "options": {
      "A": "`$_FILES['file']['path']`",
      "B": "`$_FILES['file']['tmp_name']`",
      "C": "`$_FILES['file']['name']`",
      "D": "`$_FILES['file']['type']`"
    },
    "answer": "B"
  },
  {
    "id": 86,
    "section": "PHP Sessions, File Handling & Cookies",
    "question": "What is authentication in web applications?",
    "options": {
      "A": "The process of verifying a user's identity \u2014 confirming they are who they claim to be",
      "B": "The process of validating form input fields",
      "C": "The process of controlling what resources a logged-in user can access",
      "D": "The process of encrypting data before storing it in a database"
    },
    "answer": "A"
  },
  {
    "id": 87,
    "section": "PHP Sessions, File Handling & Cookies",
    "question": "Which of the following correctly describes the difference between authentication and authorization?",
    "options": {
      "A": "Authentication = who you are (login check); Authorization = what you can do (access control)",
      "B": "They are the same process applied at different times",
      "C": "Authorization happens before authentication",
      "D": "Authentication applies only to admin users"
    },
    "answer": "A"
  },
  {
    "id": 88,
    "section": "PHP Sessions, File Handling & Cookies",
    "question": "Which PHP function is used to verify a password against its stored hash?",
    "options": {
      "A": "`hash_check()`",
      "B": "`compare_hash()`",
      "C": "`password_verify()`",
      "D": "`md5_verify()`"
    },
    "answer": "C"
  },
  {
    "id": 89,
    "section": "PHP Databases & MySQL",
    "question": "What is a database in web development?",
    "options": {
      "A": "A JavaScript object that stores temporary user data",
      "B": "A type of server that runs PHP code",
      "C": "A folder of PHP files organized by date",
      "D": "An organized collection of data stored in tables, allowing easy access, update, and management"
    },
    "answer": "D"
  },
  {
    "id": 90,
    "section": "PHP Databases & MySQL",
    "question": "In a MySQL database, what is a Primary Key?",
    "options": {
      "A": "A foreign reference to another table",
      "B": "The first column in any table regardless of its content",
      "C": "A column that stores encrypted password data",
      "D": "A unique identifier for each row \u2014 must be unique and never null, usually named `id`"
    },
    "answer": "D"
  },
  {
    "id": 91,
    "section": "PHP Databases & MySQL",
    "question": "Which MySQL data type is best suited for storing a user's name with a maximum length?",
    "options": {
      "A": "`VARCHAR(100)`",
      "B": "`INT`",
      "C": "`FLOAT`",
      "D": "`TEXT`"
    },
    "answer": "A"
  },
  {
    "id": 92,
    "section": "PHP Databases & MySQL",
    "question": "Which MySQL data type should be used for storing monetary values that require precise decimal accuracy?",
    "options": {
      "A": "`INT`",
      "B": "`DECIMAL`",
      "C": "`DOUBLE`",
      "D": "`FLOAT`"
    },
    "answer": "B"
  },
  {
    "id": 93,
    "section": "PHP Databases & MySQL",
    "question": "What does `AUTO_INCREMENT` do on the `id` column in MySQL?",
    "options": {
      "A": "Copies the id from the previous row",
      "B": "Automatically assigns the next sequential number to each new row inserted",
      "C": "Multiplies the id by 2 for each new row",
      "D": "Randomly generates a unique ID"
    },
    "answer": "B"
  },
  {
    "id": 94,
    "section": "PHP Databases & MySQL",
    "question": "What is phpMyAdmin?",
    "options": {
      "A": "A PHP framework for building MVC applications",
      "B": "A command-line PHP testing environment",
      "C": "A MySQL query optimization engine",
      "D": "A browser-based tool for visually managing MySQL databases"
    },
    "answer": "D"
  },
  {
    "id": 95,
    "section": "PHP Databases & MySQL",
    "question": "Which PHP function is used to connect to a MySQL database using MySQLi?",
    "options": {
      "A": "`mysql_open()`",
      "B": "`db_connect()`",
      "C": "`mysqli_connect()`",
      "D": "`pdo_connect()`"
    },
    "answer": "C"
  },
  {
    "id": 96,
    "section": "PHP Databases & MySQL",
    "question": "What are the four correct parameters passed to `mysqli_connect()` in order?",
    "options": {
      "A": "Database name, host, username, password",
      "B": "Username, password, host, database name",
      "C": "Host, username, password, database name",
      "D": "Host, database name, password, username"
    },
    "answer": "C"
  },
  {
    "id": 97,
    "section": "PHP Databases & MySQL",
    "question": "What does `die()` do when used after a failed `mysqli_connect()` call?",
    "options": {
      "A": "Stops the script execution and displays an error message",
      "B": "Redirects the user to a safe error page",
      "C": "Logs the error to a database table",
      "D": "Retries the connection automatically"
    },
    "answer": "A"
  },
  {
    "id": 98,
    "section": "PHP Databases & MySQL",
    "question": "Which PHP function executes a SQL query against a MySQL database using MySQLi?",
    "options": {
      "A": "`mysqli_execute()`",
      "B": "`mysqli_send()`",
      "C": "`mysqli_query()`",
      "D": "`mysqli_run()`"
    },
    "answer": "C"
  },
  {
    "id": 99,
    "section": "PHP Databases & MySQL",
    "question": "Which SQL command is used to retrieve data from a database table?",
    "options": {
      "A": "`RETRIEVE`",
      "B": "`FETCH`",
      "C": "`GET`",
      "D": "`SELECT`"
    },
    "answer": "D"
  },
  {
    "id": 100,
    "section": "PHP Databases & MySQL",
    "question": "What does `mysqli_fetch_assoc()` return?",
    "options": {
      "A": "One row from the result set as an associative array",
      "B": "All rows as a 2D array at once",
      "C": "The column names of the query result",
      "D": "The total number of rows returned by a query"
    },
    "answer": "A"
  },
  {
    "id": 101,
    "section": "PHP Databases & MySQL",
    "question": "What does `mysqli_num_rows()` return?",
    "options": {
      "A": "The ID of the last inserted row",
      "B": "The size of the database in bytes",
      "C": "The number of columns in the result",
      "D": "The number of rows returned by a SELECT query"
    },
    "answer": "D"
  },
  {
    "id": 102,
    "section": "PHP Databases & MySQL",
    "question": "Which SQL command is used to add a new row of data into a table?",
    "options": {
      "A": "`CREATE ROW`",
      "B": "`ADD INTO`",
      "C": "`PUT INTO`",
      "D": "`INSERT INTO`"
    },
    "answer": "D"
  },
  {
    "id": 103,
    "section": "PHP Databases & MySQL",
    "question": "Which SQL command is used to modify existing data in a table?",
    "options": {
      "A": "`CHANGE`",
      "B": "`MODIFY`",
      "C": "`UPDATE`",
      "D": "`SET`"
    },
    "answer": "C"
  },
  {
    "id": 104,
    "section": "PHP Databases & MySQL",
    "question": "What is the danger of running an `UPDATE` or `DELETE` SQL query WITHOUT a `WHERE` clause?",
    "options": {
      "A": "The query will only affect the first row",
      "B": "The query will fail with a syntax error",
      "C": "The query will create a duplicate table",
      "D": "The query will affect ALL rows in the table, not just the intended one"
    },
    "answer": "D"
  },
  {
    "id": 105,
    "section": "PHP Databases & MySQL",
    "question": "What is the main difference between MySQLi and PDO in PHP?",
    "options": {
      "A": "PDO only works with PostgreSQL; MySQLi works with MySQL only",
      "B": "PDO is older and less secure than MySQLi",
      "C": "MySQLi works only with MySQL; PDO works with multiple database types",
      "D": "MySQLi supports object-oriented programming; PDO does not"
    },
    "answer": "C"
  },
  {
    "id": 106,
    "section": "HTTP, AJAX & Security",
    "question": "What does HTTP stand for?",
    "options": {
      "A": "High Transfer Text Protocol",
      "B": "HyperText Transfer Protocol",
      "C": "Hyperlink Text Transfer Process",
      "D": "HyperText Transmission Page"
    },
    "answer": "B"
  },
  {
    "id": 107,
    "section": "HTTP, AJAX & Security",
    "question": "Which HTTP method is used to RETRIEVE data from a server without modifying anything?",
    "options": {
      "A": "GET",
      "B": "PUT",
      "C": "POST",
      "D": "DELETE"
    },
    "answer": "A"
  },
  {
    "id": 108,
    "section": "HTTP, AJAX & Security",
    "question": "Which HTTP method is used to UPDATE an existing resource on the server?",
    "options": {
      "A": "PUT",
      "B": "POST",
      "C": "GET",
      "D": "PATCH"
    },
    "answer": "A"
  },
  {
    "id": 109,
    "section": "HTTP, AJAX & Security",
    "question": "What does HTTP status code `404` indicate?",
    "options": {
      "A": "The user is not authorized to access the resource",
      "B": "The request was successful",
      "C": "The requested resource was not found",
      "D": "The server encountered an internal error"
    },
    "answer": "C"
  },
  {
    "id": 110,
    "section": "HTTP, AJAX & Security",
    "question": "What does HTTP status code `500` indicate?",
    "options": {
      "A": "The request was redirected to a new URL",
      "B": "The client sent a bad request",
      "C": "The resource was successfully created",
      "D": "The server encountered an internal error"
    },
    "answer": "D"
  },
  {
    "id": 111,
    "section": "HTTP, AJAX & Security",
    "question": "In a URL such as `https://www.example.com/users?id=5`, what is `?id=5` called?",
    "options": {
      "A": "The query string",
      "B": "The fragment",
      "C": "The protocol",
      "D": "The path"
    },
    "answer": "A"
  },
  {
    "id": 112,
    "section": "HTTP, AJAX & Security",
    "question": "What is the main problem with traditional PHP web applications that AJAX solves?",
    "options": {
      "A": "Traditional PHP cannot connect to databases",
      "B": "Traditional PHP cannot handle multiple users at the same time",
      "C": "Traditional PHP does not support form validation",
      "D": "Traditional PHP reloads the entire page for every user action, causing poor user experience"
    },
    "answer": "D"
  },
  {
    "id": 113,
    "section": "HTTP, AJAX & Security",
    "question": "What does AJAX stand for?",
    "options": {
      "A": "Automated JavaScript and XHTML",
      "B": "Asynchronous JavaScript and XML",
      "C": "Advanced JavaScript API Exchange",
      "D": "Asynchronous Java Application Extension"
    },
    "answer": "B"
  },
  {
    "id": 114,
    "section": "HTTP, AJAX & Security",
    "question": "What is the correct order of steps in an AJAX request flow?",
    "options": {
      "A": "User performs action \u2192 JavaScript sends request \u2192 PHP processes \u2192 Server returns data \u2192 JavaScript updates page",
      "B": "PHP processes \u2192 User performs action \u2192 JavaScript updates page \u2192 Server returns data",
      "C": "JavaScript updates page \u2192 User performs action \u2192 Server returns data \u2192 PHP processes",
      "D": "Server sends data \u2192 JavaScript updates page \u2192 User performs action \u2192 PHP processes"
    },
    "answer": "A"
  },
  {
    "id": 115,
    "section": "HTTP, AJAX & Security",
    "question": "What format does a server typically return data in when responding to an AJAX request?",
    "options": {
      "A": "JSON (JavaScript Object Notation)",
      "B": "A binary file",
      "C": "A full HTML page",
      "D": "Plain PHP code"
    },
    "answer": "A"
  },
  {
    "id": 116,
    "section": "HTTP, AJAX & Security",
    "question": "What is the Fetch API in JavaScript?",
    "options": {
      "A": "A DOM method for finding HTML elements on a page",
      "B": "A modern JavaScript API for making HTTP requests without reloading the page",
      "C": "A PHP function that retrieves data from a database",
      "D": "A browser tool for inspecting network traffic"
    },
    "answer": "B"
  },
  {
    "id": 117,
    "section": "HTTP, AJAX & Security",
    "question": "What does a JavaScript Promise represent?",
    "options": {
      "A": "A function that runs immediately without waiting",
      "B": "A variable that stores multiple values at once",
      "C": "A guarantee that a function will always succeed",
      "D": "An eventual result of an asynchronous operation \u2014 success or failure"
    },
    "answer": "D"
  },
  {
    "id": 118,
    "section": "HTTP, AJAX & Security",
    "question": "In a Fetch API chain, which method handles the response if something goes wrong?",
    "options": {
      "A": "`.finally()`",
      "B": "`.error()`",
      "C": "`.then()`",
      "D": "`.catch()`"
    },
    "answer": "D"
  },
  {
    "id": 119,
    "section": "HTTP, AJAX & Security",
    "question": "What is SQL Injection?",
    "options": {
      "A": "A technique for organizing SQL queries in an MVC application",
      "B": "A PHP function for inserting data into a database safely",
      "C": "A cyberattack where malicious SQL code is inserted into input fields to manipulate a database",
      "D": "A method of speeding up MySQL queries using indexes"
    },
    "answer": "C"
  },
  {
    "id": 120,
    "section": "HTTP, AJAX & Security",
    "question": "Which of the following inputs is a classic example of a SQL Injection attempt?",
    "options": {
      "A": "`password123`",
      "B": "`' OR 1=1 --`",
      "C": "`sara@email.com`",
      "D": "`<script>alert('xss')</script>`"
    },
    "answer": "B"
  },
  {
    "id": 121,
    "section": "HTTP, AJAX & Security",
    "question": "What is the most effective way to prevent SQL Injection in PHP?",
    "options": {
      "A": "Limiting input to 50 characters",
      "B": "Validating that the input is not empty using `isset()`",
      "C": "Storing all queries in a separate file",
      "D": "Using prepared statements (parameterized queries) with PDO or MySQLi"
    },
    "answer": "D"
  },
  {
    "id": 122,
    "section": "HTTP, AJAX & Security",
    "question": "What is Cross-Site Scripting (XSS)?",
    "options": {
      "A": "An attack where SQL code is injected into a database",
      "B": "An attack that intercepts HTTP traffic between client and server",
      "C": "An attack that forces a logged-in user to submit unauthorized requests",
      "D": "An attack where malicious JavaScript is injected into web pages and runs in other users' browsers"
    },
    "answer": "D"
  },
  {
    "id": 123,
    "section": "HTTP, AJAX & Security",
    "question": "Which of the three XSS types stores the malicious script in the database so it runs every time the page loads?",
    "options": {
      "A": "DOM-based XSS",
      "B": "Reflected XSS",
      "C": "Stored XSS",
      "D": "Injected XSS"
    },
    "answer": "C"
  },
  {
    "id": 124,
    "section": "HTTP, AJAX & Security",
    "question": "Which PHP function should be used to escape user data before displaying it in a webpage to prevent XSS?",
    "options": {
      "A": "`htmlspecialchars()`",
      "B": "`urlencode()`",
      "C": "`strip_tags()`",
      "D": "`addslashes()`"
    },
    "answer": "A"
  },
  {
    "id": 125,
    "section": "HTTP, AJAX & Security",
    "question": "What is CSRF (Cross-Site Request Forgery)?",
    "options": {
      "A": "An attack that forces a logged-in user's browser to perform unwanted actions on a trusted website",
      "B": "An attack where malicious scripts are stored in the database",
      "C": "An attack where SQL code is injected into form fields",
      "D": "An attack that steals session cookies by intercepting network traffic"
    },
    "answer": "A"
  },
  {
    "id": 126,
    "section": "HTTP, AJAX & Security",
    "question": "What is the primary defense mechanism against CSRF attacks?",
    "options": {
      "A": "Including a unique Anti-CSRF token in every form and verifying it server-side",
      "B": "Using HTTPS for all web traffic",
      "C": "Using prepared statements for all database queries",
      "D": "Escaping HTML output with `htmlspecialchars()`"
    },
    "answer": "A"
  },
  {
    "id": 127,
    "section": "HTTP, AJAX & Security",
    "question": "Which aspect of web security does each attack primarily target?",
    "options": {
      "A": "All three attacks target the same layer",
      "B": "SQL Injection \u2192 browser; XSS \u2192 database; CSRF \u2192 server",
      "C": "SQL Injection \u2192 database; XSS \u2192 user's browser; CSRF \u2192 user's session",
      "D": "SQL Injection \u2192 cookies; XSS \u2192 server; CSRF \u2192 database"
    },
    "answer": "C"
  },
  {
    "id": 128,
    "section": "MVC Architecture",
    "question": "What does MVC stand for?",
    "options": {
      "A": "Method \u2013 Value \u2013 Class",
      "B": "Model \u2013 View \u2013 Controller",
      "C": "Model \u2013 Variable \u2013 Constructor",
      "D": "Module \u2013 View \u2013 Configuration"
    },
    "answer": "B"
  },
  {
    "id": 129,
    "section": "MVC Architecture",
    "question": "What is the \"Separation of Concerns\" principle in MVC?",
    "options": {
      "A": "Keeping all code in one file for easier management",
      "B": "Separating the database from the server",
      "C": "Each MVC layer has one clearly defined responsibility and does not do another layer's job",
      "D": "Using separate servers for front-end and back-end code"
    },
    "answer": "C"
  },
  {
    "id": 130,
    "section": "MVC Architecture",
    "question": "What is \"spaghetti code\" and why is it a problem?",
    "options": {
      "A": "Code that uses recursion instead of iteration",
      "B": "Code that has too many functions defined in a single class",
      "C": "Code where PHP logic, HTML, and SQL are all mixed together in one file, making it hard to read and maintain",
      "D": "Code that uses too many loops, making it slow"
    },
    "answer": "C"
  },
  {
    "id": 131,
    "section": "MVC Architecture",
    "question": "In MVC, which component is responsible for all database queries and business logic?",
    "options": {
      "A": "The View",
      "B": "The Router",
      "C": "The Controller",
      "D": "The Model"
    },
    "answer": "D"
  },
  {
    "id": 132,
    "section": "MVC Architecture",
    "question": "In MVC, what is the ONLY responsibility of the View layer?",
    "options": {
      "A": "Displaying data to the user using HTML templates with minimal PHP",
      "B": "Receiving HTTP requests and deciding which Model to call",
      "C": "Validating user input before passing it to the Model",
      "D": "Connecting to the database and fetching records"
    },
    "answer": "A"
  },
  {
    "id": 133,
    "section": "MVC Architecture",
    "question": "What is the role of the Controller in MVC?",
    "options": {
      "A": "It stores all the application data and enforces business rules",
      "B": "It maps URLs to specific files on the server",
      "C": "It receives HTTP requests, calls the Model for data, and passes that data to the correct View",
      "D": "It renders HTML templates and handles CSS styling"
    },
    "answer": "C"
  },
  {
    "id": 134,
    "section": "MVC Architecture",
    "question": "What does the Router do in an MVC application?",
    "options": {
      "A": "Generates HTML output for the user",
      "B": "Maps incoming URLs to the correct Controller and method",
      "C": "Validates all incoming form data",
      "D": "Stores database connection details"
    },
    "answer": "B"
  },
  {
    "id": 135,
    "section": "MVC Architecture",
    "question": "What is a \"Thin Controller\" principle in MVC?",
    "options": {
      "A": "Controllers should have as few HTML tags as possible",
      "B": "Controllers should have minimal code \u2014 complex business logic belongs in the Model, not the Controller",
      "C": "Each Controller should handle only one HTTP method",
      "D": "Controllers should only handle GET requests, not POST"
    },
    "answer": "B"
  },
  {
    "id": 136,
    "section": "MVC Architecture",
    "question": "What is a Front Controller pattern in MVC?",
    "options": {
      "A": "The first Model that connects to the database on page load",
      "B": "A special View that handles all authentication pages",
      "C": "A single entry point (`index.php`) that ALL requests pass through before being routed",
      "D": "A Controller that only handles the homepage"
    },
    "answer": "C"
  },
  {
    "id": 137,
    "section": "MVC Architecture",
    "question": "Which standard controller method handles displaying a list of all records (e.g., all students)?",
    "options": {
      "A": "`create()`",
      "B": "`show()`",
      "C": "`index()`",
      "D": "`store()`"
    },
    "answer": "C"
  },
  {
    "id": 138,
    "section": "MVC Architecture",
    "question": "In an MVC PHP project, which folder should be the ONLY one accessible from the web?",
    "options": {
      "A": "`public/`",
      "B": "`app/controllers/`",
      "C": "`app/models/`",
      "D": "`config/`"
    },
    "answer": "A"
  },
  {
    "id": 139,
    "section": "MVC Architecture",
    "question": "Which of these is a sign of a design problem in an MVC View file?",
    "options": {
      "A": "Using `htmlspecialchars()` when echoing variables",
      "B": "Using PHP variables passed from the Controller",
      "C": "Making a direct database query using `PDO::prepare()`",
      "D": "Using `foreach` to loop through an array passed by the Controller"
    },
    "answer": "C"
  },
  {
    "id": 140,
    "section": "MVC Architecture",
    "question": "Why is MVC better for team collaboration than spaghetti code?",
    "options": {
      "A": "MVC prevents all merge conflicts in version control",
      "B": "MVC runs faster on shared servers",
      "C": "MVC automatically generates documentation for each file",
      "D": "Frontend developers can work on Views while backend developers work on Models and Controllers independently"
    },
    "answer": "D"
  },
  {
    "id": 141,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "What is a class in PHP OOP?",
    "options": {
      "A": "A running instance of an object in memory",
      "B": "A blueprint or template that defines the structure and behavior of objects",
      "C": "A database table representation in code",
      "D": "A built-in PHP function for handling data"
    },
    "answer": "B"
  },
  {
    "id": 142,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "What is an object in PHP OOP?",
    "options": {
      "A": "A PHP keyword for defining reusable code blocks",
      "B": "A variable that stores multiple arrays",
      "C": "A specific instance created from a class using the `new` keyword",
      "D": "A method that returns a value"
    },
    "answer": "C"
  },
  {
    "id": 143,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "What does `$this` refer to inside a PHP class method?",
    "options": {
      "A": "The parent class of the current class",
      "B": "The current object instance \u2014 used to access its own properties and methods",
      "C": "The constructor method",
      "D": "The class definition itself"
    },
    "answer": "B"
  },
  {
    "id": 144,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "What is the Four Pillars of OOP?",
    "options": {
      "A": "Variables, Functions, Arrays, Objects",
      "B": "Model, View, Controller, Router",
      "C": "Encapsulation, Inheritance, Polymorphism, Abstraction",
      "D": "Public, Private, Protected, Static"
    },
    "answer": "C"
  },
  {
    "id": 145,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "What does Encapsulation mean in OOP?",
    "options": {
      "A": "Different objects responding to the same method call in different ways",
      "B": "Hiding the implementation of a method behind an interface",
      "C": "A child class inheriting methods from a parent class",
      "D": "Bundling data and methods together AND restricting direct access to internal data using access modifiers"
    },
    "answer": "D"
  },
  {
    "id": 146,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "Which access modifier makes a property or method accessible ONLY from within the class itself?",
    "options": {
      "A": "`protected`",
      "B": "`public`",
      "C": "`private`",
      "D": "`static`"
    },
    "answer": "C"
  },
  {
    "id": 147,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "Which access modifier allows a property or method to be accessed from within the class AND from child classes, but NOT from outside?",
    "options": {
      "A": "`protected`",
      "B": "`public`",
      "C": "`private`",
      "D": "`static`"
    },
    "answer": "A"
  },
  {
    "id": 148,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "What is the purpose of a getter method in OOP?",
    "options": {
      "A": "To connect the class to a database",
      "B": "To delete a private property",
      "C": "To validate and update the value of a private property",
      "D": "To return the value of a private property in a controlled way"
    },
    "answer": "D"
  },
  {
    "id": 149,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "What does Inheritance mean in PHP OOP?",
    "options": {
      "A": "A class borrowing methods from an interface",
      "B": "A trait injecting methods into a class",
      "C": "A child class acquiring all properties and methods of a parent class using `extends`",
      "D": "A class implementing multiple contracts simultaneously"
    },
    "answer": "C"
  },
  {
    "id": 150,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "In PHP, how many parent classes can a child class extend at the same time?",
    "options": {
      "A": "Unlimited",
      "B": "Only 1",
      "C": "Up to 3",
      "D": "Only 2"
    },
    "answer": "B"
  },
  {
    "id": 151,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "Which PHP keyword is used for a child class to inherit from a parent class?",
    "options": {
      "A": "`implements`",
      "B": "`extends`",
      "C": "`use`",
      "D": "`inherits`"
    },
    "answer": "B"
  },
  {
    "id": 152,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "What does method overriding mean in PHP inheritance?",
    "options": {
      "A": "Renaming a method when it is inherited",
      "B": "Deleting a parent class method in the child",
      "C": "A child class calling its parent's constructor",
      "D": "A child class redefining a method it inherited from the parent with new behavior"
    },
    "answer": "D"
  },
  {
    "id": 153,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "Which PHP keyword is used inside a child class to call the parent class's version of a method?",
    "options": {
      "A": "`super::`",
      "B": "`base::`",
      "C": "`this::`",
      "D": "`parent::`"
    },
    "answer": "D"
  },
  {
    "id": 154,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "What does Polymorphism mean in PHP OOP?",
    "options": {
      "A": "Different objects responding to the same method call in their own unique way",
      "B": "A child class having the same name as its parent",
      "C": "A class implementing multiple interfaces simultaneously",
      "D": "A class having both public and private methods"
    },
    "answer": "A"
  },
  {
    "id": 155,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "What is the practical benefit of Polymorphism in code design?",
    "options": {
      "A": "It makes all properties automatically private",
      "B": "It allows one class to connect to multiple databases",
      "C": "It allows classes to have unlimited inheritance chains",
      "D": "It eliminates the need for `if/else` or `switch` blocks that check what type of object you have"
    },
    "answer": "D"
  },
  {
    "id": 156,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "What is an Interface in PHP OOP?",
    "options": {
      "A": "A class that cannot be instantiated directly",
      "B": "A pure contract that defines WHAT methods a class must have, without providing any implementation",
      "C": "A child class that inherits from multiple parents",
      "D": "A reusable block of methods that can be injected into any class"
    },
    "answer": "B"
  },
  {
    "id": 157,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "Which PHP keyword does a class use to sign a contract with an interface?",
    "options": {
      "A": "`use`",
      "B": "`extends`",
      "C": "`inherits`",
      "D": "`implements`"
    },
    "answer": "D"
  },
  {
    "id": 158,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "What is a key advantage of interfaces over inheritance for code contracts?",
    "options": {
      "A": "Interfaces are faster to process than inherited classes",
      "B": "Interfaces allow method bodies; inheritance does not",
      "C": "A class can implement MULTIPLE interfaces, while it can only extend ONE parent class",
      "D": "Interfaces automatically generate getter and setter methods"
    },
    "answer": "C"
  },
  {
    "id": 159,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "What can an interface contain?",
    "options": {
      "A": "Regular properties, method bodies, and constructors",
      "B": "Static methods with full implementations",
      "C": "Only constants and method signatures (no implementation, no regular properties)",
      "D": "Private methods and abstract constructors"
    },
    "answer": "C"
  },
  {
    "id": 160,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "What is a Trait in PHP OOP?",
    "options": {
      "A": "An object that inherits from multiple parent classes",
      "B": "A reusable group of methods that can be mixed into any class using the `use` keyword",
      "C": "A special type of interface that allows method bodies",
      "D": "A class that can only be used as a parent"
    },
    "answer": "B"
  },
  {
    "id": 161,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "Which PHP keyword is used to include a Trait inside a class?",
    "options": {
      "A": "`import`",
      "B": "`use`",
      "C": "`implements`",
      "D": "`extends`"
    },
    "answer": "B"
  },
  {
    "id": 162,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "What problem do Traits solve that interfaces alone cannot?",
    "options": {
      "A": "Traits allow a class to implement multiple contracts",
      "B": "Traits allow a class to extend multiple parents",
      "C": "Traits allow access to private properties of other classes",
      "D": "Traits provide actual reusable method implementations that can be shared between unrelated classes"
    },
    "answer": "D"
  },
  {
    "id": 163,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "What is the key difference between using a Trait and using Inheritance?",
    "options": {
      "A": "Traits inject code without creating a parent-child relationship; inheritance creates a strict hierarchy",
      "B": "Traits require interfaces; inheritance does not",
      "C": "Inheritance is for sharing methods; Traits are for sharing properties only",
      "D": "Traits can only be used once per class; inheritance can be used multiple times"
    },
    "answer": "A"
  },
  {
    "id": 164,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "What happens if two Traits used in the same class define a method with the same name?",
    "options": {
      "A": "A conflict occurs that must be resolved using `insteadof` and `as` keywords",
      "B": "The two methods are merged into one automatically",
      "C": "PHP throws a fatal error and stops",
      "D": "PHP automatically uses the first Trait's method and ignores the second"
    },
    "answer": "A"
  },
  {
    "id": 165,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "What naming convention should PHP class names follow?",
    "options": {
      "A": "snake_case: `bank_account`",
      "B": "camelCase: `bankAccount`",
      "C": "UPPER_CASE: `BANKACCOUNT`",
      "D": "PascalCase: `BankAccount`"
    },
    "answer": "D"
  },
  {
    "id": 166,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "What is the `__construct()` method in a PHP class?",
    "options": {
      "A": "A method that runs automatically when the object is destroyed",
      "B": "A method that connects the class to a database",
      "C": "A special method that runs automatically when a new object is created with `new`",
      "D": "A method used to copy one object into another"
    },
    "answer": "C"
  },
  {
    "id": 167,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "What is the correct way to access a property of an object in PHP?",
    "options": {
      "A": "`$object.property`",
      "B": "`$object->property`",
      "C": "`$object::property`",
      "D": "`$object[property]`"
    },
    "answer": "B"
  },
  {
    "id": 168,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "Which of the following best describes the relationship \"Dog IS an Animal\" in OOP?",
    "options": {
      "A": "Inheritance relationship using `extends`",
      "B": "Trait relationship",
      "C": "Interface implementation",
      "D": "Polymorphic substitution"
    },
    "answer": "A"
  },
  {
    "id": 169,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "Which of the following best describes the relationship \"Document CAN BE Printed\" in OOP?",
    "options": {
      "A": "Inheritance relationship using `extends`",
      "B": "Interface implementation using `implements`",
      "C": "Constructor overriding",
      "D": "Trait injection using `use`"
    },
    "answer": "B"
  },
  {
    "id": 170,
    "section": "Object-Oriented Programming (OOP) in PHP",
    "question": "Looking at all the OOP concepts together \u2014 which combination is correct for a class `PremiumUser` that shares a parent class, fulfills two contracts, AND borrows utility methods?",
    "options": {
      "A": "`class PremiumUser extends User implements Printable use Logger`",
      "B": "`class PremiumUser implements User extends Printable { use Saveable; }`",
      "C": "`class PremiumUser use Logger implements User extends Printable`",
      "D": "`class PremiumUser extends User implements Printable, Saveable { use Logger; }`"
    },
    "answer": "D"
  }
];
