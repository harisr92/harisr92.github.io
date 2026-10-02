// Single source for the About page and the generated resume PDF (/resume.pdf)

export interface Job {
  title: string;
  company: string;
  period: string;
  current?: boolean;
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
  headline: 'Senior Backend Engineer',
  contact: {
    email: 'harikrishnansr92@gmail.com',
    phone: '+91 82812 32380',
    website: 'profile.hari-in-it.in',
    linkedin: 'linkedin.com/in/harikrishnan-namboothiri',
    github: 'github.com/harisr92',
  },
  summary: [
    'Senior Backend Engineer with 8+ years of experience architecting and scaling SaaS platforms from MVP to millions of monthly transactions. I specialize in high-scale API development and performance optimization, with proven success in driving user growth, revenue gains, and system efficiency improvements.',
    'Skilled in Ruby on Rails, AWS, PostgreSQL, and CI/CD automation. Experienced in remote, cross-cultural team leadership across multiple time zones.',
  ],
  experience: [
    {
      title: 'Senior Software Engineer (Senior Consultant)',
      company: 'Thoughtworks — India · Java · PostgreSQL · Kafka · Redis · React',
      period: 'Sep 2025 – Present',
      current: true,
      highlights: [
        'Build backend services for a supply-chain replenishment platform on Java, PostgreSQL, Kafka, and Redis, delivering production features end to end',
        'Implement replenishment workflows within an event-driven Kafka architecture, keeping inventory state consistent across asynchronous producers and consumers',
        'Tune PostgreSQL data access and Redis caching for reliable, predictable service latency under production load',
        'Work across backend and React frontend components, partnering with product and engineering teams to scope and ship client-facing features',
      ],
    },
    {
      title: 'Senior Software Engineer',
      company: 'Qoyod — Remote',
      period: 'Mar 2024 – Apr 2025',
      highlights: [
        'Led engineering team to deliver mission-critical features in Ruby on Rails & React',
        'Reduced database load by 30% and cut API response times by 40%',
        'Optimized reporting module architecture, reducing data processing time from 5s to 1s',
        'Partnered with product teams to launch features contributing to user growth',
      ],
    },
    {
      title: 'Senior Software Engineer',
      company: 'Event Inc GmbH — Remote',
      period: 'Mar 2022 – Oct 2023',
      highlights: [
        'Designed scalable API processing 5,000+ requests daily',
        'Built GraphQL layer reducing redundant API calls',
        'Integrated multiple third-party services and automated workflows',
        'Used Elasticsearch to enhance search capabilities',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Qoyod — Remote',
      period: 'Apr 2019 – Feb 2022',
      highlights: [
        'Developed secure REST APIs handling millions of financial records',
        'Designed Audit module enabling customer self-auditing',
        'Implemented CI/CD pipeline reducing deployment time from 7 days to 1 day',
        'Led code reviews and mentored junior engineers',
      ],
    },
  ] as Job[],
  skills: [
    { name: 'Languages & Frameworks', items: ['Ruby on Rails', 'Rust', 'React', 'Next.js'] },
    { name: 'Databases & Infrastructure', items: ['PostgreSQL', 'Redis', 'Elasticsearch', 'AWS', 'Docker'] },
  ] as SkillGroup[],
  education: [
    { degree: 'MCA, Software Engineering & Web Development', school: 'Federal Institute of Science and Technology (FISAT), 2016' },
    { degree: 'BCA, Software Engineering & Data Science', school: 'Bharathiar University, 2013' },
  ] as Degree[],
};

export const RESUME_PDF_PATH = '/resume.pdf';
