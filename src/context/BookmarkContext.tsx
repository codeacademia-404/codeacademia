// ============================================================
// CodeAcademia — Bookmark Context
// ============================================================

import { createContext, useCallback, useState, type ReactNode } from 'react';

interface BookmarkContextValue {
  bookmarks: string[];
  isBookmarked: (tutorialId: string) => boolean;
  toggleBookmark: (tutorialId: string) => void;
  clearBookmarks: () => void;
}

export const BookmarkContext = createContext<BookmarkContextValue>({
  bookmarks: [],
  isBookmarked: () => false,
  toggleBookmark: () => {},
  clearBookmarks: () => {},
});

const STORAGE_KEY = 'codeacademia-bookmarks';

function getStoredBookmarks(): string[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function BookmarkProvider({ children }: { children: ReactNode }) {
  const [bookmarks, setBookmarks] = useState<string[]>(getStoredBookmarks);

  const isBookmarked = useCallback(
    (tutorialId: string) => bookmarks.includes(tutorialId),
    [bookmarks]
  );

  const toggleBookmark = useCallback((tutorialId: string) => {
    setBookmarks((prev) => {
      const next = prev.includes(tutorialId)
        ? prev.filter((id) => id !== tutorialId)
        : [...prev, tutorialId];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const clearBookmarks = useCallback(() => {
    setBookmarks([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return (
    <BookmarkContext.Provider value={{ bookmarks, isBookmarked, toggleBookmark, clearBookmarks }}>
      {children}
    </BookmarkContext.Provider>
  );
}
