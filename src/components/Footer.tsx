import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Send,
  Heart,
  Globe
} from 'lucide-react';
import { SOCIAL_LINKS, SITE_TAGLINE } from '../utils/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter! (Mocked)');
  };

  return (
    <footer className="w-full border-t border-border bg-surface-dim pt-16 pb-8 transition-colors duration-300 dark:bg-surface-dim dark:border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Logo & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-primary to-accent text-white shadow shadow-primary/20">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent dark:from-white dark:to-accent-light">
                CodeAcademia
              </span>
            </Link>
            <p className="max-w-xs text-sm text-text-muted">
              {SITE_TAGLINE}. Empowering learners globally with interactive, hands-on tutorials.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface hover:bg-primary hover:text-white dark:bg-surface/5 dark:border-border/40 dark:hover:bg-accent dark:hover:text-white text-text-muted transition-all"
                aria-label="GitHub"
              >
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface hover:bg-primary hover:text-white dark:bg-surface/5 dark:border-border/40 dark:hover:bg-accent dark:hover:text-white text-text-muted transition-all"
                aria-label="Twitter"
              >
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface hover:bg-primary hover:text-white dark:bg-surface/5 dark:border-border/40 dark:hover:bg-accent dark:hover:text-white text-text-muted transition-all"
                aria-label="LinkedIn"
              >
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface hover:bg-primary hover:text-white dark:bg-surface/5 dark:border-border/40 dark:hover:bg-accent dark:hover:text-white text-text-muted transition-all"
                aria-label="YouTube"
              >
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.507 9.388.507 9.388.507s7.517 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Group 1 */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-light dark:text-text-muted">
              Learn
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/categories" className="text-text-muted hover:text-primary dark:hover:text-accent-light transition-colors">
                  Python Basics
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-text-muted hover:text-primary dark:hover:text-accent-light transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-text-muted hover:text-primary dark:hover:text-accent-light transition-colors">
                  Machine Learning
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-text-muted hover:text-primary dark:hover:text-accent-light transition-colors">
                  Databases (NoSQL)
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Group 2 */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-light dark:text-text-muted">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/blog" className="text-text-muted hover:text-primary dark:hover:text-accent-light transition-colors">
                  Blog Articles
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-text-muted hover:text-primary dark:hover:text-accent-light transition-colors">
                  Learning Roadmaps
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-text-muted hover:text-primary dark:hover:text-accent-light transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/dashboard?tab=bookmarks" className="text-text-muted hover:text-primary dark:hover:text-accent-light transition-colors">
                  Bookmarks
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Input Box */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-light dark:text-text-muted">
              Newsletter
            </h3>
            <p className="text-xs text-text-muted">
              Get the latest tutorial releases and coding challenges delivered directly to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                type="email"
                required
                placeholder="Enter email"
                className="h-10 w-full rounded-lg border border-border bg-surface pl-3 pr-10 text-xs outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:bg-surface/5 dark:border-border/40 dark:focus:border-accent-light dark:focus:ring-accent-light dark:text-white"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 flex h-7 w-7 items-center justify-center rounded bg-primary hover:bg-primary-dark text-white shadow shadow-primary/20 dark:bg-accent dark:hover:bg-accent-dark transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Credits Area */}
        <div className="mt-12 border-t border-border pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between dark:border-border/45">
          <p className="text-xs text-text-muted">
            &copy; {currentYear} CodeAcademia. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-text-muted">
            <span>Made with</span>
            <Heart className="h-3.5 w-3.5 text-danger animate-pulse" />
            <span>by</span>
            <span className="font-semibold text-text dark:text-white">Sasidharan M</span>
            <span className="mx-1.5 text-text-light">|</span>
            <Globe className="h-3.5 w-3.5" />
            <span>India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
