import React from "react"
import { HeadFC, PageProps } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { resume, RESUME_PDF_PATH } from "../data/resume"

const RESUME_FILENAME = "Harikrishnan-Namboothiri-Resume.pdf"

const AboutIndex: React.FC<PageProps> = () => {
    return (
        <Layout>
            <div>
                <div className="about-heading">
                    <Layout.Heading title="About Me" />
                    <a href={RESUME_PDF_PATH} download={RESUME_FILENAME} className="btn btn-primary">
                        ⬇ Download Resume (PDF)
                    </a>
                </div>

                {/* Professional Summary */}
                <div className="glass-card">
                    <h2 style={{ color: 'var(--color-heading)', marginBottom: 'var(--spacing-4)' }}>
                        Professional Summary
                    </h2>
                    {resume.summary.map((paragraph, index) => (
                        <p
                            key={index}
                            style={{
                                fontSize: 'var(--fontSize-3)',
                                lineHeight: 'var(--lineHeight-relaxed)',
                                marginBottom: index < resume.summary.length - 1 ? 'var(--spacing-4)' : 0
                            }}
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>

                {/* Work Experience */}
                <div className="glass-card">
                    <h2 style={{ color: 'var(--color-heading)', marginBottom: 'var(--spacing-6)' }}>
                        Professional Experience
                    </h2>

                    {resume.experience.map((job) => (
                        <div key={`${job.company}-${job.period}`} style={{ marginBottom: 'var(--spacing-8)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-3)' }}>
                                <div>
                                    <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-1)' }}>
                                        {job.title}
                                    </h3>
                                    <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fontSize-2)' }}>
                                        {job.company}
                                    </p>
                                </div>
                                <span style={{
                                    background: job.current ? 'var(--fg)' : 'var(--color-surface)',
                                    color: job.current ? 'var(--bg)' : 'var(--color-text)',
                                    padding: 'var(--spacing-1) var(--spacing-3)',
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: 'var(--fontSize-1)',
                                    whiteSpace: 'nowrap'
                                }}>
                                    {job.period}
                                </span>
                            </div>
                            <ul style={{ marginLeft: 'var(--spacing-4)' }}>
                                {job.highlights.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Technologies */}
                <div className="glass-card">
                    <h2 style={{ color: 'var(--color-heading)', marginBottom: 'var(--spacing-6)' }}>
                        Technologies & Skills
                    </h2>
                    <div className="grid grid-cols-2" style={{ gap: 'var(--spacing-6)' }}>
                        {resume.skills.map((group) => (
                            <div key={group.name}>
                                <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-3)' }}>
                                    {group.name}
                                </h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-2)' }}>
                                    {group.items.map((tech) => (
                                        <span
                                            key={tech}
                                            style={{
                                                background: 'var(--card)',
                                                padding: 'var(--spacing-2) var(--spacing-3)',
                                                borderRadius: '999px',
                                                fontSize: 'var(--fontSize-1)',
                                                border: '1px solid var(--line)'
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div className="glass-card">
                    <h2 style={{ color: 'var(--color-heading)', marginBottom: 'var(--spacing-6)' }}>
                        Education
                    </h2>
                    {resume.education.map((entry, index) => (
                        <div key={entry.degree} style={{ marginBottom: index < resume.education.length - 1 ? 'var(--spacing-4)' : 0 }}>
                            <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-1)' }}>
                                {entry.degree}
                            </h3>
                            <p style={{ color: 'var(--color-text-light)' }}>
                                {entry.school}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Contact */}
                <div className="glass-card">
                    <h2 style={{ color: 'var(--color-heading)', marginBottom: 'var(--spacing-6)' }}>
                        Get In Touch
                    </h2>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href={`mailto:${resume.contact.email}`} className="btn btn-primary">
                            📧 Email Me
                        </a>
                        <a href={RESUME_PDF_PATH} download={RESUME_FILENAME} className="btn btn-glass">
                            📄 Resume PDF
                        </a>
                        <a href={`https://${resume.contact.website}`} target="_blank" rel="noopener noreferrer" className="btn btn-glass">
                            🌐 Website
                        </a>
                        <a href={`//${resume.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="btn btn-glass">
                            💼 LinkedIn
                        </a>
                        <a href={`//${resume.contact.github}`} target="_blank" rel="noopener noreferrer" className="btn btn-glass">
                            🔗 GitHub
                        </a>
                        <a href={`tel:${resume.contact.phone.replace(/\s/g, '')}`} className="btn btn-glass">
                            📱 Call Me
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AboutIndex

export const Head: HeadFC = () => <Seo title="About" />
