import { useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSearch } from '../hooks/useSearch';
import { useAuth } from '../hooks/useAuth';
import { categories } from '../data/categories';
import { testimonials } from '../data/testimonials';
import { blogPosts } from '../data/blog-posts';
import {
  Search,
  BookOpen,
  ArrowRight,
  Sparkles,
  Star,
  Users,
  Award,
  Code2,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Home() {
  const { query, setQuery, results, isOpen, setIsOpen, clearSearch } = useSearch();
  const { isAuthenticated, login } = useAuth();
  
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close search dropdown on clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsOpen]);

  const handleSearchSelect = (url: string) => {
    clearSearch();
    navigate(url);
  };

  const handlePillClick = (term: string) => {
    setQuery(term);
    setIsOpen(true);
  };

  // Get popular categories
  const popularCategories = categories.filter((c) => c.popular).slice(0, 6);
  // Get featured blogs
  const featuredBlogs = blogPosts.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="w-full pb-20 overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 bg-gradient-to-b from-surface-dim/80 via-surface to-surface dark:from-surface-dim/30">
        {/* Dynamic Background Blurs */}
        <div className="absolute top-1/4 left-10 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-[100px] dark:bg-primary/5" />
        <div className="absolute top-1/3 right-10 -z-10 h-80 w-80 rounded-full bg-accent/15 blur-[120px] dark:bg-accent/5" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Title & Search */}
            <div className="lg:col-span-7 space-y-6 text-left animate-slide-up">
              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 dark:bg-accent/10 px-3.5 py-1.5 text-xs font-semibold text-primary dark:text-accent-light">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Learn Programming & AI the Smart Way</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-text dark:text-white leading-[1.15]">
                Master Coding &{' '}
                <span className="text-gradient">Artificial Intelligence</span> Step-by-Step.
              </h1>

              {/* Description */}
              <p className="text-base text-text-muted dark:text-text-muted max-w-xl sm:text-lg leading-relaxed">
                CodeAcademia provides premium, interactive tutorials across programming, databases, web development, and machine learning. Start learning free today.
              </p>

              {/* Search Box & Dropdown */}
              <div className="relative max-w-lg mt-4" ref={searchRef}>
                <div className="flex items-center rounded-2xl border border-border bg-surface p-1.5 shadow-md focus-within:ring-2 focus-within:ring-primary focus-within:border-primary dark:bg-surface-dim dark:border-border/60 dark:focus-within:ring-accent-light dark:focus-within:border-accent-light transition-all">
                  <Search className="h-5 w-5 text-text-light dark:text-text-muted ml-3 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search Python, React, MongoDB, Machine Learning..."
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setIsOpen(true);
                    }}
                    onFocus={() => setIsOpen(true)}
                    className="h-10 w-full bg-transparent px-3 text-sm outline-none dark:text-white"
                  />
                  <button className="hidden sm:inline-flex items-center justify-center rounded-xl bg-primary hover:bg-primary-dark px-5 py-2.5 text-xs font-bold text-white shadow shadow-primary/20 dark:bg-accent dark:hover:bg-accent-dark transition-colors cursor-pointer shrink-0">
                    Find Course
                  </button>
                </div>

                {/* Popular pills */}
                <div className="flex flex-wrap gap-1.5 mt-3 text-xs text-text-muted">
                  <span>Popular:</span>
                  {['React', 'Python', 'Machine Learning', 'TypeScript'].map((item) => (
                    <button
                      key={item}
                      onClick={() => handlePillClick(item)}
                      className="font-medium text-primary hover:underline dark:text-accent-light"
                    >
                      {item}
                    </button>
                  ))}
                </div>

                {/* Search Dropdown Overlay */}
                <AnimatePresence>
                  {isOpen && query.length >= 2 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 right-0 mt-3 z-30 rounded-2xl border border-border bg-surface shadow-2xl ring-1 ring-black/5 dark:bg-surface-dim dark:border-border/60 overflow-hidden"
                    >
                      <div className="max-h-[350px] overflow-y-auto p-3">
                        {results.length > 0 ? (
                          <div className="space-y-4">
                            {results.filter((r) => r.type === 'category').length > 0 && (
                              <div>
                                <h3 className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-text-light dark:text-text-muted">
                                  Topic Categories
                                </h3>
                                <div className="mt-1 space-y-1">
                                  {results
                                    .filter((r) => r.type === 'category')
                                    .map((result, idx) => (
                                      <button
                                        key={`hero-cat-${idx}`}
                                        onClick={() => handleSearchSelect(result.url)}
                                        className="flex w-full items-start gap-3 rounded-xl px-3 py-2 text-left hover:bg-surface-hover dark:hover:bg-surface/10 transition-colors"
                                      >
                                        <BookOpen className="h-5 w-5 mt-0.5 text-accent" />
                                        <div>
                                          <div className="text-sm font-semibold text-text dark:text-white">
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
                                <h3 className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-text-light dark:text-text-muted">
                                  Interactive Lessons
                                </h3>
                                <div className="mt-1 space-y-1">
                                  {results
                                    .filter((r) => r.type === 'tutorial')
                                    .map((result, idx) => (
                                      <button
                                        key={`hero-tut-${idx}`}
                                        onClick={() => handleSearchSelect(result.url)}
                                        className="flex w-full items-start gap-3 rounded-xl px-3 py-2 text-left hover:bg-surface-hover dark:hover:bg-surface/10 transition-colors"
                                      >
                                        <Code2 className="h-5 w-5 mt-0.5 text-primary dark:text-accent-light" />
                                        <div>
                                          <div className="text-sm font-semibold text-text dark:text-white">
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
                          <div className="py-8 text-center text-sm text-text-muted">
                            No tutorials matching <span className="font-semibold text-text dark:text-white">"{query}"</span> found.
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#categories-section"
                  className="flex items-center gap-1.5 rounded-full bg-primary hover:bg-primary-dark px-6 py-3 text-sm font-bold text-white shadow shadow-primary/20 dark:bg-accent dark:hover:bg-accent-dark transition-all hover:scale-[1.02] cursor-pointer"
                >
                  Browse Course Catalog
                  <ArrowRight className="h-4 w-4" />
                </a>
                {!isAuthenticated && (
                  <button
                    onClick={() => login('guest@codeacademia.dev', 'guest')}
                    className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-6 py-3 text-sm font-bold text-text hover:bg-surface-hover dark:border-border dark:bg-surface-dim/40 dark:hover:bg-surface/10 dark:text-white transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    Quick Guest Access
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: Floating Graphics */}
            <div className="lg:col-span-5 relative flex items-center justify-center pt-8 lg:pt-0">
              {/* Code Editor Window Card */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="w-full max-w-sm rounded-2xl border border-border/80 bg-[#0F172A] p-4 text-white shadow-2xl overflow-hidden text-left"
              >
                {/* OS style circles */}
                <div className="flex items-center justify-between border-b border-border/10 pb-3 mb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500" />
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs font-semibold text-text-light/50 font-mono">code_academia.ts</span>
                </div>

                {/* Mock code text */}
                <pre className="font-mono text-[11px] leading-relaxed text-slate-300">
                  <div>
                    <span className="text-pink-400">import</span>{' '}
                    <span className="text-cyan-400">{`{ MachineLearning }`}</span>{' '}
                    <span className="text-pink-400">from</span>{' '}
                    <span className="text-green-300">'codeacademia'</span>;
                  </div>
                  <div className="mt-2 text-slate-500">// Initialize student learning path</div>
                  <div>
                    <span className="text-pink-400">const</span>{' '}
                    <span className="text-blue-400">learner</span> ={' '}
                    <span className="text-pink-400">new</span>{' '}
                    <span className="text-yellow-300">Developer</span>({`{`}
                  </div>
                  <div className="pl-4">
                    name: <span className="text-green-300">"Priya Sharma"</span>,
                  </div>
                  <div className="pl-4">
                    goals: [<span className="text-green-300">"AI"</span>, <span className="text-green-300">"Web"</span>],
                  </div>
                  <div className="pl-4">
                    speed: <span className="text-green-300">"self-paced"</span>
                  </div>
                  <div>{`});`}</div>
                  <div className="mt-2 text-slate-500">// Run analysis and outputs</div>
                  <div>
                    <span className="text-blue-400">learner</span>.
                    <span className="text-yellow-300">study</span>(
                    <span className="text-cyan-300">MachineLearning</span>
                    );
                  </div>
                </pre>

                {/* Output feedback panel */}
                <div className="mt-6 rounded-lg bg-slate-900 border border-slate-800 p-2.5">
                  <div className="flex items-center justify-between text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">
                    <span>Console Output</span>
                    <span className="text-green-400">Success</span>
                  </div>
                  <div className="font-mono text-[10px] text-green-300">
                    &gt; Model training started...
                    <br />
                    &gt; Progress: 100% complete!
                    <br />
                    &gt; Certificate unlocked! 🎓
                  </div>
                </div>
              </motion.div>

              {/* Smaller floating element */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                  x: [0, -4, 0],
                  transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' }
                }}
                className="absolute -bottom-4 -left-6 rounded-xl border border-border bg-surface p-3 shadow-lg dark:bg-surface-dim max-w-[150px] flex items-center gap-2"
              >
                <div className="rounded bg-success/15 p-1 text-success">
                  <Award className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-text-light font-medium">Earn Certs</span>
                  <span className="text-xs font-bold text-text dark:text-white">100% Verified</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-border bg-surface p-6 shadow-md dark:bg-surface-dim dark:border-border/60 md:grid-cols-4 md:p-8">
          <div className="text-center p-2 space-y-1">
            <span className="inline-flex rounded-xl bg-primary/10 p-2.5 text-primary dark:text-accent-light dark:bg-accent/10">
              <Users className="h-5 w-5" />
            </span>
            <p className="text-2xl font-bold tracking-tight text-text dark:text-white md:text-3xl">50K+</p>
            <p className="text-xs font-semibold text-text-light uppercase tracking-wider">Active Learners</p>
          </div>
          <div className="text-center p-2 space-y-1">
            <span className="inline-flex rounded-xl bg-primary/10 p-2.5 text-primary dark:text-accent-light dark:bg-accent/10">
              <Code2 className="h-5 w-5" />
            </span>
            <p className="text-2xl font-bold tracking-tight text-text dark:text-white md:text-3xl">500+</p>
            <p className="text-xs font-semibold text-text-light uppercase tracking-wider">Tutorial Lessons</p>
          </div>
          <div className="text-center p-2 space-y-1">
            <span className="inline-flex rounded-xl bg-primary/10 p-2.5 text-primary dark:text-accent-light dark:bg-accent/10">
              <BookOpen className="h-5 w-5" />
            </span>
            <p className="text-2xl font-bold tracking-tight text-text dark:text-white md:text-3xl">25+</p>
            <p className="text-xs font-semibold text-text-light uppercase tracking-wider">Language Topics</p>
          </div>
          <div className="text-center p-2 space-y-1">
            <span className="inline-flex rounded-xl bg-primary/10 p-2.5 text-primary dark:text-accent-light dark:bg-accent/10">
              <Award className="h-5 w-5" />
            </span>
            <p className="text-2xl font-bold tracking-tight text-text dark:text-white md:text-3xl">10K+</p>
            <p className="text-xs font-semibold text-text-light uppercase tracking-wider">Certs Awarded</p>
          </div>
        </div>
      </section>

      {/* 3. FEATURED CATEGORIES SECTION */}
      <section id="categories-section" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-12">
          <div className="text-left space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Explore Popular <span className="text-gradient">Subjects</span>
            </h2>
            <p className="text-sm sm:text-base text-text-muted">
              Kickstart your development skills with these in-demand language tracks.
            </p>
          </div>
          <Link
            to="/categories"
            className="flex items-center gap-1.5 text-sm font-bold text-primary dark:text-accent-light hover:underline cursor-pointer text-left self-start sm:self-auto"
          >
            Browse All Subjects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popularCategories.map((c) => (
            <Link
              to={`/category/${c.slug}`}
              key={c.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-surface-dim dark:border-border/60 hover:border-primary/40 dark:hover:border-accent-light/40 text-left"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                style={{ background: c.bgGradient }}
              />
              <div>
                <span className={`inline-flex rounded-xl bg-surface-dim p-3 dark:bg-surface-hover ${c.color}`}>
                  <BookOpen className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-text dark:text-white group-hover:text-primary dark:group-hover:text-accent-light transition-colors">
                  {c.name}
                </h3>
                <p className="mt-2 text-sm text-text-muted line-clamp-2">{c.description}</p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 dark:border-border/20 text-xs">
                <span className="font-semibold text-primary dark:text-accent-light">
                  {c.tutorialCount} Courses
                </span>
                <span className="rounded-full bg-surface-dim px-2.5 py-1 font-medium text-text-muted dark:bg-surface-hover">
                  {c.difficulty}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. LEARNING PATH/ROADMAP FLOW */}
      <section className="bg-surface-dim py-20 dark:bg-surface-dim/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              How CodeAcademia <span className="text-gradient">Works</span>
            </h2>
            <p className="text-sm sm:text-base text-text-muted">
              A structured roadmap tailored to take you from a absolute beginner to a confident builder.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center space-y-4 relative z-10 p-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-accent/15 dark:text-accent-light text-xl font-extrabold">
                1
              </div>
              <h3 className="text-lg font-bold text-text dark:text-white">Choose Subject</h3>
              <p className="text-xs text-text-muted leading-relaxed max-w-[200px]">
                Browse 25+ categories and pick a programming path that matches your career goal.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center space-y-4 relative z-10 p-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-accent/15 dark:text-accent-light text-xl font-extrabold">
                2
              </div>
              <h3 className="text-lg font-bold text-text dark:text-white">Interactive Study</h3>
              <p className="text-xs text-text-muted leading-relaxed max-w-[200px]">
                Read digestible, bite-sized lessons, explore syntax warnings, and copy sandbox code.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center space-y-4 relative z-10 p-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-accent/15 dark:text-accent-light text-xl font-extrabold">
                3
              </div>
              <h3 className="text-lg font-bold text-text dark:text-white">Practice Interview Prep</h3>
              <p className="text-xs text-text-muted leading-relaxed max-w-[200px]">
                Test your comprehension with integrated QA blocks preparing you for technical hiring rounds.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center space-y-4 relative z-10 p-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-accent/15 dark:text-accent-light text-xl font-extrabold">
                4
              </div>
              <h3 className="text-lg font-bold text-text dark:text-white">Claim Credentials</h3>
              <p className="text-xs text-text-muted leading-relaxed max-w-[200px]">
                Complete chapters, track benchmarks on your dashboard, and unlock certificates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            What Our Learners <span className="text-gradient">Say</span>
          </h2>
          <p className="text-sm sm:text-base text-text-muted">
            Join thousands of developers who upgraded their skill set through our learning portal.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-sm dark:bg-surface-dim dark:border-border/60 text-left"
            >
              <div>
                <div className="flex items-center gap-1.5 text-yellow-500 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-text-muted leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-border/80 pt-4 dark:border-border/20">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0">
                  {t.name.slice(0, 1).toUpperCase()}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text dark:text-white">{t.name}</h4>
                  <p className="text-xs text-text-muted">
                    {t.role} at <span className="font-semibold">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FEATURED BLOG FEED */}
      <section className="bg-surface-dim py-20 dark:bg-surface-dim/40 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-12">
            <div className="text-left space-y-2">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Coding Articles & <span className="text-gradient">Updates</span>
              </h2>
              <p className="text-sm sm:text-base text-text-muted">
                Insights on programming trends, frameworks, and job placement advice.
              </p>
            </div>
            <Link
              to="/blog"
              className="flex items-center gap-1.5 text-sm font-bold text-primary dark:text-accent-light hover:underline cursor-pointer text-left self-start sm:self-auto"
            >
              Read All Articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredBlogs.map((post) => (
              <div
                key={post.id}
                className="flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-sm hover:shadow-md transition-shadow dark:bg-surface-dim dark:border-border/60 text-left"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary dark:text-accent-light bg-primary/5 px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                  <Link to={`/blog/${post.slug}`} className="block mt-3 group">
                    <h3 className="text-lg font-bold text-text dark:text-white group-hover:text-primary dark:group-hover:text-accent-light transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="mt-2 text-sm text-text-muted line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 border-t border-border/80 pt-4 flex items-center justify-between dark:border-border/20 text-[11px] text-text-muted">
                  <span>By {post.author}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {post.readTime} min read
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CALL TO ACTION BLOCK */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-[#1E293B] to-[#0F172A] p-8 sm:p-16 text-center text-white shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/50 via-primary/30 to-transparent" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-extrabold sm:text-4xl tracking-tight">
              Ready to Upgrade Your Developer Skills?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Unlock our structured lessons, bookmarked course dashboard, and interview preparation questions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                to="/categories"
                className="rounded-full bg-primary hover:bg-primary-dark dark:bg-accent dark:hover:bg-accent-dark px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
              >
                Get Started Free
              </Link>
              <a
                href="https://github.com/codeacademia"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-600 bg-slate-800/40 hover:bg-slate-800/80 px-8 py-3.5 text-sm font-bold text-white transition-all hover:scale-[1.02]"
              >
                Join GitHub Community
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
