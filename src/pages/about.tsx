import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const AboutIndex: React.FC<PageProps> = () => {
    return (
        <Layout>
            <Seo title="About" />
            <div>
                <Layout.Heading title="About Me" />
                
                {/* Professional Summary */}
                <div className="glass-card">
                    <h2 style={{ color: 'var(--color-heading)', marginBottom: 'var(--spacing-4)' }}>
                        Professional Summary
                    </h2>
                    <p style={{ 
                        fontSize: 'var(--fontSize-3)', 
                        lineHeight: 'var(--lineHeight-relaxed)',
                        marginBottom: 'var(--spacing-4)'
                    }}>
                        Senior Backend Engineer with 8+ years of experience architecting and scaling SaaS platforms from MVP 
                        to millions of monthly transactions. I specialize in high-scale API development and performance 
                        optimization, with proven success in driving user growth, revenue gains, and system efficiency improvements.
                    </p>
                    <p style={{ 
                        fontSize: 'var(--fontSize-3)', 
                        lineHeight: 'var(--lineHeight-relaxed)'
                    }}>
                        Skilled in Ruby on Rails, AWS, PostgreSQL, and CI/CD automation. Experienced in remote, 
                        cross-cultural team leadership across multiple time zones.
                    </p>
                </div>

                {/* Work Experience */}
                <div className="glass-card">
                    <h2 style={{ color: 'var(--color-heading)', marginBottom: 'var(--spacing-6)' }}>
                        Professional Experience
                    </h2>
                    
                    {/* Qoyod Current */}
                    <div style={{ marginBottom: 'var(--spacing-8)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-3)' }}>
                            <div>
                                <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-1)' }}>
                                    Senior Software Engineer
                                </h3>
                                <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fontSize-2)' }}>
                                    Qoyod — Remote
                                </p>
                            </div>
                            <span style={{ 
                                background: 'var(--color-primary)', 
                                color: 'white', 
                                padding: 'var(--spacing-1) var(--spacing-3)',
                                borderRadius: 'var(--radius-md)',
                                fontSize: 'var(--fontSize-1)'
                            }}>
                                Mar 2024 – Apr 2025
                            </span>
                        </div>
                        <ul style={{ marginLeft: 'var(--spacing-4)' }}>
                            <li>Led engineering team to deliver mission-critical features in Ruby on Rails & React</li>
                            <li>Reduced database load by 30% and cut API response times by 40%</li>
                            <li>Optimized reporting module architecture, reducing data processing time from 5s to 1s</li>
                            <li>Partnered with product teams to launch features contributing to user growth</li>
                        </ul>
                    </div>

                    {/* Event Inc */}
                    <div style={{ marginBottom: 'var(--spacing-8)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-3)' }}>
                            <div>
                                <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-1)' }}>
                                    Senior Software Engineer
                                </h3>
                                <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fontSize-2)' }}>
                                    Event Inc GmbH — Remote
                                </p>
                            </div>
                            <span style={{ 
                                background: 'var(--color-surface)', 
                                color: 'var(--color-text)', 
                                padding: 'var(--spacing-1) var(--spacing-3)',
                                borderRadius: 'var(--radius-md)',
                                fontSize: 'var(--fontSize-1)'
                            }}>
                                Mar 2022 – Oct 2023
                            </span>
                        </div>
                        <ul style={{ marginLeft: 'var(--spacing-4)' }}>
                            <li>Designed scalable API processing 5,000+ requests daily</li>
                            <li>Built GraphQL layer reducing redundant API calls</li>
                            <li>Integrated multiple third-party services and automated workflows</li>
                            <li>Used Elasticsearch to enhance search capabilities</li>
                        </ul>
                    </div>

                    {/* Previous Qoyod */}
                    <div style={{ marginBottom: 'var(--spacing-8)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-3)' }}>
                            <div>
                                <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-1)' }}>
                                    Software Engineer
                                </h3>
                                <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fontSize-2)' }}>
                                    Qoyod — Remote
                                </p>
                            </div>
                            <span style={{ 
                                background: 'var(--color-surface)', 
                                color: 'var(--color-text)', 
                                padding: 'var(--spacing-1) var(--spacing-3)',
                                borderRadius: 'var(--radius-md)',
                                fontSize: 'var(--fontSize-1)'
                            }}>
                                Apr 2019 – Feb 2022
                            </span>
                        </div>
                        <ul style={{ marginLeft: 'var(--spacing-4)' }}>
                            <li>Developed secure REST APIs handling millions of financial records</li>
                            <li>Designed Audit module enabling customer self-auditing</li>
                            <li>Implemented CI/CD pipeline reducing deployment time from 7 days to 1 day</li>
                            <li>Led code reviews and mentored junior engineers</li>
                        </ul>
                    </div>
                </div>

                {/* Technologies */}
                <div className="glass-card">
                    <h2 style={{ color: 'var(--color-heading)', marginBottom: 'var(--spacing-6)' }}>
                        Technologies & Skills
                    </h2>
                    <div className="grid grid-cols-2" style={{ gap: 'var(--spacing-6)' }}>
                        <div>
                            <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-3)' }}>
                                Languages & Frameworks
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-2)' }}>
                                {['Ruby on Rails', 'Rust', 'React', 'Next.js'].map((tech, index) => (
                                    <span 
                                        key={index}
                                        style={{ 
                                            background: 'var(--glass-bg)',
                                            padding: 'var(--spacing-2) var(--spacing-3)',
                                            borderRadius: 'var(--radius-md)',
                                            fontSize: 'var(--fontSize-1)',
                                            border: '1px solid var(--glass-border)'
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-3)' }}>
                                Databases & Infrastructure
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-2)' }}>
                                {['PostgreSQL', 'Redis', 'Elasticsearch', 'AWS', 'Docker'].map((tech, index) => (
                                    <span 
                                        key={index}
                                        style={{ 
                                            background: 'var(--glass-bg)',
                                            padding: 'var(--spacing-2) var(--spacing-3)',
                                            borderRadius: 'var(--radius-md)',
                                            fontSize: 'var(--fontSize-1)',
                                            border: '1px solid var(--glass-border)'
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className="glass-card">
                    <h2 style={{ color: 'var(--color-heading)', marginBottom: 'var(--spacing-6)' }}>
                        Education
                    </h2>
                    <div style={{ marginBottom: 'var(--spacing-4)' }}>
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-1)' }}>
                            MCA, Software Engineering & Web Development
                        </h3>
                        <p style={{ color: 'var(--color-text-light)' }}>
                            Federal Institute of Science and Technology (FISAT), 2016
                        </p>
                    </div>
                    <div>
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-1)' }}>
                            BCA, Software Engineering & Data Science
                        </h3>
                        <p style={{ color: 'var(--color-text-light)' }}>
                            Bharathiar University, 2013
                        </p>
                    </div>
                </div>

                {/* Contact */}
                <div className="glass-card">
                    <h2 style={{ color: 'var(--color-heading)', marginBottom: 'var(--spacing-6)' }}>
                        Get In Touch
                    </h2>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="mailto:harikrishnansr92@gmail.com" className="btn btn-primary">
                            📧 Email Me
                        </a>
                        <a href="https://harisr92.github.io" target="_blank" rel="noopener noreferrer" className="btn btn-glass">
                            🌐 Website
                        </a>
                        <a href="//linkedin.com/in/harikrishnan-namboothiri" target="_blank" rel="noopener noreferrer" className="btn btn-glass">
                            💼 LinkedIn
                        </a>
                        <a href="//github.com/harisr92" target="_blank" rel="noopener noreferrer" className="btn btn-glass">
                            🔗 GitHub
                        </a>
                        <a href="tel:+918281232380" className="btn btn-glass">
                            📱 Call Me
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AboutIndex
