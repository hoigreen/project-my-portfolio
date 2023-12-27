import AboutMe from "@/components/home/AboutMe";
import Cta from "@/components/home/Cta";
import MyRoles from "@/components/home/MyRoles";
import Profile from "@/components/home/Profile";
import ProjectFeatured from "@/components/home/ProjectFeatured";

export default function Home({ params }: { params: { lang: string } }) {
  return (
    <main className="">
      <Profile />
      <AboutMe />
      <MyRoles />
      <ProjectFeatured />
      <Cta />
    </main>
  )
}
