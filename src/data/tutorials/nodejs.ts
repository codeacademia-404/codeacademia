import type { Tutorial } from './index';

export const nodejsTutorials: Tutorial[] = [
  {
    id: 'nodejs-basics', title: 'Node.js Getting Started', slug: 'getting-started',
    category: 'Node.js', categorySlug: 'nodejs',
    description: 'Learn server-side JavaScript with Node.js — modules, file system, and HTTP servers.',
    difficulty: 'Intermediate', duration: '45 min', tags: ['nodejs', 'javascript', 'backend'],
    author: 'Sasidharan M', lastUpdated: '2025-12-01',
    chapters: [{
      id: 'ch1', title: 'Node.js Basics',
      lessons: [
        { id: 'l1', title: 'Introduction to Node.js', slug: 'introduction',
          content: `Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows you to run JavaScript on the server side, enabling full-stack JavaScript development.`,
          codeExamples: [{ language: 'javascript', title: 'Node.js HTTP Server', code: `const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({\n    message: 'Hello from Node.js!',\n    path: req.url,\n    method: req.method,\n    timestamp: new Date().toISOString()\n  }));\n});\n\nconst PORT = 3000;\nserver.listen(PORT, () => {\n  console.log(\`Server running at http://localhost:\${PORT}\`);\n});`, output: 'Server running at http://localhost:3000' }],
          tips: ['Use `nodemon` for automatic server restarts during development.', 'Prefer ES modules (`import/export`) over CommonJS (`require/module.exports`) in new projects.'],
        },
        { id: 'l2', title: 'Express.js Framework', slug: 'expressjs',
          content: `Express is the most popular Node.js web application framework. It provides a robust set of features for web and mobile applications.`,
          codeExamples: [{ language: 'javascript', title: 'Express REST API', code: `import express from 'express';\n\nconst app = express();\napp.use(express.json());\n\nlet todos = [\n  { id: 1, title: 'Learn Node.js', done: false },\n  { id: 2, title: 'Build REST API', done: false },\n];\n\n// GET all todos\napp.get('/api/todos', (req, res) => {\n  res.json(todos);\n});\n\n// GET single todo\napp.get('/api/todos/:id', (req, res) => {\n  const todo = todos.find(t => t.id === parseInt(req.params.id));\n  if (!todo) return res.status(404).json({ error: 'Not found' });\n  res.json(todo);\n});\n\n// POST new todo\napp.post('/api/todos', (req, res) => {\n  const todo = {\n    id: todos.length + 1,\n    title: req.body.title,\n    done: false\n  };\n  todos.push(todo);\n  res.status(201).json(todo);\n});\n\napp.listen(3000, () => console.log('API running on port 3000'));` }],
        },
      ],
    }],
  },
  {
    id: 'nodejs-mongodb', title: 'Node.js with MongoDB', slug: 'mongodb-integration',
    category: 'Node.js', categorySlug: 'nodejs',
    description: 'Connect Node.js with MongoDB using Mongoose ODM.',
    difficulty: 'Intermediate', duration: '40 min', tags: ['nodejs', 'mongodb', 'database'],
    author: 'Sasidharan M', lastUpdated: '2025-12-10',
    chapters: [{
      id: 'ch1', title: 'MongoDB Integration',
      lessons: [
        { id: 'l1', title: 'Mongoose Setup', slug: 'mongoose',
          content: `Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js. It provides schema validation, type casting, and query building.`,
          codeExamples: [{ language: 'javascript', title: 'Mongoose Schema & Model', code: `import mongoose from 'mongoose';\n\n// Connect to MongoDB\nawait mongoose.connect('mongodb://localhost:27017/codeacademia');\n\n// Define schema\nconst userSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  email: { type: String, required: true, unique: true },\n  age: { type: Number, min: 0 },\n  role: { type: String, enum: ['user', 'admin'], default: 'user' },\n  createdAt: { type: Date, default: Date.now }\n});\n\n// Create model\nconst User = mongoose.model('User', userSchema);\n\n// CRUD operations\nconst user = await User.create({ name: 'Alice', email: 'alice@example.com', age: 25 });\nconst users = await User.find({ age: { $gte: 18 } }).sort({ name: 1 });\nconst updated = await User.findByIdAndUpdate(user._id, { age: 26 }, { new: true });\nawait User.findByIdAndDelete(user._id);\n\nconsole.log(users);` }],
        },
      ],
    }],
  },
];
