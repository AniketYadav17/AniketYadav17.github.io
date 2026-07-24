# Refined-Minimal Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the whole portfolio (Home, Projects, Contact, Navbar, new Footer) from gradient/glassmorphism to a refined-minimal design language per `docs/superpowers/specs/2026-07-24-refined-minimal-redesign-design.md`.

**Architecture:** Pure presentational rewrite of five React components plus `App.js`. No routing, state, or content changes — copy, project data, metrics, and links stay exactly as currently shipped. The existing `darkMode` prop + ternary-class pattern is kept (that is this codebase's convention; do NOT switch to Tailwind `dark:` variants).

**Tech Stack:** React 19 (CRA / react-scripts 5), Tailwind CSS 3, react-router-dom 7 (HashRouter), @heroicons/react, React Testing Library + Jest.

## Global Constraints

- **Content freeze:** all headline/paragraph copy, project descriptions, metrics, URLs, and email addresses are copied verbatim from the current files — never reworded.
- **Accent colour:** stock Tailwind indigo only — `text-indigo-600`/`bg-indigo-600` (light), `text-indigo-400` (dark), `hover:bg-indigo-500` for buttons.
- **Neutrals:** `bg-white`/`bg-gray-950` page backgrounds; `border-gray-200`/`border-gray-800` hairlines; `text-gray-600`/`text-gray-400` secondary text.
- **Banned classes (delete on sight, add none):** `backdrop-blur*`, `bg-gradient-*`, `bg-clip-text`, `hover:scale-*`, `animate-bounce`, `animate-pulse`, `blur-3xl`, translucent card fills like `bg-white/5`.
- **Content width:** `max-w-5xl mx-auto px-4 sm:px-6 lg:px-8` everywhere.
- **Fonts:** Inter is ALREADY loaded via `@import` in `src/index.css` and set on `body` — this supersedes the spec's "add `<link>` to index.html" note. No font changes in this plan.
- **Shell environment (Windows):** npm is not on PATH. Every npm command below means PowerShell with: `$env:Path = "C:\Program Files\nodejs;$env:APPDATA\npm;$env:Path"` first. Tests run with `$env:CI = "true"; npm test -- --watchAll=false`. Do not touch the `jest`/`moduleNameMapper` block in `package.json` or the polyfills in `src/setupTests.js`.
- **Commits:** work directly on `main` (repo convention), one commit per task, message ends with `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>`. Do NOT push or deploy — that happens only after the user approves the visual check in Task 6.

---

### Task 1: App shell + Footer

Strips the gradient/dot-pattern shell from `App.js`, removes the floating dark-mode button (Navbar takes it over in Task 2 — the toggle is intentionally absent between the two commits), and adds the site footer. Overwrites the unused legacy `src/components/Footer.js`.

**Files:**
- Modify: `src/App.js` (full rewrite below)
- Overwrite: `src/components/Footer.js` (legacy file, unused by any import — safe to replace)
- Test: `src/App.test.js` (append one test)

**Interfaces:**
- Produces: `<Navbar darkMode toggleDarkMode />` — Task 2's Navbar must accept exactly these props. `<Footer darkMode />`.
- App keeps: darkMode state in localStorage under key `darkMode`, `dark` class on `document.documentElement`.

- [ ] **Step 1: Append the failing footer test to `src/App.test.js`**

```jsx
test('renders footer with GitHub, LinkedIn and Email links', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
    'href',
    'https://github.com/AniketYadav17'
  );
  expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
    'href',
    'https://linkedin.com/in/aniket-ydv/'
  );
  expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute(
    'href',
    'mailto:aniket.ydv99@gmail.com'
  );
});
```

- [ ] **Step 2: Run tests to verify the new one fails**

Run: `$env:CI = "true"; npm test -- --watchAll=false`
Expected: 1 failed (`Unable to find an accessible element with the role "link" and name "GitHub"`), 1 passed (hero test).

- [ ] **Step 3: Write `src/components/Footer.js` (full replacement of legacy file)**

```jsx
import React from 'react';

const Footer = ({ darkMode }) => {
  const linkClass = `transition-colors ${
    darkMode ? 'hover:text-indigo-400' : 'hover:text-indigo-600'
  }`;

  return (
    <footer className={`border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm ${
        darkMode ? 'text-gray-400' : 'text-gray-500'
      }`}>
        <span>© {new Date().getFullYear()} Aniket Yadav</span>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/AniketYadav17"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/aniket-ydv/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            LinkedIn
          </a>
          <a href="mailto:aniket.ydv99@gmail.com" className={linkClass}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

- [ ] **Step 4: Rewrite `src/App.js`**

```jsx
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize from localStorage immediately to prevent flash
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <Router>
      <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
        darkMode ? 'dark bg-gray-950 text-gray-100' : 'bg-white text-gray-900'
      }`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/projects" element={<Projects darkMode={darkMode} />} />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          </Routes>
        </main>

        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;
```

