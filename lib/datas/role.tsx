import { Cog, MonitorCheck } from "lucide-react";

interface roles {
  icon: JSX.Element
  title: string
  description: string
}

const roleData: Record<string, roles[]> = {
  en: [
    {
      icon: <MonitorCheck size={80} strokeWidth={0.8} />,
      title: 'Frontend Web Developer',
      description: 'Experienced Frontend Developer with expertise in ReactJS and Next.js. I specialize in creating seamless, user-friendly web applications. Let\'s build something amazing together! 🚀 #ReactJS #NextJS #WebDevelopment'
    },
    {
      icon: <Cog size={80} strokeWidth={0.8} />,
      title: 'Backend Developer',
      description: 'Backend Developer specializing in Node.js and .NET Framework. Proficient in building scalable and efficient server-side solutions. Let\'s power your applications with robust backend architecture! 💻 #NodeJS #DotNET #BackendDevelopment'
    }
  ],
  vi: [
    {
      icon: <MonitorCheck size={80} strokeWidth={0.8} />,
      title: 'Frontend Web Developer',
      description: 'Là một lập trình viên Frontend có kinh nghiệm ở cấp bậc Fresher với chuyên môn về ReactJS và Next.js. Tớ chuyên tạo các ứng dụng web liền mạch, thân thiện với người dùng. Hãy cùng nhau xây dựng điều gì đó tuyệt vời! 🚀 #ReactJS #NextJS #WebDevelopment'
    },
    {
      icon: <Cog size={80} strokeWidth={0.8} />,
      title: 'Backend Developer',
      description: 'Là một lập trình viên Backend chuyên về Node.js và .NET Framework. Thành thạo trong việc xây dựng các giải pháp phía máy chủ hiệu quả và có thể mở rộng. Hãy cùng nhau cung cấp sức mạnh cho ứng dụng của bạn bằng kiến trúc backend mạnh mẽ! 💻 #NodeJS #DotNET #BackendDevelopment'
    }
  ]
}

export {
  roleData
}