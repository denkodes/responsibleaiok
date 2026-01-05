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
  description: "Responsible AI OK helps Oklahoma communities and institutions understand and adopt AI responsibly through events, workshops, education, and practical guidance.",
  url: "https://responsibleaiok.org",
  ogImage: "/og-image.png",
  contactEmail: "contact@responsibleaiok.org",
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
  { label: "Home", href: "#home" },
  { label: "Mission", href: "#mission" },
  { label: "Activities", href: "#activities" },
  { label: "Why It Matters", href: "#why-it-matters" },
  { label: "About", href: "#about" },
  { label: "Get Involved", href: "#get-involved" },
] as const;

/* ============================================
   HERO SECTION
   ============================================ */
export const HERO_CONTENT = {
  organizationName: ORG_INFO.name,
  kicker: `Formerly ${ORG_INFO.formerName}`,
  subhead: "Responsible AI OK helps Oklahoma communities and institutions understand and adopt AI responsibly through events, workshops, education, and practical guidance.",
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
      title: "Workshops and Training",
      description: "Hands on workshops for non technical and mixed audiences covering AI basics, common risks, responsible use, and practical implications for nonprofit work and civic life.",
      icon: "book-open",
    },
    {
      id: "education",
      title: "Education and Awareness",
      description: "Intro learning materials and curated resources that help communities build baseline AI literacy. More technical learning is delivered through partnerships, and we plan to expand curriculum over time as funding grows.",
      icon: "lightbulb",
    },
    {
      id: "guidance",
      title: "Practical Guidance",
      description: "Support for nonprofits and civic organizations exploring AI, including risk aware adoption guidance, basic governance practices, and decision support that fits real operational constraints.",
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
    "Responsible AI OK is a public interest initiative rooted in Oklahoma. We bring people together across community, nonprofit, civic, and education contexts to build responsible AI readiness that reflects local needs and values while staying connected to national and global work.",
    "We previously operated as AI Safety Tulsa and are continuing that mission under Responsible AI OK.",
    "While currently volunteer-led, we are delivering immediate impact through our programs, collaboration, and partnership. We are actively fundraising to establish a permanently staffed institution that can sustain and expand this critical work for Oklahoma's future.",
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
    { platform: "LinkedIn", url: "#", icon: "linkedin" },
    { platform: "Twitter", url: "#", icon: "twitter" },
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
