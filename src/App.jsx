import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import flaskLogo from 'devicon/icons/flask/flask-original.svg';
import gitLogo from 'devicon/icons/git/git-original.svg';
import huggingFaceLogo from 'devicon/icons/huggingface/huggingface-original.svg';
import kerasLogo from 'devicon/icons/keras/keras-original.svg';
import mongodbLogo from 'devicon/icons/mongodb/mongodb-original.svg';
import mysqlLogo from 'devicon/icons/mysql/mysql-original.svg';
import numpyLogo from 'devicon/icons/numpy/numpy-original.svg';
import opencvLogo from 'devicon/icons/opencv/opencv-original.svg';
import pandasLogo from 'devicon/icons/pandas/pandas-original.svg';
import postgresqlLogo from 'devicon/icons/postgresql/postgresql-original.svg';
import pythonLogo from 'devicon/icons/python/python-original.svg';
import reactLogo from 'devicon/icons/react/react-original.svg';
import scikitLearnLogo from 'devicon/icons/scikitlearn/scikitlearn-original.svg';
import streamlitLogo from 'devicon/icons/streamlit/streamlit-original.svg';
import tensorflowLogo from 'devicon/icons/tensorflow/tensorflow-original.svg';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  HeartHandshake,
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

function PowerBiLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#F2C811" d="M3 13h4v8H3zm7-5h4v13h-4zm7-6h4v19h-4z" />
    </svg>
  );
}

function ExcelLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#107C41" d="M9 2h13v20H9z" />
      <path fill="#21A366" d="M13 2h9v20h-9z" />
      <path fill="#185C37" d="M2 5h12v14H2z" />
      <path d="m5 9 2 3-2 3m4-6-2 3 2 3" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function TableauLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <g fill="none" stroke="#1F75A8" strokeLinecap="round" strokeWidth="1.6">
        <path d="M12 12 12 3M12 12 20 12M12 12 12 21M12 12 4 12M12 12 6 6M12 12 18 6M12 12 6 18M12 12 18 18" />
      </g>
      <g fill="#1F75A8">
        <circle cx="12" cy="12" r="2.5" />
        <circle cx="12" cy="3" r="1.5" />
        <circle cx="20" cy="12" r="1.5" />
        <circle cx="12" cy="21" r="1.5" />
        <circle cx="4" cy="12" r="1.5" />
        <circle cx="6" cy="6" r="1.4" />
        <circle cx="18" cy="6" r="1.4" />
        <circle cx="6" cy="18" r="1.4" />
        <circle cx="18" cy="18" r="1.4" />
      </g>
    </svg>
  );
}

const specialties = [
  {
    number: '01',
    label: 'FOUNDATIONS',
    title: 'Programming & Data',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'SQL', icon: Database },
      { name: 'Pandas', logo: pandasLogo },
      { name: 'NumPy', logo: numpyLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgresqlLogo },
    ],
  },
  {
    number: '02',
    label: 'MODELING',
    title: 'Machine Learning & Vision',
    skills: [
      { name: 'Scikit-learn', logo: scikitLearnLogo },
      { name: 'TensorFlow', logo: tensorflowLogo },
      { name: 'Keras', logo: kerasLogo },
      { name: 'OpenCV', logo: opencvLogo },
      { name: 'Computer Vision', icon: ScanEye },
      { name: 'Feature Engineering', icon: BrainCircuit },
    ],
  },
  {
    number: '03',
    label: 'INTELLIGENCE',
    title: 'Generative AI & NLP',
    skills: [
      { name: 'NLP', icon: MessageCircle },
      { name: 'LLM APIs', icon: Sparkles },
      { name: 'Prompt Engineering', icon: Code2 },
      { name: 'Mistral AI', icon: BrainCircuit },
      { name: 'Hugging Face', logo: huggingFaceLogo },
      { name: 'OCR', icon: ScanEye },
      { name: 'Evaluation', icon: Check },
    ],
  },
  {
    number: '04',
    label: 'DELIVERY',
    title: 'Apps, APIs & BI',
    skills: [
      { name: 'React', logo: reactLogo },
      { name: 'REST APIs', icon: Network },
      { name: 'Flask', logo: flaskLogo },
      { name: 'Streamlit', logo: streamlitLogo },
      { name: 'Git', logo: gitLogo },
      { name: 'Power BI', brand: PowerBiLogo },
      { name: 'DAX', icon: BarChart3 },
      { name: 'Excel', brand: ExcelLogo },
      { name: 'Tableau', brand: TableauLogo },
    ],
  },
];

