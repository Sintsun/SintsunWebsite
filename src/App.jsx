import { useEffect, useState } from 'react'
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Award, BriefcaseBusiness,
  Code2, Github, Globe2, Layers3, Linkedin, Mail, Menu, Sparkles, X,
} from 'lucide-react'

const copy = {
  en: {
    nav: ['Home', 'About', 'Projects', 'Skills', 'Certificates', 'Contact'],
    eyebrow: 'AI ENGINEER · BUILDER · LIFELONG LEARNER',
    greeting: "Hello, I'm",
    role: 'AI Engineer',
    hero: 'I build thoughtful AI-powered tools and automations that make everyday work better.',
    heroNote: 'From intelligent workflows to data-driven products, I enjoy turning complex ideas into practical experiences.',
    viewWork: 'Explore my work',
    sayHello: 'Let’s connect',
    scroll: 'Scroll to explore',
    available: 'Open to conversations',
    aboutLabel: 'A LITTLE ABOUT ME',
    aboutTitle: 'Curiosity first. Useful technology always.',
    aboutText: 'I’m Steven, a Computer and Data Engineering graduate with a passion for building reliable software and AI-powered solutions. My work brings together Python, large language models, API integrations, workflow automation, databases, and cloud technologies.',
    aboutText2: 'I enjoy learning by building—from experiments in data analysis and computer vision to practical automation that connects the tools people already use. I’m always happy to chat about website projects and AI automation.',
    currentRole: 'CURRENT ROLE',
    roleCompany: 'AI Engineer',
    roleDescription: 'Building AI-powered solutions, integrations, and automation workflows.',
    focusTitle: 'WHAT I LIKE TO BUILD',
    focus: ['AI & LLM integrations', 'Workflow automation', 'Data-driven applications', 'Cloud solutions'],
    projectKicker: 'SELECTED PROJECTS',
    projectTitle: 'A few things I’ve built',
    projectIntro: 'A collection of experiments and solutions across AI, automation, software, and design.',
    projectLink: 'View project',
    skillsLabel: 'TOOLS & TECHNOLOGIES',
    skillsTitle: 'My toolbox',
    skillsIntro: 'Technologies I’ve used to explore ideas and bring projects to life.',
    proficient: 'Proficient',
    intermediate: 'Intermediate',
    beginner: 'Beginner',
    certLabel: 'MILESTONES',
    certTitle: 'Certifications',
    certIntro: 'A couple of milestones in my ongoing cloud and AI learning journey.',
    viewCredential: 'View credential',
    contactLabel: 'SAY HELLO',
    contactTitle: 'Have an idea in mind?',
    contactText: 'I’m always open to a thoughtful conversation about technology, collaboration, or a project you’re exploring.',
    emailMe: 'Email me',
    footer: 'Designed and built with curiosity.',
    about: 'About', projects: 'Projects', skills: 'Skills', certificates: 'Certificates', contact: 'Contact',
    learnMore: 'Learn more', draft: 'View draft', prototype: 'View prototype',
  },
  zh: {
    nav: ['首頁', '關於我', '作品', '技能', '證書', '聯絡'],
    eyebrow: 'AI 工程師 · 創作者 · 持續學習中',
    greeting: '你好，我是',
    role: 'AI 工程師',
    hero: '我喜歡打造實用的 AI 工具與自動化，讓日常工作變得更好。',
    heroNote: '從智慧工作流程到數據產品，我樂於把複雜的想法轉化成實際可用的體驗。',
    viewWork: '探索我的作品',
    sayHello: '與我聯絡',
    scroll: '向下探索',
    available: '歡迎交流',
    aboutLabel: '關於我',
    aboutTitle: '保持好奇，持續打造有用的科技。',
    aboutText: '我是 Steven，擁有計算機與數據工程背景，熱衷於打造可靠的軟件與 AI 解決方案。我的工作結合 Python、大型語言模型、API 串接、流程自動化、資料庫與雲端技術。',
    aboutText2: '我喜歡透過實作持續學習，從數據分析、電腦視覺實驗，到串連日常工具的自動化流程。我也很樂意交流網站製作及 AI 自動化相關想法。',
    currentRole: '目前職位',
    roleCompany: 'AI 工程師',
    roleDescription: '開發 AI 解決方案、系統整合與自動化工作流程。',
    focusTitle: '我喜歡打造',
    focus: ['AI 與大型語言模型整合', '工作流程自動化', '數據應用', '雲端解決方案'],
    projectKicker: '精選作品',
    projectTitle: '一些我打造的作品',
    projectIntro: '涵蓋 AI、自動化、軟件與設計的實作與探索。',
    projectLink: '查看專案',
    skillsLabel: '工具與技術',
    skillsTitle: '我的工具箱',
    skillsIntro: '用來探索想法、實踐專案的技術。',
    proficient: '熟練',
    intermediate: '中級',
    beginner: '初級',
    certLabel: '學習里程碑',
    certTitle: '專業證書',
    certIntro: '雲端與 AI 學習旅程中的一些里程碑。',
    viewCredential: '查看證書',
    contactLabel: '保持聯絡',
    contactTitle: '有想法想聊聊嗎？',
    contactText: '歡迎與我交流科技、合作，或任何正在探索中的專案。',
    emailMe: '寄送電郵',
    footer: '以好奇心設計與打造。',
    about: '關於我', projects: '作品', skills: '技能', certificates: '證書', contact: '聯絡',
    learnMore: '了解更多', draft: '查看設計稿', prototype: '查看互動原型',
  },
}

