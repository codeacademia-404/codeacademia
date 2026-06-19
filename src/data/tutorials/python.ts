import type { Tutorial } from './index';

export const pythonTutorials: Tutorial[] = [
  {
    id: 'python-getting-started',
    title: 'Python Getting Started',
    slug: 'getting-started',
    category: 'Python',
    categorySlug: 'python',
    description: 'Learn the basics of Python programming — installation, syntax, and your first program.',
    difficulty: 'Beginner',
    duration: '30 min',
    tags: ['python', 'beginner', 'basics'],
    author: 'Sasidharan M',
    lastUpdated: '2025-12-01',
    chapters: [
      {
        id: 'ch1',
        title: 'Introduction to Python',
        lessons: [
          {
            id: 'l1',
            title: 'What is Python?',
            slug: 'what-is-python',
            content: `Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum and first released in 1991, Python has become one of the most popular programming languages in the world.

Python is used in a wide variety of applications including:
- **Web Development** (Django, Flask, FastAPI)
- **Data Science & Machine Learning** (NumPy, Pandas, TensorFlow)
- **Automation & Scripting**
- **Game Development** (Pygame)
- **Desktop Applications** (Tkinter, PyQt)

Python's philosophy emphasizes code readability with its notable use of significant indentation. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.`,
            codeExamples: [
              {
                language: 'python',
                title: 'Your First Python Program',
                code: `# This is your first Python program\nprint("Hello, World!")\nprint("Welcome to CodeAcademia!")`,
                output: 'Hello, World!\nWelcome to CodeAcademia!',
              },
            ],
            tips: [
              'Python uses indentation (whitespace) to define code blocks instead of curly braces.',
              'Python is case-sensitive — `Print` and `print` are different.',
            ],
            notes: [
              'Python 3 is the current major version and is recommended for all new projects.',
              'Python 2 reached end-of-life on January 1, 2020.',
            ],
            interviewQuestions: [
              { question: 'What is Python and why is it popular?', answer: 'Python is a high-level, interpreted language known for simplicity, readability, and versatility. It\'s popular because of its clean syntax, extensive libraries, and wide use in web development, data science, AI, and automation.' },
              { question: 'What are the key features of Python?', answer: 'Key features include: interpreted language, dynamically typed, object-oriented, extensive standard library, platform independent, open source, and strong community support.' },
            ],
          },
          {
            id: 'l2',
            title: 'Installing Python',
            slug: 'installing-python',
            content: `To get started with Python, you need to install it on your computer. Here's how to do it on different operating systems.

## Windows
1. Visit [python.org](https://python.org) and download the latest version
2. Run the installer and **check "Add Python to PATH"**
3. Click "Install Now"
4. Verify installation by opening Command Prompt and typing \`python --version\`

## macOS
Python 3 can be installed via Homebrew:
\`\`\`bash
brew install python3
\`\`\`

## Linux (Ubuntu/Debian)
\`\`\`bash
sudo apt update
sudo apt install python3 python3-pip
\`\`\`

After installation, verify by running:`,
            codeExamples: [
              {
                language: 'bash',
                title: 'Verify Python Installation',
                code: `python --version\n# Output: Python 3.12.x\n\npip --version\n# Output: pip 24.x.x`,
                output: 'Python 3.12.4\npip 24.0',
              },
              {
                language: 'python',
                title: 'Test Python Interactive Shell',
                code: `# Open Python interactive shell\n>>> 2 + 3\n5\n>>> print("Python is working!")\nPython is working!\n>>> exit()`,
                output: '5\nPython is working!',
              },
            ],
            tips: [
              'Always check the "Add Python to PATH" checkbox on Windows.',
              'Use `python3` on macOS and Linux if `python` points to Python 2.',
            ],
          },
          {
            id: 'l3',
            title: 'Python Syntax Basics',
            slug: 'python-syntax',
            content: `Python syntax is designed to be readable and straightforward. Let's cover the fundamental syntax elements.

## Variables
Python variables don't need explicit type declarations. The type is inferred automatically.

## Comments
Use \`#\` for single-line comments and triple quotes for multi-line comments.

## Indentation
Python uses indentation to define blocks of code. The standard is 4 spaces.`,
            codeExamples: [
              {
                language: 'python',
                title: 'Variables and Data Types',
                code: `# Variables - no need to declare type\nname = "CodeAcademia"\nage = 25\npi = 3.14159\nis_active = True\n\n# Multiple assignment\nx, y, z = 1, 2, 3\n\n# Print variables\nprint(f"Name: {name}")\nprint(f"Age: {age}")\nprint(f"Pi: {pi}")\nprint(f"Active: {is_active}")`,
                output: 'Name: CodeAcademia\nAge: 25\nPi: 3.14159\nActive: True',
              },
              {
                language: 'python',
                title: 'Comments in Python',
                code: `# This is a single-line comment\n\n"""\nThis is a\nmulti-line comment\n(docstring)\n"""\n\nprint("Comments are ignored by the interpreter")`,
                output: 'Comments are ignored by the interpreter',
              },
              {
                language: 'python',
                title: 'Indentation Example',
                code: `# Correct indentation\nif True:\n    print("This is indented correctly")\n    if True:\n        print("Nested indentation")\n\n# This would cause an IndentationError:\n# if True:\n# print("Wrong!")  # Not indented`,
                output: 'This is indented correctly\nNested indentation',
              },
            ],
            tips: [
              'Use f-strings (f"...") for string formatting — they are the most readable approach.',
              'Python convention uses snake_case for variable names (my_variable, not myVariable).',
            ],
            notes: ['Python is dynamically typed — you don\'t need to declare variable types explicitly.'],
            interviewQuestions: [
              { question: 'What is the difference between a list and a tuple in Python?', answer: 'Lists are mutable (can be modified after creation) and use square brackets []. Tuples are immutable (cannot be changed) and use parentheses (). Tuples are faster and can be used as dictionary keys.' },
            ],
          },
        ],
      },
      {
        id: 'ch2',
        title: 'Data Types & Variables',
        lessons: [
          {
            id: 'l4',
            title: 'Python Data Types',
            slug: 'data-types',
            content: `Python has several built-in data types. Understanding them is fundamental to programming in Python.

## Numeric Types
- **int**: Integer numbers (1, 42, -7)
- **float**: Decimal numbers (3.14, -0.001)
- **complex**: Complex numbers (3+5j)

## Sequence Types
- **str**: Strings ("Hello")
- **list**: Ordered, mutable collections [1, 2, 3]
- **tuple**: Ordered, immutable collections (1, 2, 3)

## Other Types
- **dict**: Key-value pairs {"name": "John"}
- **set**: Unordered unique elements {1, 2, 3}
- **bool**: True or False
- **None**: Represents absence of value`,
            codeExamples: [
              {
                language: 'python',
                title: 'Working with Data Types',
                code: `# Numeric types\ninteger_num = 42\nfloat_num = 3.14\ncomplex_num = 3 + 5j\n\n# String\ngreeting = "Hello, World!"\n\n# List (mutable)\nfruits = ["apple", "banana", "cherry"]\n\n# Tuple (immutable)\ncoordinates = (10.5, 20.3)\n\n# Dictionary\nperson = {"name": "Alice", "age": 30}\n\n# Set\nunique_nums = {1, 2, 3, 3, 2}  # {1, 2, 3}\n\n# Boolean\nis_valid = True\n\n# Check types\nprint(type(integer_num))   # <class 'int'>\nprint(type(greeting))      # <class 'str'>\nprint(type(fruits))        # <class 'list'>`,
                output: "<class 'int'>\n<class 'str'>\n<class 'list'>",
              },
            ],
            tips: ['Use type() to check the type of any variable.', 'Python automatically handles type conversion in many cases (e.g., int to float in division).'],
            interviewQuestions: [
              { question: 'What is the difference between mutable and immutable types?', answer: 'Mutable types can be changed after creation (list, dict, set). Immutable types cannot be modified (int, float, str, tuple). When you "modify" an immutable type, Python creates a new object.' },
            ],
          },
          {
            id: 'l5',
            title: 'Python Strings',
            slug: 'strings',
            content: `Strings in Python are sequences of characters enclosed in quotes. Python provides powerful string manipulation methods.`,
            codeExamples: [
              {
                language: 'python',
                title: 'String Operations',
                code: `# Creating strings\nsingle = 'Hello'\ndouble = "World"\nmultiline = """This is\na multiline\nstring"""\n\n# String concatenation\nfull = single + " " + double\nprint(full)  # Hello World\n\n# String methods\ntext = "  Hello, CodeAcademia!  "\nprint(text.strip())      # Remove whitespace\nprint(text.upper())      # HELLO, CODEACADEMIA!\nprint(text.lower())      # hello, codeacademia!\nprint(text.replace("Hello", "Hi"))\n\n# String slicing\nword = "Python"\nprint(word[0])     # P\nprint(word[0:3])   # Pyt\nprint(word[-1])    # n\nprint(word[::-1])  # nohtyP (reversed)`,
                output: 'Hello World\nHello, CodeAcademia!\n  HELLO, CODEACADEMIA!  \n  hello, codeacademia!  \n  Hi, CodeAcademia!  \nP\nPyt\nn\nnohtyP',
              },
              {
                language: 'python',
                title: 'F-Strings (Formatted String Literals)',
                code: `name = "Alice"\nage = 30\npi = 3.14159\n\n# f-string formatting\nprint(f"Name: {name}, Age: {age}")\nprint(f"Pi to 2 decimals: {pi:.2f}")\nprint(f"{'Hello':>15}")  # Right-aligned\nprint(f"{'Hello':<15}")  # Left-aligned\nprint(f"{'Hello':^15}")  # Center-aligned`,
                output: 'Name: Alice, Age: 30\nPi to 2 decimals: 3.14\n          Hello\nHello          \n     Hello     ',
              },
            ],
            tips: ['F-strings are the most readable way to format strings in Python 3.6+.', 'Strings are immutable — methods return new strings.'],
          },
        ],
      },
      {
        id: 'ch3',
        title: 'Control Flow',
        lessons: [
          {
            id: 'l6',
            title: 'If-Else Statements',
            slug: 'if-else',
            content: `Control flow statements allow you to control the execution path of your program based on conditions.`,
            codeExamples: [
              {
                language: 'python',
                title: 'Conditional Statements',
                code: `age = 18\n\n# Simple if-else\nif age >= 18:\n    print("You are an adult")\nelse:\n    print("You are a minor")\n\n# if-elif-else\nscore = 85\nif score >= 90:\n    grade = "A"\nelif score >= 80:\n    grade = "B"\nelif score >= 70:\n    grade = "C"\nelse:\n    grade = "F"\nprint(f"Grade: {grade}")\n\n# Ternary operator\nstatus = "Pass" if score >= 60 else "Fail"\nprint(f"Status: {status}")`,
                output: 'You are an adult\nGrade: B\nStatus: Pass',
              },
            ],
            tips: ['Python uses elif instead of else if.', 'The ternary operator (x if condition else y) is great for simple conditions.'],
          },
          {
            id: 'l7',
            title: 'Loops in Python',
            slug: 'loops',
            content: `Python provides two main loop types: for loops and while loops.`,
            codeExamples: [
              {
                language: 'python',
                title: 'For and While Loops',
                code: `# For loop with range\nfor i in range(5):\n    print(f"Count: {i}")\n\n# For loop with list\nfruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(f"I like {fruit}")\n\n# While loop\ncount = 0\nwhile count < 3:\n    print(f"While count: {count}")\n    count += 1\n\n# List comprehension\nsquares = [x**2 for x in range(6)]\nprint(f"Squares: {squares}")`,
                output: 'Count: 0\nCount: 1\nCount: 2\nCount: 3\nCount: 4\nI like apple\nI like banana\nI like cherry\nWhile count: 0\nWhile count: 1\nWhile count: 2\nSquares: [0, 1, 4, 9, 16, 25]',
              },
            ],
            tips: ['List comprehensions are Pythonic and often faster than traditional loops.', 'Use enumerate() when you need both index and value.'],
            interviewQuestions: [
              { question: 'What is the difference between range() and xrange()?', answer: 'In Python 3, there is only range(), which behaves like Python 2\'s xrange() — it returns a lazy iterator. Python 2\'s range() returned a list; xrange() returned an iterator.' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'python-functions',
    title: 'Python Functions & Modules',
    slug: 'functions-modules',
    category: 'Python',
    categorySlug: 'python',
    description: 'Master Python functions, lambda expressions, decorators, and modules.',
    difficulty: 'Beginner',
    duration: '45 min',
    tags: ['python', 'functions', 'modules'],
    author: 'Sasidharan M',
    lastUpdated: '2025-12-05',
    chapters: [
      {
        id: 'ch1',
        title: 'Functions',
        lessons: [
          {
            id: 'l1',
            title: 'Defining Functions',
            slug: 'defining-functions',
            content: `Functions are reusable blocks of code that perform specific tasks. They help organize code and avoid repetition.`,
            codeExamples: [
              {
                language: 'python',
                title: 'Function Examples',
                code: `# Basic function\ndef greet(name):\n    """Greet a person by name."""\n    return f"Hello, {name}!"\n\nprint(greet("Alice"))\n\n# Function with default parameters\ndef power(base, exponent=2):\n    return base ** exponent\n\nprint(power(3))      # 9 (default exponent=2)\nprint(power(2, 10))  # 1024\n\n# *args and **kwargs\ndef summarize(*args, **kwargs):\n    print(f"Args: {args}")\n    print(f"Kwargs: {kwargs}")\n\nsummarize(1, 2, 3, name="Alice", age=30)`,
                output: 'Hello, Alice!\n9\n1024\nArgs: (1, 2, 3)\nKwargs: {\'name\': \'Alice\', \'age\': 30}',
              },
            ],
            tips: ['Always write docstrings for your functions.', 'Use type hints for better code clarity: def greet(name: str) -> str:'],
          },
          {
            id: 'l2',
            title: 'Lambda Functions',
            slug: 'lambda-functions',
            content: `Lambda functions are small anonymous functions defined with the lambda keyword.`,
            codeExamples: [
              {
                language: 'python',
                title: 'Lambda & Higher-Order Functions',
                code: `# Lambda function\nsquare = lambda x: x ** 2\nprint(square(5))  # 25\n\n# Using lambda with built-in functions\nnumbers = [3, 1, 4, 1, 5, 9, 2, 6]\n\n# Sort by custom key\nsorted_nums = sorted(numbers, reverse=True)\nprint(sorted_nums)\n\n# Filter even numbers\nevens = list(filter(lambda x: x % 2 == 0, numbers))\nprint(f"Evens: {evens}")\n\n# Map: square all numbers\nsquares = list(map(lambda x: x**2, numbers))\nprint(f"Squares: {squares}")`,
                output: '25\n[9, 6, 5, 4, 3, 2, 1, 1]\nEvens: [4, 2, 6]\nSquares: [9, 1, 16, 1, 25, 81, 4, 36]',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'python-oop',
    title: 'Python Object-Oriented Programming',
    slug: 'oop',
    category: 'Python',
    categorySlug: 'python',
    description: 'Learn classes, objects, inheritance, polymorphism, and design patterns in Python.',
    difficulty: 'Intermediate',
    duration: '60 min',
    tags: ['python', 'oop', 'classes'],
    author: 'Sasidharan M',
    lastUpdated: '2025-12-10',
    chapters: [
      {
        id: 'ch1',
        title: 'Classes & Objects',
        lessons: [
          {
            id: 'l1',
            title: 'Creating Classes',
            slug: 'creating-classes',
            content: `Object-Oriented Programming (OOP) is a programming paradigm that organizes code into objects — instances of classes.`,
            codeExamples: [
              {
                language: 'python',
                title: 'Class Definition & Usage',
                code: `class Dog:\n    # Class variable\n    species = "Canis familiaris"\n\n    def __init__(self, name, age):\n        # Instance variables\n        self.name = name\n        self.age = age\n\n    def bark(self):\n        return f"{self.name} says Woof!"\n\n    def __str__(self):\n        return f"{self.name} is {self.age} years old"\n\n# Create objects\nmax_dog = Dog("Max", 3)\nbuddy = Dog("Buddy", 5)\n\nprint(max_dog.bark())\nprint(buddy)\nprint(f"Species: {Dog.species}")`,
                output: 'Max says Woof!\nBuddy is 5 years old\nSpecies: Canis familiaris',
              },
            ],
            tips: ['Always use __init__ to initialize instance attributes.', '__str__ defines the string representation of your object.'],
            interviewQuestions: [
              { question: 'What are the four pillars of OOP?', answer: 'Encapsulation (bundling data and methods), Abstraction (hiding complex implementation), Inheritance (deriving new classes from existing ones), and Polymorphism (same interface for different types).' },
            ],
          },
        ],
      },
    ],
  },
];
