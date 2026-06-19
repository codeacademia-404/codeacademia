import type { Tutorial } from './index';

export const cppTutorials: Tutorial[] = [
  {
    id: 'cpp-basics', title: 'C++ Programming Basics', slug: 'basics',
    category: 'C++', categorySlug: 'cpp',
    description: 'Learn C++ fundamentals — syntax, data types, pointers, and OOP.',
    difficulty: 'Intermediate', duration: '50 min', tags: ['cpp', 'beginner', 'systems'],
    author: 'Sasidharan M', lastUpdated: '2025-12-01',
    chapters: [{
      id: 'ch1', title: 'C++ Fundamentals',
      lessons: [
        { id: 'l1', title: 'Introduction to C++', slug: 'introduction',
          content: `C++ is a powerful general-purpose programming language. It was developed by Bjarne Stroustrup as an extension of C. C++ gives programmers high-level abstractions with low-level memory manipulation capabilities.`,
          codeExamples: [{ language: 'cpp', title: 'Hello World in C++', code: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string name = "CodeAcademia";\n    cout << "Hello, World!" << endl;\n    cout << "Welcome to " << name << "!" << endl;\n    \n    // Variables & types\n    int age = 25;\n    double pi = 3.14159;\n    bool isActive = true;\n    char grade = 'A';\n    \n    cout << "Age: " << age << endl;\n    cout << "Pi: " << pi << endl;\n    \n    return 0;\n}`, output: 'Hello, World!\nWelcome to CodeAcademia!\nAge: 25\nPi: 3.14159' }],
          tips: ['Always include `return 0;` at the end of main().', 'Use `std::string` instead of C-style char arrays for string handling.'],
          interviewQuestions: [{ question: 'What is the difference between C and C++?', answer: 'C is a procedural language while C++ supports both procedural and object-oriented programming. C++ adds features like classes, inheritance, polymorphism, templates, exceptions, and the STL.' }],
        },
        { id: 'l2', title: 'Pointers & References', slug: 'pointers',
          content: `Pointers and references are fundamental concepts in C++ that allow direct memory manipulation.`,
          codeExamples: [{ language: 'cpp', title: 'Pointers & References', code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 42;\n    \n    // Pointer - stores memory address\n    int* ptr = &x;\n    cout << "Value: " << *ptr << endl;    // 42\n    cout << "Address: " << ptr << endl;    // 0x...\n    \n    // Reference - alias for variable\n    int& ref = x;\n    ref = 100;  // Changes x\n    cout << "x is now: " << x << endl;   // 100\n    \n    // Dynamic memory\n    int* arr = new int[5]{1, 2, 3, 4, 5};\n    for (int i = 0; i < 5; i++) {\n        cout << arr[i] << " ";\n    }\n    delete[] arr;  // Always free!\n    \n    // Smart pointers (modern C++)\n    // auto p = make_unique<int>(42);\n    // No manual delete needed!\n    \n    return 0;\n}`, output: 'Value: 42\nAddress: 0x7fff5fbff8ac\nx is now: 100\n1 2 3 4 5' }],
          warnings: ['Always delete dynamically allocated memory to prevent memory leaks.', 'Prefer smart pointers (unique_ptr, shared_ptr) over raw pointers in modern C++.'],
        },
      ],
    }],
  },
  {
    id: 'cpp-stl', title: 'C++ Standard Template Library', slug: 'stl',
    category: 'C++', categorySlug: 'cpp',
    description: 'Master vectors, maps, sets, algorithms, and iterators in C++.',
    difficulty: 'Intermediate', duration: '45 min', tags: ['cpp', 'stl', 'data-structures'],
    author: 'Sasidharan M', lastUpdated: '2025-12-10',
    chapters: [{
      id: 'ch1', title: 'STL Containers',
      lessons: [
        { id: 'l1', title: 'Vectors & Maps', slug: 'containers',
          content: `The STL provides powerful container classes and algorithms that make C++ programming more productive.`,
          codeExamples: [{ language: 'cpp', title: 'STL Containers', code: `#include <iostream>\n#include <vector>\n#include <map>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    // Vector\n    vector<int> nums = {5, 3, 1, 4, 2};\n    sort(nums.begin(), nums.end());\n    for (int n : nums) cout << n << " "; // 1 2 3 4 5\n    cout << endl;\n    \n    // Map\n    map<string, int> scores;\n    scores["Alice"] = 95;\n    scores["Bob"] = 87;\n    scores["Charlie"] = 92;\n    \n    for (auto& [name, score] : scores) {\n        cout << name << ": " << score << endl;\n    }\n    \n    // Lambda with algorithm\n    auto evens = count_if(nums.begin(), nums.end(),\n        [](int n) { return n % 2 == 0; });\n    cout << "Even count: " << evens << endl;\n    \n    return 0;\n}`, output: '1 2 3 4 5\nAlice: 95\nBob: 87\nCharlie: 92\nEven count: 2' }],
        },
      ],
    }],
  },
];
