interface Links {
  path: string;
  name: string;
}

const links: Record<string, Links[]> = {
  en: [
    { path: '/', name: 'Home' },
    { path: '/my-cv', name: 'My CV' },
    { path: '/projects', name: 'My Projects' },
    { path: '/contact', name: 'Contact' },
  ],
  vi: [
    { path: '/', name: 'Trang chủ' },
    { path: '/my-cv', name: 'CV của tớ' },
    { path: '/projects', name: 'Dự án cá nhân' },
    { path: '/contact', name: 'Liên hệ' },
  ],
};


export {
  links
}