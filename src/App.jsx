import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  HeartHandshake,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Network,
  ScanEye,
  Send,
  Sparkles,
  X,
} from 'lucide-react';

const PROFILE = {
  name: 'Prem Mahantesh Javali',
  role: 'M.Tech in AI · Aspiring AI Engineer',
  email: 'javaliprem123@gmail.com',
  location: 'Belagavi, Karnataka, India',
  github: 'https://github.com/premjavali05',
  linkedin: 'https://www.linkedin.com/in/prem-javali',
  resume: '/Prem_Mahantesh_Javali1.pdf',
};

const navItems = [
  ['About', 'about'],
  ['Skills', 'expertise'],
  ['Projects', 'projects'],
  ['Research', 'research'],
  ['Experience', 'experience'],
  ['Contact', 'contact'],
];

const specialties = [
  {
    number: '01',
    icon: BrainCircuit,
    title: 'AI & Machine Learning',
    description: 'Turning structured and unstructured data into useful predictions, classifiers, and practical ML workflows.',
    tags: ['Python', 'Scikit-learn', 'TensorFlow', 'Keras', 'NLP', 'Computer Vision'],
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Generative AI & LLMs',
    description: 'Building AI-assisted experiences with prompt design, structured outputs, OCR pipelines, and model APIs.',
    tags: ['LLM APIs', 'Prompt Engineering', 'Mistral AI', 'OCR', 'Evaluation'],
  },
  {
    number: '03',
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Connecting clean interfaces with reliable server-side workflows, data persistence, and useful integrations.',
    tags: ['React', 'JavaScript', 'REST APIs', 'PHP', 'Flask', 'MongoDB', 'MySQL'],
  },
  {
    number: '04',
    icon: Database,
    title: 'Data & Analytics',
    description: 'Cleaning and exploring data, finding patterns, and presenting findings through clear dashboards.',
    tags: ['SQL', 'Pandas', 'NumPy', 'Power BI', 'DAX', 'Excel', 'Tableau'],
  },
];

const projects = [
  {
    category: 'GENERATIVE AI',
    icon: Layers3,
    title: 'TimeLens — Manuscript Intelligence',
    description: 'An AI pipeline designed to extract Sanskrit text from scanned manuscript images, refine OCR output, and translate the text into five modern languages.',
    github: 'https://github.com/premjavali05/Sanskrit_Manuscripts',
    stack: ['Python', 'OpenCV', 'EasyOCR', 'NLP', 'Translation models'],
    visual: 'project-visual--mint',
    mark: 'अ',
    outcome: 'OCR → language-aware refinement → translation',
  },
  {
    category: 'COMPUTER VISION',
    icon: ScanEye,
    title: 'Plant Disease Detection',
    description: 'A transfer-learning image classifier that identifies plant diseases from leaf images and supports early intervention for more sustainable agriculture.',
    github: 'https://github.com/premjavali05/Plant-Disease-Detection-System',
    stack: ['TensorFlow', 'Keras', 'MobileNetV2', 'OpenCV', 'Streamlit'],
    visual: 'project-visual--green',
    mark: '◎',
    outcome: '97.35% test accuracy · 38 disease classes',
  },
  {
    category: 'LLM APPLICATION',
    icon: Sparkles,
    title: 'Monument Recognition & History',
    description: 'A Streamlit application using a Mistral AI agent to recognize monument images and present historical context, with text input as a fallback.',
    github: 'https://github.com/premjavali05/Monument_Recognition',
    stack: ['Python', 'Streamlit', 'Mistral AI', 'Prompt Engineering'],
    visual: 'project-visual--blue',
    mark: '⌘',
    outcome: 'Image understanding paired with grounded context',
  },
  {
    category: 'NLP / MACHINE LEARNING',
    icon: MessageCircle,
    title: 'SMS Spam Detection',
    description: 'An end-to-end NLP workflow to classify messages as spam or ham, from text cleaning and TF-IDF feature extraction to model evaluation and an interactive demo.',
    github: 'https://github.com/premjavali05/SMS_Spam_Detection',
    stack: ['Python', 'Scikit-learn', 'NLTK', 'TF-IDF', 'Streamlit'],
    visual: 'project-visual--peach',
    mark: '01',
    outcome: 'Text preprocessing · classification · real-time inference',
  },
  {
    category: 'FULL-STACK / CIVIC TECH',
    icon: Network,
    title: 'Infra-Alert — Civic Issue Reporting',
    description: 'A web platform for reporting local issues with images and geolocation, helping route actionable information into a structured complaint workflow.',
    github: 'https://github.com/premjavali05/Infra_Alert',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Cloudinary', 'Maps API'],
    visual: 'project-visual--violet',
    mark: '↗',
    outcome: 'Image uploads · geolocation · report generation',
  },
  {
    category: 'DATA ANALYTICS',
    icon: Database,
    title: 'HR Analytics Dashboard',
    description: 'An interactive dashboard exploring attrition, attendance, leave patterns, and workforce trends to help make people data easier to interpret.',
    github: 'https://github.com/premjavali05/Revenue_Insights',
    stack: ['Power BI', 'DAX', 'Excel', 'Data Visualization'],
    visual: 'project-visual--slate',
    mark: '▥',
    outcome: 'Workforce patterns presented at a glance',
  },
];