- [ ] **Step 5: Run tests to verify both pass**

Run: `$env:CI = "true"; npm test -- --watchAll=false`
Expected: 2 passed. (The hero test does not depend on the removed toggle button.)

- [ ] **Step 6: Commit**

```bash
git add src/App.js src/components/Footer.js src/App.test.js
git commit -m "Restyle app shell and add minimal footer

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 2: Navbar with integrated dark-mode toggle

**Files:**
- Modify: `src/components/Navbar.js` (full rewrite below)
- Test: `src/App.test.js` (append one test)

**Interfaces:**
- Consumes: `darkMode` (bool) and `toggleDarkMode` (fn) props from Task 1's App.
- Produces: dark-mode toggle buttons with `aria-label="Toggle dark mode"` (two in DOM: desktop + mobile).

- [ ] **Step 1: Append the failing toggle test to `src/App.test.js`**

```jsx
test('navbar contains a dark mode toggle', () => {
  render(<App />);
  expect(screen.getAllByLabelText('Toggle dark mode').length).toBeGreaterThan(0);
});
```

- [ ] **Step 2: Run tests to verify the new one fails**

Run: `$env:CI = "true"; npm test -- --watchAll=false`
Expected: 1 failed (`Unable to find a label with the text of: Toggle dark mode` — the old floating button was removed in Task 1), 2 passed.

- [ ] **Step 3: Rewrite `src/components/Navbar.js`**

```jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  const linkClass = (href) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive(href)
      ? darkMode ? 'text-indigo-400' : 'text-indigo-600'
      : darkMode
      ? 'text-gray-300 hover:text-white'
      : 'text-gray-600 hover:text-gray-900'
  }`;

  const iconButtonClass = `p-2 rounded-md transition-colors ${
    darkMode
      ? 'text-gray-300 hover:text-white hover:bg-gray-800'
      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
  }`;

  return (
    <nav className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
      scrolled
        ? darkMode
          ? 'bg-gray-950/95 border-b border-gray-800'
          : 'bg-white/95 border-b border-gray-200'
        : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex flex-col leading-tight">
            <span className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Aniket Yadav
            </span>
            <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              AI Engineer
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} className={linkClass(item.href)}>
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className={`ml-3 ${iconButtonClass}`}
            >
              {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className={iconButtonClass}
            >
              {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className={iconButtonClass}
            >
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className={`md:hidden border-t pb-3 ${
            darkMode ? 'border-gray-800 bg-gray-950' : 'border-gray-200 bg-white'
          }`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? darkMode ? 'text-indigo-400' : 'text-indigo-600'
                    : darkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
```

- [ ] **Step 4: Run tests to verify all pass**

Run: `$env:CI = "true"; npm test -- --watchAll=false`
Expected: 3 passed.

- [ ] **Step 5: Commit**