const projects = [
  {
    image: 'smart-health.png', title: 'Smart Health Monitoring System', zhTitle: '智能健康監測系統',
    description: "Developed a system to monitor human eyes' irises and pupils, involving literature review, experiment design, data collection, and statistical hypothesis testing using R.",
    zhDescription: '透過監測眼睛虹膜與瞳孔開發健康監測系統，涵蓋文獻研究、實驗設計、數據收集及 R 統計假設檢定。',
    tags: ['R', 'Statistical Analysis'], link: 'https://github.com/Sintsun/Smart-health-monitoring-by-detecting-human-eyes-irises-and-pupils',
  },
  {
    image: 'telemedical.jpg', title: 'Elderly Health Telemedical System', zhTitle: '長者遙距醫療系統',
    description: 'Designed an embedded system for remote elderly healthcare, measuring vital signs with OLED, e-paper, and RFID integration.',
    zhDescription: '設計長者遙距醫療嵌入式系統，整合 OLED、電子紙與 RFID，量度心率、血壓等生命體徵。',
    tags: ['Embedded Systems', 'RFID', 'C++'], link: 'https://github.com/Sintsun/Elderly-Health-Telemedical-System',
  },
  {
    image: 'customer-analysis.png', title: 'Customer Analysis System', zhTitle: '顧客分析系統',
    description: 'Developed a retail analysis system using Intel RealSense for 3D store modeling, face tracking, and heatmap generation with Python, OpenCV, and MediaPipe.',
    zhDescription: '使用 Intel RealSense 建立零售分析系統，透過 Python、OpenCV 和 MediaPipe 製作 3D 店舖模型、人臉追蹤及熱力圖。',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'Intel RealSense'], link: 'https://github.com/Sintsun/Retail-CustomerAnalysisSystemUsingRealSense',
  },
  {
    image: 'money-flash.png', title: 'Money Flash Budgeting App', zhTitle: 'Money Flash 預算管理 App',
    description: 'Designed an iOS budgeting app to help young people in Hong Kong build savings habits, with expense tracking, budget analysis, and card integration.',
    zhDescription: '為香港年輕人設計 iOS 預算管理 App，協助建立儲蓄習慣，提供開支追蹤、預算分析與卡片整合。',
    tags: ['Figma', 'iOS', 'UI/UX Design'], links: [
      ['https://www.figma.com/design/oCEslslnSZ2KlZI5veVsbR/UI-design-Money-Fresh?node-id=0-1&t=RgzXCYHTLehzeSPu-1', 'draft'],
      ['https://www.figma.com/proto/oCEslslnSZ2KlZI5veVsbR/UI-design-Money-Fresh?node-id=0-1&t=RgzXCYHTLehzeSPu-1', 'prototype'],
    ],
  },
  {
    image: 'connect-four.png', title: 'Connect Four Game', zhTitle: '四子棋遊戲',
    description: 'Built a classic Connect Four game in C++ and Java, with a console interface, win detection, and alternating turns.',
    zhDescription: '以 C++ 和 Java 製作經典四子棋，具備主控台介面、勝負判定與輪流下棋功能。',
    tags: ['C++', 'Java'], links: [
      ['https://github.com/Sintsun/Connect-4-CPP', 'C++'],
      ['https://github.com/Sintsun/Connect-4-Java', 'Java'],
    ],
  },
  {
    image: 'n8n-workflow.png', title: 'n8n Email Automation Workflow', zhTitle: 'n8n 電郵自動化流程',
    description: 'Automated Gmail processing with Grok AI for content categorization and attachment detection, then stored results in a Notion database.',
    zhDescription: '以 n8n 自動處理 Gmail，透過 Grok AI 分類內容及偵測附件，再將結果儲存至 Notion 資料庫。',
    tags: ['n8n', 'Grok AI', 'Notion API', 'Gmail API'], link: 'https://github.com/Sintsun/n8nEmailAutomationWorkflow',
  },
  {
    image: 'daily-tech-ai-jobs-workflow.png', title: 'Daily Tech & AI Job Opportunities', zhTitle: '每日科技與 AI 職位探索',
    description: 'An n8n workflow that collects Hong Kong and remote jobs via SerpApi, filters with AWS Bedrock, stores results in DynamoDB, and sends a daily email report.',
    zhDescription: '以 n8n 和 SerpApi 搜集香港及遙距科技職位，透過 AWS Bedrock 篩選、存入 DynamoDB，並每日寄送電郵報告。',
    tags: ['n8n', 'SerpApi', 'AWS Bedrock', 'DynamoDB', 'Gmail'], link: 'https://github.com/Sintsun/Daily-Ai-Job-Scout',
  },
  {
    image: 'whatsapp-to-vector-db-workflow.png', title: 'WhatsApp to Vector Database', zhTitle: 'WhatsApp 對話向量資料庫',
    description: 'Parses exported WhatsApp chats into Q&A sessions and can send them to an n8n webhook for summarization and vector database ingestion.',
    zhDescription: '將匯出的 WhatsApp 對話整理成問答內容，並可傳送至 n8n webhook 進行摘要與向量資料庫匯入。',
    tags: ['Python', 'n8n', 'Webhook', 'pgvector'], link: 'https://github.com/Sintsun/Whatsapp-To-Vector-DataBase',
  },
]

