import AboutMe from "@/components/home/AboutMe";
import MyRoles from "@/components/home/MyRoles";
import Profile from "@/components/home/Profile";
import ProjectFeatured from "@/components/home/ProjectFeatured";

export default function Home() {
  return (
    <main className="">
      <Profile />
      <AboutMe />
      <MyRoles />
      <ProjectFeatured />
    </main>
  )
}
