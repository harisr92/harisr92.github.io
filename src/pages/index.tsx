import { css } from "@emotion/core";
import { PageProps } from "gatsby";
import React from "react"
import Layout from "../components/Layout"
import Seo from '../components/Seo';

function myDetails(): React.FC<PageProps> {
  return (
    <Layout>
      <Seo title="Home" />
      <div css={css`
            text-align: center;
          `} >
        <div className="glass-card" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Layout.Heading title="Harikrishnan Namboothiri" />
          <p style={{ 
            fontSize: 'var(--fontSize-3)', 
            color: 'var(--color-text-light)',
            marginBottom: '1rem',
            lineHeight: 'var(--lineHeight-relaxed)'
          }}>
            Senior Backend Engineer — High-Scale APIs & Performance Optimization
          </p>
          <p style={{ 
            fontSize: 'var(--fontSize-2)', 
            color: 'var(--color-text-muted)',
            marginBottom: '2rem',
            lineHeight: 'var(--lineHeight-relaxed)'
          }}>
            <span className="text-gradient">Ruby on Rails</span> & <span className="text-gradient">AWS</span> Expert
          </p>
        </div>
        
        <div className="glass-card">
          <Layout.Container>
            <p style={{ 
              fontSize: 'var(--fontSize-3)', 
              lineHeight: 'var(--lineHeight-relaxed)',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Senior Backend Engineer with <strong>8+ years of experience</strong> architecting and scaling SaaS platforms 
              from MVP to millions of monthly transactions. Specialized in high-scale API development and performance 
              optimization with proven success in driving user growth and revenue gains.
            </p>
            
            <div className="grid grid-cols-3" style={{ marginBottom: '2rem', gap: 'var(--spacing-6)' }}>
              <div className="glass" style={{ padding: 'var(--spacing-6)', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-2)' }}>5,000+</h3>
                <p style={{ fontSize: 'var(--fontSize-1)', color: 'var(--color-text-light)' }}>Daily API Requests</p>
              </div>
              <div className="glass" style={{ padding: 'var(--spacing-6)', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-2)' }}>40%</h3>
                <p style={{ fontSize: 'var(--fontSize-1)', color: 'var(--color-text-light)' }}>Performance Improvement</p>
              </div>
              <div className="glass" style={{ padding: 'var(--spacing-6)', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-2)' }}>30%</h3>
                <p style={{ fontSize: 'var(--fontSize-1)', color: 'var(--color-text-light)' }}>Database Load Reduction</p>
              </div>
            </div>

            <p style={{ 
              fontSize: 'var(--fontSize-3)', 
              lineHeight: 'var(--lineHeight-relaxed)',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Currently developing a fintech application in <span className="text-gradient">Rust</span>, 
              with planned blockchain integration using <span className="text-gradient">Solana</span>.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/about" className="btn btn-primary">
                View Experience
              </a>
              <a href="/blogs" className="btn btn-glass">
                Read My Blog
              </a>
              <a href="mailto:harikrishnansr92@gmail.com" className="btn btn-glass">
                Get In Touch
              </a>
            </div>
          </Layout.Container>
        </div>
      </div>
    </Layout>
  )
}

function underMaintenance(): React.FS<PageProps> {
  return (
      <div>
        <h1>Site under maintance</h1>
        <span>Thank you for understanding</span>
      </div>
  )
}

const Home: React.FC<PageProps> = ({
  data
}) => {
  if(process.env.GATSBY_MAINTENANCE === "enabled") {
    return (underMaintenance())
  } else {
    return(myDetails())
  }
}

export default Home;
