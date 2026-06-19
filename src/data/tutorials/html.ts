import type { Tutorial } from './index';

export const htmlTutorials: Tutorial[] = [
  {
    id: 'html-basics', title: 'HTML Fundamentals', slug: 'fundamentals',
    category: 'HTML', categorySlug: 'html',
    description: 'Learn HTML from scratch — elements, attributes, forms, and semantic markup.',
    difficulty: 'Beginner', duration: '35 min', tags: ['html', 'beginner', 'web'],
    author: 'Sasidharan M', lastUpdated: '2025-12-01',
    chapters: [{
      id: 'ch1', title: 'HTML Basics',
      lessons: [
        { id: 'l1', title: 'Introduction to HTML', slug: 'introduction',
          content: `HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page using elements and tags.\n\nEvery website you visit is built with HTML as its foundation. HTML provides the structure, CSS provides the styling, and JavaScript provides the interactivity.`,
          codeExamples: [{ language: 'html', title: 'Basic HTML Document', code: `<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>My First Page</title>\n</head>\n<body>\n    <h1>Welcome to CodeAcademia</h1>\n    <p>This is my first web page!</p>\n    <a href="https://codeacademia.dev">Visit CodeAcademia</a>\n</body>\n</html>` }],
          tips: ['Always include the DOCTYPE declaration at the top.', 'Use semantic HTML elements for better accessibility and SEO.'],
        },
        { id: 'l2', title: 'HTML Elements & Attributes', slug: 'elements',
          content: `HTML elements are the building blocks of HTML pages. An element usually consists of a start tag, content, and an end tag.`,
          codeExamples: [{ language: 'html', title: 'Common HTML Elements', code: `<!-- Headings -->\n<h1>Main Heading</h1>\n<h2>Sub Heading</h2>\n<h3>Section Heading</h3>\n\n<!-- Paragraphs & Text -->\n<p>This is a paragraph with <strong>bold</strong> and <em>italic</em> text.</p>\n\n<!-- Links -->\n<a href="https://example.com" target="_blank" rel="noopener">External Link</a>\n\n<!-- Images -->\n<img src="photo.jpg" alt="Description of image" width="400">\n\n<!-- Lists -->\n<ul>\n    <li>Unordered item 1</li>\n    <li>Unordered item 2</li>\n</ul>\n\n<ol>\n    <li>Ordered item 1</li>\n    <li>Ordered item 2</li>\n</ol>` }],
        },
        { id: 'l3', title: 'HTML Forms', slug: 'forms',
          content: `HTML forms are used to collect user input. Forms contain form elements like text fields, checkboxes, radio buttons, and submit buttons.`,
          codeExamples: [{ language: 'html', title: 'HTML Form Example', code: `<form action="/submit" method="POST">\n    <div>\n        <label for="name">Full Name:</label>\n        <input type="text" id="name" name="name" required>\n    </div>\n    \n    <div>\n        <label for="email">Email:</label>\n        <input type="email" id="email" name="email" required>\n    </div>\n    \n    <div>\n        <label for="password">Password:</label>\n        <input type="password" id="password" name="password" minlength="8">\n    </div>\n    \n    <div>\n        <label>Gender:</label>\n        <input type="radio" name="gender" value="male" id="male">\n        <label for="male">Male</label>\n        <input type="radio" name="gender" value="female" id="female">\n        <label for="female">Female</label>\n    </div>\n    \n    <div>\n        <label for="course">Course:</label>\n        <select id="course" name="course">\n            <option value="">Select a course</option>\n            <option value="html">HTML</option>\n            <option value="css">CSS</option>\n            <option value="js">JavaScript</option>\n        </select>\n    </div>\n    \n    <button type="submit">Submit</button>\n</form>` }],
          tips: ['Always use labels with form inputs for accessibility.', 'Use appropriate input types (email, tel, url) for built-in validation.'],
        },
      ],
    }],
  },
  {
    id: 'html-semantic', title: 'Semantic HTML & Accessibility', slug: 'semantic-html',
    category: 'HTML', categorySlug: 'html',
    description: 'Write meaningful, accessible HTML with semantic elements.',
    difficulty: 'Beginner', duration: '30 min', tags: ['html', 'semantic', 'accessibility'],
    author: 'Sasidharan M', lastUpdated: '2025-12-08',
    chapters: [{
      id: 'ch1', title: 'Semantic Elements',
      lessons: [
        { id: 'l1', title: 'Semantic HTML5 Elements', slug: 'semantic-elements',
          content: `Semantic HTML elements clearly describe their meaning to both the browser and the developer. Using semantic elements improves accessibility, SEO, and code readability.`,
          codeExamples: [{ language: 'html', title: 'Semantic Page Structure', code: `<header>\n    <nav>\n        <ul>\n            <li><a href="/">Home</a></li>\n            <li><a href="/about">About</a></li>\n        </ul>\n    </nav>\n</header>\n\n<main>\n    <article>\n        <header>\n            <h1>Article Title</h1>\n            <time datetime="2025-01-15">January 15, 2025</time>\n        </header>\n        <section>\n            <h2>Section 1</h2>\n            <p>Content goes here...</p>\n            <figure>\n                <img src="chart.png" alt="Data visualization">\n                <figcaption>Figure 1: Monthly Growth</figcaption>\n            </figure>\n        </section>\n        <aside>\n            <h3>Related Articles</h3>\n            <ul>\n                <li><a href="#">Related Post 1</a></li>\n            </ul>\n        </aside>\n    </article>\n</main>\n\n<footer>\n    <p>&copy; 2025 CodeAcademia</p>\n</footer>` }],
          tips: ['Use <main> for the dominant content of the page.', 'Use <article> for self-contained content that could be syndicated.'],
        },
      ],
    }],
  },
];
