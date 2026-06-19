// ============================================================
// CodeAcademia — Constants & Configuration
// ============================================================

export const SITE_NAME = 'CodeAcademia';
export const SITE_TAGLINE = 'Learn Programming, AI & Technology the Smart Way';
export const SITE_DESCRIPTION =
  'CodeAcademia is a modern educational platform offering 500+ tutorials across programming, web development, databases, AI & data science, and mobile development.';
export const SITE_URL = 'https://codeacademia.dev';
export const DEVELOPER_NAME = 'Sasidharan M';

export const COLORS = {
  primary: '#2563EB',
  secondary: '#0F172A',
  accent: '#14B8A6',
  background: '#FFFFFF',
  backgroundDark: '#0F172A',
} as const;

export const STATS = {
  tutorials: 500,
  categories: 25,
  learners: 50000,
  certificates: 10000,
} as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/codeacademia',
  twitter: 'https://twitter.com/codeacademia',
  linkedin: 'https://linkedin.com/company/codeacademia',
  youtube: 'https://youtube.com/@codeacademia',
  discord: 'https://discord.gg/codeacademia',
} as const;

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Tutorials', path: '/categories' },
  { label: 'Blog', path: '/blog' },
  { label: 'Dashboard', path: '/dashboard' },
] as const;

export const DIFFICULTY_LEVELS = ['Beginner', 'Intermediate', 'Advanced'] as const;

export type DifficultyLevel = (typeof DIFFICULTY_LEVELS)[number];
