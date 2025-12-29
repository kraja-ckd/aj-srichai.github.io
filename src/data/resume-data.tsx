import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Jae [Your Last Name]", // แก้ชื่อจริงตรงนี้
  initials: "J",
  location: "Bangkok, Thailand",
  locationLink: "https://www.google.com/maps/place/Bangkok",
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
  avatarUrl: "https://avatars.githubusercontent.com/u/xxxxxx?v=4", // ใส่รูปโปรไฟล์ GitHub ของคุณ หรือลิงก์รูปอื่น
  personalWebsiteUrl: "https://[your-name].github.io", // แก้เป็นลิงก์เว็บใหม่ของคุณ
  contact: {
    email: "[ajsrichai1]@gmail.com", // แก้ตรงนี้
    tel: "+66 [98 2975 791]", // แก้ตรงนี้
    social: [
      {
        name: "GitHub",
        url: "https://github.com/[kraja-ckd]", // แก้ตรงนี้
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/[aj-srichai]/", // แก้ตรงนี้
        icon: "linkedin",
      },
      {
        name: "X",
        url: "https://x.com/[your-username]", // แก้ตรงนี้ (ถ้ามี)
        icon: "x",
      },
    ],
  },
  education: [
    {
      school: "Kasetsart University",
      degree: "Bachelor's Degree in Civil Engineering",
      start: "2020", // แก้ปีที่เริ่ม
      end: "2024",   // แก้ปีที่จบ
    },
  ],
  work: [
    {
      company: "CPF (Charoen Pokphand Foods)",
      link: "https://www.cpfworldwide.com/",
      badges: ["Innovation Lead", "Civil Eng", "Python", "Power Platform"],
      title: "Civil Engineer (Central Construction Engineering Team)",
      start: "2025", // แก้ปีที่เริ่มทำงาน
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
      company: "Sino-Thai Engineering & Construction PCL", // แก้ชื่อบริษัทเก่า
      link: "",
      badges: ["On Site", "QC/QA", "Inspection"],
      title: "QC Engineer",
      start: "2024", // แก้ปี
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
        href: "https://github.com/[your-username]/[project-repo]", // ใส่ลิงก์ GitHub โปรเจกต์นี้
      },
    },
    {
      title: "Green Building AI Assistant",
      techStack: ["LangChain", "RAG", "Supabase", "AI"],
      description:
        "AI Chatbot capable of answering questions about Green Building standards using RAG (Retrieval-Augmented Generation).",
      link: {
        label: "GitHub",
        href: "#",
      },
    },
    {
      title: "Automated Quotation System",
      techStack: ["Python", "Excel Automation", "Scripting"],
      description:
        "Automation script generating 189+ quotation documents instantly, reducing manual workload by 90%.",
      link: {
        label: "GitHub",
        href: "#",
      },
    },
    {
      title: "Construction Dashboard",
      techStack: ["Power BI", "Data Analytics", "SQL"],
      description:
        "Interactive dashboard for tracking construction progress and budget utilizing real-time site data.",
      link: {
        label: "Demo",
        href: "#",
      },
    },
  ],
} as const;
