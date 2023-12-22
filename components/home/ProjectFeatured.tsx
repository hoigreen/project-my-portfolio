import { projectsData } from '@/lib/datas/projects'
import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProjectCard from '../project/ProjectCard'


const ProjectFeatured = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Projects Featured</h2>
          <p className="subtitle mb-8">Crafting innovative web solutions with Node.js and .NET Framework. Elevating projects with scalable backend magic.</p>
        </div>

        <div>
          <Swiper>
            {projectsData.map((project, i) =>
              <SwiperSlide key={i}>
                <ProjectCard project={project} />
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default ProjectFeatured