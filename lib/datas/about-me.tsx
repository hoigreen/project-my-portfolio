import en from '@/locales/en'
import { Calendar, GraduationCap, HomeIcon, MailIcon, Phone, User2 } from 'lucide-react'

interface infoDataProps {
  icon: JSX.Element
  text: string
}

export interface EducationData {
  university: string,
  qualification: string,
  years: string,
}

export interface ExperienceData {
  company: string,
  position: string,
  time: string,
}

interface qualificationsDataProps {
  title: 'education' | 'experience'
  data: EducationData[] | ExperienceData[]
}

interface skillsDataProps {
  title: string
  data: string[]
}

const infoData: Record<string, infoDataProps[]> = {
  en: [
    {
      icon: <User2 size={20} />,
      text: 'Truong Quoc Hoi'
    },
    {
      icon: <Phone size={20} />,
      text: '+84 343 694 755'
    },
    {
      icon: <MailIcon size={20} />,
      text: 'hoi.truongquoc107@gmail.com'
    },
    {
      icon: <Calendar size={20} />,
      text: '10/07/2002'
    },
    {
      icon: <GraduationCap size={20} />,
      text: 'Student at University of Information Technology (UIT)'
    },
    {
      icon: <HomeIcon size={20} />,
      text: 'HCMC, Vietnam'
    },
  ],
  vi: [
    {
      icon: <User2 size={20} />,
      text: 'Trương Quốc Hội'
    },
    {
      icon: <Phone size={20} />,
      text: '+84 343 694 755'
    },
    {
      icon: <MailIcon size={20} />,
      text: 'hoi.truongquoc107@gmail.com'
    },
    {
      icon: <Calendar size={20} />,
      text: '10/07/2002'
    },
    {
      icon: <GraduationCap size={20} />,
      text: 'Trường Đại học Công nghệ Thông tin TPHCM (UIT)'
    },
    {
      icon: <HomeIcon size={20} />,
      text: 'Quận 12, TPHCM, Việt Nam'
    },
  ],
}

const qualificationsData: Record<string, qualificationsDataProps[]> = {
  en: [
    {
      title: 'education',
      data: [
        {
          university: 'University of Information Technology (UIT)',
          qualification: 'Master of Science in Information Technology',
          years: '12/2024 - now',
        },
        {
          university: 'University of Transports Ho Chi Minh City (UTH)',
          qualification: 'Bachelor of Information Technology',
          years: '10/2020 - 10/2024',
        },
      ]
    },
    {
      title: 'experience',
      data: [
        {
          company: 'CODELIGHT LLC',
          position: 'Frontend Engineer',
          time: '01/2024 - now',
        },
        {
          company: 'NAISCORP Information Technology Service Joint Stock Company',
          position: 'Fullstack Developer',
          time: '07/2023 - 12/2023',
        },
      ],
    },
  ],
  vi: [
    {
      title: 'education',
      data: [
        {
          university: 'Trường Đại học Công nghệ Thông tin TPHCM (UIT)',
          qualification: 'Thạc sĩ Công nghệ Thông tin',
          years: '10/2020 - 10/2024',
        },
        {
          university: 'Trường Đại học Giao Thông Vận Tải (UTH)',
          qualification: 'Chuyên ngành Công nghệ thông tin',
          years: '2020 - nay',
        },
      ]
    },
    {
      title: 'experience',
      data: [
        {
          company: 'Công ty TNHH CODELIGHT',
          position: 'Frontend Engineer',
          time: '01/2024 - hiện tại',
        },
        {
          company: 'Công ty Cổ phần Giải pháp Công nghệ Thông Tin Naiscorp',
          position: 'Fullstack Developer',
          time: '07/2023 - 12/2023',
        },
      ],
    }
  ]
} as const;

const skillsData: skillsDataProps[] = [
  {
    title: 'Front-end',
    data: [
      'HTML',
      'CSS / SCSS / TailwindCSS',
      'ReactJS',
      'NextJS',
      'Zustand',
      'React Query',
      'GraphQL',
      'SASS',
      'Shadcn/ui',
      'WebSocket',
    ]
  },
  {
    title: 'Back-end',
    data: [
      'NodeJS',
      'ExpressJS',
      'Socket.IO',
      'RESTful API',
      'GraphQL',
    ]
  },
  {
    title: 'Programming Languages',
    data: [
      'Typescript',
      'Javascript',
      'C++'
    ]
  },
  {
    title: 'Databases',
    data: [
      'MongoDB',
      'MySQL',
      'MS SQL Server',
    ]
  },
  {
    title: 'Authentication & Security',
    data: [
      'Single Sign-On (SSO)',
      'JSON Web Token (JWT)',
    ]
  },
  {
    title: 'Cloud & DevOps',
    data: [
      'AWS',
      'Docker',
      'Cloud Computing',
      'Novu',
      'Linux',
      'Nginx',
    ]
  },
  {
    title: 'Source controls',
    data: [
      'Git',
      'GitHub',
      'Gitlab',
      'BitBucket',
    ]
  },
  {
    title: 'Methodologies',
    data: [
      'Science Research Method',
      'Critical Thinking',
      'Agile',
      'Scrum',
      'Kanban',
      'Waterfall',
    ]
  }
] as const;

const toolsData = [
  {
    imagePath: "/about/vscode.svg"
  },
  {
    imagePath: "/about/vs.svg"
  },
  {
    imagePath: "/about/ssms.svg"
  },
  {
    imagePath: "/about/studio-3t.svg"
  },
  {
    imagePath: "/about/git.svg"
  }
]

const certificationsData = [
  {
    name: 'Javascript DSA (freecodecamp.org)',
    time: '2022'
  },
  {
    name: 'HTML, CSS, Javascript. (F8 - fullstack.edu.vn)',
    time: '2021'
  },
]

const honorsAwardsData: Record<string, { name: string, description: string, amount: string }[]> = {
  en: [
    {
      name: 'Academic Incentive Scholarship',
      description: 'Scholarship for students with high academic performance - UTH',
      amount: '4/8 semester'
    }
  ],
  vi: [
    {
      name: 'Học bổng học tập kỳ năm học',
      description: 'Học bổng học tập kỳ năm học - UTH',
      amount: '4/8 học kỳ'
    }
  ]
} as const;

export {
  infoData,
  qualificationsData,
  skillsData,
  toolsData,
  certificationsData,
  honorsAwardsData
}