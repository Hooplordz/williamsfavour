
/**
 * ─────────────────────────────────────────────────────────────
 * WILFA TECH · Favour Williams — all editable site content
 * ─────────────────────────────────────────────────────────────
 * Everything a visitor reads lives in this one file.
 * Edit the values below; the layout and animations adapt.
 *
 * Placeholders are deliberate. Anything set to null renders
 * as a clearly-marked placeholder until you supply the real value.
 */

export const person = {
  name: 'Favour Williams',
  shortName: 'Favour',
  company: 'WILFA TECH',
  title: 'Founder, WILFA TECH',
  location: 'Ogbomoso, Nigeria' as string | null,
}

export const links = {
  email: 'williamsfavouroluwasemilore@gmail.com',
  github: 'https://github.com/Hooplordz',
  githubHandle: 'Hooplordz',
  linkedin: null as string | null,
}

export const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'About', href: '#about' },
  { label: "Let's build", href: '#collaborate' },
]

/* ── 1 · Introduction ─────────────────────────────────────── */

export const hero = {
  eyebrow: 'Founder · WILFA TECH',
  headline: ['Machines', 'that think'],
  intro:
    "I'm Favour Williams. I design and build at the meeting point of robotics, artificial intelligence, connected devices and software — from the first sketch to a working system.",
  primaryCta: { label: 'See my work', href: '#work' },
  secondaryCta: { label: 'Contact me', href: '#contact' },
  ringText:
    'Robotics · Artificial Intelligence · Internet of Things · Software Engineering · ',
}

/* ── 2 · By the numbers ───────────────────────────────────── */

export type Stat = {
  value: number | null
  suffix?: string
  label: string
}

export const stats: Stat[] = [
  { value: 3, suffix: '', label: 'Years of hands-on engineering' },
  { value: 10, suffix: '', label: 'Projects designed & built' },
  { value: 30, suffix: '', label: 'Hardware prototypes' },
  { value: 50, suffix: '', label: 'Technology tools in the toolkit' },
]

/* ── 3 · Moving text strip ────────────────────────────────── */

export const tickerItems = [
  'Robotics',
  'Artificial Intelligence',
  'IoT',
  'Engineering',
  'Innovation',
  'Software Development',
]

/* ── 4 · Selected work ────────────────────────────────────── */

/**
 * Project status:
 * 'sample'      → Placeholder entry
 * 'in-progress' → Project still being built
 * 'completed'   → Finished project
 * 'planned'     → Project planned for development
 */

export type ProjectStatus =
  | 'completed'
  | 'in-progress'
  | 'planned'
  | 'sample'

export type Project = {
  slug: string
  name: string
  category: string
  role: string
  description: string
  stack: string[]
  image: string
  imageAlt: string
  liveUrl: string | null
  caseStudyUrl: string | null
  status: ProjectStatus
}

export const projects: Project[] = [
  {
    slug: 'smart-home-automation',
    name: 'Smart Home Automation',
    category: 'Smart Living · IoT',
    role: 'Founder & lead engineer — edit to your actual role',
    description:
      'A connected home system that links sensors, lighting and climate control to a single hub, so a home can respond to the people living in it.',
    stack: [
      'ESP32',
      'C++',
      'MQTT',
      'Node.js',
      'React',
      'TypeScript',
      'Home Assistant',
    ],
    image: '/img/smart-home.png',
    imageAlt:
      'Engraved illustration of a house cutaway with connected sensors and a central hub',
    liveUrl: null,
    caseStudyUrl: null,
    status: 'sample',
  },
  {
    slug: 'robotics-autonomous-systems',
    name: 'Autonomous Rover',
    category: 'Robotics & Autonomous Systems',
    role: 'Robotics engineer — edit to your actual role',
    description:
      'A small mobile robot that maps its surroundings and plans its own path — exploring perception, navigation and motor control on real hardware.',
    stack: [
      'ROS 2',
      'Python',
      'C++',
      'OpenCV',
      'LiDAR',
      'Raspberry Pi',
      'Arduino',
    ],
    image: '/img/robotics.png',
    imageAlt:
      'Engraved illustration of a four-wheeled rover with a lidar dome and camera mast',
    liveUrl: null,
    caseStudyUrl: null,
    status: 'sample',
  },
  {
    slug: 'iot-monitoring-systems',
    name: 'Field Sense',
    category: 'IoT Monitoring Systems',
    role: 'Systems & firmware engineer — edit to your actual role',
    description:
      'A network of low-power sensor nodes streaming environmental data to a live dashboard, with alerts when readings cross a threshold.',
    stack: [
      'LoRaWAN',
      'ESP32',
      'MicroPython',
      'InfluxDB',
      'Grafana',
      'Docker',
    ],
    image: '/img/iot-monitoring.png',
    imageAlt:
      'Engraved illustration of sensor nodes in a field connected wirelessly to a gateway',
    liveUrl: null,
    caseStudyUrl: null,
    status: 'sample',
  },
  {
    slug: 'ai-powered-applications',
    name: 'Applied Intelligence',
    category: 'AI-Powered Applications',
    role: 'AI & software engineer — edit to your actual role',
    description:
      'Software that puts machine learning to practical use — vision, language and prediction features wrapped in interfaces people actually enjoy.',
    stack: [
      'Python',
      'PyTorch',
      'TensorFlow',
      'FastAPI',
      'React',
      'TypeScript',
      'LLM APIs',
    ],
    image: '/img/ai-apps.png',
    imageAlt:
      'Engraved illustration of a neural network forming a human head in profile',
    liveUrl: null,
    caseStudyUrl: null,
    status: 'sample',
  },
]

