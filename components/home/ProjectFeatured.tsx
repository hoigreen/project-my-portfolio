'use client'
import { projectsData } from '@/lib/datas/projects';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectCard from '../project/ProjectCard';
import { Button } from '../ui/button';


const ProjectFeatured = ({ locale }: { locale: string }) => {
  return (
    <section className="relative mt-24 mb-12 xl:mb-48">
      <div className="container mx-auto overflow-hidden">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">{locale === 'en' ? 'Projects Featured' : 'Dự án nổi bật'}</h2>
          <p className="subtitle mb-8">
            {locale === 'en' ?
              'Crafting innovative web solutions with amazing frontend and backend technologies. Elevating projects with unique features.' :
              'Xây dựng các giải pháp web sáng tạo với các công nghệ frontend và backend tuyệt vời. Nâng tầm dự án bằng các chức năng tuyệt vời để nâng cao trải nghiệm cho người dùng.'
            }
          </p>
          <Link href='/projects'>
            <Button>
              {locale === 'en' ?
                'All my projects' :
                'Tất cả dự án'
              }
            </Button>
          </Link>
        </div>

        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
          <Swiper slidesPerView={1} breakpoints={{ 640: { slidesPerView: 2 } }} pagination={{ clickable: true }} modules={[Pagination]} className='h-[600px]'>
            {projectsData[locale].slice(0, 3).map((project) =>
              <SwiperSlide key={project.name}>
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