const projects = [
  {
    category: 'GENERATIVE AI',
    title: 'TimeLens — Manuscript Intelligence',
    description: 'An AI pipeline designed to extract Sanskrit text from scanned manuscript images, refine OCR output, and translate the text into five modern languages.',
    github: 'https://github.com/premjavali05/Sanskrit_Manuscripts',
    stack: ['Python', 'OpenCV', 'EasyOCR', 'NLP', 'Translation models'],
  },
  {
    category: 'LLM APPLICATION',
    title: 'Monument Recognition & History',
    description: 'A Streamlit application using a Mistral AI agent to recognize monument images and present historical context, with text input as a fallback.',
    github: 'https://github.com/premjavali05/Monument_Recognition',
    stack: ['Python', 'Streamlit', 'Mistral AI', 'Prompt Engineering'],
  },
  {
    category: 'FULL-STACK / CIVIC TECH',
    title: 'Infra-Alert — Civic Issue Reporting',
    description: 'A web platform for reporting local issues with images and geolocation, helping route actionable information into a structured complaint workflow.',
    github: 'https://github.com/premjavali05/Infra_Alert',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Cloudinary', 'Maps API'],
  },
  {
    category: 'NLP / MACHINE LEARNING',
    title: 'SMS Spam Detection',
    description: 'An end-to-end NLP workflow to classify messages as spam or ham, from text cleaning and TF-IDF feature extraction to model evaluation and an interactive demo.',
    github: 'https://github.com/premjavali05/SMS_Spam_Detection',
    stack: ['Python', 'Scikit-learn', 'NLTK', 'TF-IDF', 'Streamlit'],
  },
  {
    category: 'COMPUTER VISION',
    title: 'Plant Disease Detection',
    description: 'A transfer-learning image classifier that identifies plant diseases from leaf images and supports early intervention for more sustainable agriculture.',
    github: 'https://github.com/premjavali05/Plant-Disease-Detection-System',
    stack: ['TensorFlow', 'Keras', 'MobileNetV2', 'OpenCV', 'Streamlit', '97.35% test accuracy · 38 classes'],
  },
  {
    category: 'DATA ANALYTICS',
    title: 'HR Analytics Dashboard',
    description: 'An interactive dashboard exploring attrition, attendance, leave patterns, and workforce trends to help make people data easier to interpret.',
    github: 'https://github.com/premjavali05/Revenue_Insights',
    stack: ['Power BI', 'DAX', 'Excel', 'Data Visualization'],
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
            src={`${import.meta.env.BASE_URL}images/Prem.png`}
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
      </div>
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
            <h1>{PROFILE.name}</h1>
            <p className="hero-role">M.Tech in AI <span>×</span> Aspiring AI/ML Engineer</p>
            <p className="hero-summary">I turn ideas into useful technology — from machine learning and LLM-powered tools to full-stack applications that solve real-world problems.</p>
            <div className="hero-actions">
              <a className="button button--primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button--quiet" href={PROFILE.resume} target="_blank" rel="noreferrer">Resume <Download size={16} /></a>
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
      </div>
    </section>
  );
}

function ProofStrip() {
  const items = [
    { value: '9.4/10', label: 'Academic CGPA' },
    { value: 'IEEE', label: 'Research publication' },
    { value: '2nd', label: 'Hackathon winner' },
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
          <p className="lead">I'm currently pursuing M.Tech in Artificial Intelligence at REVA University, building on my foundation in Computer Science and Engineering.</p>
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
          <SectionHeading eyebrow="WHAT I BRING" title={<>One toolkit. <span>Multiple ways to build.</span></>} />
        </Reveal>
        <div className="specialty-grid">
          {specialties.map((item, i) => {
            return (
              <Reveal key={item.number} delay={i * 0.07} className="specialty-card-wrap">
                <article className="specialty-card">
                  <div className="specialty-card-heading">
                    <h3>{item.title}</h3>
                    <span className="specialty-card-meta">{item.number} / {item.label}</span>
                  </div>
                  <div className="skill-list">
                    {item.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      const BrandLogo = skill.brand;
                      return (
                        <span className="skill-item" key={skill.name}>
                          <span className={`skill-logo${skill.logo || BrandLogo ? ' skill-logo--brand' : ' skill-logo--concept'}`} aria-hidden="true">
                            {skill.logo ? <img src={skill.logo} alt="" /> : BrandLogo ? <BrandLogo /> : <SkillIcon size={17} strokeWidth={2} />}
                          </span>
                          <span className="skill-name">{skill.name}</span>
                        </span>
                      );
                    })}
                  </div>
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
  return (
    <Reveal delay={(index % 2) * 0.07} className="project-card-wrap">
      <article className="project-card">
        <div className="project-content">
          <div className="project-card-meta">
            <span className="project-category">{project.category}</span>
          </div>
          <h3 className="project-title">{project.title}</h3>
          <p>{project.description}</p>
          <div className="tag-list project-tags">{project.stack.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
          <div className="project-card-footer">
            {project.github ? (
              <a className="project-repository" href={project.github} target="_blank" rel="noreferrer">
                View repository <ArrowUpRight size={15} />
              </a>
            ) : (
              <span className="project-repository project-repository--missing">Repository link not provided</span>
            )}
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
          <span className="eyebrow timeline-mobile-heading">EXPERIENCE</span>
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