const skills = [
  { name: 'Python', level: 'proficient', icon: 'python/python-original.svg' },
  { name: 'C++', level: 'intermediate', icon: 'cplusplus/cplusplus-original.svg' },
  { name: 'Java', level: 'intermediate', icon: 'java/java-original.svg' },
  { name: 'R', level: 'intermediate', icon: 'r/r-original.svg' },
  { name: 'SQL', level: 'intermediate', icon: 'azuresqldatabase/azuresqldatabase-original.svg' },
  { name: 'HTML', level: 'intermediate', icon: 'html5/html5-original.svg' },
  { name: 'JavaScript', level: 'intermediate', icon: 'javascript/javascript-original.svg' },
  { name: 'PyTorch', level: 'intermediate', icon: 'pytorch/pytorch-original.svg' },
  { name: 'TensorFlow', level: 'intermediate', icon: 'tensorflow/tensorflow-original.svg' },
  { name: 'AWS', level: 'beginner', icon: 'amazonwebservices/amazonwebservices-original-wordmark.svg' },
]

const certificates = [
  { title: 'AWS Certified AI Practitioner', image: 'aws-certified-ai-practitioner.png', link: 'https://www.credly.com/badges/107757e2-4d51-44d1-b447-7252db3deebb/linked_in?t=t4cj23' },
  { title: 'AWS Certified Cloud Practitioner', image: 'aws-certified-cloud-practitioner.png', link: 'https://www.credly.com/badges/9b5ef6e4-5dce-444e-959a-b136bc73bd0a' },
]

const iconUrl = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}`

function Reveal({ children, className = '', delay = 0 }) {
  return <div className={`reveal ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>{children}</div>
}

