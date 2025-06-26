export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  avatar?: string
  linkedin?: string
}

export const testimonialsContent = {
  title: "What Colleagues Say",
  subtitle: "Real recommendations from LinkedIn colleagues and industry professionals",
  testimonials: [
    {
      name: "Richard Ciardo",
      role: "VP of Product and Engineering",
      company: "Ventricle Health",
      content: "Vinny is a Software Architect exemplar. He consistently remains up to date with the latest software and hardware trends and identifies which trends are appropriately applicable to his organization. His ability to effectively communicate with both engineers and senior leadership allows him to positively influence the technical direction of his organization. I learned a great deal from Vinny and it was truly a pleasure to have worked with him.",
      linkedin: "https://linkedin.com/in/richardciardo"
    },
    {
      name: "Jim Cornelius",
      role: "Senior Vice President | IT Architect",
      company: "Robert W. Baird & Co.",
      content: "I was very fortunate to have worked with Vinny Carpenter. He was instrumental in the process of integrating our IT systems as part of the merger with Wells Fargo. He is incredibly talented and has an excellent understanding of all aspects of IT.",
      linkedin: "https://linkedin.com/in/jimcornelius"
    },
    {
      name: "Doug Harris",
      role: "Professor",
      company: "Marquette University",
      content: "I was chair of the math, statistics, and computer science department, and MU was struggling with getting its web services started. Vinnie did a truly incredible job getting it going and familiarizing people with the whole notion and the techniques, and began an amazing transformation. He is one of the most knowledgeable professionals I have ever encountered, and as a major plus has a personality that meshes very well with others.",
      linkedin: "https://linkedin.com/in/dougharris"
    },
    {
      name: "Mike Haseman",
      role: "Technology Solutions Leader",
      company: "Business Solutions Expert",
      content: "Vinny helped me several times out of tough technical jams. He has a great ability to problem solve. He works through some very complicated issues as if it were very easy. Vinny also really likes to share his technical knowledge by pointing out resources and consult on best practices. It was great to work with Vinny.",
      linkedin: "https://linkedin.com/in/mikehaseman"
    },
    {
      name: "Dan Thomas III",
      role: "IT Application Analyst II",
      company: "Milwaukee County Justice & Public Safety",
      content: "There's a big difference between Being Tech Savvy and Being Smothered in Tech. But Vinny defied the challenge and was extremely knowledgeable in all technology posed to hit the firm. He knew how to lift the hood of any gadget and know exactly what's going on. What a true wizard, and it was a pleasure working with him.",
      linkedin: "https://linkedin.com/in/danthomas"
    },
    {
      name: "Pete Prodoehl",
      role: "Creative Technologist",
      company: "Quad/Graphics",
      content: "Vinny helped Quad/Graphics get up-to-speed with web technologies of the day thanks to his excellent technical knowledge. He always proved helpful in assisting with whatever project was at hand.",
      linkedin: "https://linkedin.com/in/peteprodoehl"
    }
  ] as Testimonial[]
}