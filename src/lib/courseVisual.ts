export function getCourseVisual(slug: string) {
  switch (slug) {
    case "mern":
      return {
        symbol: "</>",
        words: [
          "React",
          "Node",
          "MongoDB",
          "Express",
          "Next.js",
          "REST API",
        ],
      };

    case "python":
      return {
        symbol: "Py",
        words: [
          "Python",
          "Django",
          "Flask",
          "Automation",
          "API",
          "MySQL",
        ],
      };

    case "java":
      return {
        symbol: "{}",
        words: [
          "Java",
          "Spring",
          "Hibernate",
          "JPA",
          "Maven",
          "SQL",
        ],
      };

    case "analytics":
      return {
        symbol: "01",
        words: [
          "SQL",
          "Power BI",
          "Excel",
          "Python",
          "Dashboard",
          "Reports",
        ],
      };

    case "datascience":
      return {
        symbol: "DS",
        words: [
          "Pandas",
          "NumPy",
          "ML",
          "Visualization",
          "Statistics",
          "EDA",
        ],
      };

    case "ai":
      return {
        symbol: "AI",
        words: [
          "LLM",
          "Prompting",
          "Agents",
          "RAG",
          "Vector DB",
          "OpenAI",
        ],
      };

    default:
      return {
        symbol: "<>",
        words: [],
      };
  }
}