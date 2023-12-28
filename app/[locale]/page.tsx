import AboutMe from "@/components/home/AboutMe";
import Cta from "@/components/home/Cta";
import MyRoles from "@/components/home/MyRoles";
import Profile from "@/components/home/Profile";
import ProjectFeatured from "@/components/home/ProjectFeatured";
import { Provider } from "./provider";

export default function Page({ params: { locale } }: { params: { locale: string } }) {
  return (
    <main>
      <Provider locale={locale}>
        <Profile />
        <AboutMe />
        <MyRoles />
        <ProjectFeatured />
        <Cta />
      </Provider>
    </main>
  )
}
