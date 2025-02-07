import { Cog, MonitorCheck } from "lucide-react";
import { IoIosInfinite } from "react-icons/io";

interface roles {
  icon: JSX.Element
  title: string
  description: string
}

const roleData: Record<string, roles[]> = {
  en: [
    {
      icon: <MonitorCheck size={80} strokeWidth={0.8}  className="bg-background"/>,
      title: 'Frontend Web Developer',
      description: 'Experienced Frontend Developer with expertise in ReactJS and Next.js. I specialize in creating seamless, user-friendly web applications. Let\'s build something amazing together! 🚀 #ReactJS #NextJS #WebDevelopment'
    },
    {
      icon: <Cog size={80} strokeWidth={0.8} className="bg-background" />,
      title: 'Backend Developer',
      description: 'Backend Developer specializing in Node.js and .NET Framework. Proficient in building scalable and efficient server-side solutions. Let\'s power your applications with robust backend architecture! 💻 #NodeJS #DotNET #BackendDevelopment'
    },
    {
      icon: <IoIosInfinite size={80} strokeWidth={0.8} className="bg-background" />,
      title: 'DevOps Developer (Entry Level)',
      description: 'Provide support for the development team in the implementation of DevOps practices, ensuring efficient and reliable software development processes. ⚙️ #Automation #CI/CD #Kubernetes #Docker #Git #Cloud Computing'
    }
  ],
  vi: [
    {
      icon: <MonitorCheck size={80} strokeWidth={0.8} className="bg-background"/>,
      title: 'Frontend Web Developer',
      description: 'Là một lập trình viên Frontend có kinh nghiệm ở cấp bậc Fresher với chuyên môn về ReactJS và Next.js. Tớ chuyên tạo các ứng dụng web liền mạch, thân thiện với người dùng. Hãy cùng nhau xây dựng điều gì đó tuyệt vời! 🚀 #ReactJS #NextJS #WebDevelopment'
    },
    {
      icon: <Cog size={80} strokeWidth={0.8} className="bg-background" />,
      title: 'Backend Developer',
      description: 'Là một lập trình viên Backend chuyên về Node.js và .NET Framework. Thành thạo trong việc xây dựng các giải pháp phía máy chủ hiệu quả và có thể mở rộng. Hãy cùng nhau cung cấp sức mạnh cho ứng dụng của bạn bằng kiến trúc backend mạnh mẽ! 💻 #NodeJS #DotNET #BackendDevelopment'
    },
    {
      icon: <IoIosInfinite size={80} strokeWidth={0.8} className="bg-background" />,
      title: 'DevOps Developer (Entry Level)',
      description: 'Hỗ trợ cho đội phát triển trong việc áp dụng các thực thể DevOps, đảm bảo quá trình phát triển phần mềm hiệu quả và đáng tin cậy. ⚙️ #Automation #CI/CD #Kubernetes #Docker #Git #Cloud Computing'
    }
  ]
}

export {
  roleData
}