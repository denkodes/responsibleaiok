/**
 * CONTENT CONSTANTS
 * 
 * Centralized content management for easy editing.
 * All text content lives here - no hunting through components!
 */

/* ============================================
   SITE METADATA
   ============================================ */
export const SITE_METADATA = {
  title: "Responsible AI OK | Community-Rooted Responsible AI in Oklahoma",
  description: "Responsible AI OK builds AI governance capacity for Oklahoma nonprofits and civic organizations through education, workshops, and practical guidance. Seeking foundation partnerships to expand statewide impact.",
  url: "https://responsibleaiok.org",
  ogImage: "/og-image.png",
  contactEmail: "hello@responsibleaiok.org",
} as const;

/* ============================================
   ORGANIZATION INFO
   ============================================ */
export const ORG_INFO = {
  name: "Responsible AI OK",
  formerName: "AI Safety Tulsa",
  tagline: "Building responsible AI readiness in Oklahoma",
  location: "Oklahoma",
} as const;

/* ============================================
   NAVIGATION LINKS
   ============================================ */
export const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Blog", href: "/blog" },
  { label: "Mission", href: "/#mission" },
  { label: "Activities", href: "/#activities" },
  { label: "Why It Matters", href: "/#why-it-matters" },
  { label: "About", href: "/#about" },
] as const;

/* ============================================
   HERO SECTION
   ============================================ */
export const HERO_CONTENT = {
  organizationName: ORG_INFO.name,
  kicker: `Formerly ${ORG_INFO.formerName}`,
  subhead: "Responsible AI OK helps Oklahoma communities and institutions make informed, safe decisions about AI through events, workshops, education, and AI governance guidance.",
  ctaText: "Get Involved",
  ctaHref: "#get-involved",
  secondaryCtaText: "Explore Mission",
  secondaryCtaHref: "#mission",
} as const;

/* ============================================
   MISSION SECTION
   ============================================ */
export const MISSION_CONTENT = {
  heading: "Our Mission",
  statement: "Responsible AI OK supports Oklahoma as artificial intelligence becomes part of everyday work and public life. We focus on practical readiness. We help nonprofits, civic organizations, students, and community members build baseline AI literacy, understand real world risks, and make informed choices about responsible use.",
  supportLine: "Our work is grounded in a simple belief: technology must serve the people and communities we call home.",
} as const;

/* ============================================
   ACTIVITIES SECTION
   ============================================ */
export const ACTIVITIES_CONTENT = {
  heading: "Our Activities",
  subheading: "Practical ways we build responsible AI readiness across Oklahoma.",
  activities: [
    {
      id: "events",
      title: "Events",
      description: "Community events and speaker sessions that help Oklahomans understand where AI is showing up and what responsible adoption can look like in schools, workplaces, and public services.",
      icon: "users",
    },
    {
      id: "workshops",
      title: "Workshops",
      description: "Workshops that introduce responsible AI concepts, real-world risks, and practical implications for civic, nonprofit, and educational settings. This includes collaborative awareness events delivered with partners such as the AI Safety Awareness Project.",
      icon: "book-open",
    },
    {
      id: "education",
      title: "Education",
      description: "Education that supports deeper engagement with responsible AI, AI governance, and long-term safety, including policy, oversight, and institutional decision-making. This includes connecting participants to established global cohorts such as AIS Collab, alongside efforts to expand governance-focused education through partnerships, facilitation, and locally curated programming.",
      icon: "lightbulb",
    },
    {
      id: "guidance",
      title: "AI Governance",
      description: "Practical guidance on AI governance for nonprofits and civic organizations, including risk-aware policies, oversight practices, and accountable decision-making suited to real operational constraints.",
      icon: "shield-check",
    },
  ],
  closingLine: "Our activities evolve in response to community needs and emerging challenges. As funding grows, we plan to expand partner led learning and develop additional curriculum and resources in house.",
} as const;

/* ============================================
   WHY IT MATTERS SECTION
   ============================================ */