/* ── 5 · Technical expertise ──────────────────────────────── */

export const expertise = [
  {
    domain: 'Robotics',
    line: 'Machines that sense, decide and move.',
    skills: [
      'ROS 2',
      'Kinematics',
      'Motor control',
      'Sensor fusion',
      'CAD & prototyping',
      'Embedded C/C++',
    ],
  },
  {
    domain: 'Artificial Intelligence',
    line: 'Models that turn data into decisions.',
    skills: [
      'Machine learning',
      'Computer vision',
      'PyTorch',
      'TensorFlow',
      'NLP & LLMs',
      'Data pipelines',
    ],
  },
  {
    domain: 'Internet of Things',
    line: 'Devices that talk to each other — reliably.',
    skills: [
      'ESP32 & Arduino',
      'Raspberry Pi',
      'MQTT',
      'LoRaWAN',
      'Low-power design',
      'Edge computing',
    ],
  },
  {
    domain: 'Software Engineering',
    line: 'Clean systems from firmware to front end.',
    skills: [
      'TypeScript',
      'React',
      'Python',
      'Node.js',
      'REST & APIs',
      'Git & CI',
    ],
  },
]

/* ── 6 · About ────────────────────────────────────────────── */

export const about = {
  heading: 'About',
  paragraphs: [
    "I'm Favour Williams — an engineer who has always wanted to know how things work, and then how to make them work better. That curiosity started with taking things apart and has grown into building systems that combine hardware and software.",
    'My work sits where four fields meet: robotics, artificial intelligence, the Internet of Things and software engineering. I enjoy the whole stack — soldering a sensor, writing the firmware, training the model and shipping the interface on top.',
    'I founded WILFA TECH to give that work a home: a studio for practical, well-engineered technology that solves real problems for real people, starting close to home and built to scale beyond it.',
  ],
  facts: [
    {
      label: 'Education',
      value: 'Ladoke Akintola School of Technology' as string | null,
      hint: 'Add your institution & programme',
    },
    {
      label: 'Based in',
      value: person.location,
      hint: 'Add your city & country',
    },
    {
      label: 'Founded',
      value: 'WILFA TECH' as string | null,
      hint: '',
    },
    {
      label: 'Focus',
      value: 'Robotics · AI · IoT · Software' as string | null,
      hint: '',
    },
  ],
  ambition:
    'The ambition: build intelligent machines and connected systems that are affordable, dependable and genuinely useful — and help grow the next generation of engineers along the way.',
  mission: {
    label: 'The mission behind WILFA TECH',
    statement: 'Engineer technology that thinks, senses and serves people.',
  },
}

/* ── 7 · Collaboration & contact ──────────────────────────── */

export const collaborate = {
  kicker: 'Open to collaboration',
  headline: ['Got an idea that', 'needs to move,', 'sense or think?'],
  body:
    "Whether it's a robot, a connected product, an AI feature or the software that ties it together — I'd love to hear about it. Research partners, startups, teams and fellow builders are all welcome.",
  points: [
    {
      title: 'Hardware and software, together',
      body: 'One person who understands the circuit, the firmware and the app — so nothing gets lost in between.',
    },
    {
      title: 'Prototype first',
      body: 'Ideas get tested on real hardware early, so decisions are made with evidence rather than guesses.',
    },
    {
      title: 'Clear communication',
      body: 'Honest timelines, plain language and regular progress you can actually see.',
    },
  ],
}

export const contact = {
  stamp: "Let's build",
  sub: 'Something remarkable',
  body: 'Tell me what you are working on. I read every message and reply personally.',
}
