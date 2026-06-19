import type { Tutorial } from './index';

export const javascriptTutorials: Tutorial[] = [
  {
    id: 'js-fundamentals',
    title: 'JavaScript Fundamentals',
    slug: 'fundamentals',
    category: 'JavaScript',
    categorySlug: 'javascript',
    description: 'Master JavaScript basics — variables, data types, operators, and control flow.',
    difficulty: 'Beginner',
    duration: '40 min',
    tags: ['javascript', 'beginner', 'web'],
    author: 'Sasidharan M',
    lastUpdated: '2025-12-01',
    chapters: [
      {
        id: 'ch1',
        title: 'Getting Started',
        lessons: [
          {
            id: 'l1',
            title: 'Introduction to JavaScript',
            slug: 'introduction',
            content: `JavaScript is the programming language of the web. It is used to make web pages interactive and dynamic. Every modern web browser has a built-in JavaScript engine that can execute JS code.

JavaScript can be used for:
- **Front-end Development** — DOM manipulation, event handling, animations
- **Back-end Development** — Node.js server-side applications
- **Mobile Development** — React Native, Ionic
- **Desktop Applications** — Electron
- **Game Development** — Phaser, Three.js`,
            codeExamples: [
              {
                language: 'javascript',
                title: 'Hello World in JavaScript',
                code: `// In a browser console or Node.js\nconsole.log("Hello, World!");\n\n// In HTML\n// <script>\n//   document.getElementById("demo").innerHTML = "Hello!";\n// </script>\n\n// Alert (browser only)\n// alert("Welcome to JavaScript!");`,
                output: 'Hello, World!',
              },
            ],
            tips: [
              'Use the browser console (F12) to quickly test JavaScript code.',
              'JavaScript is case-sensitive — `console.log` is not the same as `Console.Log`.',
            ],
            interviewQuestions: [
              { question: 'What is the difference between JavaScript and Java?', answer: 'Despite similar names, they are completely different languages. Java is compiled, statically typed, and class-based. JavaScript is interpreted, dynamically typed, and prototype-based. JavaScript was originally named Mocha, then LiveScript, and finally JavaScript for marketing purposes.' },
            ],
          },
          {
            id: 'l2',
            title: 'Variables & Data Types',
            slug: 'variables',
            content: `JavaScript has three ways to declare variables: \`var\`, \`let\`, and \`const\`. Modern JavaScript prefers \`let\` and \`const\`.`,
            codeExamples: [
              {
                language: 'javascript',
                title: 'Variables in JavaScript',
                code: `// const - cannot be reassigned\nconst PI = 3.14159;\nconst name = "CodeAcademia";\n\n// let - can be reassigned\nlet age = 25;\nage = 26; // OK\n\n// Data types\nlet string = "Hello";         // String\nlet number = 42;              // Number\nlet decimal = 3.14;           // Number (no separate float)\nlet boolean = true;           // Boolean\nlet nothing = null;           // Null\nlet notDefined = undefined;   // Undefined\nlet symbol = Symbol("id");    // Symbol\nlet bigInt = 9007199254740991n; // BigInt\n\n// typeof operator\nconsole.log(typeof string);   // "string"\nconsole.log(typeof number);   // "number"\nconsole.log(typeof boolean);  // "boolean"\nconsole.log(typeof nothing);  // "object" (quirk!)`,
                output: '"string"\n"number"\n"boolean"\n"object"',
              },
            ],
            tips: [
              'Always prefer `const` over `let` — only use `let` when you need to reassign.',
              'Avoid `var` in modern JavaScript — it has function scope instead of block scope.',
            ],
          },
        ],
      },
      {
        id: 'ch2',
        title: 'Functions & Arrays',
        lessons: [
          {
            id: 'l3',
            title: 'Functions',
            slug: 'functions',
            content: `Functions are one of the fundamental building blocks in JavaScript. A function is a reusable block of code designed to perform a particular task.`,
            codeExamples: [
              {
                language: 'javascript',
                title: 'Function Types',
                code: `// Function declaration\nfunction greet(name) {\n  return \`Hello, \${name}!\`;\n}\n\n// Function expression\nconst add = function(a, b) {\n  return a + b;\n};\n\n// Arrow function (ES6+)\nconst multiply = (a, b) => a * b;\n\n// Default parameters\nconst power = (base, exp = 2) => base ** exp;\n\nconsole.log(greet("Alice"));    // Hello, Alice!\nconsole.log(add(2, 3));         // 5\nconsole.log(multiply(4, 5));    // 20\nconsole.log(power(3));          // 9\nconsole.log(power(2, 10));      // 1024`,
                output: 'Hello, Alice!\n5\n20\n9\n1024',
              },
            ],
            tips: ['Arrow functions don\'t have their own `this` — they inherit it from the parent scope.'],
          },
          {
            id: 'l4',
            title: 'Arrays & Array Methods',
            slug: 'arrays',
            content: `Arrays are used to store multiple values in a single variable. JavaScript provides powerful array methods for manipulation.`,
            codeExamples: [
              {
                language: 'javascript',
                title: 'Array Methods',
                code: `const fruits = ["apple", "banana", "cherry", "date"];\n\n// map - transform each element\nconst upper = fruits.map(f => f.toUpperCase());\nconsole.log(upper);\n\n// filter - keep elements matching condition\nconst long = fruits.filter(f => f.length > 5);\nconsole.log(long);\n\n// reduce - accumulate a single value\nconst numbers = [1, 2, 3, 4, 5];\nconst sum = numbers.reduce((acc, n) => acc + n, 0);\nconsole.log("Sum:", sum);\n\n// find, includes, some, every\nconsole.log(fruits.find(f => f.startsWith("b")));\nconsole.log(fruits.includes("cherry"));\n\n// Destructuring\nconst [first, second, ...rest] = fruits;\nconsole.log(first, second, rest);`,
                output: '["APPLE", "BANANA", "CHERRY", "DATE"]\n["banana", "cherry"]\nSum: 15\nbanana\ntrue\napple banana ["cherry", "date"]',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'js-dom',
    title: 'JavaScript DOM Manipulation',
    slug: 'dom-manipulation',
    category: 'JavaScript',
    categorySlug: 'javascript',
    description: 'Learn to interact with HTML documents using the Document Object Model.',
    difficulty: 'Intermediate',
    duration: '50 min',
    tags: ['javascript', 'dom', 'web'],
    author: 'Sasidharan M',
    lastUpdated: '2025-12-08',
    chapters: [
      {
        id: 'ch1',
        title: 'DOM Basics',
        lessons: [
          {
            id: 'l1',
            title: 'Selecting Elements',
            slug: 'selecting-elements',
            content: `The DOM (Document Object Model) is a programming interface for HTML documents. It represents the page as a tree of nodes that can be manipulated with JavaScript.`,
            codeExamples: [
              {
                language: 'javascript',
                title: 'DOM Selection Methods',
                code: `// Select by ID\nconst header = document.getElementById("main-header");\n\n// Select by class (returns HTMLCollection)\nconst cards = document.getElementsByClassName("card");\n\n// querySelector - CSS selector (first match)\nconst nav = document.querySelector("nav.primary");\n\n// querySelectorAll - all matches\nconst links = document.querySelectorAll("a.nav-link");\n\n// Modifying content\nheader.textContent = "New Header Text";\nheader.innerHTML = "<strong>Bold Header</strong>";\n\n// Modifying styles\nheader.style.color = "#2563EB";\nheader.style.fontSize = "2rem";\n\n// Adding/removing classes\nheader.classList.add("active");\nheader.classList.remove("hidden");\nheader.classList.toggle("dark-mode");`,
              },
            ],
            tips: [
              'Prefer querySelector/querySelectorAll over older methods — they accept any CSS selector.',
              'Use textContent instead of innerHTML when you don\'t need HTML parsing (it\'s safer and faster).',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'js-async',
    title: 'Async JavaScript',
    slug: 'async',
    category: 'JavaScript',
    categorySlug: 'javascript',
    description: 'Understand callbacks, promises, async/await, and the event loop.',
    difficulty: 'Intermediate',
    duration: '45 min',
    tags: ['javascript', 'async', 'promises'],
    author: 'Sasidharan M',
    lastUpdated: '2025-12-15',
    chapters: [
      {
        id: 'ch1',
        title: 'Asynchronous Patterns',
        lessons: [
          {
            id: 'l1',
            title: 'Promises & Async/Await',
            slug: 'promises',
            content: `JavaScript is single-threaded but non-blocking thanks to its event loop. Promises and async/await are patterns for handling asynchronous operations.`,
            codeExamples: [
              {
                language: 'javascript',
                title: 'Promises and Async/Await',
                code: `// Creating a Promise\nconst fetchData = () => {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve({ id: 1, name: "Tutorial" });\n    }, 1000);\n  });\n};\n\n// Using .then()\nfetchData()\n  .then(data => console.log("Then:", data))\n  .catch(err => console.error(err));\n\n// Using async/await (preferred)\nasync function getData() {\n  try {\n    const data = await fetchData();\n    console.log("Await:", data);\n  } catch (error) {\n    console.error("Error:", error);\n  }\n}\n\ngetData();\n\n// Promise.all - parallel execution\nconst results = await Promise.all([\n  fetchData(),\n  fetchData(),\n]);\nconsole.log("All:", results);`,
                output: 'Then: { id: 1, name: "Tutorial" }\nAwait: { id: 1, name: "Tutorial" }\nAll: [{ id: 1, name: "Tutorial" }, { id: 1, name: "Tutorial" }]',
              },
            ],
            tips: ['Always use try/catch with async/await for proper error handling.', 'Use Promise.all() to run multiple async operations in parallel.'],
            interviewQuestions: [
              { question: 'What is the event loop in JavaScript?', answer: 'The event loop is a mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded. It continuously checks the call stack and callback queue, pushing callbacks to the stack when it\'s empty.' },
            ],
          },
        ],
      },
    ],
  },
];
