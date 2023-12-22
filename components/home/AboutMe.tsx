
import React from 'react'
import MyImage from './MyImage';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { infoData } from '@/lib/datas/about-me';

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
                  </div>
                </TabsContent>
                <TabsContent value='qualifications' >Qualifications Info</TabsContent>
                <TabsContent value='skills' >Skills Info</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe