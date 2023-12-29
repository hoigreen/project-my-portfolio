'use client'
import ProjectCard from '@/components/project/ProjectCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { projectsData } from '@/lib/datas/projects'
import React, { useState } from 'react'

const uniqueCategories = ['All Projects', ...new Set(projectsData['en'].map((item: any) => item.category))];

const MyProjects = ({ params: { locale } }: { params: { locale: string } }) => {
  const [categories, setCategories] = useState(uniqueCategories)
  const [currentCategory, setCurrentCategory] = useState('All Projects')

  const filteredProjects = projectsData[locale].filter(item => currentCategory === 'All Projects' ? item : item.category === currentCategory)

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">{locale === 'en' ? 'My Projects' : 'Dự án của tớ'}</h2>

        <Tabs defaultValue={currentCategory} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full grid-cols-2 md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none '>
            {categories.map((category, i) =>
              <TabsTrigger
                value={category}
                key={i}
                onClick={() => setCurrentCategory(category)}
                className='w-[162px] md:w-auto'
              >
                {category}
              </TabsTrigger>
            )}
          </TabsList>

          <div className='text-lg xl:mt-8 grid grid-cols-2 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, i) =>
              <TabsContent value={currentCategory} key={i}>
                <ProjectCard project={project} />
              </TabsContent>
            )}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default MyProjects