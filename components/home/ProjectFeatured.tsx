'use client'
import { projectsData } from '@/lib/datas/projects'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProjectCard from '../project/ProjectCard'
import { Button } from '../ui/button';
import Link from 'next/link';
import { getCurrentLocale } from '@/locales/server';


const ProjectFeatured = ({ locale }: { locale: string }) => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto overflow-hidden">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">{locale === 'en' ? 'Projects Featured' : 'Dự án nổi bật'}</h2>
          <p className="subtitle mb-8">
            {locale === 'en' ?
              'Crafting innovative web solutions with Node.js and .NET Framework. Elevating projects with scalable backend magic.' :
              'Xây dựng các giải pháp web sáng tạo với Node.js và .NET Framework. Nâng tầm dự án bằng phép thuật phụ trợ có thể mở rộng.'
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
            {projectsData[locale].map((project, i) =>
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