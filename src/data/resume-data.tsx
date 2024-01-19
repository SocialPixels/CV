import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ryan John Viant Greer",
  initials: "RJVG",
  location: "Luton, United Kingdom",
  locationLink: "https://www.google.com/maps/place/Luton,+UK",
  about:
    "As a creative visionary adept in turning concepts into visual stories, my career transition from engineering to graphic design is driven by a passion for crafting engaging visuals. My expertise in Adobe Creative Suite, Figma, and animation, combined with experience in creating diverse marketing materials, equips me uniquely for impactful design work. Engineering has sharpened my collaborative skills, enabling me to excel in team-oriented environments, bringing analytical rigor and innovative solutions to design challenges.",
  avatarUrl: "", // Add your avatar URL if desired
  personalWebsiteUrl: "", // You can put the link to your Figma portfolio here
  contact: {
    email: "Ryan@Greerweb.co.uk",
    tel: "+447957615584",
    social: [
      // Add your LinkedIn or other social links here with icons
      // Example:
      // {
      //   name: "LinkedIn",
      //   url: "https://www.linkedin.com/in/ryan-greer",
      //   icon: LinkedInIcon,
      // },
    ],
  },
  education: [
    {
      school: "De Montfort University",
      degree: "Game Design Course (1 Year)",
      start: "2017",
      end: "2017",
      description: "Focused on game design fundamentals with an emphasis on 2D design. Developed transferable skills in creative problem-solving and design thinking.",
    },
    {
      school: "Luton Sixth Form College",
      degree: "A-Level Art Certification",
      start: "2015",
      end: "2017",
      description: "Studied art, honing my style and studying a variety of graphic designers and illustrators, with a focus on digital art.",
    },
    // You can add any other relevant education here
  ],
  skills: [
    "Adobe Creative Suite",
    "Figma",
    "Animation",
    "Webflow",
    "Photography",
    "Team Collaboration",
    // You can continue to add other skills here as necessary
  ],
  projects: [
    {
      title: "Diverse Graphic Design and Animation Portfolio",
      techStack: ["Adobe Creative Suite", "Figma", "Webflow", "Animation"],
      description: "A range of projects showcasing skills in graphic design, UI/UX, and animation, viewable online at figma/12345.",
      link: "https://www.figma.com/@12345", // Replace with the actual URL to your Figma portfolio
    },
    // Add other projects as needed
  ],
  additionalSkills: [
    "Team Spirit and Morale: Humorous and kind character known for uplifting and supporting team members.",
    "Ethical Awareness: Advocates for responsible and conscientious creative choices.",
    "Inspirational Leadership: Inspires and motivates others, fostering a collaborative and nurturing atmosphere.",
    "Effective Communication: Articulates design concepts well and collaborates effectively with stakeholders.",
    "Problem Solving: Identifies challenges and develops creative solutions.",
    "Adaptability: Quickly adapts to new tools and industry trends.",
    "Time Management: Manages multiple projects, meeting tight deadlines without compromising quality.",
    "Attention to Detail: Ensures high-quality outcomes and client satisfaction in design work.",
  ],
  // Add any other sections as necessary, e.g., work experience
} as const;
      logo: CDGOLogo,
    },
  ],
} as const;
