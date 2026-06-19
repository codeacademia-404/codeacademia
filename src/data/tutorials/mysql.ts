import type { Tutorial } from './index';

export const mysqlTutorials: Tutorial[] = [
  {
    id: 'mysql-basics', title: 'MySQL Fundamentals', slug: 'fundamentals',
    category: 'MySQL', categorySlug: 'mysql',
    description: 'Learn SQL queries, database design, joins, and data manipulation with MySQL.',
    difficulty: 'Beginner', duration: '45 min', tags: ['mysql', 'sql', 'database'],
    author: 'Sasidharan M', lastUpdated: '2025-12-01',
    chapters: [{
      id: 'ch1', title: 'SQL Basics',
      lessons: [
        { id: 'l1', title: 'Introduction to SQL', slug: 'introduction',
          content: `SQL (Structured Query Language) is the standard language for managing relational databases. MySQL is the world's most popular open-source relational database management system.`,
          codeExamples: [{ language: 'sql', title: 'Basic SQL Queries', code: `-- Create database\nCREATE DATABASE codeacademia;\nUSE codeacademia;\n\n-- Create table\nCREATE TABLE students (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    name VARCHAR(100) NOT NULL,\n    email VARCHAR(150) UNIQUE,\n    age INT CHECK (age >= 0),\n    course VARCHAR(50),\n    enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\n-- Insert data\nINSERT INTO students (name, email, age, course) VALUES\n    ('Alice', 'alice@email.com', 22, 'Python'),\n    ('Bob', 'bob@email.com', 25, 'JavaScript'),\n    ('Charlie', 'charlie@email.com', 20, 'Java');\n\n-- Select queries\nSELECT * FROM students;\nSELECT name, course FROM students WHERE age >= 21;\nSELECT course, COUNT(*) as total FROM students GROUP BY course;\n\n-- Update\nUPDATE students SET age = 23 WHERE name = 'Alice';\n\n-- Delete\nDELETE FROM students WHERE id = 3;` }],
          tips: ['Always use parameterized queries to prevent SQL injection.', 'Use meaningful column names and proper data types.'],
        },
        { id: 'l2', title: 'Joins & Relationships', slug: 'joins',
          content: `SQL Joins are used to combine rows from two or more tables based on a related column.`,
          codeExamples: [{ language: 'sql', title: 'SQL Joins', code: `-- Tables\nCREATE TABLE courses (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    title VARCHAR(100),\n    instructor VARCHAR(100)\n);\n\nCREATE TABLE enrollments (\n    student_id INT,\n    course_id INT,\n    grade CHAR(1),\n    FOREIGN KEY (student_id) REFERENCES students(id),\n    FOREIGN KEY (course_id) REFERENCES courses(id)\n);\n\n-- INNER JOIN\nSELECT s.name, c.title, e.grade\nFROM students s\nINNER JOIN enrollments e ON s.id = e.student_id\nINNER JOIN courses c ON c.id = e.course_id;\n\n-- LEFT JOIN (includes students without enrollments)\nSELECT s.name, c.title\nFROM students s\nLEFT JOIN enrollments e ON s.id = e.student_id\nLEFT JOIN courses c ON c.id = e.course_id;\n\n-- Subquery\nSELECT name FROM students\nWHERE id IN (\n    SELECT student_id FROM enrollments WHERE grade = 'A'\n);` }],
          interviewQuestions: [{ question: 'What is the difference between INNER JOIN and LEFT JOIN?', answer: 'INNER JOIN returns only rows with matching values in both tables. LEFT JOIN returns all rows from the left table plus matching rows from the right table (NULL if no match).' }],
        },
      ],
    }],
  },
];

export const mongodbTutorials: Tutorial[] = [
  {
    id: 'mongodb-basics', title: 'MongoDB Fundamentals', slug: 'fundamentals',
    category: 'MongoDB', categorySlug: 'mongodb',
    description: 'Learn NoSQL database concepts, CRUD operations, and aggregation with MongoDB.',
    difficulty: 'Intermediate', duration: '40 min', tags: ['mongodb', 'nosql', 'database'],
    author: 'Sasidharan M', lastUpdated: '2025-12-01',
    chapters: [{
      id: 'ch1', title: 'MongoDB Basics',
      lessons: [
        { id: 'l1', title: 'Introduction to MongoDB', slug: 'introduction',
          content: `MongoDB is a document-oriented NoSQL database. Instead of storing data in tables and rows like SQL databases, MongoDB stores data as flexible JSON-like documents (BSON).`,
          codeExamples: [{ language: 'javascript', title: 'MongoDB CRUD Operations', code: `// Connect to MongoDB\nuse codeacademia;\n\n// Insert documents\ndb.students.insertMany([\n  { name: "Alice", age: 22, courses: ["Python", "ML"], gpa: 3.8 },\n  { name: "Bob", age: 25, courses: ["JavaScript", "React"], gpa: 3.5 },\n  { name: "Charlie", age: 20, courses: ["Java", "Spring"], gpa: 3.9 }\n]);\n\n// Find documents\ndb.students.find({ age: { $gte: 21 } });\ndb.students.find({ courses: "Python" });\ndb.students.findOne({ name: "Alice" });\n\n// Update\ndb.students.updateOne(\n  { name: "Alice" },\n  { $set: { age: 23 }, $push: { courses: "Django" } }\n);\n\n// Delete\ndb.students.deleteOne({ name: "Charlie" });\n\n// Aggregation pipeline\ndb.students.aggregate([\n  { $match: { age: { $gte: 21 } } },\n  { $group: { _id: null, avgGpa: { $avg: "$gpa" } } }\n]);` }],
          tips: ['MongoDB is schema-less but you should still design your document structure carefully.', 'Use indexes on fields you frequently query for better performance.'],
        },
      ],
    }],
  },
];