const experience = [
  {
    date: 'SEP 2025 — DEC 2025',
    title: 'Prompt Engineering Intern',
    company: 'S S Inphinite',
    text: 'Designed and tested prompt templates for generating React components and MongoDB schemas. Worked on structured JSON outputs, context refinement, and reviewing AI-generated code for consistency and quality.',
    tags: ['LLM APIs', 'Prompt Design', 'React', 'MongoDB'],
  },
  {
    date: 'DEC 2024 — JAN 2025',
    title: 'AI/ML Intern · SMS Spam Detection',
    company: 'Edunet Foundation · Microsoft & SAP collaboration',
    text: 'Built an NLP spam-classification pipeline covering text preprocessing, feature extraction, model training, error analysis, and a Streamlit interface for real-time predictions.',
    tags: ['Python', 'NLP', 'Scikit-learn', 'Streamlit'],
  },
  {
    date: 'DEC 2024 — JAN 2025',
    title: 'AI/ML Intern · Plant Disease Detection',
    company: 'Edunet Foundation · Shell collaboration',
    text: 'Prepared and augmented image data, trained a MobileNetV2-based classifier, and evaluated disease predictions across 38 plant disease classes.',
    tags: ['TensorFlow', 'Keras', 'MobileNetV2', 'Computer Vision'],
  },
];

const education = [
  { date: 'PRESENT', title: 'M.Tech in Artificial Intelligence', school: 'REVA University, Bengaluru', detail: 'Currently pursuing' },
  { date: 'DEC 2022 — MAY 2026', title: 'B.E. in Computer Science & Engineering', school: 'Jain College of Engineering and Research, Belagavi', detail: 'CGPA 9.4 / 10' },
];

function Reveal({ children, className = '', delay = 0, amount = 0.18, id }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      id={id}
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: reduceMotion ? 0 : 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [underlineStyle, setUnderlineStyle] = useState({ transform: 'translateX(0px)', width: 0 });
  const navRef = useRef(null);

  useLayoutEffect(() => {
    const nav = navRef.current;
    const activeLink = nav?.querySelector(`[data-section="${activeSection}"]`);
    if (!nav || !activeLink) return undefined;

    function updateUnderline() {
      const navBounds = nav.getBoundingClientRect();
      const linkBounds = activeLink.getBoundingClientRect();
      setUnderlineStyle({
        transform: `translateX(${linkBounds.left - navBounds.left}px)`,
        width: linkBounds.width,
      });
    }

    updateUnderline();
    window.addEventListener('resize', updateUnderline);
    return () => window.removeEventListener('resize', updateUnderline);
  }, [activeSection, menuOpen]);

  useEffect(() => {
    const observedSections = navItems
      .map(([, id]) => document.getElementById(id))
      .filter(Boolean);
    const visibleSections = new Map();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSections.set(entry.target.id, entry.intersectionRatio);
        } else {
          visibleSections.delete(entry.target.id);
        }
      });

      const mostVisible = [...visibleSections.entries()]
        .sort((a, b) => b[1] - a[1])[0];
      if (mostVisible) setActiveSection(mostVisible[0]);
    }, {
      rootMargin: '-25% 0px -60% 0px',
      threshold: [0, 0.15, 0.3, 0.5, 0.75, 1],
    });

    observedSections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function navigateTo(id) {
    setActiveSection(id);
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a className="brand" href="#home" aria-label="Prem Mahantesh Javali home">
          <span className="brand-name">Prem Mahantesh Javali</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav ref={navRef} className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label="Main navigation">
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              data-section={id}
              className={activeSection === id ? 'main-nav__link main-nav__link--active' : 'main-nav__link'}
              aria-current={activeSection === id ? 'location' : undefined}
              onClick={() => navigateTo(id)}
            >
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => navigateTo('contact')}>Let’s talk <ArrowUpRight size={15} /></a>
          <span className="nav-underline" style={underlineStyle} aria-hidden="true" />
        </nav>
      </div>
    </header>
  );
}

