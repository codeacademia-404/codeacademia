import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { BookmarkProvider } from './context/BookmarkContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import {
  CategoriesPage,
  CategoryDetailPage,
  TutorialDetailPage,
  BlogPage,
  DashboardPage,
} from './pages/Stubs';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BookmarkProvider>
          <BrowserRouter>
            <div className="flex min-h-screen flex-col bg-surface text-text transition-colors duration-300 dark:bg-surface dark:text-white">
              <Header />
              <div className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/categories" element={<CategoriesPage />} />
                  <Route path="/category/:slug" element={<CategoryDetailPage />} />
                  <Route path="/tutorial/:categorySlug/:tutorialSlug" element={<TutorialDetailPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/:slug" element={<BlogPage />} />
                  <Route path="/dashboard" element={<DashboardPage />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </BrowserRouter>
        </BookmarkProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
