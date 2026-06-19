// ============================================================
// CodeAcademia — SEO Utilities
// ============================================================

import { SITE_NAME, SITE_URL } from './constants';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
}

/**
 * Generates a full page title with site name suffix.
 */
export function getPageTitle(pageTitle: string): string {
  return `${pageTitle} | ${SITE_NAME}`;
}

/**
 * Generates canonical URL from a path.
 */
export function getCanonicalUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

/**
 * Generates structured data for a tutorial article.
 */
export function getTutorialStructuredData(tutorial: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: tutorial.title,
    description: tutorial.description,
    author: {
      '@type': 'Person',
      name: tutorial.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    datePublished: tutorial.datePublished,
    dateModified: tutorial.dateModified,
    mainEntityOfPage: tutorial.url,
  };
}
