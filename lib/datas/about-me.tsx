import { Calendar, GraduationCap, HomeIcon, MailIcon, Phone, User2 } from 'lucide-react'

interface infoDataProps {
  icon: JSX.Element
  text: string
}

interface qualificationsDataProps {
  title: string
  data: any
}

interface Skill {
  name: string;
}

interface skillsDataProps {
  title: string
  data: Skill[]
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
      text: 'hoi.truongquoc107@gmai.com'
    },
    {
      icon: <Calendar size={20} />,
      text: '10/07/2002'
    },
    {
      icon: <GraduationCap size={20} />,
      text: 'Student at University of Transports Ho Chi Minh City (UTH)'
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
      text: 'hoi.truongquoc107@gmai.com'
    },
    {
      icon: <Calendar size={20} />,
      text: '10/07/2002'
    },
    {
      icon: <GraduationCap size={20} />,
      text: 'Sinh viên năm 4 tại Trường Đại học Giao Thông Vận Tải TPHCM (UTH)'
    },
    {
      icon: <HomeIcon size={20} />,
      text: 'Quận 12, TPHCM, Việt'
    },
  ],
}

const qualificationsData: Record<string, qualificationsDataProps[]> = {
  en: [
    {
      title: 'education',
      data: [
        {
          university: 'University of Transports Ho Chi Minh City (UTH)',
          qualification: 'Bachelor of Information Technology',
          years: '2020 - now',
        },
      ]
    },
    {
      title: 'experience',
      data: [
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
          company: 'Công ty Cổ phần Giải pháp Công nghệ Thông Tin Naiscorp',
          position: 'Fullstack Developer',
          time: '07/2023 - 12/2023',
        },
      ],
    },
  ]
}

const skillsData: Record<string, skillsDataProps[]> = {
  en: [
    {
      title: 'Web Front-end Technologies',
      data: [
        {
          name: 'HTML, CSS',
        },
        {
          name: 'SCSS',
        },
        {
          name: 'Tailwind CSS',
        },
        {
          name: 'ReactJS',
        },
        {
          name: 'NextJS',
        }
      ]
    },
    {
      title: 'Programming Languages',
      data: [
        {
          name: 'Javascript',
        },
        {
          name: 'Typescript',
        },
        {
          name: 'C#',
        },
      ]
    },
    {
      title: 'Web Back-end Technologies',
      data: [
        {
          name: 'NodeJS',
        },
        {
          name: 'ExpressJS',
        },
        {
          name: 'Socket.IO',
        },
        {
          name: 'Redis',
        },
        {
          name: '.NET Framework',
        }
      ]
    },
    {
      title: 'Databases',
      data: [
        {
          name: 'MongoDB',
        },
        {
          name: 'MySQL',
        },
        {
          name: 'MS SQL Server',
        }
      ]
    },
    {
      title: 'Source controls',
      data: [
        {
          name: 'Git',
        },
        {
          name: 'Gitlab',
        },
        {
          name: 'BitBucket',
        }
      ]
    }
  ],
  vi: [
    {
      title: 'Công nghệ Web phía Front-end',
      data: [
        {
          name: 'HTML, CSS',
        },
        {
          name: 'SCSS',
        },
        {
          name: 'Tailwind CSS',
        },
        {
          name: 'ReactJS',
        },
        {
          name: 'NextJS',
        }
      ]
    },
    {
      title: 'Ngôn ngữ lập trình',
      data: [
        {
          name: 'Javascript',
        },
        {
          name: 'Typescript',
        },
        {
          name: 'C#',
        },
      ]
    },
    {
      title: 'Công nghệ phía Back-end',
      data: [
        {
          name: 'NodeJS',
        },
        {
          name: 'ExpressJS',
        },
        {
          name: 'Socket.IO',
        },
        {
          name: 'Redis',
        },
        {
          name: '.NET Framework',
        }
      ]
    },
    {
      title: 'Cơ sở dữ liệu',
      data: [
        {
          name: 'MongoDB',
        },
        {
          name: 'MySQL',
        },
        {
          name: 'MS SQL Server',
        }
      ]
    },
    {
      title: 'Công cụ quản lý mã nguồn',
      data: [
        {
          name: 'Git',
        },
        {
          name: 'Gitlab',
        },
        {
          name: 'BitBucket',
        }
      ]
    }
  ]
}

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
    name: 'HTML, CSS, Javascript. (F8 - fullstack.edu.vn)',
    time: '2021'
  },
  {
    name: 'Javascript DSA (freecodecamp.org)',
    time: '2022'
  },
]

export {
  infoData,
  qualificationsData,
  skillsData,
  toolsData,
  certificationsData
}
