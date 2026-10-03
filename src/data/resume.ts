// Single source for the About page and the generated resume PDF (/resume.pdf)

export interface Job {
  title: string;
  company: string;
  period: string;
  location?: string;
  stack?: string[];
  current?: boolean;
  highlights: string[];
}

export interface Project {
  name: string;
  stack: string[];
  url?: string;
  highlights: string[];
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Degree {
  degree: string;
  school: string;
}

export const resume = {
  name: 'Harikrishnan Namboothiri',
  headline: 'Senior Backend Engineer · Product Engineer',
  focus: 'Ruby on Rails · Java · Rust · Distributed Systems · PostgreSQL · Kafka · AWS · React',
  location: 'India (open to remote)',
  contact: {
    email: 'harikrishnansr92@gmail.com',
    phone: '+91 82812 32380',
    website: 'profile.hari-in-it.in',
    linkedin: 'linkedin.com/in/harikrishnan-namboothiri',
    github: 'github.com/harisr92',
  },
  summary: [
    'Senior backend engineer with 9+ years building and scaling SaaS, financial, and supply-chain platforms. Deep expertise in Ruby on Rails, API architecture, and PostgreSQL, with current production work in Java, Kafka, and Redis on event-driven supply-chain services.',
    'Consistent record of measurable performance engineering — 30% lower database load, 40% faster API responses, and report generation cut from 5 seconds to 1 — alongside leading engineering teams of up to 15 from architecture through production delivery.',
  ],
  experience: [
    {
      title: 'Senior Software Engineer (Senior Consultant)',
      company: 'Thoughtworks',
      period: 'Sep 2025 – Present',
      location: 'India',
      stack: ['Java', 'PostgreSQL', 'Kafka', 'Redis', 'React'],
      current: true,
      // TODO: add scale (events/sec, stores/SKUs, p99 target) and one concrete hard problem solved
      highlights: [
        'Build backend services for a supply-chain replenishment platform on Java, PostgreSQL, Kafka, and Redis, delivering production features end to end.',
        'Implement replenishment workflows within an event-driven Kafka architecture, keeping inventory state consistent across asynchronous producers and consumers.',
        'Tune PostgreSQL data access and Redis caching for reliable, predictable service latency under production load.',
        'Work across backend and React frontend components, partnering with product and engineering teams to scope and ship client-facing features.',
      ],
    },
    {
      title: 'Senior Software Engineer (Rehired)',
      company: 'Qoyod',
      period: 'Mar 2024 – Apr 2025',
      location: 'Remote',
      stack: ['Ruby on Rails', 'React', 'PostgreSQL'],
      highlights: [
        // TODO: add baseline, e.g. "p95 from X ms to Y ms"
        'Cut database load by 30% and API response times by 40% through query, index, and application-layer optimization across systems serving millions of requests monthly.',
        'Redesigned the reporting module architecture, reducing data-processing time from 5 seconds to 1 second and enabling faster customer decision-making.',
        'Led a 15-person engineering team delivering mission-critical Ruby on Rails and React features, setting technical direction through architecture discussions and code review.',
        // TODO: add the actual growth/revenue number, or drop this bullet
        'Partnered with product and business teams to design and launch features that drove measurable user growth and revenue increase.',
      ],
    },
    {
      title: 'Senior Software Engineer',
      company: 'Event Inc GmbH',
      period: 'Mar 2022 – Oct 2023',
      location: 'Remote',
      stack: ['Ruby on Rails', 'GraphQL', 'Elasticsearch'],
      // TODO: add at least two numbers (request volume, search latency before → after, round-trips removed)
      highlights: [
        'Designed and implemented scalable backend APIs built for availability, low latency, maintainability, and future growth.',
        'Built a GraphQL layer that removed redundant API round-trips, improving frontend performance and developer productivity.',
        'Implemented Elasticsearch-backed search over large datasets, improving search performance and the end-user experience.',
        'Integrated multiple third-party services, expanding platform capabilities and automating cross-system workflows.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Qoyod',
      period: 'Apr 2019 – Feb 2022',
      location: 'Remote',
      stack: ['Ruby on Rails', 'PostgreSQL', 'Sidekiq'],
      highlights: [
        'Automated CI/CD delivery, reducing deployment time from 7 days to 1 day while streamlining releases and reducing post-deployment bugs.',
        'Designed and launched a self-service audit module that let customers run their own financial audits, reducing reliance on external auditing.',
        'Developed and maintained secure, high-availability REST APIs over millions of financial records.',
        'Moved heavy workloads onto Sidekiq background jobs, improving application throughput and supporting asynchronous processing.',
        'Led code reviews and mentored junior engineers, raising overall engineering quality.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Treniq',
      period: 'Mar 2018 – Mar 2019',
      location: 'Bangalore, India',
      stack: ['Ruby on Rails', 'Sidekiq'],
      highlights: [
        'Implemented automated testing and raised test coverage to 70%, reducing production defects.',
        'Integrated a secure escrow payment service and eliminated recurring database query timeouts through indexing and application-level optimization.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Redpanthers',
      period: 'Aug 2016 – Dec 2017',
      location: 'Kochi, India',
      stack: ['Ruby on Rails', 'OAuth'],
      highlights: [
        'Developed secure REST APIs with OAuth authentication and integrated payment gateways for production client applications.',
        'Built an RFID-based cart-tracking system for retail stores, improving in-store operational efficiency.',
      ],
    },
  ] as Job[],
  projects: [
    {
      name: 'accounting-core (open source)',
      stack: ['Rust', 'Tokio', 'BigDecimal'],
      url: 'https://github.com/harisr92/accounting-blue',
      highlights: [
        'Rust library for double-entry bookkeeping with transaction validation, balance tracking, and balance sheet, income statement, and trial balance reporting.',
        'Indian GST support (CGST/SGST/IGST), GSTR-1 export as GST portal JSON, print-ready tax invoice PDFs, and bank/payment-gateway reconciliation.',
        'Database-agnostic design through trait-based storage, so applications plug in their own persistence layer.',
      ],
    },
    {
      name: 'Fintech Backend Platform (closed source)',
      stack: ['Rust', 'Axum', 'Tokio', 'SQLx', 'PostgreSQL'],
      highlights: [
        'Building a fintech backend service in asynchronous Rust with Axum and Tokio, on top of accounting-core, backed by PostgreSQL through SQLx with versioned database migrations.',
      ],
    },
  ] as Project[],
  skills: [
    { name: 'Languages', items: ['Ruby', 'Java', 'Rust', 'TypeScript', 'JavaScript', 'SQL'] },
    { name: 'Backend', items: ['Ruby on Rails', 'Axum', 'Tokio', 'SQLx', 'REST APIs', 'GraphQL', 'Sidekiq'] },
    { name: 'Databases', items: ['PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch'] },
    { name: 'Messaging', items: ['Kafka', 'Event-driven architecture'] },
    { name: 'Frontend', items: ['React', 'Next.js'] },
    { name: 'Cloud & Infrastructure', items: ['AWS', 'Docker', 'GitHub Actions', 'GitLab CI/CD'] },
  ] as SkillGroup[],
  education: [
    { degree: 'MCA, Software Engineering & Web Development', school: 'Federal Institute of Science and Technology (FISAT), 2016' },
    { degree: 'BCA, Software Engineering & Data Science', school: 'Bharathiar University, 2013' },
  ] as Degree[],
};

export const RESUME_PDF_PATH = '/resume.pdf';
