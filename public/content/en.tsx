import { PiPlantThin } from "react-icons/pi";
import React from "react";
import tw from "tailwind-styled-components";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiAirtable,
  SiAnsible,
  SiApachekafka,
  SiCanva,
  SiClickup,
  SiDocker,
  SiFigma,
  SiGit,
  SiJavascript,
  SiJenkins,
  SiJira,
  SiKotlin,
  SiKubernetes,
  SiNotion,
  SiRedis,
  SiSketch,
  SiSwift,
  SiTerraform,
  SiTrello,
  SiTypescript,
} from "react-icons/si";
import {
  RiReactjsLine,
  RiSupabaseFill,
  RiOpenaiLine,
  RiCopilotFill,
} from "react-icons/ri";
import { FaNodeJs, FaQuestionCircle } from "react-icons/fa";
import { SiAmazonaws, SiMicrosoftazure } from "react-icons/si";
import { SiZapier, SiSalesforce, SiNextdotjs } from "react-icons/si";
import { SiTailwindcss, SiGraphql, SiMongodb } from "react-icons/si";
import { SiVercel, SiFlutter, SiPostgresql } from "react-icons/si";
import { TbBrandPrisma } from "react-icons/tb";

export const nav = {
  logo: "",
  links: [
    {
      text: "Why",
      url: "/why",
    },
    {
      text: "Who",
      url: "/who",
    },
    {
      text: "What",
      url: "/services",
    },
    {
      text: "How",
      url: "/how",
    },
  ],
  cta: {
    text: "Book a Free Consultation",
    url: "#cta",
  },
  vcbutton: {
    text: "VC Due Diligence",
    url: "/forvcs",
  },
};
export const footer = {
  text: {
    title: "startupmike.com.",
    subtitle: "Feactional CTO based in Portugal",
    description: "",
    trademark: "All rights reserved.",
  },
  links: [
    {
      text: "Terms",
      url: "/terms",
    },
    {
      text: "Refunds",
      url: "/refunds",
    },
    {
      text: "Privacy",
      url: "/privacy",
    },
    {
      text: "GDPR",
      url: "/gdpr",
    },
  ],
};

