export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies?: string[];
  companyUrl?: string;
  logo?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export const experienceContent = {
  title: "Experience",
  experiences: [
    {
      company: "Northwestern Mutual",
      role: "Vice President, Cloud and DevOps Engineering",
      period: "Jan 2018 - Present",
      description: [
        "August 2021 - Current: VP of Cloud and DevOps Engineering",
        "Jan 2020 - August 2021: Senior Director of Engineering",
        "Jan 2018 - Jan 2020: Principal Engineer"
      ],
      technologies: ["AWS", "Cloud", "DevOps", "Software Engineering", "GenAI"],
      companyUrl: "https://www.northwesternmutual.com"
    },
    {
      company: "Artisan Partners",
      role: "Technology Leader",
      period: "Dec 2006 - Jan 2018",
      description: [
        "October 2013 - January 2018: Architecture & Strategy Lead",
        "Jan 2008 - October 2013: Senior Software Architect",
        "Dec 2006 - Jan 2008: Senior Software Engineer"
      ],
      technologies: ["Java","AWS", "Cloud", "Data Management", "Software Engineering"],
      companyUrl: "https://www.artisanpartners.com"
    },
    {
      company: "Wells Fargo",
      role: "Lead Architect",
      period: "Jan 2005 - Dec 2006",
      description: [
        "Jan 2005 - Dec 2006: Lead Architect"

      ],
      technologies: ["Java", "Spring Framework", "J2EE", "TDD", "Software Engineering"],
      companyUrl: "https://www.wellsfargo.com"
    },
    {
      company: "Strong Financial",
      role: "Software Engineer",
      period: "Aug 1999 - Dec 2005",
      description: [
        "August 1999 - December 2005: Enterprise Architect"
      ],
      technologies: ["Java", "JavaScript", "Perl", "WebLogic", "Software Engineering"],
      companyUrl: "https://www.strongfunds.com"
    },
    {
      company: "Quad/Graphics",
      role: "Webmaster & Java Developer",
      period: "Jul 1997 - Jul 1999",
      description: [
        "July 1997 - July 1999: Webmaster & Java Developer"
      ],
      technologies: ["Java", "JavaScript", "Linux", "Software Engineering"],
      companyUrl: "https://www.quadgraphics.com"
    },
    {
      company: "Marquette University",
      role: "Webmaster",
      period: "June 1993 - Jul 1997",
      description: [
        "July 1997 - July 1999: Webmaster & Developer"
      ],
      technologies: ["Java", "JavaScript", "Linux", "Software Engineering"],
      companyUrl: "https://www.mu.edu"
    }
  ]
};
