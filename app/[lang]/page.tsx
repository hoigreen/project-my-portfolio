import AboutMe from "@/components/home/AboutMe";
import Cta from "@/components/home/Cta";
import MyRoles from "@/components/home/MyRoles";
import Profile from "@/components/home/Profile";
import ProjectFeatured from "@/components/home/ProjectFeatured";

export default function Page({ params }: { params: { lang: string } }) {
  return (
    <main className="">
      <Profile lang={params.lang} />
      <AboutMe />
      <MyRoles />
      <ProjectFeatured />
      <Cta />
    </main>
  )
}
