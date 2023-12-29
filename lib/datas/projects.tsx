interface Projects {
  image: string
  category: string
  name: string
  description: string
  technology: string[],
  link: string,
  github: string
}

const projectsData: Record<string, Projects[]> = {
  en: [
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