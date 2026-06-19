import { useState, useMemo, useCallback } from 'react';
import { categories } from '../data/categories';
import { getAllTutorials, type Tutorial } from '../data/tutorials';

export interface SearchResult {
  type: 'tutorial' | 'category';
  title: string;
  description: string;
  url: string;
  category?: string;
}

export function useSearch() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const allTutorials = useMemo(() => getAllTutorials(), []);

  const results = useMemo<SearchResult[]>(() => {
    if (query.length < 2) return [];
    const q = query.toLowerCase();

    const tutorialResults: SearchResult[] = allTutorials
      .filter(
        (t: Tutorial) =>
          t.title.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q)
      )
      .slice(0, 8)
      .map((t: Tutorial) => ({
        type: 'tutorial' as const,
        title: t.title,
        description: t.description,
        url: `/tutorial/${t.categorySlug}/${t.slug}`,
        category: t.category,
      }));

    const categoryResults: SearchResult[] = categories
      .filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q)
      )
      .slice(0, 4)
      .map((c) => ({
        type: 'category' as const,
        title: c.name,
        description: c.description,
        url: `/category/${c.slug}`,
      }));

    return [...categoryResults, ...tutorialResults];
  }, [query, allTutorials]);

  const clearSearch = useCallback(() => {
    setQuery('');
    setIsOpen(false);
  }, []);

  return {
    query,
    setQuery,
    results,
    isOpen,
    setIsOpen,
    clearSearch,
  };
}
