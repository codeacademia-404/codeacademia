import { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';
import { useSearch } from '../hooks/useSearch';
import {
  GraduationCap,
  Search,
  Sun,
  Moon,
  User,
  Menu,
  X,
  LogOut,
  ChevronDown,
  BookOpen,
  LayoutDashboard,
  Bookmark,
  Lock,
  Mail,
  ShieldCheck
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export function Header() {
  const { user, isAuthenticated, login, register, logout } = useAuth();
  const { toggleTheme, isDark } = useTheme();
  const { query, setQuery, results, isOpen, setIsOpen, clearSearch } = useSearch();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  
  // Auth Form State
  const [authName, setAuthName] = useState('');
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsOpen]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isAuthModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isAuthModalOpen]);

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setIsLoading(true);

    try {
      if (authMode === 'login') {
        const success = await login(authEmail, authPassword);
        if (success) {
          setIsAuthModalOpen(false);
          resetAuthForm();
        } else {
          setAuthError('Invalid email or password.');
        }
      } else {
        if (!authName) {
          setAuthError('Name is required.');
          setIsLoading(false);
          return;
        }
        const success = await register(authName, authEmail, authPassword);
        if (success) {
          setIsAuthModalOpen(false);
          resetAuthForm();
        } else {
          setAuthError('Registration failed. Try another email.');
        }
      }
    } catch {
      setAuthError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetAuthForm = () => {
    setAuthName('');
    setAuthEmail('');
    setAuthPassword('');
    setAuthError('');
  };

  const handleLogout = () => {
    logout();
    setIsProfileDropdownOpen(false);
    navigate('/');
  };

  const handleSearchSelect = (url: string) => {
    clearSearch();
    navigate(url);
  };

  const activeLinkStyle = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition-colors relative py-1 ${
      isActive
        ? 'text-primary dark:text-accent-light'
        : 'text-text-muted hover:text-text dark:hover:text-white'
    }`;

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border/80 glass transition-all duration-300">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-accent text-white shadow-md shadow-primary/20 transition-transform group-hover:scale-105 duration-300">
              <GraduationCap className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent dark:from-white dark:to-accent-light">
              CodeAcademia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={activeLinkStyle}>
              Home
            </NavLink>
            <NavLink to="/categories" className={activeLinkStyle}>
              Tutorials
            </NavLink>
            <NavLink to="/blog" className={activeLinkStyle}>
              Blog
            </NavLink>
            <NavLink to="/dashboard" className={activeLinkStyle}>
              Dashboard
            </NavLink>
          </nav>

          {/* Header Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search Input Box */}
            <div className="relative" ref={searchRef}>
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-text-light dark:text-text-muted" />
                <input
                  type="text"
                  placeholder="Search tutorials..."
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setIsOpen(true);
                  }}
                  onFocus={() => setIsOpen(true)}
                  className="h-9 w-60 rounded-full border border-border bg-surface-dim pl-9 pr-4 text-sm outline-none transition-all focus:w-72 focus:border-primary focus:bg-surface focus:ring-1 focus:ring-primary dark:border-border dark:bg-surface-dim dark:text-white dark:focus:border-accent-light dark:focus:ring-accent-light"
                />
              </div>

              {/* Search Dropdown Panel */}
              <AnimatePresence>
                {isOpen && query.length >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-96 rounded-xl border border-border bg-surface shadow-xl ring-1 ring-black/5 dark:bg-surface-dim dark:border-border/60 overflow-hidden"
                  >
                    <div className="max-h-[400px] overflow-y-auto p-2">
                      {results.length > 0 ? (
                        <div className="space-y-3">
                          {results.filter((r) => r.type === 'category').length > 0 && (
                            <div>
                              <h3 className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-text-light dark:text-text-muted">
                                Topics & Categories
                              </h3>
                              <div className="mt-1 space-y-1">
                                {results
                                  .filter((r) => r.type === 'category')
                                  .map((result, idx) => (
                                    <button
                                      key={`cat-${idx}`}
                                      onClick={() => handleSearchSelect(result.url)}
                                      className="flex w-full items-start gap-3 rounded-lg px-3 py-2 text-left hover:bg-surface-hover dark:hover:bg-surface/10 transition-colors"
                                    >
                                      <BookOpen className="h-4.5 w-4.5 mt-0.5 text-accent" />
                                      <div>
                                        <div className="text-sm font-medium text-text dark:text-white">
                                          {result.title}
                                        </div>
                                        <p className="line-clamp-1 text-xs text-text-muted">
                                          {result.description}
                                        </p>
                                      </div>
                                    </button>
                                  ))}
                              </div>
                            </div>
                          )}

                          {results.filter((r) => r.type === 'tutorial').length > 0 && (
                            <div>
                              <h3 className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-text-light dark:text-text-muted">
                                Lessons & Tutorials
                              </h3>
                              <div className="mt-1 space-y-1">
                                {results
                                  .filter((r) => r.type === 'tutorial')
                                  .map((result, idx) => (
                                    <button
                                      key={`tut-${idx}`}
                                      onClick={() => handleSearchSelect(result.url)}
                                      className="flex w-full items-start gap-3 rounded-lg px-3 py-2 text-left hover:bg-surface-hover dark:hover:bg-surface/10 transition-colors"
                                    >
                                      <GraduationCap className="h-4.5 w-4.5 mt-0.5 text-primary dark:text-accent-light" />
                                      <div>
                                        <div className="text-sm font-medium text-text dark:text-white">
                                          {result.title}
                                        </div>
                                        <p className="line-clamp-1 text-xs text-text-muted">
                                          {result.description}
                                        </p>
                                      </div>
                                    </button>
                                  ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="py-6 text-center text-sm text-text-muted">
                          No results found for <span className="font-semibold text-text dark:text-white">"{query}"</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dark Mode Switcher */}
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-dim hover:bg-surface-hover dark:border-border dark:bg-surface-dim dark:hover:bg-surface/10 text-text dark:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Authentication Action */}
            {isAuthenticated ? (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="flex items-center gap-2 rounded-full border border-border bg-surface-dim pl-2 pr-3 py-1 hover:bg-surface-hover dark:border-border dark:bg-surface-dim dark:hover:bg-surface/10 transition-colors cursor-pointer"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-accent text-white font-semibold text-sm">
                    {user?.name.slice(0, 1).toUpperCase()}
                  </div>
                  <span className="max-w-[80px] truncate text-sm font-medium text-text dark:text-white">
                    {user?.name}
                  </span>
                  <ChevronDown className="h-4 w-4 text-text-light" />
                </button>

                {/* Profile Dropdown Panel */}
                <AnimatePresence>
                  {isProfileDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-56 rounded-xl border border-border bg-surface py-1 shadow-xl dark:bg-surface-dim dark:border-border/60"
                    >
                      <div className="border-b border-border/80 px-4 py-2.5 dark:border-border/40">
                        <p className="text-xs text-text-muted">Signed in as</p>
                        <p className="truncate text-sm font-semibold text-text dark:text-white">
                          {user?.email}
                        </p>
                      </div>
                      <div className="p-1">
                        <Link
                          to="/dashboard"
                          onClick={() => setIsProfileDropdownOpen(false)}
                          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-text hover:bg-surface-hover dark:text-white dark:hover:bg-surface/10"
                        >
                          <LayoutDashboard className="h-4 w-4 text-primary dark:text-accent-light" />
                          Dashboard
                        </Link>
                        <Link
                          to="/dashboard?tab=bookmarks"
                          onClick={() => setIsProfileDropdownOpen(false)}
                          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-text hover:bg-surface-hover dark:text-white dark:hover:bg-surface/10"
                        >
                          <Bookmark className="h-4 w-4 text-primary dark:text-accent-light" />
                          Bookmarked Lessons
                        </Link>
                      </div>
                      <div className="border-t border-border/80 p-1 dark:border-border/40">
                        <button
                          onClick={handleLogout}
                          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-danger hover:bg-danger/10 dark:hover:bg-danger/20 transition-colors"
                        >
                          <LogOut className="h-4 w-4" />
                          Log Out
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                onClick={() => {
                  setAuthMode('login');
                  setIsAuthModalOpen(true);
                }}
                className="flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-md shadow-primary/20 hover:bg-primary-dark transition-all hover:scale-[1.02] cursor-pointer"
              >
                <User className="h-4 w-4" />
                Sign In
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-dim hover:bg-surface-hover dark:border-border dark:bg-surface-dim dark:hover:bg-surface/10 text-text dark:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-dim hover:bg-surface-hover dark:border-border dark:bg-surface-dim dark:hover:bg-surface/10 text-text dark:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-t border-border bg-surface dark:bg-surface-dim overflow-hidden shadow-lg"
            >
              <div className="space-y-1 px-4 py-4">
                {/* Mobile Search Box */}
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-text-light" />
                  <input
                    type="text"
                    placeholder="Search tutorials..."
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setIsOpen(true);
                    }}
                    className="h-9 w-full rounded-full border border-border bg-surface-dim pl-9 pr-4 text-sm outline-none dark:border-border dark:bg-surface-hover text-text dark:text-white"
                  />
                  {/* Results preview inline */}
                  {query.length >= 2 && results.length > 0 && (
                    <div className="mt-2 max-h-48 overflow-y-auto rounded-lg border border-border bg-surface p-1 shadow-inner dark:bg-surface-dim">
                      {results.slice(0, 5).map((r, i) => (
                        <button
                          key={`mob-r-${i}`}
                          onClick={() => {
                            handleSearchSelect(r.url);
                            setIsMobileMenuOpen(false);
                          }}
                          className="flex w-full items-center gap-2 rounded px-3 py-1.5 text-left text-xs text-text hover:bg-surface-hover dark:text-white dark:hover:bg-surface/10"
                        >
                          <BookOpen className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span className="truncate">{r.title}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-text hover:bg-surface-hover dark:text-white dark:hover:bg-surface/10"
                >
                  Home
                </Link>
                <Link
                  to="/categories"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-text hover:bg-surface-hover dark:text-white dark:hover:bg-surface/10"
                >
                  Tutorials
                </Link>
                <Link
                  to="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-text hover:bg-surface-hover dark:text-white dark:hover:bg-surface/10"
                >
                  Blog
                </Link>
                <Link
                  to="/dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-text hover:bg-surface-hover dark:text-white dark:hover:bg-surface/10"
                >
                  Dashboard
                </Link>

                <div className="border-t border-border pt-4 mt-4">
                  {isAuthenticated ? (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 px-3 py-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-accent text-white font-semibold text-sm">
                          {user?.name.slice(0, 1).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-text dark:text-white">{user?.name}</p>
                          <p className="text-xs text-text-muted">{user?.email}</p>
                        </div>
                      </div>
                      <Link
                        to="/dashboard"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-text hover:bg-surface-hover dark:text-white dark:hover:bg-surface/10"
                      >
                        <LayoutDashboard className="h-4 w-4" />
                        Dashboard
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-danger hover:bg-danger/10"
                      >
                        <LogOut className="h-4 w-4" />
                        Log Out
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setAuthMode('login');
                        setIsMobileMenuOpen(false);
                        setIsAuthModalOpen(true);
                      }}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-base font-semibold text-white shadow"
                    >
                      <User className="h-5 w-5" />
                      Sign In
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Interactive Mock Authentication Modal */}
      <AnimatePresence>
        {isAuthModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAuthModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-2xl dark:bg-surface-dim dark:border-border/80"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsAuthModalOpen(false)}
                className="absolute right-4 top-4 text-text-light hover:text-text dark:hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Title & Mode */}
              <div className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-accent text-white shadow-md shadow-primary/20 mb-3">
                  <GraduationCap className="h-7 w-7" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-text dark:text-white">
                  {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
                </h2>
                <p className="mt-1 text-sm text-text-muted">
                  {authMode === 'login'
                    ? 'Sign in to access courses and bookmarks.'
                    : 'Start your journey with CodeAcademia.'}
                </p>
              </div>

              {/* Error Feedback */}
              {authError && (
                <div className="mt-4 rounded-lg bg-danger/10 p-3 text-sm font-medium text-danger text-center">
                  {authError}
                </div>
              )}

              {/* Auth Form */}
              <form onSubmit={handleAuthSubmit} className="mt-6 space-y-4">
                {authMode === 'register' && (
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-text-light dark:text-text-muted">
                      Full Name
                    </label>
                    <div className="relative mt-1">
                      <User className="absolute left-3 top-3 h-4.5 w-4.5 text-text-light" />
                      <input
                        type="text"
                        placeholder="John Doe"
                        required
                        value={authName}
                        onChange={(e) => setAuthName(e.target.value)}
                        className="h-10 w-full rounded-lg border border-border bg-surface-dim pl-10 pr-4 text-sm outline-none focus:border-primary focus:bg-surface dark:border-border dark:bg-surface-hover text-text dark:text-white"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-text-light dark:text-text-muted">
                    Email Address
                  </label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-3 h-4.5 w-4.5 text-text-light" />
                    <input
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={authEmail}
                      onChange={(e) => setAuthEmail(e.target.value)}
                      className="h-10 w-full rounded-lg border border-border bg-surface-dim pl-10 pr-4 text-sm outline-none focus:border-primary focus:bg-surface dark:border-border dark:bg-surface-hover text-text dark:text-white"
                    />
                  </div>
                  {authMode === 'login' && (
                    <span className="mt-1 block text-right text-[11px] text-text-muted hover:underline cursor-pointer">
                      Tip: Use "admin@gmail.com" to test admin state
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-text-light dark:text-text-muted">
                    Password
                  </label>
                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-3 h-4.5 w-4.5 text-text-light" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      required
                      value={authPassword}
                      onChange={(e) => setAuthPassword(e.target.value)}
                      className="h-10 w-full rounded-lg border border-border bg-surface-dim pl-10 pr-4 text-sm outline-none focus:border-primary focus:bg-surface dark:border-border dark:bg-surface-hover text-text dark:text-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex w-full h-11 items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold shadow shadow-primary/20 transition-all cursor-pointer disabled:opacity-50 mt-6"
                >
                  {isLoading ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : authMode === 'login' ? (
                    'Sign In'
                  ) : (
                    'Get Started Free'
                  )}
                </button>
              </form>

              {/* Alternate Option Switch */}
              <div className="mt-6 text-center text-sm">
                <span className="text-text-muted">
                  {authMode === 'login' ? "Don't have an account? " : 'Already have an account? '}
                </span>
                <button
                  onClick={() => {
                    setAuthMode(authMode === 'login' ? 'register' : 'login');
                    setAuthError('');
                  }}
                  className="font-semibold text-primary dark:text-accent-light hover:underline"
                >
                  {authMode === 'login' ? 'Sign Up' : 'Log In'}
                </button>
              </div>

              {/* Bottom trust footer */}
              <div className="mt-6 border-t border-border pt-4 flex items-center justify-center gap-2 text-xs text-text-light dark:text-text-muted">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <span>Simulated Secure Sandbox Session</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
