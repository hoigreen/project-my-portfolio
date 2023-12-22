
import React from 'react'
import MyImage from './MyImage';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { certificationsData, infoData, qualificationsData, skillsData, toolsData } from '@/lib/datas/about-me';
import { Briefcase, GraduationCap } from 'lucide-react';
import Image from 'next/image';

interface ExperienceDataObject {
  company: string;
  position: string;
  time: string;
}

interface EducationDataObject {
  university: string;
  qualification: string;
  years: string;
}

interface SkillsDataObject {
  name: string;
}

const AboutMe = () => {
  const getData = (arr: any, title: string) => {
    return arr.find((item: any) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 mx-auto'>
          About me
        </h2>

        <div className='flex flex-col xl:flex-row'>
          <div className='hidden xl:flex flex-1 relative'>
            <MyImage
              containerStyle='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
              imageSrc='/about/developer.png'
            />
          </div>

          <div className='flex-1'>
            <Tabs defaultValue='personal'>
              <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Information</TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Qualifications Information</TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills Information</TabsTrigger>
              </TabsList>

              <div className='text-lg mt-12 xl:mt-8'>
                <TabsContent value='personal' >
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4'>Unmatched Service Quality for Over 10 Years</h3>
                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                      I specialize in crafting intuitive website with cutting-edge technology, delivering dynamic and engaging user experiences.
                    </p>

                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                      {infoData.map((item, index) =>
                        <div key={index} className='flex items-center gap-x-4 mx-auto xl:mx-0'>
                          <div className='text-primary'>{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      )}
                    </div>

                    <div className='flex flex-col gap-y-2 mb-12'>
                      <div className='text-primary'>Language Skills</div>
                      <div className="border-b border-border"></div>
                      <div>Certificate of English B1</div>
                    </div>

                    <div className='flex flex-col gap-y-2 mb-12'>
                      <div className='text-primary'>Certifications</div>
                      <div className="border-b border-border"></div>
                      {certificationsData.map((item, index) =>
                        <div key={index} className='flex justify-between items-center'>
                          <div>{item.name}</div>
                          <p className='italic'>{item.time}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value='qualifications' >
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">My Beautiful Journey</h3>
                    <div className='grid xl:grid-cols-2 gap-y-12'>
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <GraduationCap size={28} />
                          <h4 className="capitalize">
                            {getData(qualificationsData, 'education').title}
                          </h4>
                        </div>

                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationsData, 'education').data.map((item: EducationDataObject, i: number) =>
                            <div className='flex gap-x-8 group' key={i}>
                              <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                <div className="w-[11px] h-[11px] rounded-full bg-primary a absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-300"></div>
                              </div>
                              <div>
                                <div className='font-semibold text-xl leading-2 mb-2'>{item.university}</div>
                                <div className='text-lg leading-none text-muted-foreground mb-4'>{item.qualification}</div>
                                <div className='text-base'>{item.years}</div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <Briefcase size={28} />
                          <h4 className="capitalize">
                            {getData(qualificationsData, 'experience').title}
                          </h4>
                        </div>

                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationsData, 'experience').data.map((item: ExperienceDataObject, i: number) =>
                            <div className='flex gap-x-8 group' key={i}>
                              <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                <div className="w-[11px] h-[11px] rounded-full bg-primary a absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-300"></div>
                              </div>
                              <div>
                                <div className='font-semibold text-xl leading-2 mb-2'>{item.company}</div>
                                <div className='text-lg leading-none text-muted-foreground mb-4'>{item.position}</div>
                                <div className='text-base'>{item.time}</div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value='skills' >
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-8'>My Skills</h3>

                    <div className='grid grid-cols-1 xl:grid-cols-2'>
                      {skillsData.map((type, index) =>
                        <div className='mb-16' key={index}>
                          <div className='text-xl font-semibold mb-2 text-primary'>{type.title}</div>
                          <div className='border-b border-border mb-4'></div>
                          <div>
                            {type.data.map((item: any, i: number) =>
                              <div key={i} className='w-2/4 text-center xl:text-left mx-auto xl:mx-0'>
                                <div>{item.name}</div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-8'>Tools I use</h3>

                    <div className='flex gap-x-12 justify-center xl:justify-start items-center'>
                      {toolsData.map((item, i) =>
                        <div key={i}>
                          <Image
                            src={item.imagePath}
                            width={50}
                            height={50}
                            priority
                            alt=''
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe