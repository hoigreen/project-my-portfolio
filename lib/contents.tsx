interface DictionaryEntry {
  profilePosition: string
  profileHeader: string
  profileDescription: string
  profileButtonContact: string
  profileButtonCV: string
  profileBadgeExperience: string
  profileBadgeUniversity: string

  logoImageAlt: string
}

export const dictionary: Record<string, DictionaryEntry> = {
  en: {
    profilePosition: "Fullstack Web Developer ",
    profileHeader: "Hello, my name is Truong Quoc Hoi",
    profileDescription: `Hello and welcome to my portfolio! I'm a Fullstack Web Developer.
    Proficient in both front-end and back-end technologies, I specialize in creating seamless and engaging user experiences.`,
    profileButtonContact: "Contact for work",
    profileButtonCV: 'Get My CV',
    profileBadgeExperience: 'Year Of Experience',
    profileBadgeUniversity: 'Year Of University',
    logoImageAlt: 'Logo my portfolio'
  },
  vi: {
    profilePosition: "Lập trình viên Full-stack",
    profileHeader: "Xin chào, tớ là Trương Quốc Hội.",
    profileDescription: `Xin chào và chào mừng đến với danh mục đầu tư của tớ! Tớ là Nhà phát triển web Fullstack.
    Tớ có kinh nghiệm làm việc cả công nghệ front-end và back-end, tớ chuyên tạo ra trải nghiệm người dùng liền mạch và hấp dẫn.`,
    profileButtonContact: "Liên hệ với tớ ngay",
    profileButtonCV: 'Tải xuống CV của tớ',
    profileBadgeExperience: 'Năm kinh nghiệm',
    profileBadgeUniversity: 'Năm Đại học',
    logoImageAlt: 'Logo trang portfolio của tôi'
  }
}