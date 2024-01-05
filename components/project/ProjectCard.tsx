import React from 'react'
import { Card, CardHeader } from '../ui/card'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import Link from 'next/link'
import { Github, Link2Icon } from 'lucide-react'

const ProjectCard = ({ project }: any) => {
  return (
    <Card className='group overflow-hidden relative mr-4 h-[540px]'>
      <CardHeader className="p-0">
        <div className="relative rounded-lg w-full h-[300px] flex items-center justify-center bg-green-50 dark:bg-secondary xl:bg-project_bg_light xl:bg-[110%] dark:xl:bg-project_bg_dark xl:bg-no-repeat overflow-hidden">
          <Image
            src={project.image}
            className='absolute bottom-1 shadow-2xl'
            width={247}
            height={250}
            alt=''
          />

          <div className='flex items-center gap-x-8'>
            <Link
              href={project.link}
              target='_blank'
              className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300'
            >
              <Link2Icon />
            </Link>

            <Link
              href={project.github}
              target='_blank'
              className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300'
            >
              <Github />
            </Link>
          </div>
        </div>
      </CardHeader>


      <div className="h-[320px] overflow-y-scroll px-8 py-6 no-scrollbar">
        <Badge className="capitalize text-sm font-semibold mb-2 absolute top-4 left-5">{project.category}</Badge>
        <h4 className="h4 mb-2">{project.name}</h4>
        <p className="text-muted-foreground text-sm text-justify xl:text-lg">{project.description}</p>
      </div>
    </Card>
  )
}

export default ProjectCard