'use client';

import Layout from '@/components/Layout';

// Tech icons (Simple Icons via react-icons)
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiPostgresql,
  SiMongodb,
  SiAmazon,
  SiJenkins,
  SiDocker,
  SiGithubactions,
  SiKubernetes,
  SiDjango,
  SiSpringboot,
  SiFastapi,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiRedis,
  SiGooglecloud,
  SiVuedotjs,
  SiAngular,
  SiOracle,
  SiCplusplus,
  SiGo,
  SiElasticsearch,
  SiSqlite
} from 'react-icons/si';

import { IconType } from 'react-icons';

export default function Experience() {
  const techStack: Record<string, string[]> = {
    Languages: ['Python', 'JavaScript', 'TypeScript'],
    Frontend: ['React.js', 'Tailwind CSS', 'Next.js', 'React Native'],
    Backend: ['Node.js', 'Express.js', 'Flask'],
    Databases: ['PostgreSQL', 'MongoDB'],
    DevOps: ['AWS', 'Jenkins', 'Docker', 'GitHub Actions']
  };

  const companies = [
    { name: 'AVEROX SOLUTIONS', logo: 'AVEROX', period: 'AUG, 2024 - Present' },
    { name: 'ELEMENTS INTERACTIVE', logo: 'ELEMENTS', period: 'FEB 2024 - AUG 2024' },
  ];

  const experiences = [
    {
      company: 'AVEROX SOLUTION',
      period: { start: 'Present', end: 'AUG 2024' },
      roles: [
        {
          title: 'Frontend Development',
          responsibilities: [
            'Implemented responsive web applications using React.js and Next.js',
            'Optimized application performance resulting in 40% faster load times',
            'Collaborated with design team to create intuitive user interfaces'
          ]
        },
        {
          title: 'Backend Development',
          responsibilities: [
            'Developed RESTful APIs using Node.js and Express.js',
            'Implemented microservices architecture improving system scalability',
            'Integrated third-party payment systems and APIs'
          ]
        },
        {
          title: 'DevOps & Cloud',
          responsibilities: [
            'Deployed applications on AWS EC2 and Lambda',
            'Implemented CI/CD pipelines using GitHub Actions',
            'Managed containerized applications with Docker and Kubernetes'
          ]
        }
      ]
    },
      {
        company: 'ELEMENTS INTERACTIVE',
        period: { start: 'FEB 2024', end: 'AUG 2024' },
        roles: [
          {
            title: 'Junior Web Developer',
            responsibilities: [
              'Develop innovative and interactive web elements that enhance user experience',
              'Build responsive applications using modern frameworks and cutting-edge technologies',
              'Transform complex requirements into intuitive, user-friendly interfaces',
              'Collaborate with stakeholders to deliver high-quality solutions on time and within budget',
              'Stay current with industry trends and implement latest web development advancements'
            ]
          }
        ]
      }
  ];

  // Map tech label -> icon component
  const techIconMap: Record<string, IconType | null> = {
    // Languages
    Python: SiPython,
    TypeScript: SiTypescript,
    JavaScript: SiJavascript,
    Java: SiOracle,
    'C++': SiCplusplus,
    Go: SiGo,
    // Frontend
    'React.js': SiReact,
    'Next.js': SiNextdotjs,
    'Tailwind CSS': SiTailwindcss,
    'React Native': SiReact,
    'Vue.js': SiVuedotjs,
    Angular: SiAngular,
    HTML5: SiHtml5,
    CSS3: SiCss3,
    // Backend
    'Node.js': SiNodedotjs,
    'Express.js': SiExpress,
    Flask: SiFlask,
    Django: SiDjango,
    'Spring Boot': SiSpringboot,
    FastAPI: SiFastapi,
    // Databases
    PostgreSQL: SiPostgresql,
    MongoDB: SiMongodb,
    MySQL: SiMysql,
    Redis: SiRedis,
    SQLite: SiSqlite,
    Elasticsearch: SiElasticsearch,
    // DevOps
    AWS: SiAmazon,
    Jenkins: SiJenkins,
    Docker: SiDocker,
    'GitHub Actions': SiGithubactions,
    Kubernetes: SiKubernetes,
    'Google Cloud': SiGooglecloud,
    Azure: null
  };

  const getIconForTech = (tech: string): IconType | null =>
    techIconMap[tech] ?? null;

  return (
    <Layout currentPage="/experience">
      <div className="section">
        {/* Info Separator */}
        <div className="info-separator">
          <div className="vertical-line"></div>
          <div className="info-text">info</div>
          <div className="vertical-line"></div>
        </div>

        {/* Tech Stack Section */}
        <div className="tech-stack">
          <div className="subsection-title">
            <span>⭐</span> Tech Stack
          </div>
          <div className="tech-categories">
            {Object.entries(techStack).map(([category, items]) => (
              <div key={category} className="tech-category">
                <h3 className="category-title">{category}</h3>
                <div className="tech-items">
                  {items.map((item) => {
                    const Icon = getIconForTech(item);

                    return (
                      <div key={item} className="tech-item flex items-center gap-2">
                        {Icon ? (
                          <Icon style={{ fontSize: '4em' }} className="h-5 w-5 shrink-0" aria-hidden />
                        ) : (
                          <span className="h-5 w-5 inline-flex items-center justify-center text-xs font-semibold rounded bg-gray-100">
                            {item.slice(0, 2).toUpperCase()}
                          </span>
                        )}
                        <span>{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="work-experience">
          <div className="subsection-title">
            <span>⭐</span> Work Experience
          </div>
          <div className="subsection-title">Companies I have Worked for</div>
          <div className="companies-grid">
            {companies.map((company) => (
              <div key={company.name} className="company-card">
                <div className={`company-logo ${company.name === 'AVEROX SOLUTIONS' ? 'averox' : company.name === 'ELEMENTS INTERACTIVE' ? 'elements' : ''}`}>
                  {company.name === 'AVEROX SOLUTIONS' ? (
                    <img 
                      src="/images/AVEROX.png" 
                      alt="AVEROX Logo" 
                      className="averox-logo-img"
                    />
                  ) : company.name === 'ELEMENTS INTERACTIVE' ? (
                    <img 
                      src="/images/ELEMNETS.png" 
                      alt="ELEMENTS Logo" 
                      className="elements-logo-img"
                    />
                  ) : (
                    company.logo
                  )}
                </div>
                <div>{company.name}</div>
              </div>
            ))}
          </div>

          <div className="subsection-title">My Role and Responsibilities</div>
          <div className="experience-details">
            {experiences.map((exp) => (
              <div key={exp.company} className="experience-card">
                <div className="company-header">
                  <h3 className="company-name">{exp.company}</h3>
                </div>
                <div className="work-period">
                  <span>{exp.period.start}</span>
                  <div className="separator"></div>
                  <span>{exp.period.end}</span>
                </div>
                {exp.roles.map((role, index) => (
                  <div key={index} className="role-section">
                    <h4 className="role-title">{role.title}</h4>
                    <ul className="responsibilities">
                      {role.responsibilities.map((responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
