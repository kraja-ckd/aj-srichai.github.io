import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Techawat Srichai",
  initials: "AJ",
  location: "Bangkok, Thailand",
  locationLink: "https://www.google.com/maps/place/Bangkok,+Thailand",
  about:
    "Civil Engineer & Innovation Lead transforming construction workflows with Automation, Python, and AI.",
  summary: (
    <>
      Civil Engineer specializing in Innovation and Construction Technology at CPF.
      Expert in bridging the gap between traditional engineering and modern software development.
      Proven track record in automating material estimation, developing internal web applications,
      and implementing Green Building standards through AI solutions.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/199589895?v=4",
  personalWebsiteUrl: "https://aj-srichai.github.io",
  contact: {
    email: "ajsrichai1@gmail.com",
    tel: "+66 98 2975 791",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/aj-srichai",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aj-srichai/",
        icon: "linkedin",
      },
      // ถ้ามี Twitter/X ให้แก้ username แล้วเอา comment ออกครับ
      // {
      //   name: "X",
      //   url: "https://x.com/yourusername",
      //   icon: "x",
      // },
    ],
  },
  education: [
    {
      school: "Kasetsart University",
      degree: "Bachelor's Degree in Civil Engineering",
      start: "2020",
      end: "2024",
    },
  ],
  work: [
    {
      company: "CPF (Charoen Pokphand Foods)",
      link: "https://www.cpfworldwide.com/",
      badges: ["Innovation Lead", "Civil Eng", "Python", "Power Platform"],
      title: "Civil Engineer (Central Construction Engineering Team)",
      start: "2025",
      end: "Present",
      description: (
        <>
          Leading innovation initiatives to optimize construction site workflows using low-code tools and custom software.
          <ul className="list-inside list-disc">
            <li>
              Engineered a Python-based material estimation engine for automated concrete/steel take-offs, minimizing budget variances.
            </li>
            <li>
              Streamlined zone-based BOQ processing to optimize inventory and procurement costs using Data Automation.
            </li>
            <li>
              Developed internal web applications to digitize manual processes and improve real-time tracking.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Sino-Thai Engineering & Construction PCL",
      link: "https://www.stecon.co.th/", // ผมเพิ่มลิงก์เว็บ Sino-Thai ให้ครับ
      badges: ["On Site", "QC/QA", "Inspection"],
      title: "QC Engineer",
      start: "2024",
      end: "2025",
      description: (
        <>
          Ensured structural integrity and quality standards for large-scale construction projects.
          <ul className="list-inside list-disc">
            <li>
              Inspected steel reinforcement and concrete pouring processes to ensure compliance with engineering standards.
            </li>
            <li>
              Managed quality control documentation and coordinated with site engineers for defect resolution.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Civil Engineering",
    "Construction Management",
    "Python",
    "React / React Native",
    "Power Platform (BI/Automate)",
    "SQL / PostgreSQL",
    "FastAPI",
    "BIM (Revit)",
    "Net Zero Supply Chains",
    "Building Control Laws",
    "n8n / Make",
    "Docker",
  ],
  projects: [
    {
      title: "Material Estimation Engine",
      techStack: ["Python", "Pandas", "Algorithm Design"],
      description:
        "Automated concrete & steel take-off engine replacing manual calculations with dynamic waste logic algorithms.",
      link: {
        label: "GitHub",
        href: "https://github.com/aj-srichai", // ใส่ลิงก์รวมไปก่อนถ้ายังไม่มี repo แยก
      },
    },
    {
      title: "Green Building AI Assistant",
      techStack: ["LangChain", "RAG", "Supabase", "AI"],
      description:
        "AI Chatbot capable of answering questions about Green Building standards using RAG (Retrieval-Augmented Generation).",
      link: {
        label: "GitHub",
        href: "https://github.com/aj-srichai",
      },
    },
    {
      title: "Automated Quotation System",
      techStack: ["Python", "Excel Automation", "Scripting"],
      description:
        "Automation script generating 189+ quotation documents instantly, reducing manual workload by 90%.",
      link: {
        label: "GitHub",
        href: "https://github.com/aj-srichai",
      },
    },
    {
      title: "Construction Dashboard",
      techStack: ["Power BI", "Data Analytics", "SQL"],
      description:
        "Interactive dashboard for tracking construction progress and budget utilizing real-time site data.",
      link: {
        label: "Demo",
        href: "https://github.com/aj-srichai",
      },
    },
  ],
} as const;
