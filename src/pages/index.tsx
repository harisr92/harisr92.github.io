import { HeadFC, Link, PageProps } from "gatsby";
import React from "react"
import Layout from "../components/Layout"
import Seo from '../components/Seo';
import SkyHero from '../components/SkyHero';

function myDetails(): React.JSX.Element {
  return (
    <Layout hero={<SkyHero />}>
      <section className="block">
        <p className="lede">Backends that hold steady when the traffic doesn't.</p>
        <p className="sub">
          Senior Backend Engineer with <strong>8+ years of experience</strong> architecting and scaling SaaS
          platforms from MVP to millions of monthly transactions. Specialized in high-scale API development and
          performance optimization, with a focus on <span className="text-gradient">Ruby on Rails</span> and{' '}
          <span className="text-gradient">AWS</span>.
        </p>
        <div className="stats-row">
          <div><strong>5,000+</strong><h3>Daily API requests</h3><p>Served reliably on production SaaS platforms.</p></div>
          <div><strong>40%</strong><h3>Performance improvement</h3><p>From profiling, caching and query tuning.</p></div>
          <div><strong>30%</strong><h3>Database load reduction</h3><p>Fewer, cheaper queries against PostgreSQL.</p></div>
        </div>
      </section>

      <section className="block">
        <p className="lede">Currently building in Rust.</p>
        <p className="sub">
          Developing a fintech application in <span className="text-gradient">Rust</span>, with planned blockchain
          integration using <span className="text-gradient">Solana</span>.
        </p>
      </section>

      <section className="block cta">
        <p className="lede">Have a system that needs to scale?</p>
        <p className="sub">Read about the work, browse the notes, or just say hello.</p>
        <div className="action-buttons">
          <Link to="/about" className="btn btn-primary">
            View Experience
          </Link>
          <Link to="/blogs" className="btn btn-glass">
            Read My Blog
          </Link>
          <a href="mailto:harikrishnansr92@gmail.com" className="btn btn-glass">
            Get In Touch
          </a>
        </div>
      </section>
    </Layout>
  )
}

function underMaintenance(): React.JSX.Element {
  return (
      <div>
        <h1>Site under maintance</h1>
        <span>Thank you for understanding</span>
      </div>
  )
}

const Home: React.FC<PageProps> = () => {
  if(process.env.GATSBY_MAINTENANCE === "enabled") {
    return underMaintenance()
  } else {
    return myDetails()
  }
}

export default Home;

export const Head: HeadFC = () => <Seo title="Home" />