```bash
git add src/components/Navbar.js src/App.test.js
git commit -m "Restyle navbar and move dark-mode toggle into it

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 3: Home hero

**Files:**
- Modify: `src/pages/Home.js` (full rewrite below)

**Interfaces:**
- Consumes: `darkMode` prop. Copy is verbatim from the current file.

- [ ] **Step 1: Rewrite `src/pages/Home.js`**

```jsx
import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Home = ({ darkMode }) => {
  const accent = darkMode ? 'text-indigo-400' : 'text-indigo-600';
  const secondary = darkMode ? 'text-gray-300' : 'text-gray-700';
  const muted = darkMode ? 'text-gray-400' : 'text-gray-600';

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="min-h-[calc(100vh-5rem)] flex items-center py-16">
        <div className="w-full flex flex-col-reverse items-center gap-10 md:flex-row md:justify-between">
          <div className="max-w-2xl text-center md:text-left">
            <div className={`inline-flex items-center gap-2 text-sm font-medium ${muted}`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Available for opportunities
            </div>

            <h1 className={`mt-4 text-4xl sm:text-5xl font-bold tracking-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Aniket Yadav
            </h1>

            <h2 className={`mt-3 text-lg sm:text-xl font-medium ${accent}`}>
              AI Engineer · Agentic AI · RAG · LLM Evaluation
            </h2>

            <p className={`mt-6 text-lg leading-relaxed ${secondary}`}>
              AI Engineer with 2+ years shipping production AI systems in Python.
              MSc in Artificial Intelligence (Distinction) from the University of Surrey,
              previously Machine Learning Engineer at Accenture.
            </p>

            <p className={`mt-4 leading-relaxed ${muted}`}>
              I build agentic LLM workflows with LangGraph, retrieval-augmented pipelines
              over enterprise data, and the evaluation harnesses that prove these systems
              can be trusted in production.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
              >
                <ArrowDownTrayIcon className="h-5 w-5" />
                Download resume
              </a>
              <Link to="/projects" className={`font-medium ${accent} hover:underline`}>
                View projects →
              </Link>
            </div>
          </div>

          <img
            src="/profile.png"
            alt="Aniket Yadav"
            loading="eager"
            className={`w-40 h-40 md:w-48 md:h-48 rounded-full object-cover ring-1 ${
              darkMode ? 'ring-gray-800' : 'ring-gray-200'
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
```

- [ ] **Step 2: Run tests to verify nothing broke**

Run: `$env:CI = "true"; npm test -- --watchAll=false`
Expected: 3 passed (hero test still finds the `Aniket Yadav` heading and "AI Engineer" text).

- [ ] **Step 3: Commit**

```bash
git add src/pages/Home.js
git commit -m "Restyle home hero to refined-minimal layout

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 4: Project cards

**Files:**
- Modify: `src/pages/Projects.js` (full rewrite below)
- Test: Create `src/pages/Projects.test.js`

**Interfaces:**
- Consumes: `darkMode` prop. Project data (titles, descriptions, stats, links, notes) verbatim from the current file; each project gains a `category` eyebrow and loses `image`/`gradient`.

- [ ] **Step 1: Create the failing test `src/pages/Projects.test.js`**

```jsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Projects from './Projects';

test('renders three real project cards with no placeholder overlay', () => {
  render(
    <MemoryRouter>
      <Projects darkMode={false} />
    </MemoryRouter>
  );
  expect(screen.getByText(/Sentinel — FCA Compliance Auditor/)).toBeInTheDocument();
  expect(screen.getByText(/Neighbourhood Pulse — London Property Intelligence/)).toBeInTheDocument();
  expect(screen.getByText(/Multi-Task Vision Transformer/)).toBeInTheDocument();
  expect(screen.queryByText(/View Details/i)).not.toBeInTheDocument();
  expect(screen.getByRole('link', { name: /live demo/i })).toHaveAttribute(
    'href',
    'https://neighbourhood-pulse.streamlit.app'
  );
  expect(screen.getByText('Agentic RAG')).toBeInTheDocument();
});
```

Note: the eyebrow data stores `'Agentic RAG'`; CSS (`uppercase`) renders it as AGENTIC RAG in the browser, but jsdom does not apply `text-transform`, so the test asserts the source-cased string.

- [ ] **Step 2: Run test to verify it fails**

Run: `$env:CI = "true"; npm test -- --watchAll=false`
Expected: Projects.test.js fails on `queryByText(/View Details/i)` (overlay still present in old file) — the old page also fails the eyebrow assertion.

- [ ] **Step 3: Rewrite `src/pages/Projects.js`**

```jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      category: 'Agentic RAG',
      title: 'Sentinel — FCA Compliance Auditor',
      description: 'Agentic compliance auditor for UK fintech marketing. A LangGraph agent decomposes copy into discrete claims, retrieves the FCA Handbook rules each claim may breach, and returns cited verdicts, routing low-confidence cases to human review. Built eval-first: a 199-claim golden dataset verified against the live FCA Handbook API gates every retrieval, prompt, and model change in CI, and the handbook search is published as an MCP server with prompt-injection defences.',
      techStack: ['Python', 'LangGraph', 'Hybrid RAG', 'Gemini', 'MCP', 'Evaluation-Gated CI'],
      github: null,
      demo: null,
      note: 'Code private for now — walkthrough available on request',
      stats: { 'Verdict accuracy': '79%', 'False-flag rate': '4%', 'Recall@5 lift': '+25%' }
    },
    {
      category: 'ML + Geospatial',
      title: 'Neighbourhood Pulse — London Property Intelligence',
      description: 'Gentrification and valuation-gap predictor for London. Ingests 350,000+ planning applications and 500,000+ property sales across all 33 boroughs via a reverse-engineered Elasticsearch API, scores every neighbourhood\u2019s valuation gap with an XGBoost model validated by a three-year backtest (flagged-undervalued areas grew +7.3% vs −1.5% for overvalued), and serves grounded, schema-enforced LLM briefs on a live Streamlit map backed by a Dockerised FastAPI service.',
      techStack: ['Python', 'XGBoost', 'Gemini API', 'FastAPI', 'Streamlit', 'Docker'],
      github: 'https://github.com/AniketYadav17/Neighbourhood-Pulse',
      demo: 'https://neighbourhood-pulse.streamlit.app',
      stats: { 'Records': '850K+', 'R² held-out': '0.44', 'Backtest spread': '+7.3%' }
    },
    {
      category: 'Computer Vision',
      title: 'Multi-Task Vision Transformer for Diabetic Retinopathy',
      description: 'MSc dissertation (Distinction) at the University of Surrey. A PyTorch + SegFormer pipeline that jointly performs classification and segmentation on ultra-widefield retinal images, halving model parameters (122M → 61M) while surpassing human grader benchmarks on lesion detection. Custom training loops with Dice + BCE loss handle <0.01% class imbalance, with multi-GPU training and systematic hyperparameter tuning.',
      techStack: ['PyTorch', 'SegFormer', 'Vision Transformers', 'Multi-GPU Training'],
      github: null,
      demo: null,
      note: 'MSc dissertation — thesis available on request',
      stats: { 'ROC-AUC': '0.97', 'Accuracy': '96%', 'Lesion F1': '0.86' }
    }
  ];

  const accent = darkMode ? 'text-indigo-400' : 'text-indigo-600';
  const border = darkMode ? 'border-gray-800' : 'border-gray-200';
  const secondary = darkMode ? 'text-gray-300' : 'text-gray-600';
  const muted = darkMode ? 'text-gray-500' : 'text-gray-500';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <header className="mb-14">
        <p className={`text-xs font-semibold tracking-widest uppercase ${accent}`}>Projects</p>
        <h1 className={`mt-2 text-3xl sm:text-4xl font-bold tracking-tight ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Production AI systems, end to end
        </h1>
        <p className={`mt-4 max-w-2xl text-lg ${secondary}`}>
          From problem framing and data acquisition through modelling, evaluation,
          and deployment — with evaluation-gated CI as standard practice.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`flex flex-col rounded-xl border p-6 transition-all duration-200 ${border} ${
              darkMode
                ? 'hover:border-indigo-400/60'
                : 'hover:border-indigo-600/60 hover:shadow-md'
            }`}
          >
            <p className={`text-xs font-semibold tracking-widest uppercase ${accent}`}>
              {project.category}
            </p>

            <h3 className={`mt-2 text-xl font-bold leading-snug ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {project.title}
            </h3>

            <p className={`mt-3 text-sm leading-relaxed flex-1 ${secondary}`}>
              {project.description}
            </p>

            <div className={`mt-6 pt-5 border-t grid grid-cols-3 gap-3 ${border}`}>
              {Object.entries(project.stats).map(([label, value]) => (
                <div key={label}>
                  <div className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {value}
                  </div>
                  <div className={`mt-0.5 text-[11px] leading-tight ${muted}`}>{label}</div>
                </div>
              ))}
            </div>

            <p className={`mt-5 text-xs ${muted}`}>{project.techStack.join(' · ')}</p>

            {(project.github || project.demo) ? (
              <div className="mt-4 flex gap-5 text-sm font-medium">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${accent} hover:underline`}
                  >
                    Code →
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${accent} hover:underline`}
                  >
                    Live demo →
                  </a>
                )}
              </div>
            ) : (
              <p className={`mt-4 text-xs italic ${muted}`}>{project.note}</p>
            )}
          </article>
        ))}
      </div>

      <div className={`mt-16 pt-10 border-t text-center ${border}`}>
        <p className={`text-lg ${secondary}`}>
          Interested in working together?
        </p>
        <Link
          to="/contact"
          className="mt-5 inline-flex px-6 py-3 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
};

export default Projects;
```

- [ ] **Step 4: Run tests, verify all pass**

Run: `$env:CI = "true"; npm test -- --watchAll=false`
Expected: 4 tests passed across 2 suites.

- [ ] **Step 5: Commit**

```bash
git add src/pages/Projects.js src/pages/Projects.test.js
git commit -m "Restyle project cards to text-first metric layout

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 5: Contact page

**Files:**
- Modify: `src/pages/Contact.js` (full rewrite below)
- Test: Create `src/pages/Contact.test.js`

**Interfaces:**
- Consumes: `darkMode` prop. Contact values and status/experience copy verbatim from the current file. No react-router imports needed (all links are `<a>`).

- [ ] **Step 1: Create the failing test `src/pages/Contact.test.js`**

```jsx
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('renders contact channels and current status', () => {
  render(<Contact darkMode={false} />);
  expect(screen.getByText('University of Surrey (2024–2025)')).toBeInTheDocument();
  expect(screen.getByText('Independent AI Engineer · Ex-Accenture')).toBeInTheDocument();
  const emailLinks = screen
    .getAllByRole('link')
    .filter((a) => a.getAttribute('href') === 'mailto:aniket.ydv99@gmail.com');
  expect(emailLinks.length).toBeGreaterThan(0);
  expect(screen.queryByText(/Visit LinkedIn/)).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify current state**

Run: `$env:CI = "true"; npm test -- --watchAll=false`
Expected: this suite PASSES against the current file (content is unchanged by design) — that is fine; it locks the content in before the restyle. Confirm 5 tests pass, then proceed.

- [ ] **Step 3: Rewrite `src/pages/Contact.js`**

```jsx
import React from 'react';
import {
  EnvelopeIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

const Contact = ({ darkMode }) => {
  const accent = darkMode ? 'text-indigo-400' : 'text-indigo-600';
  const border = darkMode ? 'border-gray-800' : 'border-gray-200';
  const secondary = darkMode ? 'text-gray-300' : 'text-gray-600';
  const heading = darkMode ? 'text-white' : 'text-gray-900';

  const contactInfo = [
    {
      name: 'Email',
      href: 'mailto:aniket.ydv99@gmail.com',
      Icon: EnvelopeIcon,
      description: 'Send me an email for collaborations, opportunities, or just to say hello!',
      cta: 'Send an email →',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/aniket-ydv/',
      Icon: BriefcaseIcon,
      description: 'Connect with me on LinkedIn for professional networking and updates.',
      cta: 'Visit LinkedIn →',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/AniketYadav17',
      Icon: CodeBracketIcon,
      description: 'Check out my open-source projects and contributions on GitHub.',
      cta: 'Visit GitHub →',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <header className="mb-14">
        <p className={`text-xs font-semibold tracking-widest uppercase ${accent}`}>Contact</p>
        <h1 className={`mt-2 text-3xl sm:text-4xl font-bold tracking-tight ${heading}`}>
          Get in touch
        </h1>
        <p className={`mt-4 max-w-2xl text-lg ${secondary}`}>
          I'm always interested in new opportunities, collaborations, and interesting
          conversations about agentic AI, RAG systems, and LLM evaluation.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactInfo.map(({ name, href, Icon, description, cta }) => (
          <div key={name} className={`rounded-xl border p-6 ${border}`}>
            <Icon className={`h-6 w-6 ${accent}`} />
            <h3 className={`mt-4 text-lg font-bold ${heading}`}>{name}</h3>
            <p className={`mt-2 text-sm leading-relaxed ${secondary}`}>{description}</p>
            <a
              href={href}
              {...(href.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className={`mt-4 inline-block text-sm font-medium ${accent} hover:underline`}
            >
              {cta}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`rounded-xl border p-6 ${border}`}>
          <div className="flex items-center gap-3">
            <AcademicCapIcon className={`h-6 w-6 ${accent}`} />
            <h3 className={`text-lg font-bold ${heading}`}>Current status</h3>
          </div>
          <div className={`mt-4 space-y-1 text-sm ${secondary}`}>
            <p className="font-medium">MSc in Artificial Intelligence — Distinction</p>
            <p>University of Surrey (2024–2025)</p>
            <p className={`font-semibold ${accent}`}>Available for opportunities</p>
          </div>
        </div>

        <div className={`rounded-xl border p-6 ${border}`}>
          <div className="flex items-center gap-3">
            <BriefcaseIcon className={`h-6 w-6 ${accent}`} />
            <h3 className={`text-lg font-bold ${heading}`}>Experience</h3>
          </div>
          <div className={`mt-4 space-y-1 text-sm ${secondary}`}>
            <p className="font-medium">2+ years shipping production AI systems</p>
            <p>Independent AI Engineer · Ex-Accenture</p>
            <p className={`font-semibold ${accent}`}>Agentic AI · RAG · LLM Evaluation</p>
          </div>
        </div>
      </div>

      <div className={`mt-16 pt-10 border-t text-center ${border}`}>
        <p className={`text-lg ${secondary}`}>
          Have a project in mind, or just want to connect?
        </p>
        <a
          href="mailto:aniket.ydv99@gmail.com"
          className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
        >
          <EnvelopeIcon className="h-5 w-5" />
          Send me an email
        </a>
      </div>
    </div>
  );
};

export default Contact;
```

- [ ] **Step 4: Run tests to verify all pass**

Run: `$env:CI = "true"; npm test -- --watchAll=false`
Expected: 5 tests passed across 3 suites.

- [ ] **Step 5: Commit**

```bash
git add src/pages/Contact.js src/pages/Contact.test.js
git commit -m "Restyle contact page to refined-minimal cards

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 6: Full verification and visual check

**Files:** none created — verification only. Fix-ups discovered here are committed as `"Visual polish from design review"`.

- [ ] **Step 1: Full test suite + production build**

Run: `$env:CI = "true"; npm test -- --watchAll=false` → expected: 5 passed.
Run: `npm run build` → expected: `Compiled successfully.`

- [ ] **Step 2: Grep for banned classes**

Run (Grep tool or ripgrep) over `src/pages`, `src/components/Navbar.js`, `src/components/Footer.js`, `src/App.js` for: `backdrop-blur|bg-gradient|bg-clip-text|hover:scale|animate-bounce|animate-pulse|blur-3xl`
Expected: zero matches in those files (legacy unused components under `src/components/` may still match — they are out of scope).

- [ ] **Step 3: Visual check in Chrome**

Start the dev server in the background (`npm start`, port 3000), then with the claude-in-chrome tools open `http://localhost:3000` and screenshot: Home, `#/projects`, `#/contact` — each in light and dark mode (click the navbar toggle), plus one narrow-viewport (~375px) pass for the mobile menu. Check: hairline borders visible in both modes, indigo accent only, metrics rows aligned, no emoji, no "View Details", footer present.

- [ ] **Step 4: Show screenshots / findings to the user and STOP**

Report the visual result to the user. Do NOT push or deploy — await explicit user approval, then `git push origin main` and `npm run deploy`.