function ProjectCard({ project, language, t, index }) {
  const title = language === 'zh' ? project.zhTitle : project.title
  const description = language === 'zh' ? project.zhDescription : project.description
  return (
    <Reveal className="project-reveal" delay={(index % 3) * 75}>
      <article className="card glass-card project-card">
        <figure className="project-image-wrap">
          <img src={`./images/${project.image}`} alt={title} loading="lazy" />
          <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
        </figure>
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="project-description">{description}</p>
          <div className="tag-list" aria-label="Technologies">
            {project.tags.map((tag) => <span className="badge badge-outline project-tag" key={tag}>{tag}</span>)}
          </div>
          <div className="card-actions project-actions">
            {project.link && <a className="btn btn-ghost project-link" href={project.link} target="_blank" rel="noopener noreferrer">
              {t.projectLink}<ArrowUpRight size={16} aria-hidden="true" />
            </a>}
            {project.links?.map(([url, label]) => <a className="btn btn-ghost project-link" href={url} key={url} target="_blank" rel="noopener noreferrer">
              {t[label] || label}<ArrowUpRight size={16} aria-hidden="true" />
            </a>)}
          </div>
        </div>
      </article>
    </Reveal>
  )
}

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('sintsun-language') || 'zh')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = copy[language]
  const navIds = ['home', 'about', 'projects', 'skills', 'certificates', 'contact']

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-Hant' : 'en'
    localStorage.setItem('sintsun-language', language)
  }, [language])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' })
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [language])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell" data-build="2026-11-09-2">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="ambient ambient-three" aria-hidden="true" />

      <header className="site-header">
        <nav className="navbar glass-nav" aria-label={language === 'zh' ? '主要導覽' : 'Main navigation'}>
          <div className="navbar-start">
            <a className="brand" href="#home" onClick={closeMenu} aria-label="Sintsun home">
              <span className="brand-mark">S</span><span>Sintsun<span className="brand-dot">.</span></span>
            </a>
          </div>
          <div className={`navbar-center nav-links ${menuOpen ? 'nav-open' : ''}`}>
            {navIds.map((id, index) => <a key={id} href={`#${id}`} onClick={closeMenu}>{t.nav[index]}</a>)}
          </div>
          <div className="navbar-end nav-actions">
            <button className="btn btn-ghost language-toggle" onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')} aria-label={language === 'zh' ? 'Switch to English' : '切換至繁體中文'}>
              <Globe2 size={16} aria-hidden="true" /><span>{language === 'zh' ? 'EN' : '繁中'}</span>
            </button>
            <a href="#contact" className="btn btn-primary nav-cta">{t.sayHello}<ArrowUpRight size={15} aria-hidden="true" /></a>
            <button className="btn btn-ghost menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-grid page-width">
            <div className="hero-copy">
              <div className="hero-status"><span className="status-dot" />{t.available}</div>
              <p className="eyebrow hero-eyebrow"><span className="eyebrow-line" />{t.eyebrow}</p>
              <h1>{t.greeting}<br /><span className="hero-name">Steven Tang</span><span className="hero-period">.</span></h1>
              <p className="hero-role"><span className="role-mark"><Sparkles size={17} /></span>{t.role}</p>
              <p className="hero-lead">{t.hero}</p>
              <p className="hero-note">{t.heroNote}</p>
              <div className="hero-actions">
                <a className="btn btn-primary btn-lg hero-primary" href="#projects">{t.viewWork}<ArrowDownRight size={18} /></a>
                <a className="btn btn-ghost btn-lg hero-secondary" href="#contact">{t.sayHello}<ArrowUpRight size={17} /></a>
              </div>
              <div className="hero-socials" aria-label="Social links">
                <a href="https://github.com/Sintsun" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a>
                <a href="https://www.linkedin.com/in/sin-tsun-tang-291676268/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <span className="social-divider" /><span className="social-location">Hong Kong</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-orbit orbit-one" />
              <div className="hero-orbit orbit-two" />
              <div className="profile-halo" />
              <div className="profile-frame glass-card">
                <img src="./images/profile.jpg" alt="Steven Tang" fetchPriority="high" />
                <div className="profile-caption"><span className="caption-dot" /><span>{t.role}</span><span className="caption-divider">/</span><span>Hong Kong</span></div>
              </div>
              <div className="float-chip chip-code glass-card"><Code2 size={17} /><span>Python</span><i className="chip-sparkle">✦</i></div>
              <div className="float-chip chip-ai glass-card"><span className="ai-chip-icon"><Sparkles size={15} /></span><span>AI × Automation</span></div>
              <div className="visual-index">01 <span /> 06</div>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span>{t.scroll}</span><ArrowDown size={15} /></a>
          <span className="hero-decoration decor-top" aria-hidden="true">01 / INTRODUCTION</span>
          <span className="hero-decoration decor-side" aria-hidden="true">BUILD WITH PURPOSE</span>
        </section>

        <section id="about" className="section about-section page-width">
          <Reveal className="section-heading">
            <p className="eyebrow"><span className="eyebrow-line" />{t.aboutLabel}</p>
            <h2>{t.aboutTitle}</h2>
          </Reveal>
          <div className="about-layout">
            <Reveal className="about-story">
              <div className="about-number">01<span>—</span>04</div>
              <p>{t.aboutText}</p>
              <p>{t.aboutText2}</p>
              <div className="about-cta"><a href="mailto:sintsun01@gmail.com">{t.sayHello}<ArrowUpRight size={15} /></a></div>
            </Reveal>
            <Reveal className="about-aside" delay={120}>
              <article className="glass-card role-card">
                <div className="card-overline"><BriefcaseBusiness size={15} />{t.currentRole}</div>
                <h3>{t.roleCompany}</h3>
                <p>{t.roleDescription}</p>
                <span className="role-card-accent" />
              </article>
              <article className="glass-card focus-card">
                <div className="card-overline"><Layers3 size={15} />{t.focusTitle}</div>
                <ul>{t.focus.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}<ArrowUpRight size={13} /></li>)}</ul>
              </article>
            </Reveal>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="page-width">
            <Reveal className="section-heading projects-heading">
              <div><p className="eyebrow"><span className="eyebrow-line" />{t.projectKicker}</p><h2>{t.projectTitle}</h2></div>
              <p className="section-intro">{t.projectIntro}</p>
            </Reveal>
            <div className="projects-grid">
              {projects.map((project, index) => <ProjectCard key={project.image} project={project} language={language} t={t} index={index} />)}
            </div>
            <Reveal className="projects-footer"><span>MORE CURIOSITY, MORE BUILDS.</span><a href="https://github.com/Sintsun" target="_blank" rel="noopener noreferrer">{language === 'zh' ? '在 GitHub 查看全部' : 'Explore GitHub'}<ArrowUpRight size={16} /></a></Reveal>
          </div>
        </section>

        <section id="skills" className="section skills-section page-width">
          <Reveal className="section-heading centered-heading">
            <p className="eyebrow"><span className="eyebrow-line" />{t.skillsLabel}<span className="eyebrow-line" /></p>
            <h2>{t.skillsTitle}</h2><p className="section-intro">{t.skillsIntro}</p>
          </Reveal>
          <div className="skills-grid">
            {skills.map((skill, index) => <Reveal key={skill.name} delay={(index % 5) * 45}>
              <a className="skill-tile glass-card" href={skill.name === 'AWS' ? 'https://aws.amazon.com/' : `https://www.google.com/search?q=${encodeURIComponent(`${skill.name} official website`)}`} target="_blank" rel="noopener noreferrer" aria-label={`${skill.name} — ${t[skill.level]}`}>
                <span className="skill-logo"><img src={iconUrl(skill.icon)} alt="" loading="lazy" /></span>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{t[skill.level]}</span>
              </a>
            </Reveal>)}
          </div>
          <Reveal className="skills-footnote"><span className="footnote-star">✳</span>{language === 'zh' ? '不斷探索，持續學習。' : 'Always exploring. Always learning.'}</Reveal>
        </section>

        <section id="certificates" className="section certificates-section">
          <div className="page-width">
            <Reveal className="section-heading certificates-heading">
              <div><p className="eyebrow"><span className="eyebrow-line" />{t.certLabel}</p><h2>{t.certTitle}</h2></div>
              <p className="section-intro">{t.certIntro}</p>
            </Reveal>
            <div className="certificates-grid">
              {certificates.map((certificate, index) => <Reveal key={certificate.title} delay={index * 100}>
                <a className="certificate-card glass-card" href={certificate.link} target="_blank" rel="noopener noreferrer">
                  <div className="certificate-art"><img src={`./images/${certificate.image}`} alt={certificate.title} loading="lazy" /><span className="certificate-orb" /></div>
                  <div className="certificate-info"><div className="certificate-icon"><Award size={19} /></div><div><h3>{certificate.title}</h3><p>Amazon Web Services</p></div><ArrowUpRight className="certificate-arrow" size={19} /></div>
                  <span className="certificate-cta">{t.viewCredential}<ArrowRight size={14} /></span>
                </a>
              </Reveal>)}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section page-width">
          <Reveal className="contact-card glass-card">
            <div className="contact-glow" aria-hidden="true" />
            <div className="contact-copy">
              <p className="eyebrow"><span className="eyebrow-line" />{t.contactLabel}</p>
              <h2>{t.contactTitle}</h2><p>{t.contactText}</p>
              <a className="btn btn-primary btn-lg contact-button" href="mailto:sintsun01@gmail.com">{t.emailMe}<Mail size={17} /></a>
            </div>
            <div className="contact-side">
              <span className="contact-orbit" aria-hidden="true" /><span className="contact-at">@</span>
              <a href="mailto:sintsun01@gmail.com" className="contact-email">sintsun01<br />@gmail.com<ArrowUpRight size={16} /></a>
              <span className="contact-side-label">HONG KONG · OPEN TO CONNECT</span>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer page-width">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">S</span><span>Sintsun<span className="brand-dot">.</span></span></a>
        <p>© {new Date().getFullYear()} Steven Tang. {t.footer}</p>
        <div className="footer-socials"><a href="https://github.com/Sintsun" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={17} /></a><a href="https://www.linkedin.com/in/sin-tsun-tang-291676268/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="mailto:sintsun01@gmail.com" aria-label="Email"><Mail size={17} /></a></div>
      </footer>
    </div>
  )
}

export default App