export const homepage = {
  hero: {
    icon: <PiPlantThin size={100} />,
    heading: [
      "Your startup's product; built",
      "Product: Built",
      "Fractional-CTO for hire",
    ],
    subheading: [
      "Fractional CTO services tailored for fast-growing startups.",
      "Strategic tech leadership, without the full-time commitment.",
      "Your key to tech success, led by an product-focused CTO.",
      [
        "Your startup journey doesn't have to be a solo climb.",
        "Let's work together, every step of the way.",
      ],
    ],
    CTAText1: ["Get started", "Book a Free Consultation", "Let's Connect"],
    CTAText2: ["What is a Fractional CTO", "Learn more", "Let's Connect"],
  },
  definition: {
    icon: "",
    definition: ["I build product for early-stage tech startups"],
    forwhom:
      "Ideal for enterprise platforms & seed-stage startups lacking a technical co-founder, CTO or CPO.",
    delivers: [
      "Technical Leadership",
      "Product Strategy",
      "Hiring Strategy & Plans",
      "Technical Architecture",
      "Product Roadmaps",
      "Budgets & Financial Models",
      "MVP/MMP/MSP",
      "Product-Market Fit",
      "Investor Relations",
    ],
    purpose:
      "I have one primary objective: find product-market-fit. I focus who the customer is, what solves their pain, and how we make money doing it. I do this by building a product infrastructure that is flexible, scalable, and easily iterable so we can run experiments until we find what works.",
    cta: [
      {
        text: "Learn More",
        link: "#",
      },
      {
        text: "Get in Touch",
        link: "#",
      },
    ],
  },
  about: {
    icon: "../ico/vulcanhello.svg",
    image: "/img/stock_2.jpg",
    preheading: "About Me",
    heading: "Solving real-world problems.",
    description: [
      "With over two decades in tech, both as an advisor and a founder, I understand the challenges you're up against.",
      "Getting product built is hard. It's even harder when you're trying to do it without a technical background.",
      "I've been there. Knowing what to build, how to build it, and who to hire is daunting, and a mistake here is often what kills startups.",
      "You need an tech expert in your corner.",
    ],
    categories: ["Web2.0", "B2B", "SaaS", "Marketplaces", "B2C"],
    cta: [
      {
        text: "Learn more about me",
        link: "/about",
      },
    ],
  },
  services: {
    icon: <PiPlantThin size={100} />,
    heading: [
      "Your startup's product; built",
      "Product: Built",
      "Fractional-CTO for hire",
    ],
    subheading: [
      "Fractional CTO services tailored for fast-growing startups.",
      "Strategic tech leadership, without the full-time commitment.",
      "Your key to tech success, led by an product-focused CTO.",
      [
        "Your startup journey doesn't have to be a solo climb.",
        "Let's work together, every step of the way.",
      ],
    ],
    cta: [
      {
        text: "Learn More",
        link: "#",
      },
      {
        text: "Get in Touch",
        link: "#",
      },
    ],
    serviceList: [
      {
        name: "Fractional CTO",
        whofor: ["Startups", "Venture Studios", "Enterprises"],
        description:
          "Strategic tech leadership to build your MVP, engineering teams & find Product-Market-Fit.",
        deliverables: [
          "Strategy Package",
          "MVP Development",
          "Product Roadmap",
          "Investor Pitch Preparation",
        ],
        objectives: [
          "Achieve Product-Market-Fit",
          "Secure Initial Funding",
          "Build a Scalable Tech Stack",
          "Hire a World-Class Team",
        ],
      },
      {
        name: "Technical Due Diligence",
        whofor: ["VCs", "Angels"],
        description:
          "Helping investors evaluate the technical competencies of potential portfolio companies & their founders.",
        deliverables: [
          "Technical Audit Report",
          "Risk Assessment",
          "Recommendations",
          "Product Strategy",
        ],
        objectives: [
          "Investment Risk Mitigation",
          "Portfolio Value Addition",
          "Long-term Tech Viability",
          "Founder Technical Competency",
        ],
      },
      {
        name: "Product Roadmap Planning",
        whofor: ["Startups", "VCs", "Enterprises"],
        description:
          "Create a clear, actionable product roadmap aligned with business goals.",
        deliverables: [
          "Product Roadmap",
          "Resource Allocation Plan",
          "Milestone Tracking",
        ],
        objectives: [
          "Efficient Resource Use",
          "Business-Technical Alignment",
          "Market Entry Strategy",
        ],
      },
      {
        name: "MVP/MSP Development",
        whofor: ["Startups", "Enterprises"],
        description:
          "Lead your tech team to build a Minimum Viable or Sellable Product.",
        deliverables: [
          "MVP/MMP Build",
          "Quality Assurance Plan",
          "Launch Strategy",
        ],
        objectives: [
          "Product-Market Fit",
          "Fast Market Entry",
          "User Feedback Loop",
          "Investor Readiness",
        ],
      },
    ],
  },
  values: {
    header: {
      icon: "",
      image: "",
      preheading: "",
      heading: "",
      subheading: "FAQs",
      body: "",
    },
    list: [
      {
        name: "Empathy",
        icon: "heart",
        image: "empathy.jpg",
        subtitle: "Understanding First",
        description:
          "I deeply understand your challenges to create solutions that resonate.",
        sublist: [],
      },
      {
        name: "Data-Driven",
        icon: "chart",
        image: "data.jpg",
        subtitle: "Decisions by Numbers",
        description:
          "I let data guide our strategies, ensuring measurable and predictable outcomes.",
        sublist: [],
      },
      {
        name: "Craftsmanship",
        icon: "hammer",
        image: "craftsmanship.jpg",
        subtitle: "Built for Scale, Not Shortcuts",
        description:
          "I prioritize robust, custom solutions that are scalable and secure.",
        sublist: [],
      },
      {
        name: "Substance",
        icon: "anchor",
        image: "substance.jpg",
        subtitle: "Real Problems, Real Solutions",
        description:
          "I focus on building solutions for genuine problems, avoiding hype-driven cycles.",
        sublist: [],
      },
    ],
  },
  howitworks: {
    milestones: [
      {
        title: "Discovery",
        timeline: "First Week",
        subItems: [
          "Introductions",
          "Alignment Meeting",
          "Contract Finalization",
          "Service Plan",
        ],
      },
      {
        title: "Foundation",
        timeline: "First Month",
        subItems: [
          "Strategy Pack",
          "Tech Stack",
          "Initial Hiring",
          "Budget Plan",
        ],
      },
      {
        title: "MVP",
        timeline: "1-3 Months",
        subItems: ["MVP Specs", "Product Roadmap", "First Release"],
      },
      {
        title: "Iteration",
        timeline: "3-9 Months",
        subItems: ["Product-Market Fit", "Iterative Releases", "Seed Funding"],
      },
      {
        title: "Scale",
        timeline: "9-18 Months",
        subItems: ["Team Expansion", "KPI Monitoring", "Series A Prep"],
      },
      {
        title: "Exit",
        timeline: "18-24 Months",
        subItems: [
          "Series A Achieved",
          "Founder Buy-Out",
          "Successor Training",
        ],
      },
    ],
    CTA: "Get Started",
  },
  deliverables: {
    Strategy: [
      "Vision Statement",
      "Product Strategy",
      "Buyer Personas",
      "Business Model",
      "OKRs",
      "GTM Strategy",
      "Innovation Goals",
    ],
    Product: [
      "Customer Journey Map",
      "MVP Blueprint",
      "UI/UX Design",
      "Prototypes",
      "Product Roadmap",
      "Landing Pages",
      "Feature Prioritization",
      "Product-Market Fit",
      "Jobs-to-be-Done",
      "Feature List",
      "User Stories",
      "MVP Specs",
      "MMP Specs",
      "MSP Specs",
    ],
    Tech: [
      "Tech Stack",
      "Architecture Diagram",
      "DevOps Plan",
      "Code Guidelines",
      "Security Audit",
      "Automations",
      "ML Strategy",
      "Architecture Plan",
      "DevOps Pipelines",
      "Cloud Infrastructure",
      "AWS Setup",
      "Data Model",
      "Database Schema",
    ],
    Team: [
      "Skill Matrix",
      "Hiring Plan",
      "Onboarding Guide",
      "Org Chart",
      "Training Modules",
      "Team Structure",
      "Role Definitions",
      "Job Descriptions",
      "Interview Scripts",
      "Contract Templates",
      "Legal Compliance",
      "Performance Reviews",
      "Retention Strategy",
      "Compensation Plans",
      "Equity Distribution",
    ],
    // Finance: [
    //   "Budget Plan",
    //   "Financial Model",
    //   "Funding Deck",
    //   "Funding Strategy",
    // ],
    Fundraising: [
      "Pitch Deck",
      "Engineering Budgets",
      "Milestone Tracker",
      "Due Diligence",
      "Q&A Prep",
      "Investor Relations",
    ],
    // Scale: ["Scaling Plan", "KPI Dashboard", "Exit Strategy", "Growth Plan"],
  },
  roles: {
    preheading: "Roles",
    heading: "What I do",
    description: [
      "I provide strategic tech leadership for early-stage startups",
    ],
    roles: [
      {
        title: "Fractional CTO",
        description:
          "I provide strategic tech leadership for early-stage startups",
        remuneration: ["Retainer", "Equity"],
      },
      {
        title: "Technical Co-Founder",
        description:
          "I provide strategic tech leadership for early-stage startups",
        remuneration: ["Retainer", "Equity"],
      },
      {
        title: "Product Manager",
        description:
          "I provide strategic tech leadership for early-stage startups",
        remuneration: ["Retainer"],
      },
    ],
  },
  caseStudy: {
    image: "/img/roman2.png",
    preheading: "Case Study",
    heading: "How I helped a startup achieve Product-Market-Fit",
    studies: [
      {
        title: "Fractional CTO",
        description:
          "I provide strategic tech leadership for early-stage startups",
        remuneration: ["Retainer", "Equity"],
        client: "we tech food",
        clientUrl: "https://wetechfood.com",
        testimonial: {
          quote: "Mike is a great CTO and a great person to work with.",
          author: "Roman Salazar",
          authorTitle: "Founder & CEO",
          authorUrl: "https://wetechfood.com",
          authorLinkedin: "",
        },
      },
    ],
  },
  faq: {
    header: {
      icon: "",
      image: "",
      preheading: "",
      heading: "",
      subheading: "FAQs",
      body: "",
    },
    questions: [
      {
        question:
          "What is a Fractional CTO and how does it differ from a full-time CTO?",
        answer:
          "A Fractional CTO provides strategic technical leadership on a part-time basis, allowing startups to benefit from experienced tech leadership without the full-time commitment. An early-stage CTO is usually highly product-focused, where a traditional CTO is more involved with scaling, people operations, systems and management. Since they are typically so difficult in scope and responsiblities, I have decided to focus my service on the initial needs of a startup where I'm better suited.",
        value: "item-1",
      },
      {
        question: "How many projects do you work on at a time?",
        answer:
          "My capacity is 3-4 per year depending on the scope of the product being built. I prefer to work with a small number of startups at a time so I can focus on delivering the best results possible while giving the care and attention necessary to succeed and hit milestones.",
        value: "item-2",
      },
      {
        question: "How long do you usually work with each startup?",
        answer:
          "Typically it goes from 12-24 months, at which point I either transition to a full-time CTO role or hand over the reins to a successor who is more suited for a rapidly-scaling organization. I'm also open to equity options for long-term engagements where we're aligned on vision, potential and I can see a long-term win-win for all parties.",
        value: "item-3",
      },
      {
        question: "What services and deliverables can I expect from you?",
        answer:
          "Short answer: I build your (scalable) MVP. Eveyrthing that falls under Product, Tech and Engineering would be part of my scope. You can expect a range of services from product strategy to tech architecture, including tangible deliverables like product roadmaps, hiring plans,  investor pitch decks.",
        value: "item-4",
      },
      {
        question: "How do you help startups achieve Product-Market Fit?",
        answer:
          "Mainly by talking to customers to understand their true pain points, and then building a product to solve that pain. By focusing on data-driven iterative development, I help startups refine their product until it resonates with the target market and has a compelling enough offering to pay for.",
        value: "item-5",
      },
      {
        question: "What is your approach to MVPs and scaling?",
        answer:
          "I prioritize building a lean MVP to validate the business idea, followed by strategic scaling based on validated learning and metrics. However I do not use no-code, low-code or template-based solutions. I create a custom tech stack that is scalable and secure, and wholly owned by the startup. That means building with modern tech stacks like React/Next, Node, APIs, PostgreSQL, AWS, etc.",
        value: "item-6",
      },
      {
        question: "How do you assist with fundraising and investor relations?",
        answer:
          "I work alongside other founders and board members during investor meetings by crafting compelling pitch decks and contributing to product strategy and engineering cost models. ",
        value: "item-7",
      },
      {
        question: "What industries and technologies do you specialize in?",
        answer:
          "I specialize in tech-driven industries like SaaS, marketplaces, logistics, e-commerce, and fintech, leveraging modern technologies to achieve transformational change in a sector. My experience is exclusively in Web2.0 and I do NOT work with blockchain, NFT, Metaverse or crypto projects. I'm best used in B2B and B2C scenarios, transforming industries that are due for technological upheaval.",
        value: "item-8",
      },
      {
        question: "How do you handle team building and talent acquisition?",
        answer:
          "I create hiring plans, conduct technical interviews, and set up onboarding processes to build high-performing tech teams. In my career I have personally hired and trained over 50 software engineers, and I have a network of recruiters and hiring managers to help with the process, as well as my own automated recruitment systems.",
        value: "item-9",
      },
      {
        question: "What is your pricing model and engagement duration?",
        answer:
          "I offer flexible pricing models, including retainer and project-based fees. Equity options are also available for long-term engagements where we're aligned on vision, potential and I can see a long-term win-win for all parties.",
        value: "item-10",
      },
      {
        question: "What are your core values and guiding principles?",
        answer:
          "I prioritize empathy, data-driven decisions, and focus on building real solutions to real problems. I believe in craftsmanship and building for scale, not shortcuts. I believe in building a product infrastructure that is flexible, scalable, and easily iterable so we can run experiments until we find what works. I believe in building a team of world-class talent that is aligned with the company's vision and values. I believe in building a culture of innovation and continuous improvement. I believe in building a product that is loved by its users, that solves a real problem, and creates real, bottom-line value with every transaction.",
        value: "item-11",
      },
      {
        question: "How can I get started and what is the exit strategy?",
        answer:
          "The engagement starts with an initial consultation, followed by a customized service plan. The exit strategy is typically aligned with achieving major milestones like Series A funding. This is best discussed in detail over a call, so get in touch!",
        value: "item-12",
      },
    ],
  },
  cta: {
    heading: "Let's work together",
    subheading: "Email or book a free consultation",
    description: "",
  },
  desire: {
    aboutus: {
      header: {
        icon: "",
        image: "",
        preheading: "",
        heading: "Drifter's Story",
        subheading: "It's not just business, it's personal.",
        body: "",
      },
      avatar: "/img/mike_transparent.png",
      letter: (
        <>
          <h4 className="mb-4 text-xl font-semibold text-black text-2">
            Hi, I&apos;m Mike, the human behind Drifter
          </h4>
          <p className="mb-4 leading-relaxed text-md">
            I built my first software when I was 9. It was a simple, text-only
            adventure game that I made for my friends. I was hooked, and I knew
            then that I wanted to build things people <em>love</em> to use.
          </p>
          <p className="mb-4 leading-relaxed text-md">
            Fast-forward to now, and I&apos;m lucky to be working with exciting
            startups, agencies and enterprises across the EU. Helping them to
            build their digital products. Even better, I work from my base in
            Portugal with a curated team of design and development experts from
            around the world. Fully remote. Fully flexible.
          </p>
          <p className="mb-4 leading-relaxed text-md">
            Over the years, Drifter has helped numerous businesses transform
            their digital footprint. But numbers only tell half the story. The
            real success lies in the relationships we&apos;ve built and the
            lives we&apos;ve impacted through our technology.
          </p>
          <p className="mb-4 leading-relaxed text-md">
            When I work on a project, my focus is on three things: empathy,
            efficiency, and efficacy. It&apos;s not just about getting the job
            done; it&apos;s about making sure that what we create together
            solves a need, drives customer action, and makes things better.
          </p>
          <p className="mb-4 leading-relaxed text-md">
            So, let&apos;s take this journey together. Let&apos;s build
            something that&apos;s not just beautiful and performant, but truly
            meaningful.
          </p>
          <p className="mb-4 leading-relaxed text-md">
            I look forward to working with you.
          </p>
        </>
      ),
    },
    expertise: {
      header: {
        icon: "<FaRegStar />",
        image: "",
        preheading: "End to end",
        heading: "Full-Stack Expertise",
        subheading: "",
        body: "Although we are platform agnostic, below is our preferred tool stack when building modern products that are built to scale.",
      },
      list: [
        {
          name: "JavaScript",
          icon: <SiJavascript size={28} />,
          desc: "A programming language used for creating interactivity on web pages.",
          longdesc:
            "JavaScript is a programming language used for creating interactive web pages. It allows you to add behavior and interactivity to web pages, such as responding to user input, updating the page dynamically, and communicating with servers.",
          size: 28,
          active: true,
          category: "Frontend",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript size={28} />,
          desc: "A type-safe programming language used for creating interactivity on web pages.",
          longdesc:
            "TypeScript is a programming language used for creating interactive web pages. It allows you to add behavior and interactivity to web pages, such as responding to user input, updating the page dynamically, and communicating with servers.",
          size: 28,
          active: true,
          category: "Frontend",
        },
        {
          name: "React",
          icon: <RiReactjsLine size={30} />,
          desc: "A JavaScript framework for building user interfaces.",
          longdesc:
            "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called 'components'.",
          size: 30,
          active: true,
          category: "Frontend",
        },
        {
          name: "AWS",
          icon: <SiAmazonaws size={30} />,
          desc: "Amazon Web Services, a secure cloud services platform.",
          longdesc:
            "Amazon Web Services (AWS) is a secure cloud services platform, offering compute power, database storage, content delivery and other functionality to help businesses scale and grow.",
          size: 30,
          active: true,
          category: "Backend",
        },
        {
          name: "Azure",
          icon: <SiMicrosoftazure size={30} />,
          desc: "Microsoft Azure, a cloud computing service for building, testing, deploying, and managing applications and services.",
          longdesc:
            "Microsoft Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.",
          size: 30,
          active: true,
          category: "Backend",
        },
        {
          name: "Node.js",
          icon: <FaNodeJs size={30} />,
          desc: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
          longdesc:
            "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.",
          size: 30,
          active: true,
          category: "Backend",
        },
        {
          name: "Zapier",
          icon: <SiZapier size={30} />,
          desc: "An online automation tool that connects your apps and services.",
          longdesc:
            "Zapier is an online automation tool that allows you to easily connect your apps and services. You can automate repetitive tasks without coding or relying on developers to build the integration.",
          size: 30,
          active: true,
          category: "Backend",
        },
        {
          name: "Salesforce",
          icon: <SiSalesforce size={30} />,
          desc: "A cloud-based customer relationship management (CRM) platform.",
          longdesc:
            "Salesforce is a cloud-based customer relationship management (CRM) platform for supercharging every part of your company that interacts with customers — including marketing, sales, commerce, service, and more.",
          size: 30,
          active: true,
          category: "Backend",
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs size={30} />,
          desc: "A JavaScript framework for building web apps like SaaS.",
          longdesc:
            "Next.js is a JavaScript framework for building apps. It's built on top of React and provides a simple way to create server-side rendered React apps with routing, data fetching, and more.",
          size: 30,
          active: true,
          category: "Frontend",
        },
        {
          name: "TailwindCSS",
          icon: <SiTailwindcss size={30} />,
          desc: "A utility-first CSS framework for rapidly building custom designs.",
          longdesc: "",
          size: 30,
          active: true,
          category: "Frontend",
        },
        {
          name: "Prisma",
          icon: <TbBrandPrisma size={30} />,
          desc: "",
          longdesc: "",
          size: 30,
          active: true,
          category: "Backend",
        },
        {
          name: "Supabase",
          icon: <RiSupabaseFill size={30} />,
          desc: "",
          longdesc: "",
          size: 30,
          active: true,
          category: "Backend",
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql size={30} />,
          desc: "",
          longdesc: "",
          size: 30,
          active: true,
          category: "Backend",
        },
        {
          name: "GraphQL",
          icon: <SiGraphql size={30} />,
          desc: "",
          longdesc: "",
          size: 30,
          active: true,
          category: "Backend",
        },
        {
          name: "MongoDB",
          icon: <SiMongodb size={30} />,
          desc: "",
          longdesc: "",
          size: 30,
          active: true,
          category: "Backend",
        },
        {
          name: "Vercel",
          icon: <SiVercel size={30} />,
          desc: "A cloud platform for serverless deployment and static sites.",
          longdesc:
            "Vercel is a cloud platform for serverless deployment and static sites. It allows you to deploy your React apps with ease, without having to worry about managing servers or infrastructure.",
          size: 30,
          active: true,
          category: "Backend",
        },
        {
          name: "Flutter",
          icon: <SiFlutter size={30} />,
          desc: "A cross-platform mobile development framework.",
          longdesc:
            "Flutter is a cross-platform mobile development framework. It allows you to build native apps for iOS and Android from a single codebase, using the Dart programming language.",
          size: 30,
          active: true,
          category: "Mobile",
        },
        {
          name: "OpenAI",
          icon: <RiOpenaiLine size={27} />,
          desc: "The API that powers ChatGPT and used throughout the course.",
          longdesc: "",
          size: 27,
          active: true,
          category: "AI",
        },
        {
          name: "DALL-E",
          icon: <RiOpenaiLine size={27} />,
          desc: "An AI model that generates images from textual descriptions.",
          longdesc: "",
          size: 27,
          active: true,
          category: "AI",
        },
        {
          name: "Git Copilot",
          icon: <RiCopilotFill size={27} />,
          desc: "Your AI pair programmer that helps you write better code.",
          longdesc: "",
          size: 27,
          active: true,
          category: "AI",
        },
        {
          name: "MidJourney",
          icon: <SiDocker size={27} />,
          desc: "Y",
          longdesc: "",
          size: 27,
          active: true,
          category: "AI",
        },
        {
          name: "Docker",
          icon: <SiDocker size={30} />,
          desc: "A platform used for automating the deployment, scaling, and management of applications.",
          longdesc: "",
          size: 30,
          active: true,
          category: "Backend",
        },
        {
          name: "Kubernetes",
          icon: <SiKubernetes size={30} />,
          desc: "An open-source system for automating deployment, scaling, and management of containerized applications.",
          longdesc: "",
          size: 30,
          active: true,
          category: "Backend",
        },
        {
          name: "Swift",
          icon: <SiSwift size={30} />,
          desc: "A powerful and intuitive programming language for macOS, iOS, watchOS, and tvOS.",
          longdesc: "",
          size: 30,
          active: true,
          category: "Mobile",
        },
        {
          name: "Kotlin",
          icon: <SiKotlin size={30} />,
          desc: "A statically typed programming language for modern multiplatform applications.",
          longdesc: "",
          size: 30,
          active: true,
          category: "Mobile",
        },
        {
          name: "Git",
          icon: <SiGit size={30} />,
          desc: "A distributed version control system for tracking changes in source code during software development.",
          longdesc: "",
          size: 30,
          active: true,
          category: "Backend",
        },
        {
          name: "Jenkins",
          icon: <SiJenkins size={30} />,
          desc: "An open-source automation server, it helps to automate the parts of software development related to building, testing, and deploying.",
          longdesc: "",
          size: 30,
          active: true,
          category: "Backend",
        },
        {
          name: "Terraform",
          icon: <SiTerraform size={30} />,
          desc: "An open-source infrastructure as code software tool that provides a consistent CLI workflow to manage hundreds of cloud services.",
          longdesc: "",
          size: 30,
          active: true,
          category: "Backend",
        },
        {
          name: "Ansible",
          icon: <SiAnsible size={30} />,
          desc: "An open-source software provisioning, configuration management, and application-deployment tool.",
          longdesc: "",
          size: 30,
          active: true,
          category: "Backend",
        },
        {
          name: "Redis",
          icon: <SiRedis size={30} />,
          desc: "An open-source, in-memory data structure store, used as a database, cache, and message broker.",
          longdesc: "",
          size: 30,
          active: true,
          category: "Backend",
        },
        {
          name: "Apache Kafka",
          icon: <SiApachekafka size={30} />,
          desc: "A distributed event streaming platform used by thousands of companies for high-performance data pipelines, streaming analytics, data integration, and mission-critical applications.",
          longdesc: "",
          size: 30,
          active: true,
          category: "Backend",
        },
        {
          name: "Figma",
          icon: <SiFigma size={30} />,
          desc: "A cloud-based design tool for collaborative projects.",
          longdesc: "",
          size: 30,
          active: true,
          category: "Design",
        },
        {
          name: "Adobe XD",
          icon: <SiAdobexd size={30} />,
          desc: "A vector-based user experience design tool for web apps and mobile apps, developed and published by Adobe Inc.",
          longdesc: "",
          size: 30,
          active: true,
          category: "Design",
        },
        {
          name: "Sketch",
          icon: <SiSketch size={30} />,
          desc: "A design toolkit built to help you create your best work — from your earliest ideas, through to final artwork.",
          longdesc: "",
          size: 30,
          active: true,
          category: "Design",
        },
        {
          name: "Canva",
          icon: <SiCanva size={30} />,
          desc: "A graphic design platform, used to create social media graphics, presentations, posters, documents and other visual content.",
          longdesc: "",
          size: 30,
          active: true,
          category: "Design",
        },
        {
          name: "Jira",
          icon: <SiJira size={30} />,
          desc: "A proprietary issue tracking product developed by Atlassian that allows bug tracking and agile project management.",
          longdesc: "",
          size: 30,
          active: true,
          category: "Strategy",
        },
        {
          name: "Trello",
          icon: <SiTrello size={30} />,
          desc: "A web-based Kanban-style list-making application which is a subsidiary of Atlassian.",
          longdesc: "",
          size: 30,
          active: true,
          category: "Strategy",
        },
        {
          name: "ClickUp",
          icon: <SiClickup size={30} />,
          desc: "One app to replace them all. It's the future of work.",
          longdesc: "",
          size: 30,
          active: true,
          category: "Strategy",
        },
        {
          name: "Notion",
          icon: <SiNotion size={30} />,
          desc: "The all-in-one workspace for your notes, tasks, wikis, and databases.",
          longdesc: "",
          size: 30,
          active: true,
          category: "Strategy",
        },
        {
          name: "Airtable",
          icon: <SiAirtable size={30} />,
          desc: "A spreadsheet-database hybrid, with the features of a database but applied to a spreadsheet.",
          longdesc: "",
          size: 30,
          active: true,
          category: "Strategy",
        },
        {
          name: "Photoshop",
          icon: <SiAdobephotoshop size={30} />,
          desc: "A raster graphics editor developed and published by Adobe Inc.",
          longdesc: "",
          size: 30,
          active: true,
          category: "Design",
        },
      ],
    },
    faq: {
      header: {
        icon: <FaQuestionCircle className="w-4 h4" />,
        image: "",
        preheading: "FAQS",
        heading: "Common Questions",
        subheading: "",
        body: "",
      },
      questions: [
        {
          question: "What is a Fractional CTO?",
          answer:
            "A Fractional CTO (fCTO) is a part-time executive who provides strategic leadership in technology. They offer expertise and guidance to startups or small businesses that don't require or can't afford a full-time CTO.",
          value: "item-1",
        },
        {
          question: "How is a Fractional CTO different from a full-time CTO?",
          answer:
            "Hiring a Fractional CTO is cost-effective and flexible, ideal for startups and small businesses. They provide strategic guidance and expertise without the commitment and expense of a full-time CTO.",
          value: "item-2",
        },
        {
          question: "Do you help with fundraising & investor relations?",
          answer:
            "Yes, a Fractional CTO can play a crucial role in fundraising by helping to articulate the technology strategy, demonstrating the product's scalability, and building investor confidence.",
          value: "item-3",
        },
        {
          question:
            "What kind of expertise can I expect from a Fractional CTO?",
          answer:
            "A Fractional CTO brings a wealth of experience in technology strategy, software development, team leadership, and often has a network of industry contacts that can be leveraged.",
          value: "item-4",
        },
        {
          question: "How does a Fractional CTO integrate with existing teams?",
          answer:
            "Fractional CTOs are skilled in adapting to different team dynamics and cultures. They work collaboratively with your team, providing mentorship and filling gaps in expertise.",
          value: "item-5",
        },
        {
          question:
            "Can a Fractional CTO assist with technology selection and architecture?",
          answer:
            "Absolutely. They are instrumental in making informed decisions about technology stacks, software architecture, and ensuring that technology choices align with business goals.",
          value: "item-6",
        },
        {
          question: "How flexible is the involvement of a Fractional CTO?",
          answer:
            "The involvement of a Fractional CTO is highly flexible, ranging from a few hours a week to more substantial commitments, depending on your company's needs and growth stage.",
          value: "item-7",
        },
        {
          question:
            "Can you provide references or case studies from past work?",
          answer:
            "Certainly! We're proud of the work we've done and would be happy to share references and case studies from our past projects. Please get in touch, and we'll provide relevant examples.",
          value: "item-8",
        },
        {
          question:
            "How does a Fractional CTO contribute to long-term business strategy?",
          answer:
            "A Fractional CTO ensures that your technology strategy aligns with your business goals, helping to lay a strong foundation for long-term growth and scalability.",
          value: "item-9",
        },
      ],
    },
    recentwork: {
      header: {
        icon: "",
        image: "",
        preheading: "",
        heading: "Recent work",
        subheading: "High-performance products, and nothing less.",
        body: "",
      },
      gallery: [
        // Gallery items here
      ],
    },
    casestudy: {
      header: {
        icon: "",
        image: "",
        preheading: "How we work",
        heading: "Partners, not clients",
        subheading: "",
        body: "We're an independent team that likes to dig deep into our projects. We usually end up working long-term with our partners. It's all about trust, teamwork, and getting excited about what we can build next to solve big problems.",
        body2: "",
        preheaderColor: "#682349",
      },
    },
    stinger_footer: {
      list: [
        "Pause anytime",
        "Cancel anytime",
        "No long-term contracts",
        "No hidden fees",
        "No surprises",
        "Easy scale-up/down",
      ],
    },
  },
};
