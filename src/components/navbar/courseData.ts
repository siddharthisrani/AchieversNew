import {
  Brain,
  Code2,
  Coffee,
  Database,
  BarChart3,
  Megaphone,
  UserRound,
} from "lucide-react";

export const courseCategories = [
  {
    title: "Development",
    courses: [
      {
        title: "MERN Stack",
        icon: Code2,
        href: "/courses/mern",
        description: "React • Next.js • Node • MongoDB",
      },
      {
        title: "Java Full Stack",
        icon: Coffee,
        href: "/courses/java",
        description: "Java • Spring Boot • MySQL",
      },
      {
        title: "Python Full Stack",
        icon: Database,
        href: "/courses/python",
        description: "Python • Django • DRF",
      },
    ],
  },

  {
  title: "Data & AI",
  courses: [
    {
      title: "Data Analytics",
      icon: BarChart3,
      href: "/courses/data-analytics",
      description: "Excel • SQL • Power BI",
    },
    {
      title: "Data Science",
      icon: Brain,
      href: "/courses/data-science",
      description: "Python • Machine Learning",
    },
    {
      title: "AI / ML",
      icon: Brain,
      href: "/courses/ai",
      description: "Generative AI • LLM • ML",
    },
  ],
},

  {
    title: "Career",
    courses: [
      {
        title: "Digital Marketing",
        icon: Megaphone,
        href: "/courses/digital-marketing",
        description: "SEO • Google Ads • Meta Ads",
      },
      {
        title: "Personality Development",
        icon: UserRound,
        href: "/courses/personality-development",
        description: "Communication • Interview Skills",
      },
    ],
  },
];