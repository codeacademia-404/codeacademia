import type { Tutorial } from './index';

export const cssTutorials: Tutorial[] = [
  {
    id: 'css-fundamentals', title: 'CSS Fundamentals', slug: 'fundamentals',
    category: 'CSS', categorySlug: 'css',
    description: 'Master CSS basics — selectors, box model, colors, typography, and layouts.',
    difficulty: 'Beginner', duration: '40 min', tags: ['css', 'beginner', 'web'],
    author: 'Sasidharan M', lastUpdated: '2025-12-01',
    chapters: [{
      id: 'ch1', title: 'CSS Basics',
      lessons: [
        { id: 'l1', title: 'Introduction to CSS', slug: 'introduction',
          content: `CSS (Cascading Style Sheets) is used to style and layout web pages. It controls the visual presentation of HTML elements.`,
          codeExamples: [{ language: 'css', title: 'CSS Selectors & Properties', code: `/* Element selector */\nh1 {\n  color: #2563EB;\n  font-size: 2.5rem;\n  font-weight: 700;\n}\n\n/* Class selector */\n.card {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  transition: transform 0.2s ease;\n}\n\n.card:hover {\n  transform: translateY(-4px);\n}\n\n/* ID selector */\n#hero {\n  background: linear-gradient(135deg, #2563EB, #14B8A6);\n  color: white;\n  padding: 4rem 2rem;\n}\n\n/* Pseudo-classes */\na:hover { color: #14B8A6; }\na:focus { outline: 2px solid #2563EB; }\n\n/* Media query */\n@media (max-width: 768px) {\n  .card { padding: 1rem; }\n}` }],
          tips: ['Use CSS custom properties (variables) for maintainable theming.', 'Always include hover and focus states for interactive elements.'],
        },
        { id: 'l2', title: 'CSS Box Model', slug: 'box-model',
          content: `Every HTML element is represented as a rectangular box. The CSS box model describes how these boxes are sized and spaced.`,
          codeExamples: [{ language: 'css', title: 'Box Model Properties', code: `/* The Box Model */\n.box {\n  /* Content */\n  width: 300px;\n  height: 200px;\n  \n  /* Padding - space inside the border */\n  padding: 20px;\n  \n  /* Border */\n  border: 2px solid #2563EB;\n  border-radius: 8px;\n  \n  /* Margin - space outside the border */\n  margin: 16px;\n  \n  /* Use border-box for intuitive sizing */\n  box-sizing: border-box;\n}\n\n/* Shorthand: top right bottom left */\n.spaced {\n  padding: 10px 20px 10px 20px;\n  margin: 0 auto; /* Center horizontally */\n}` }],
        },
      ],
    }],
  },
  {
    id: 'css-flexbox-grid', title: 'CSS Flexbox & Grid', slug: 'flexbox-grid',
    category: 'CSS', categorySlug: 'css',
    description: 'Master modern CSS layouts with Flexbox and CSS Grid.',
    difficulty: 'Intermediate', duration: '45 min', tags: ['css', 'flexbox', 'grid', 'layout'],
    author: 'Sasidharan M', lastUpdated: '2025-12-10',
    chapters: [{
      id: 'ch1', title: 'Flexbox',
      lessons: [
        { id: 'l1', title: 'Flexbox Layout', slug: 'flexbox',
          content: `Flexbox is a one-dimensional layout method for arranging items in rows or columns.`,
          codeExamples: [{ language: 'css', title: 'Flexbox Examples', code: `/* Flex container */\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  gap: 1rem;\n}\n\n/* Center anything */\n.centered {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n}\n\n/* Responsive card grid with flexbox */\n.card-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.5rem;\n}\n\n.card-list .card {\n  flex: 1 1 300px; /* grow, shrink, basis */\n  max-width: 400px;\n}` }],
        },
        { id: 'l2', title: 'CSS Grid Layout', slug: 'grid',
          content: `CSS Grid is a two-dimensional layout system that handles both columns and rows simultaneously.`,
          codeExamples: [{ language: 'css', title: 'CSS Grid Examples', code: `/* Basic grid */\n.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  padding: 2rem;\n}\n\n/* Responsive grid - auto-fit */\n.auto-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 2rem;\n}\n\n/* Full page layout */\n.page-layout {\n  display: grid;\n  grid-template-columns: 250px 1fr 200px;\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas:\n    "header header header"\n    "sidebar main aside"\n    "footer footer footer";\n  min-height: 100vh;\n}\n\n.header { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.main { grid-area: main; }\n.aside { grid-area: aside; }\n.footer { grid-area: footer; }\n\n@media (max-width: 768px) {\n  .page-layout {\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      "header"\n      "main"\n      "sidebar"\n      "aside"\n      "footer";\n  }\n}` }],
          tips: ['Use Flexbox for one-dimensional layouts (row OR column).', 'Use Grid for two-dimensional layouts (rows AND columns).'],
        },
      ],
    }],
  },
];