function Portrait() {
  const [imageFailed, setImageFailed] = useState(false);
  return (
    <div className="portrait-wrap">
      <div className="portrait-card">
        {!imageFailed ? (
          <img
            src="/images/Prem.png"
            alt="Prem M Javali"
            draggable={false}
            onContextMenu={(event) => event.preventDefault()}
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="portrait-placeholder" aria-label="Portrait placeholder">
            <span className="portrait-initials">PJ</span>
            <span className="portrait-placeholder-caption">Add your portrait</span>
          </div>
        )}
        <span className="portrait-label"><span className="status-dot" /> Building with purpose</span>
      </div>
      <div className="float-chip float-chip--top"><BrainCircuit size={17} /><span>AI that helps</span></div>
      <div className="float-chip float-chip--bottom"><Code2 size={17} /><span>Products that work</span></div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-grid-lines" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <Reveal>
            <div className="availability"><span className="status-dot" /> Open to AI/ML opportunities</div>
            <p className="hero-pretitle">HELLO, I’M</p>
            <h1>Prem M<br /><span>Javali.</span></h1>
            <p className="hero-role">M.Tech in AI <span>×</span> Aspiring AI/ML Engineer</p>
            <p className="hero-summary">I turn ideas into useful technology — from machine learning and LLM-powered tools to full-stack applications that solve real-world problems.</p>
            <div className="hero-actions">
              <a className="button button--primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button--quiet" href={PROFILE.resume} target="_blank" rel="noreferrer">Download résumé <Download size={16} /></a>
            </div>
            <div className="hero-socials" aria-label="Social links">
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
              <a href={`mailto:${PROFILE.email}`} aria-label="Email"><Mail size={17} /></a>
              <span className="social-separator" />
              <span className="location-label">Belagavi, Karnataka, India</span>
            </div>
          </Reveal>
        </div>
        <Reveal className="hero-art" delay={0.12}>
          <Portrait />
        </Reveal>
      </div>
      <div className="hero-bottom container">
        <span>SCROLL TO EXPLORE</span>
        <span className="scroll-line" />
        <span className="hero-index">01 / 06</span>
      </div>
    </section>
  );
}

