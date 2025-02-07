export interface Project {
  image: string
  category: string
  name: string
  description: string
  technology: string[],
  link?: string,
  github?: string
}

const projectsData: Record<string, Project[]> = {
  en: [
    {
      image: '/project/tscout.png',
      category: 'NextJS + ReactJS',
      name: 'Tscout',
      description: 'A comprehensive recruitment platform powered by AI technology, designed to streamline the process of attracting, assessing, and retaining top talent.',
      technology: [
        "Developed and enhanced key platform features.",
        "Implemented new technologies to optimize performance.",
        "Built and maintained CMS, web applications, and landing pages.",
        "Refined and expanded platform functionality, ensuring the latest technologies and best practices were implemented.",
      ],
    },
    {
      image: '/project/heydevs.png',
      category: 'NextJS',
      name: 'HeyDevs',
      description: 'The leading "Active Sourcing" platform in APAC, specializing in IT recruitment. It serves as a valuable tool for recruiters, saving time and costs, while also connecting developers with dream opportunities as a "Passive Job Seeking" platform.',
      technology: [
        "Developed and enhanced platform features to improve user experience.",
        "Maintained and refactored existing codebases to ensure scalability and efficiency.",
        "Built and optimized CMS, web applications, and landing pages.",
        "Collaborated closely with UI/UX designers, translating Figma designs into responsive and functional interfaces.",
        "Researched and integrated new technologies to keep the platform innovative and competitive."
      ],
    },
    {
      image: '/project/souldev.png',
      category: 'NextJS + NodeJS',
      name: 'SoulDev',
      description: 'The platform facilitates knowledge sharing, project collaboration, and professional networking while providing real-time updates on technological advancements. Implemented features including personalized technology feeds, skill-based matching algorithms, and interactive learning communities to foster meaningful connections within the developer ecosystem.',
      technology: [
        "Frontend: Next.js, React Query, TailwindCSS for a modern and efficient UI.",
        "Backend: Node.js with MongoDB for scalable server and database management.",
        "Caching: Redis for optimized data storage and fast retrieval.",
        "Notifications: Novu for a robust notification infrastructure.",
        "Cloud Computing: EC2 for scalable and flexible server deployment.",
      ],
      link: "https://souldev.online/",
      github: 'https://github.com/hoigreen/project-souldev'
    },
    {
      image: '/project/1.png',
      category: 'ReactJS + NodeJS',
      name: 'ShopTECH',
      description: 'This is an e-commerce website that allows users to order cakes available on the website. Admin can manage orders, product quantity, buyer information, promotion information and customer information, as well as revenue statistics. On the customer side, customers can view product information, promotions, make purchases and make product reviews.',
      technology: [
        "Using ReactJS, CSS, SCSS module to build front-end for website.",
        "Using MongoDB to storage database.",
        "Using NodeJS and framework ExpressJS to configure for server on website."
      ],
      link: "https://shoptech.website/",
      github: 'https://github.com/hoigreen/project-ecommerce-shop'
    },
    {
      image: '/project/2.png',
      category: '.NET Framework',
      name: 'Tinh Ban Coffee',
      description: 'The Coffee Shop Management project is a comprehensive software solution designed to streamline and enhance the management of a coffee shop. Built using .NET WinForms, C#, Guna Framework, and integrated with SQL Server',
      technology: [
        "Programming Language: C#.",
        "User Interface Framework: .NET WinForms, Guna Framework, LiveCharts.",
        "Database: Mircosoft SQL Server."
      ],
      link: "/",
      github: 'https://github.com/hoigreen/project-coffee-shop-management-ado-dotnet'
    },
    {
      image: '/project/3.png',
      category: 'ReactJS',
      name: 'Real-time Bidding Product Website',
      description: 'The website allows users to participate in real time bidding for a specific product between users.',
      technology: [
        " Using ReactJS, SCSS to build front-end.",
        "Using JSON Server to store user and product data.",
        "Using JavaScript, NodeJS to handle real-time events."
      ],
      link: "https://bidding-page.vercel.app/",
      github: 'https://github.com/hoigreen/project-bidding'
    },
  ],

  vi: [
    {
      image: '/project/tscout.png',
      category: 'NextJS + ReactJS',
      name: 'Tscout',
      description: 'Một nền tảng tuyển dụng toàn diện sử dụng công nghệ AI, được thiết kế để hợp lý hóa quy trình thu hút, đánh giá và giữ chân những nhân tài hàng đầu.',
      technology: [
        "Đã phát triển và nâng cao các tính năng nền tảng chính.",
        "Đã triển khai các công nghệ mới để tối ưu hóa hiệu suất.",
        "Đã xây dựng và duy trì CMS, ứng dụng web và trang đích.",
        "Đã tinh chỉnh và mở rộng chức năng nền tảng, đảm bảo các công nghệ mới nhất và các phương pháp hay nhất đã được triển khai.",
      ],
    },
    {
      image: '/project/heydevs.png',
      category: 'NextJS',
      name: 'HeyDevs',
      description: 'Nền tảng "Active Sourcing" hàng đầu tại APAC, chuyên về tuyển dụng CNTT. Đây là công cụ hữu ích cho các nhà tuyển dụng, giúp tiết kiệm thời gian và chi phí, đồng thời kết nối các nhà phát triển với các cơ hội mơ ước như một nền tảng "Passive Job Seeking".',
      technology: [
        "Phát triển và cải tiến các tính năng nền tảng để cải thiện trải nghiệm người dùng.",
        "Duy trì và tái cấu trúc các cơ sở mã hiện có để đảm bảo khả năng mở rộng và hiệu quả.",
        "Xây dựng và tối ưu hóa CMS, ứng dụng web và trang đích.",
        "Hợp tác chặt chẽ với các nhà thiết kế UI/UX, chuyển đổi các thiết kế Figma thành các giao diện phản hồi và chức năng.",
        "Nghiên cứu và tích hợp các công nghệ mới để duy trì tính sáng tạo và khả năng cạnh tranh của nền tảng."
      ],
    },
    {
      image: '/project/souldev.png',
      category: 'NextJS',
      name: 'SoulDev',
      description: 'Nền tảng giúp người dùng chia sẻ kiến thức, hợp tác trên các dự án và kết nối với cộng đồng lập trình viên. Cung cấp các tính năng như các bài viết cá nhân, phân loại dự án theo các lĩnh vực khác nhau, và các cộng đồng học hỏi lập trình viên.',
      technology: [
        "Frontend: Next.js, React Query, TailwindCSS cho giao diện hiện đại và hiệu quả.",
        "Backend: Node.js với MongoDB cho các server và cơ sở dữ liệu có thể mở rộng.",
        "Caching: Redis cho việc lưu trữ dữ liệu tối ưu và truy xuất nhanh.",
        "Thông báo: Novu cho cơ sở dữ liệu thông báo chắc chắn.",
        "Cloud Computing: EC2 cho các server có thể mở rộng và linh hoạt.",
      ],
      link: "https://souldev.online/",
      github: 'https://github.com/hoigreen/project-souldev'
    },
    {
      image: '/project/1.png',
      category: 'ReactJS + NodeJS',
      name: 'ShopTECH',
      description: 'Đây là website thương mại điện tử cho phép người dùng đặt mua các loại bánh có sẵn trên website. Quản trị viên có thể quản lý đơn hàng, số lượng sản phẩm, thông tin người mua, thông tin khuyến mãi và thông tin khách hàng cũng như thống kê doanh thu. Về phía khách hàng, khách hàng có thể xem thông tin sản phẩm, khuyến mãi, mua hàng và đánh giá sản phẩm.',
      technology: [
        "Sử dụng module ReactJS, CSS, SCSS để xây dựng front-end cho website.",
        "Sử dụng MongoDB để lưu trữ cơ sở dữ liệu.",
        "Sử dụng NodeJS và framework ExpressJS để xây dựng cho server trên website."
      ],
      link: "https://shoptech.website/",
      github: 'https://github.com/hoigreen/project-ecommerce-shop'
    },
    {
      image: '/project/2.png',
      category: '.NET Framework',
      name: 'Tình Bạn Coffee',
      description: 'Dự án Quản lý quán cà phê là một giải pháp phần mềm toàn diện được thiết kế để hợp lý hóa và nâng cao việc quản lý quán cà phê. Được xây dựng bằng .NET WinForms, C#, Guna Framework và được tích hợp với SQL Server',
      technology: [
        "Ngôn ngữ lập trình: C#.",
        "Giao diện người dùng: .NET WinForms, Guna Framework, LiveCharts.",
        "Cơ sở dữ liệu: Máy chủ SQL Mircosoft."
      ],
      link: "/",
      github: 'https://github.com/hoigreen/project-coffee-shop-management-ado-dotnet'
    },
    {
      image: '/project/3.png',
      category: 'ReactJS',
      name: 'Trang web sản phẩm đấu giá thời gian thực',
      description: 'Trang web cho phép người dùng tham gia đấu giá theo thời gian thực cho một sản phẩm cụ thể giữa những người dùng.',
      technology: [
        "Sử dụng ReactJS, SCSS để xây dựng giao diện người dùng.",
        "Sử dụng Máy chủ JSON để lưu trữ dữ liệu người dùng và sản phẩm.",
        "Sử dụng JavaScript, NodeJS để xử lý các sự kiện theo thời gian thực."
      ],
      link: "https://bidding-page.vercel.app/",
      github: 'https://github.com/hoigreen/project-bidding'
    },
  ]
}

export {
  projectsData
}