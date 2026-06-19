import type { Tutorial } from './index';

export const javaTutorials: Tutorial[] = [
  {
    id: 'java-basics', title: 'Java Programming Basics', slug: 'basics',
    category: 'Java', categorySlug: 'java',
    description: 'Learn Java fundamentals — syntax, data types, OOP, and core concepts.',
    difficulty: 'Beginner', duration: '50 min', tags: ['java', 'beginner', 'oop'],
    author: 'Sasidharan M', lastUpdated: '2025-12-01',
    chapters: [{
      id: 'ch1', title: 'Java Fundamentals',
      lessons: [
        { id: 'l1', title: 'Introduction to Java', slug: 'introduction',
          content: `Java is a high-level, class-based, object-oriented programming language. It follows the principle of "Write Once, Run Anywhere" (WORA), meaning compiled Java code can run on any platform that supports Java without recompilation.\n\nJava is used in:\n- Enterprise Applications\n- Android Development\n- Web Applications (Spring Boot)\n- Big Data (Hadoop)\n- Cloud Computing`,
          codeExamples: [{ language: 'java', title: 'Hello World in Java', code: `public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n        System.out.println("Welcome to CodeAcademia!");\n    }\n}`, output: 'Hello, World!\nWelcome to CodeAcademia!' }],
          tips: ['Every Java program must have a main method.', 'Java file name must match the public class name.'],
          interviewQuestions: [{ question: 'Why is Java platform independent?', answer: 'Java code is compiled to bytecode (.class files) which runs on the Java Virtual Machine (JVM). Since JVM is available for all major operating systems, Java code can run anywhere without modification.' }],
        },
        { id: 'l2', title: 'Variables & Data Types', slug: 'variables',
          content: `Java is a statically-typed language, meaning all variables must be declared with a type before use.`,
          codeExamples: [{ language: 'java', title: 'Data Types & Variables', code: `public class DataTypes {\n    public static void main(String[] args) {\n        // Primitive types\n        int age = 25;\n        double salary = 50000.50;\n        float pi = 3.14f;\n        char grade = 'A';\n        boolean isActive = true;\n        long bigNumber = 9999999999L;\n        \n        // Reference type\n        String name = "CodeAcademia";\n        \n        // Type casting\n        double d = age;  // Implicit (widening)\n        int i = (int) salary;  // Explicit (narrowing)\n        \n        System.out.println("Name: " + name);\n        System.out.println("Age: " + age);\n        System.out.println("Salary: " + salary);\n    }\n}`, output: 'Name: CodeAcademia\nAge: 25\nSalary: 50000.5' }],
          tips: ['Use `final` keyword for constants: `final double PI = 3.14159;`'],
        },
        { id: 'l3', title: 'OOP in Java', slug: 'oop',
          content: `Java is fundamentally an object-oriented language. Everything in Java is associated with classes and objects.`,
          codeExamples: [{ language: 'java', title: 'Classes & Inheritance', code: `// Base class\nclass Animal {\n    String name;\n    \n    Animal(String name) {\n        this.name = name;\n    }\n    \n    void speak() {\n        System.out.println(name + " makes a sound");\n    }\n}\n\n// Derived class\nclass Dog extends Animal {\n    Dog(String name) {\n        super(name);\n    }\n    \n    @Override\n    void speak() {\n        System.out.println(name + " says Woof!");\n    }\n}\n\n// Usage\npublic class Main {\n    public static void main(String[] args) {\n        Animal myDog = new Dog("Buddy");\n        myDog.speak();  // Polymorphism!\n    }\n}`, output: 'Buddy says Woof!' }],
          interviewQuestions: [{ question: 'What is the difference between abstract class and interface?', answer: 'An abstract class can have both abstract and concrete methods, instance variables, and constructors. An interface (pre-Java 8) can only have abstract methods. Since Java 8, interfaces can have default and static methods. A class can implement multiple interfaces but extend only one abstract class.' }],
        },
      ],
    }],
  },
  {
    id: 'java-collections', title: 'Java Collections Framework', slug: 'collections',
    category: 'Java', categorySlug: 'java',
    description: 'Master ArrayList, HashMap, LinkedList, Set, and other collection types.',
    difficulty: 'Intermediate', duration: '45 min', tags: ['java', 'collections', 'data-structures'],
    author: 'Sasidharan M', lastUpdated: '2025-12-10',
    chapters: [{
      id: 'ch1', title: 'Collections',
      lessons: [
        { id: 'l1', title: 'ArrayList & LinkedList', slug: 'lists',
          content: `The Collections Framework provides a unified architecture for representing and manipulating collections of objects.`,
          codeExamples: [{ language: 'java', title: 'Working with Lists', code: `import java.util.*;\n\npublic class ListExample {\n    public static void main(String[] args) {\n        // ArrayList\n        List<String> fruits = new ArrayList<>();\n        fruits.add("Apple");\n        fruits.add("Banana");\n        fruits.add("Cherry");\n        \n        // Enhanced for loop\n        for (String fruit : fruits) {\n            System.out.println(fruit);\n        }\n        \n        // Stream API (Java 8+)\n        fruits.stream()\n            .filter(f -> f.startsWith("B"))\n            .map(String::toUpperCase)\n            .forEach(System.out::println);\n    }\n}`, output: 'Apple\nBanana\nCherry\nBANANA' }],
        },
      ],
    }],
  },
  {
    id: 'java-spring', title: 'Java Spring Boot Introduction', slug: 'spring-boot',
    category: 'Java', categorySlug: 'java',
    description: 'Build production-ready REST APIs with Spring Boot framework.',
    difficulty: 'Advanced', duration: '60 min', tags: ['java', 'spring', 'rest-api'],
    author: 'Sasidharan M', lastUpdated: '2025-12-15',
    chapters: [{
      id: 'ch1', title: 'Spring Boot Basics',
      lessons: [
        { id: 'l1', title: 'Getting Started with Spring Boot', slug: 'getting-started',
          content: `Spring Boot is an extension of the Spring framework that simplifies the initial setup and development of Spring applications. It provides auto-configuration, embedded servers, and production-ready features.`,
          codeExamples: [{ language: 'java', title: 'Spring Boot REST Controller', code: `import org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.web.bind.annotation.*;\n\n@SpringBootApplication\npublic class Application {\n    public static void main(String[] args) {\n        SpringApplication.run(Application.class, args);\n    }\n}\n\n@RestController\n@RequestMapping("/api")\nclass HelloController {\n    \n    @GetMapping("/hello")\n    public String hello(@RequestParam(defaultValue = "World") String name) {\n        return "Hello, " + name + "!";\n    }\n    \n    @GetMapping("/users/{id}")\n    public Map<String, Object> getUser(@PathVariable Long id) {\n        return Map.of("id", id, "name", "John Doe");\n    }\n}`, output: '// GET /api/hello → "Hello, World!"\n// GET /api/hello?name=Alice → "Hello, Alice!"\n// GET /api/users/1 → {"id": 1, "name": "John Doe"}' }],
          tips: ['Use Spring Initializr (start.spring.io) to bootstrap new projects.'],
        },
      ],
    }],
  },
];
