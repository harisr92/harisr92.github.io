/** @jsxImportSource react */
// Resume PDF rendered at build time by gatsby-node (see onPostBootstrap) from src/data/resume.ts
import React from "react"
import { Document, Page, Text, View, Link, StyleSheet } from "@react-pdf/renderer"
import { resume } from "../data/resume"

// Nightfall palette, print-friendly (light background)
const INK = "#1B1F3B"
const DUSK = "#3A3F6B"
const MUTED = "#5B6285"
const APRICOT = "#F2B880"
const LINE = "#D9D8EA"

const styles = StyleSheet.create({
  page: {
    paddingVertical: 32,
    paddingHorizontal: 46,
    fontFamily: "Helvetica",
    fontSize: 9,
    lineHeight: 1.4,
    color: INK,
  },
  header: {
    borderBottomWidth: 2,
    borderBottomColor: APRICOT,
    paddingBottom: 10,
    marginBottom: 10,
  },
  name: {
    fontFamily: "Times-Roman",
    fontSize: 26,
    lineHeight: 1.1,
  },
  headline: {
    fontSize: 11,
    color: DUSK,
    marginTop: 4,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
    color: MUTED,
    fontSize: 8.5,
  },
  contactItem: {
    marginRight: 12,
    color: MUTED,
    textDecoration: "none",
  },
  section: {
    marginBottom: 9,
  },
  sectionTitle: {
    fontFamily: "Times-Roman",
    fontSize: 13,
    color: DUSK,
    borderBottomWidth: 0.75,
    borderBottomColor: LINE,
    paddingBottom: 3,
    marginBottom: 5,
  },
  paragraph: {
    marginBottom: 4,
  },
  job: {
    marginBottom: 7,
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  jobTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
  },
  jobCompany: {
    color: MUTED,
    marginBottom: 3,
  },
  jobPeriod: {
    color: DUSK,
    fontSize: 8.5,
    marginLeft: 12,
  },
  bullet: {
    flexDirection: "row",
    marginBottom: 1,
  },
  bulletDot: {
    width: 10,
    color: APRICOT,
  },
  bulletText: {
    flex: 1,
  },
  columns: {
    flexDirection: "row",
    gap: 20,
  },
  column: {
    flex: 1,
  },
  skillGroup: {
    marginBottom: 4,
  },
  skillName: {
    fontFamily: "Helvetica-Bold",
  },
  degree: {
    fontFamily: "Helvetica-Bold",
  },
  school: {
    color: MUTED,
    marginBottom: 4,
  },
})

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
)

const ResumePdf: React.FC = () => {
  const { contact } = resume
  const links = [
    { label: contact.email, href: `mailto:${contact.email}` },
    { label: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { label: contact.website, href: `https://${contact.website}` },
    { label: contact.linkedin, href: `https://${contact.linkedin}` },
    { label: contact.github, href: `https://${contact.github}` },
  ]

  return (
    <Document title={`${resume.name} — Resume`} author={resume.name} subject={resume.headline}>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{resume.name}</Text>
          <Text style={styles.headline}>{resume.headline}</Text>
          <View style={styles.contactRow}>
            {links.map((l) => (
              <Link key={l.href} src={l.href} style={styles.contactItem}>
                {l.label}
              </Link>
            ))}
          </View>
        </View>

        <Section title="Professional Summary">
          {resume.summary.map((p, i) => (
            <Text key={i} style={styles.paragraph}>{p}</Text>
          ))}
        </Section>

        <Section title="Professional Experience">
          {resume.experience.map((job) => (
            <View key={`${job.company}-${job.period}`} style={styles.job} wrap={false}>
              <View style={styles.jobHeader}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Text style={styles.jobPeriod}>{job.period}</Text>
              </View>
              <Text style={styles.jobCompany}>{job.company}</Text>
              {job.highlights.map((h) => (
                <View key={h} style={styles.bullet}>
                  <Text style={styles.bulletDot}>•</Text>
                  <Text style={styles.bulletText}>{h}</Text>
                </View>
              ))}
            </View>
          ))}
        </Section>

        <View style={styles.columns}>
          <View style={styles.column}>
            <Section title="Technologies & Skills">
              {resume.skills.map((g) => (
                <View key={g.name} style={styles.skillGroup}>
                  <Text style={styles.skillName}>{g.name}</Text>
                  <Text>{g.items.join(" · ")}</Text>
                </View>
              ))}
            </Section>
          </View>
          <View style={styles.column}>
            <Section title="Education">
              {resume.education.map((e) => (
                <View key={e.degree}>
                  <Text style={styles.degree}>{e.degree}</Text>
                  <Text style={styles.school}>{e.school}</Text>
                </View>
              ))}
            </Section>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default ResumePdf
