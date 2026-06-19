import type { Tutorial } from './index';

export const reactTutorials: Tutorial[] = [
  {
    id: 'react-fundamentals', title: 'React Fundamentals', slug: 'fundamentals',
    category: 'React', categorySlug: 'react',
    description: 'Learn the core concepts of React — components, JSX, props, and state.',
    difficulty: 'Intermediate', duration: '50 min', tags: ['react', 'javascript', 'frontend'],
    author: 'Sasidharan M', lastUpdated: '2025-12-01',
    chapters: [{
      id: 'ch1', title: 'Core Concepts',
      lessons: [
        { id: 'l1', title: 'What is React?', slug: 'introduction',
          content: `React is a JavaScript library for building user interfaces, created by Facebook. It uses a component-based architecture and a virtual DOM for efficient rendering.\n\nKey features:\n- **Component-Based** — Build encapsulated components that manage their own state\n- **Declarative** — Design simple views for each state in your application\n- **Virtual DOM** — Efficiently updates and renders only changed components\n- **One-Way Data Flow** — Predictable data flow from parent to child`,
          codeExamples: [{ language: 'tsx', title: 'Your First React Component', code: `import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div className="counter">\n      <h1>Count: {count}</h1>\n      <button onClick={() => setCount(count + 1)}>\n        Increment\n      </button>\n      <button onClick={() => setCount(0)}>\n        Reset\n      </button>\n    </div>\n  );\n}\n\nexport default Counter;` }],
          tips: ['React components must return a single root element (use fragments <> </> to avoid extra divs).', 'State updates are asynchronous — don\'t rely on the current state right after setState.'],
          interviewQuestions: [{ question: 'What is the Virtual DOM?', answer: 'The Virtual DOM is a lightweight JavaScript representation of the real DOM. When state changes, React creates a new virtual DOM tree, compares it with the previous one (diffing), and only updates the changed parts in the real DOM (reconciliation). This makes updates efficient.' }],
        },
        { id: 'l2', title: 'Props & State', slug: 'props-state',
          content: `Props and State are the two main ways to manage data in React components. Props are passed from parent to child (read-only), while State is managed within the component.`,
          codeExamples: [{ language: 'tsx', title: 'Props & State Example', code: `interface UserCardProps {\n  name: string;\n  role: string;\n  avatar?: string;\n}\n\n// Component receiving props\nfunction UserCard({ name, role, avatar }: UserCardProps) {\n  const [isFollowing, setIsFollowing] = useState(false);\n\n  return (\n    <div className="user-card">\n      <img src={avatar || "/default-avatar.png"} alt={name} />\n      <h3>{name}</h3>\n      <p>{role}</p>\n      <button onClick={() => setIsFollowing(!isFollowing)}>\n        {isFollowing ? "Unfollow" : "Follow"}\n      </button>\n    </div>\n  );\n}\n\n// Parent component\nfunction App() {\n  return (\n    <div>\n      <UserCard name="Alice" role="Developer" />\n      <UserCard name="Bob" role="Designer" />\n    </div>\n  );\n}` }],
        },
        { id: 'l3', title: 'React Hooks', slug: 'hooks',
          content: `Hooks let you use state and other React features in function components. The most common hooks are useState, useEffect, useContext, and useRef.`,
          codeExamples: [{ language: 'tsx', title: 'Common React Hooks', code: `import { useState, useEffect, useRef, useMemo } from 'react';\n\nfunction SearchComponent() {\n  const [query, setQuery] = useState("");\n  const [results, setResults] = useState<string[]>([]);\n  const inputRef = useRef<HTMLInputElement>(null);\n\n  // useEffect - side effects\n  useEffect(() => {\n    if (query.length > 2) {\n      // Simulate API call\n      const filtered = ["React", "Redux", "Router"]\n        .filter(item => item.toLowerCase().includes(query.toLowerCase()));\n      setResults(filtered);\n    } else {\n      setResults([]);\n    }\n  }, [query]); // Runs when query changes\n\n  // useMemo - expensive computation\n  const resultCount = useMemo(() => results.length, [results]);\n\n  // Focus input on mount\n  useEffect(() => {\n    inputRef.current?.focus();\n  }, []);\n\n  return (\n    <div>\n      <input\n        ref={inputRef}\n        value={query}\n        onChange={(e) => setQuery(e.target.value)}\n        placeholder="Search..."\n      />\n      <p>{resultCount} results found</p>\n      <ul>\n        {results.map(r => <li key={r}>{r}</li>)}\n      </ul>\n    </div>\n  );\n}` }],
          tips: ['Don\'t call hooks inside loops, conditions, or nested functions.', 'Always include all dependencies in the useEffect dependency array.'],
        },
      ],
    }],
  },
  {
    id: 'react-routing', title: 'React Router & Navigation', slug: 'routing',
    category: 'React', categorySlug: 'react',
    description: 'Implement client-side routing with React Router v6.',
    difficulty: 'Intermediate', duration: '35 min', tags: ['react', 'routing', 'spa'],
    author: 'Sasidharan M', lastUpdated: '2025-12-10',
    chapters: [{
      id: 'ch1', title: 'React Router',
      lessons: [
        { id: 'l1', title: 'Setting Up Routes', slug: 'setup',
          content: `React Router is the standard routing library for React applications. It enables navigation between different components/pages without full page reloads.`,
          codeExamples: [{ language: 'tsx', title: 'React Router Setup', code: `import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <nav>\n        <Link to="/">Home</Link>\n        <Link to="/about">About</Link>\n        <Link to="/users">Users</Link>\n      </nav>\n\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/about" element={<About />} />\n        <Route path="/users/:id" element={<UserDetail />} />\n        <Route path="*" element={<NotFound />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}\n\nfunction UserDetail() {\n  const { id } = useParams();\n  return <h1>User ID: {id}</h1>;\n}` }],
        },
      ],
    }],
  },
  {
    id: 'react-state-management', title: 'State Management in React', slug: 'state-management',
    category: 'React', categorySlug: 'react',
    description: 'Context API, useReducer, and state management patterns.',
    difficulty: 'Advanced', duration: '55 min', tags: ['react', 'state', 'context'],
    author: 'Sasidharan M', lastUpdated: '2025-12-18',
    chapters: [{
      id: 'ch1', title: 'State Patterns',
      lessons: [
        { id: 'l1', title: 'Context API', slug: 'context',
          content: `The Context API provides a way to pass data through the component tree without having to pass props down manually at every level.`,
          codeExamples: [{ language: 'tsx', title: 'Theme Context Example', code: `import { createContext, useContext, useState, ReactNode } from 'react';\n\ntype Theme = 'light' | 'dark';\n\ninterface ThemeContextType {\n  theme: Theme;\n  toggle: () => void;\n}\n\nconst ThemeContext = createContext<ThemeContextType | null>(null);\n\nexport function ThemeProvider({ children }: { children: ReactNode }) {\n  const [theme, setTheme] = useState<Theme>('light');\n  const toggle = () => setTheme(t => t === 'light' ? 'dark' : 'light');\n  \n  return (\n    <ThemeContext.Provider value={{ theme, toggle }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n\nexport function useTheme() {\n  const ctx = useContext(ThemeContext);\n  if (!ctx) throw new Error('useTheme must be inside ThemeProvider');\n  return ctx;\n}\n\n// Usage\nfunction Header() {\n  const { theme, toggle } = useTheme();\n  return (\n    <header className={theme}>\n      <button onClick={toggle}>Toggle Theme</button>\n    </header>\n  );\n}` }],
          tips: ['Context is not a replacement for all state management — use it for global state like theme, auth, locale.'],
        },
      ],
    }],
  },
];