export const WHY_IT_MATTERS_CONTENT = {
  heading: "Why It Matters",
  narrative: "AI is reshaping education, work, and public services. Innovation often concentrates in major tech hubs, but impacts are felt here in Oklahoma across schools, healthcare, energy, small businesses, and tribal nations. Building local capacity now helps communities adopt tools responsibly, protect people from preventable harms, and participate in how these systems are used in practice.",
} as const;

/* ============================================
   ABOUT SECTION
   ============================================ */
export const ABOUT_CONTENT = {
  kicker: "Background",
  heading: "About Us",
  paragraphs: [
    "Responsible AI OK is a public interest initiative rooted in Oklahoma. We bring people together across community, nonprofit, civic, and education contexts to build responsible AI readiness that reflects local needs and values, while staying connected to national and global work.",
    "We previously operated as AI Safety Tulsa and continue that mission under Responsible AI OK, with an expanded focus on practical adoption, education, and governance.",
    "Our programs, collaborations, and partnerships are designed to support long-term responsible AI capacity across the state.",
  ],
  fundingLine: null,
} as const;

/* ============================================
   TEAM SECTION (Added)
   ============================================ */
export const TEAM_CONTENT = {
  heading: "Our Team",
  subheading: "Community leaders and technical experts building a responsible future.",
  members: [
    {
      name: "Dennis Howell",
      role: "Co-Founder & Director",
      linkedIn: "https://www.linkedin.com/in/denh/",
      image: "",
    },
    {
      name: "Shayna Talton",
      role: "Co-Founder & Head of Community",
      linkedIn: "https://www.linkedin.com/in/shaynatalton/",
      image: "",
    },
    {
      name: "Daryl Misrac",
      role: "Board Member",
      linkedIn: "https://www.linkedin.com/in/daryl-misrac/",
      image: "",
    },
  ],
} as const;

/* ============================================
   GET INVOLVED SECTION
   ============================================ */
export const GET_INVOLVED_CONTENT = {
  heading: "Get Involved",
  subheading: "Join our community",
  form: {
    fields: {
      firstName: {
        label: "First Name",
        placeholder: "Your first name",
        required: true,
        type: "text",
      },
      email: {
        label: "Email",
        placeholder: "your.email@example.com",
        required: true,
        type: "email",
      },
      organization: {
        label: "Organization (Optional)",
        placeholder: "Your organization or affiliation",
        required: false,
        type: "text",
      },
      interest: {
        label: "Area of Interest",
        required: false,
        type: "select",
        options: [
          { value: "", label: "Select an option" },
          { value: "general", label: "General Inquiry" },
          { value: "partnership", label: "Partnership Opportunities" },
          { value: "volunteer", label: "Volunteer" },
          { value: "newsletter", label: "Newsletter Only" },
          { value: "events", label: "Event Notifications" },
        ],
      },
    },
    submitText: "Stay Connected",
    privacyNotice: "We use this information only to share updates and opportunities to participate. We do not sell personal data.",
  },
} as const;

/* ============================================
   FOOTER
   ============================================ */
export const FOOTER_CONTENT = {
  organizationName: ORG_INFO.name,
  blurb: "Responsible AI OK builds responsible AI readiness in Oklahoma through events, workshops, education, and practical guidance.",
  contactEmail: SITE_METADATA.contactEmail,
  social: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/company/aistulsa/", icon: "linkedin" },
    { platform: "Facebook", url: "https://www.facebook.com/p/AI-Safety-Tulsa-61574217595795/", icon: "facebook" },
    { platform: "Instagram", url: "https://www.instagram.com/aistulsa/", icon: "instagram" },
  ],
  copyright: `© ${new Date().getFullYear()} ${ORG_INFO.name}. All rights reserved.`,
} as const;

/* ============================================
   HUBSPOT CONFIGURATION
   ============================================ */
export const HUBSPOT_CONFIG = {
  portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || "",
  formId: process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID || "",
  useNativeForm: !process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID,
} as const;