function ProofStrip() {
  const items = [
    { value: '9.4/10', label: 'Academic CGPA' },
    { value: 'IEEE', label: 'Research publication' },
    { value: '2nd', label: 'Hackathon placement' },
  ];
  return (
    <section className="proof-section" aria-label="Highlights">
      <div className="container proof-grid">
        {items.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.07} className="proof-item">
            <span className="proof-value">{item.value}</span>
            <span className="proof-label">{item.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-layout">
        <Reveal className="about-statement">
          <span className="eyebrow"><span className="eyebrow-dot" /> A LITTLE ABOUT ME</span>
          <h2>Curious by nature.<br /><span>Builder by choice.</span></h2>
          <div className="about-quote-mark">“</div>
        </Reveal>
        <Reveal className="about-body" delay={0.1}>
          <p className="lead">I'm pursuing an M.Tech in Artificial Intelligence at REVA University, building on my foundation in Computer Science and Engineering.</p>
          <p>My interests span machine learning, computer vision, generative AI, and full-stack development. I enjoy taking ideas beyond theory and turning them into practical applications that solve meaningful problems.</p>
          <p>From developing a plant disease detection model and AI-powered monument recognition tools to building OCR pipelines and civic-tech platforms, I've explored how AI and software engineering can work together to create useful solutions.</p>
          <p>Through my projects and internship experiences, I've worked with Python, machine learning frameworks, LLM-based applications, and web technologies. I'm continually strengthening my understanding of AI while learning to build reliable, maintainable, and user-focused applications.</p>
          <a className="text-link" href="#experience">See my journey <ArrowRight size={16} /></a>
        </Reveal>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section className="section expertise-section" id="expertise">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="WHAT I BRING" title={<>One toolkit. <span>Multiple ways to build.</span></>} description="A multidisciplinary skill set for taking ideas from data and models all the way to usable products." />
        </Reveal>
        <div className="specialty-grid">
          {specialties.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.number} delay={i * 0.07} className="specialty-card-wrap">
                <article className="specialty-card">
                  <div className="card-topline"><span className="card-number">{item.number}</span><span className="icon-tile"><Icon size={21} strokeWidth={1.7} /></span></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="tag-list">{item.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
                  <span className="card-arrow"><ArrowUpRight size={18} /></span>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const Icon = project.icon;
  const githubUrl = project.github || PROFILE.github;
  return (
    <Reveal delay={(index % 2) * 0.07} className="project-card-wrap">
      <article className="project-card">
        <div className={`project-visual ${project.visual}`}>
          <div className="visual-grid" />
          <span className="project-category">{project.category}</span>
          <span className="project-mark">{project.mark}</span>
          <div className="visual-icon"><Icon size={21} /></div>
          <span className="visual-number">{String(index + 1).padStart(2, '0')}</span>
        </div>
        <div className="project-content">
          <div className="project-title-row"><h3>{project.title}</h3><ArrowUpRight size={18} className="project-title-arrow" /></div>
          <p>{project.description}</p>
          <div className="project-outcome"><span className="outcome-dot" />{project.outcome}</div>
          <div className="project-card-footer">
            <div className="tag-list project-tags">{project.stack.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
            <a className="button button--primary project-github-link" href={githubUrl} target="_blank" rel="noreferrer">
              <Github size={15} />
              {project.github ? 'View project on GitHub' : 'Browse GitHub profile'}
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <Reveal className="projects-heading-row">
          <SectionHeading eyebrow="SELECTED WORK" title={<>Built to solve <span>real problems.</span></>} description="A selection of projects across AI, computer vision, web platforms, and analytics." />
          <a className="button button--outline" href={PROFILE.github} target="_blank" rel="noreferrer">More on GitHub <ExternalLink size={15} /></a>
        </Reveal>
        <div className="projects-grid">
          {projects.map((project, i) => <ProjectCard key={project.title} project={project} index={i} />)}
        </div>
        <Reveal className="publication-banner" id="research">
          <div className="publication-icon"><BriefcaseBusiness size={21} /></div>
          <div className="publication-copy">
            <span className="eyebrow">RESEARCH & PUBLICATION</span>
            <h3>A Web-Based Public Grievance Redressal System with Image and Geolocation Support</h3>
            <p>Presented at IEEE INCSST · June 2025 · Chikodi, Karnataka, India</p>
          </div>
          <a href="https://ieeexplore.ieee.org/document/11210297" target="_blank" rel="noreferrer" className="publication-link" aria-label="Read IEEE publication"><ArrowUpRight size={21} /></a>
        </Reveal>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container experience-layout">
        <div className="experience-intro">
          <Reveal>
            <SectionHeading eyebrow="THE JOURNEY SO FAR" title={<>Learning by <span>building.</span></>} description="The teams and hands-on experiences that have shaped how I approach technology." />
            <div className="experience-note"><HeartHandshake size={19} /><span>Always learning. Always iterating.</span></div>
          </Reveal>
          <Reveal className="education-card" delay={0.12}>
            <span className="eyebrow">EDUCATION</span>
            {education.map((item) => (
              <div key={item.title}>
                <span className="timeline-date">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.school}</p>
                <span className="education-score">{item.detail}</span>
              </div>
            ))}
          </Reveal>
          <Reveal className="recognition-card" delay={0.16}>
            <span className="recognition-mark">✳</span>
            <div><strong>Academic Topper</strong><p>Department of Computer Science & Engineering · 2022–2023</p></div>
          </Reveal>
        </div>
        <div className="timeline">
          {experience.map((item, i) => (
            <Reveal key={item.title} className="timeline-item" delay={i * 0.08}>
              <div className="timeline-marker"><span /></div>
              <div className="timeline-card">
                <span className="timeline-date">{item.date}</span>
                <h3>{item.title}</h3>
                <span className="timeline-company">{item.company}</span>
                <p>{item.text}</p>
                <div className="tag-list">{item.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <Reveal className="contact-panel">
          <div className="contact-orb contact-orb--one" />
          <div className="contact-orb contact-orb--two" />
          <span className="eyebrow"><span className="eyebrow-dot" /> HAVE A PROBLEM WORTH SOLVING?</span>
          <h2>Let’s make<br /><span>something useful.</span></h2>
          <p>Have an opportunity, a product idea, or a challenge that needs a curious builder? I’d love to hear about it.</p>
          <div className="contact-actions">
            <a className="button button--primary button--light" href={`mailto:${PROFILE.email}?subject=Let%27s%20connect`}>Start a conversation <Send size={16} /></a>
            <button className="button button--contact-quiet" onClick={copyEmail}>{copied ? <Check size={16} /> : <Mail size={16} />}{copied ? 'Email copied' : PROFILE.email}</button>
          </div>
          <div className="contact-footer-line"><span><span className="status-dot" /> Usually happy to talk tech</span><span>{PROFILE.location}</span></div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <a className="brand footer-brand" href="#home" aria-label="Prem Mahantesh Javali home"><span className="brand-name">Prem Mahantesh Javali</span></a>
        <p>Building thoughtful solutions with AI and code.</p>
        <div className="footer-links">
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a>
          <a href={`mailto:${PROFILE.email}`} aria-label="Email"><Mail size={16} /></a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} Prem M Javali</span>
      </div>
    </footer>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress, transformOrigin: '0% 50%' }} />;
}

function BackToTop() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > 400);
  });

  if (!visible) return null;

  return (
    <a className="back-to-top" href="#home" aria-label="Back to top" title="Back to top">
      <ArrowUp size={19} />
    </a>
  );
}

export default function App() {
  return (
    <>
      <ScrollProgress />
      <BackToTop />
      <Navbar />
      <main>
        <Hero />
        <ProofStrip />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
