export interface Project {
  title: string
  description: string
  longDescription: string
  technologies: string[]
  highlights: string[]
  category: 'enterprise' | 'startup' | 'open-source'
  timeline: string
  impact: string
}

export const projectsContent = {
  title: "Featured Projects",
  subtitle: "Key initiatives that demonstrate technical leadership and business impact",
  projects: [
    {
      title: "Enterprise Cloud Migration",
      description: "Led comprehensive cloud migration for Fortune 500 financial services company",
      longDescription: "Architected and executed a multi-year cloud transformation initiative, migrating 200+ applications from on-premises to AWS while maintaining zero downtime for critical trading systems.",
      technologies: ["AWS", "Kubernetes", "Terraform", "Docker", "Python", "Go"],
      highlights: [
        "Reduced infrastructure costs by 40%",
        "Improved system reliability to 99.99% uptime",
        "Established automated CI/CD pipelines",
        "Trained 50+ engineers on cloud-native practices"
      ],
      category: 'enterprise' as const,
      timeline: "2022-2024",
      impact: "$2M annual savings, 60% faster deployment cycles"
    },
    {
      title: "Real-time Analytics Platform",
      description: "Built scalable data processing platform handling 10M+ events per day",
      longDescription: "Designed and implemented a high-throughput analytics platform using event-driven architecture, enabling real-time business intelligence and automated decision-making.",
      technologies: ["Apache Kafka", "Apache Spark", "Redis", "PostgreSQL", "TypeScript", "React"],
      highlights: [
        "Processes 10M+ events daily with sub-second latency",
        "Scalable microservices architecture",
        "Real-time dashboard with custom visualizations",
        "Automated alerting and anomaly detection"
      ],
      category: 'enterprise' as const,
      timeline: "2021-2022",
      impact: "30% improvement in business decision speed"
    },
    {
      title: "DevOps Transformation Initiative",
      description: "Transformed development workflow for 100+ person engineering team",
      longDescription: "Led organization-wide DevOps transformation, implementing infrastructure as code, automated testing, and continuous deployment practices across multiple product teams.",
      technologies: ["Jenkins", "GitLab CI", "Ansible", "Prometheus", "Grafana", "ELK Stack"],
      highlights: [
        "Reduced deployment time from hours to minutes",
        "Implemented comprehensive monitoring and alerting",
        "Established security scanning and compliance automation",
        "Created self-service infrastructure provisioning"
      ],
      category: 'enterprise' as const,
      timeline: "2020-2021",
      impact: "75% reduction in deployment failures, 50% faster time-to-market"
    }
  ] as Project[]
}