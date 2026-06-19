import { useState, useMemo } from 'react';
import { useParams, Link, useNavigate, useSearchParams } from 'react-router-dom';
import { categories, categoryGroups, getCategoryBySlug } from '../data/categories';
import { getTutorialsByCategory, getTutorialBySlug, getLessonBySlug, getAdjacentLessons } from '../data/tutorials';
import { blogPosts, getBlogPostBySlug } from '../data/blog-posts';
import { useAuth } from '../hooks/useAuth';
import { useBookmarks } from '../hooks/useBookmarks';
import {
  BookOpen,
  Bookmark,
  Award,
  CheckCircle,
  Calendar,
  Clock,
  ArrowLeft,
  ChevronRight,
  Copy,
  Check,
  Info,
  AlertTriangle,
  Play,
  HelpCircle
} from 'lucide-react';

// ============================================================
// 1. Categories Page (Browse Directory)
// ============================================================
export function CategoriesPage() {
  const [selectedGroup, setSelectedGroup] = useState<string>('All');

  const filteredCategories = useMemo(() => {
    if (selectedGroup === 'All') return categories;
    return categories.filter((c) => c.group === selectedGroup);
  }, [selectedGroup]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 animate-fade-in">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Browse Tutorial <span className="text-gradient">Categories</span>
        </h1>
        <p className="text-lg text-text-muted">
          Choose from our library of interactive tutorials. Master skills from basic syntax to full stack deployment.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {['All', ...categoryGroups.map((g) => g.name)].map((group) => (
          <button
            key={group}
            onClick={() => setSelectedGroup(group)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all cursor-pointer ${
              selectedGroup === group
                ? 'bg-primary text-white shadow-md shadow-primary/20 dark:bg-accent dark:shadow-accent/20'
                : 'bg-surface-dim border border-border text-text-muted hover:text-text hover:bg-surface-hover dark:bg-surface-dim/40 dark:hover:bg-surface/10'
            }`}
          >
            {group}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCategories.map((c) => (
          <Link
            to={`/category/${c.slug}`}
            key={c.id}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-surface-dim dark:border-border/60 hover:border-primary/40 dark:hover:border-accent-light/40"
          >
            {/* Custom Background Hover Gradient */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
              style={{ background: c.bgGradient }}
            />

            <div>
              <span className={`inline-flex rounded-xl bg-surface-dim p-3 dark:bg-surface-hover ${c.color}`}>
                <BookOpen className="h-6 w-6" />
              </span>
              <h2 className="mt-4 text-xl font-bold tracking-tight text-text dark:text-white group-hover:text-primary dark:group-hover:text-accent-light transition-colors">
                {c.name}
              </h2>
              <p className="mt-2 text-sm text-text-muted line-clamp-2">{c.description}</p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 dark:border-border/20 text-xs">
              <span className="font-semibold text-primary dark:text-accent-light">
                {c.tutorialCount} Tutorials
              </span>
              <span className="rounded-full bg-surface-dim px-2.5 py-1 font-medium text-text-muted dark:bg-surface-hover">
                {c.difficulty}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// 2. Category Detail Page
// ============================================================
export function CategoryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoryBySlug(slug ?? '');
  const tutorials = getTutorialsByCategory(slug ?? '');
  const navigate = useNavigate();

  if (!category) {
    return (
      <div className="text-center py-20 animate-fade-in">
        <h2 className="text-2xl font-bold">Category not found</h2>
        <Link to="/categories" className="mt-4 inline-block text-primary hover:underline">
          Back to categories
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 animate-fade-in">
      <button
        onClick={() => navigate('/categories')}
        className="flex items-center gap-1.5 text-sm font-semibold text-text-muted hover:text-text dark:hover:text-white mb-8 cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Categories
      </button>

      {/* Header Banner */}
      <div
        className="relative overflow-hidden rounded-3xl p-8 sm:p-12 text-white shadow-xl"
        style={{ background: category.bgGradient }}
      >
        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            {category.group}
          </span>
          <h1 className="text-3xl font-extrabold sm:text-4xl">{category.name} Tutorials</h1>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed">{category.description}</p>
        </div>
        <div className="absolute right-0 bottom-0 top-0 opacity-10 hidden lg:block">
          <BookOpen className="h-72 w-72 translate-x-12 translate-y-12" />
        </div>
      </div>

      {/* Tutorials Grid */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Available Modules</h2>
        {tutorials.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {tutorials.map((tut) => (
              <div
                key={tut.id}
                className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-sm dark:bg-surface-dim dark:border-border/60"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <span className="rounded-full bg-surface-dim px-2.5 py-1 text-xs font-semibold text-text-muted dark:bg-surface-hover">
                      {tut.difficulty}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-text-muted">
                      <Clock className="h-3.5 w-3.5" /> {tut.duration}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-text dark:text-white">{tut.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{tut.description}</p>

                  {/* Chapters Preview */}
                  <div className="mt-4 space-y-1.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-text-light dark:text-text-muted">
                      Lessons preview:
                    </h4>
                    {tut.chapters.map((ch) => (
                      <div key={ch.id} className="space-y-1">
                        {ch.lessons.map((les) => (
                          <div key={les.id} className="flex items-center gap-2 text-xs text-text-muted">
                            <Play className="h-3 w-3 text-primary shrink-0" />
                            <span className="truncate">{les.title}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-border/80 pt-4 flex items-center justify-between dark:border-border/20">
                  <div className="flex flex-wrap gap-1">
                    {tut.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-semibold text-primary dark:text-accent-light bg-primary/5 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/tutorial/${category.slug}/${tut.slug}`}
                    className="flex items-center gap-1 text-xs font-bold text-primary dark:text-accent-light hover:underline"
                  >
                    Start Learning <ChevronRight className="h-4.5 w-4.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border p-12 text-center text-text-muted">
            No active lessons found for this category yet. Check back soon!
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================
// 3. Tutorial Detail Page (Interactive Viewer)
// ============================================================
export function TutorialDetailPage() {
  const { categorySlug, tutorialSlug } = useParams<{ categorySlug: string; tutorialSlug: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeLessonSlug = searchParams.get('lesson');

  const tutorial = getTutorialBySlug(categorySlug ?? '', tutorialSlug ?? '');
  const { toggleBookmark, isBookmarked } = useBookmarks();

  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const navigate = useNavigate();

  // Find active lesson
  const selectedLessonInfo = useMemo(() => {
    if (!tutorial) return null;
    
    // If no lesson specified in query param, default to first lesson of first chapter
    const defaultSlug = tutorial.chapters[0]?.lessons[0]?.slug;
    const targetSlug = activeLessonSlug || defaultSlug;
    
    if (!targetSlug) return null;

    return getLessonBySlug(tutorial, targetSlug);
  }, [tutorial, activeLessonSlug]);

  if (!tutorial) {
    return (
      <div className="text-center py-20 animate-fade-in">
        <h2 className="text-2xl font-bold">Tutorial not found</h2>
        <Link to="/categories" className="mt-4 inline-block text-primary hover:underline">
          Back to categories
        </Link>
      </div>
    );
  }

  const { lesson, chapter } = selectedLessonInfo || {};
  const adjacent = lesson ? getAdjacentLessons(tutorial, lesson.slug) : null;

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleSelectLesson = (slug: string) => {
    setSearchParams({ lesson: slug });
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col md:flex-row bg-surface transition-colors duration-300 dark:bg-surface">
      {/* Sidebar Navigation */}
      <aside className="w-full border-r border-border md:w-64 lg:w-80 shrink-0 bg-surface-dim dark:bg-surface-dim dark:border-border/60">
        <div className="sticky top-16 max-h-[calc(100vh-4rem)] overflow-y-auto p-6 space-y-6">
          <Link
            to={`/category/${categorySlug}`}
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-text-muted hover:text-text dark:hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to modules
          </Link>

          <div>
            <span className="text-xs font-semibold text-primary dark:text-accent-light uppercase tracking-wider">
              {tutorial.category} Course
            </span>
            <h1 className="text-lg font-bold tracking-tight text-text dark:text-white mt-1">
              {tutorial.title}
            </h1>
          </div>

          <nav className="space-y-4">
            {tutorial.chapters.map((ch, idx) => (
              <div key={ch.id} className="space-y-1">
                <h3 className="text-xs font-bold uppercase tracking-wider text-text-light dark:text-text-muted px-2">
                  Chapter {idx + 1}: {ch.title}
                </h3>
                <div className="space-y-0.5 mt-1">
                  {ch.lessons.map((les) => {
                    const isSelected = lesson?.slug === les.slug;
                    return (
                      <button
                        key={les.id}
                        onClick={() => handleSelectLesson(les.slug)}
                        className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-semibold transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-primary text-white dark:bg-accent dark:text-white'
                            : 'text-text-muted hover:bg-surface-hover dark:hover:bg-surface/10 hover:text-text dark:hover:text-white'
                        }`}
                      >
                        <Play className="h-3 w-3 shrink-0" />
                        <span className="truncate">{les.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Lesson Content Area */}
      <main className="flex-1 px-4 py-8 sm:px-8 sm:py-12 max-w-4xl mx-auto animate-fade-in">
        {lesson ? (
          <article className="space-y-8">
            {/* Header info */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border/80 pb-6 dark:border-border/40">
              <div>
                <span className="text-xs text-text-muted">
                  Chapter: <span className="font-semibold">{chapter?.title}</span>
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-text dark:text-white sm:text-3xl mt-1">
                  {lesson.title}
                </h2>
              </div>
              <button
                onClick={() => toggleBookmark(tutorial.id)}
                className={`flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                  isBookmarked(tutorial.id)
                    ? 'border-primary bg-primary/5 text-primary dark:border-accent dark:bg-accent/5 dark:text-accent-light'
                    : 'border-border bg-surface-dim text-text-muted hover:bg-surface-hover'
                }`}
              >
                <Bookmark className={`h-4 w-4 ${isBookmarked(tutorial.id) ? 'fill-current' : ''}`} />
                {isBookmarked(tutorial.id) ? 'Bookmarked' : 'Bookmark Module'}
              </button>
            </div>

            {/* Lesson Body Text */}
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed text-text-muted dark:text-text-muted">
                {lesson.content}
              </p>
            </div>

            {/* Tips / Notes / Warnings */}
            {(lesson.tips || lesson.notes || lesson.warnings) && (
              <div className="space-y-3">
                {lesson.tips?.map((tip, i) => (
                  <div key={`tip-${i}`} className="flex items-start gap-3 rounded-xl bg-accent/5 border border-accent/20 p-4 dark:border-accent/10">
                    <Info className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <p className="text-xs text-text-muted leading-relaxed">
                      <span className="font-bold text-accent">Tip:</span> {tip}
                    </p>
                  </div>
                ))}
                {lesson.notes?.map((note, i) => (
                  <div key={`note-${i}`} className="flex items-start gap-3 rounded-xl bg-primary/5 border border-primary/20 p-4 dark:border-primary/10">
                    <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-xs text-text-muted leading-relaxed">
                      <span className="font-bold text-primary">Note:</span> {note}
                    </p>
                  </div>
                ))}
                {lesson.warnings?.map((warn, i) => (
                  <div key={`warn-${i}`} className="flex items-start gap-3 rounded-xl bg-danger/5 border border-danger/20 p-4 dark:border-danger/10">
                    <AlertTriangle className="h-5 w-5 text-danger shrink-0 mt-0.5" />
                    <p className="text-xs text-text-muted leading-relaxed">
                      <span className="font-bold text-danger">Warning:</span> {warn}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Code Examples Box */}
            {lesson.codeExamples && lesson.codeExamples.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-text dark:text-white">Code Example</h3>
                {lesson.codeExamples.map((ex, idx) => (
                  <div key={idx} className="rounded-xl border border-border bg-surface-dim overflow-hidden dark:border-border/60">
                    <div className="flex items-center justify-between border-b border-border/85 bg-surface-hover px-4 py-2 dark:border-border/50 dark:bg-surface/20">
                      <span className="text-xs font-semibold text-text-muted uppercase">
                        {ex.title || `${ex.language} example`}
                      </span>
                      <button
                        onClick={() => handleCopyCode(ex.code)}
                        className="flex items-center gap-1 text-xs text-text-muted hover:text-text dark:hover:text-white transition-colors cursor-pointer"
                      >
                        {copiedCode === ex.code ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-success" />
                            <span className="text-success font-semibold">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-4 overflow-x-auto text-sm text-text font-mono bg-[#0f172a] text-[#f8fafc] dark:bg-[#0f172a]">
                      <code>{ex.code}</code>
                    </pre>
                    {ex.output && (
                      <div className="border-t border-border/80 p-3 bg-surface/50 dark:border-border/40">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-text-light">Output:</span>
                        <pre className="mt-1 text-xs font-mono text-success bg-[#1e293b] p-3 rounded-lg">{ex.output}</pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Interview Prep Questions */}
            {lesson.interviewQuestions && lesson.interviewQuestions.length > 0 && (
              <div className="rounded-2xl border border-border/80 bg-surface-dim p-6 space-y-4 dark:border-border/60">
                <div className="flex items-center gap-2 border-b border-border/80 pb-3 dark:border-border/40">
                  <HelpCircle className="h-5 w-5 text-primary dark:text-accent-light" />
                  <h3 className="text-base font-bold text-text dark:text-white">Interview Prep Questions</h3>
                </div>
                <div className="space-y-4">
                  {lesson.interviewQuestions.map((q, i) => (
                    <div key={i} className="space-y-1">
                      <h4 className="text-sm font-semibold text-text dark:text-white">
                        Q{i + 1}: {q.question}
                      </h4>
                      <p className="text-xs text-text-muted leading-relaxed bg-surface p-3 rounded-lg dark:bg-surface/5 border border-border/40">
                        {q.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between border-t border-border/80 pt-6 dark:border-border/40">
              {adjacent?.prev ? (
                <button
                  onClick={() => handleSelectLesson(adjacent.prev!.slug)}
                  className="flex items-center gap-1 text-sm font-semibold text-text-muted hover:text-text dark:hover:text-white cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4" /> Previous Lesson
                </button>
              ) : (
                <div />
              )}
              {adjacent?.next ? (
                <button
                  onClick={() => handleSelectLesson(adjacent.next!.slug)}
                  className="flex items-center gap-1 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow shadow-primary/20 hover:bg-primary-dark transition-all cursor-pointer"
                >
                  Next Lesson <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={() => navigate(`/category/${categorySlug}`)}
                  className="flex items-center gap-1 rounded-lg bg-success px-4 py-2 text-sm font-semibold text-white shadow shadow-success/20 hover:bg-success-dark transition-all cursor-pointer"
                >
                  Module Complete! <CheckCircle className="h-4 w-4" />
                </button>
              )}
            </div>
          </article>
        ) : (
          <div className="text-center py-20">
            <p className="text-text-muted">Select a lesson to begin learning.</p>
          </div>
        )}
      </main>
    </div>
  );
}

// ============================================================
// 4. Blog Feed Page
// ============================================================
export function BlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const activePost = useMemo(() => {
    if (!slug) return null;
    return getBlogPostBySlug(slug);
  }, [slug]);

  if (activePost) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 animate-fade-in">
        <button
          onClick={() => navigate('/blog')}
          className="flex items-center gap-1.5 text-sm font-semibold text-text-muted hover:text-text dark:hover:text-white mb-8 cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Blog Feed
        </button>

        <article className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-primary dark:text-accent-light uppercase tracking-wider bg-primary/5 px-2 py-1 rounded">
              {activePost.category}
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-text dark:text-white sm:text-4xl">
              {activePost.title}
            </h1>
            <div className="flex items-center gap-3 text-xs text-text-muted pt-2">
              <span className="font-semibold text-text dark:text-white">{activePost.author}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" /> {new Date(activePost.date).toLocaleDateString()}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {activePost.readTime} min read
              </span>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none text-text-muted leading-relaxed space-y-4 pt-6 border-t border-border/80 dark:border-border/40">
            {activePost.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-xl font-bold text-text dark:text-white mt-6 mb-2">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={index} className="list-disc pl-5 space-y-1 my-2">
                    {paragraph
                      .split('\n')
                      .map((li, liIdx) => (
                        <li key={liIdx}>{li.replace('- ', '')}</li>
                      ))}
                  </ul>
                );
              }
              if (paragraph.startsWith('1. ')) {
                return (
                  <ol key={index} className="list-decimal pl-5 space-y-1 my-2">
                    {paragraph
                      .split('\n')
                      .map((li, liIdx) => (
                        <li key={liIdx}>{li.replace(/^\d+\.\s+/, '')}</li>
                      ))}
                  </ol>
                );
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 animate-fade-in">
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Latest <span className="text-gradient">Blog Posts</span>
        </h1>
        <p className="text-lg text-text-muted">
          Insights, updates, and career advice from the CodeAcademia team.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-sm hover:shadow-md transition-shadow dark:bg-surface-dim dark:border-border/60"
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
  );
}

// ============================================================
// 5. Dashboard Page (Student Workspace)
// ============================================================
export function DashboardPage() {
  const { user, isAuthenticated } = useAuth();
  const { bookmarks } = useBookmarks();

  // Load actual bookmarked tutorial details
  const bookmarkedTutorials = useMemo(() => {
    return getAllBookmarkedTutorials(bookmarks);
  }, [bookmarks]);

  function getAllBookmarkedTutorials(ids: string[]) {
    // Find matching tutorials from all
    const all = categories.map((c) => getTutorialsByCategory(c.slug)).flat();
    return all.filter((t) => ids.includes(t.id));
  }

  if (!isAuthenticated) {
    return (
      <div className="mx-auto max-w-md px-4 py-24 text-center space-y-6 animate-fade-in">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary">
          <Award className="h-8 w-8" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight">Access Dashboard</h2>
        <p className="text-text-muted">
          Please sign in via the header action to view your personalized dashboard, track progress, and view bookmarked courses.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 animate-fade-in">
      {/* Profile summary card */}
      <div className="rounded-3xl border border-border bg-gradient-to-tr from-surface to-surface-dim p-8 shadow-sm dark:bg-surface-dim dark:border-border/60">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-primary to-accent text-white text-2xl font-bold shadow-md shadow-primary/20">
              {user?.name.slice(0, 1).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight text-text dark:text-white sm:text-3xl">
                  {user?.name}
                </h1>
                {user?.role === 'admin' && (
                  <span className="rounded bg-accent/15 px-2 py-0.5 text-xs font-semibold text-accent-dark dark:text-accent-light">
                    Instructor
                  </span>
                )}
              </div>
              <p className="text-sm text-text-muted">{user?.email}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-xs">
            <div className="rounded-xl border border-border/80 bg-surface px-4 py-2.5 dark:bg-surface/5">
              <span className="block text-text-muted">Joined Date</span>
              <span className="font-bold text-text dark:text-white">
                {user?.joinedDate ? new Date(user.joinedDate).toLocaleDateString() : 'Just now'}
              </span>
            </div>
            <div className="rounded-xl border border-border/80 bg-surface px-4 py-2.5 dark:bg-surface/5">
              <span className="block text-text-muted">Bookmarks</span>
              <span className="font-bold text-text dark:text-white">{bookmarks.length} Lessons</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bookmarked Lessons Section */}
      <div className="mt-12 space-y-6">
        <div className="flex items-center gap-2 border-b border-border/80 pb-3 dark:border-border/40">
          <Bookmark className="h-5 w-5 text-primary dark:text-accent-light" />
          <h2 className="text-xl font-bold text-text dark:text-white">Bookmarked Modules</h2>
        </div>

        {bookmarkedTutorials.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bookmarkedTutorials.map((tut) => (
              <div
                key={tut.id}
                className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-sm dark:bg-surface-dim dark:border-border/60"
              >
                <div>
                  <span className="rounded-full bg-surface-dim px-2.5 py-1 text-[10px] font-semibold text-text-muted dark:bg-surface-hover">
                    {tut.difficulty}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-text dark:text-white">{tut.title}</h3>
                  <p className="mt-2 text-xs text-text-muted line-clamp-2">{tut.description}</p>
                </div>
                <div className="mt-6 border-t border-border/80 pt-4 flex items-center justify-between dark:border-border/20 text-xs">
                  <span className="text-text-light">{tut.category}</span>
                  <Link
                    to={`/tutorial/${tut.categorySlug}/${tut.slug}`}
                    className="font-bold text-primary dark:text-accent-light hover:underline"
                  >
                    Resume Study &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border p-12 text-center text-text-muted">
            You haven't bookmarked any modules yet. Go back to{' '}
            <Link to="/categories" className="font-semibold text-primary dark:text-accent-light hover:underline">
              Tutorials
            </Link>{' '}
            and click Bookmark.
          </div>
        )}
      </div>

      {/* Certifications Section */}
      <div className="mt-12 space-y-6">
        <div className="flex items-center gap-2 border-b border-border/80 pb-3 dark:border-border/40">
          <Award className="h-5 w-5 text-primary dark:text-accent-light" />
          <h2 className="text-xl font-bold text-text dark:text-white">My Certifications</h2>
        </div>
        <div className="rounded-2xl border border-dashed border-border/80 p-12 text-center text-text-muted">
          Certificates are generated once you finish all tutorials in a specific category. Finish your first module to generate a certificate!
        </div>
      </div>
    </div>
  );
}
