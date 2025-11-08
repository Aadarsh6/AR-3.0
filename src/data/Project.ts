export interface project {
    id: number
    title: string
    context: string
    impact: string
    image: string
    link: string
    tags: string[]
    process: {
        problem: string
        thinking: string
        solution: string
    }
}


export const Project:project[] = [
  {
    id: 1,
    title: "Clarity Commerce",
    context: "E-commerce platform redesign",
    impact: "Reduced decision fatigue by 40% through radical simplification",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    link: "https://example.com",
    tags: ["UI/UX", "React", "Design System"],
    process: {
      problem: "Users were abandoning checkout at 60% rate. Analysis showed decision paralysis from 12+ options at each step.",
      thinking: "Reduced to 3 core paths using behavioral psychology. Added progress clarity without overwhelming. Removed unnecessary friction points.",
      solution: "Checkout completion increased 40%. Average time reduced from 4min to 90sec. Zero complaints about 'missing features.'"
    }
  },
  {
    
    id: 2,
    title: "Focus Dashboard",
    context: "Analytics platform for teams",
    impact: "Increased data comprehension by 65% with cognitive hierarchy",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    link: "https://example.com",
    tags: ["Data Viz", "TypeScript", "UI Design"],
    process: {
      problem: "Teams were drowning in metrics. 80+ data points competing for attention. Important signals lost in noise.",
      thinking: "Applied information hierarchy principles. Progressive disclosure. Contextual density based on user role.",
      solution: "User satisfaction increased 65%. Time to insight reduced from 15min to 3min. Adoption rate jumped to 94%."
    }
  },
  {
    id: 3,
    title: "Calm Editor",
    context: "Minimalist writing environment",
    impact: "Writers reported 50% increase in flow state sessions",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&h=600&fit=crop",
    link: "https://example.com",
    tags: ["Design", "React", "Motion"],
    process: {
      problem: "Existing tools were cluttered with features that broke concentration. Writers wanted focus, not options.",
      thinking: "Designed around absence. Every element justified its presence. Typography and spacing as primary UI.",
      solution: "50% increase in flow state sessions. Average session length increased from 25min to 47min."
    }
  },
  {
    id: 4,
    title: "System Components",
    context: "Design system for product teams",
    impact: "Reduced development time by 60% with composable architecture",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
    link: "https://example.com",
    tags: ["Design System", "React", "Documentation"],
    process: {
      problem: "Teams were rebuilding common patterns. Inconsistent UI across products. Design debt accumulating.",
      thinking: "Built composable primitives. Documented decision-making, not just implementation. Made constraints clear.",
      solution: "Development time reduced 60%. Design consistency score improved from 42% to 91%. Adoption across 8 teams."
    }
  }

]
