import { Calendar, GraduationCap, HomeIcon, MailIcon, Phone, User2 } from 'lucide-react'

const infoData = [
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
]

const qualificationsData = [
  {
    title: 'Education',
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
]

const skillsData = [
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
        name: 'MSSQL Server',
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
]

export {
  infoData,
  qualificationsData,
  skillsData,
}
