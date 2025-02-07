
import { certificationsData, EducationData, ExperienceData, honorsAwardsData, infoData, qualificationsData, skillsData, toolsData } from '@/lib/datas/about-me';
import { getI18n } from '@/locales/server';
import { Briefcase, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import MyImage from './MyImage';

const AboutMe = async ({ locale }: { locale: string }) => {
  const t = await getI18n()

  const educationsData = qualificationsData[locale].find((item) => item.title === 'education')?.data as EducationData[] | undefined
  const experiencesData = qualificationsData[locale].find((item) => item.title === 'experience')?.data as ExperienceData[] | undefined



  return (
    <section className="py-12 xl:py-24">
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 mx-auto'>
          {t('aboutHeader')}
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
              <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-2xl xl:border dark:border-none'>
                <TabsTrigger className=' px-4' value='personal'>{t('aboutButtonPersonal')}</TabsTrigger>
                <TabsTrigger className='px-4' value='qualifications'>{t('aboutButtonQualification')}</TabsTrigger>
                <TabsTrigger className='px-4' value='skills'>{t('aboutButtonSkills')}</TabsTrigger>
              </TabsList>

              <div className='text-lg mt-12 xl:mt-8'>
                <TabsContent value='personal' >
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4 uppercase'>{t('aboutPersonalHeader')}</h3>
                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                      {t('aboutPersonalDescription')}
                    </p>

                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                      {infoData[locale].map((item, index) =>
                        <div key={index} className='flex items-center gap-x-4 mx-auto xl:mx-0'>
                          <div className='text-primary'>{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      )}
                    </div>

                    <div className='flex flex-col gap-y-2 mb-12'>
                      <div className='text-primary'>{t('aboutPersonalHonorsAwards')}</div>
                      <div className="border-b border-border"></div>
                      {honorsAwardsData[locale].map((item) =>
                        <div key={item.name} className='flex justify-between gap-4'>
                          <div className='flex flex-col gap-y-2 grow'>
                            <div className='font-semibold'>{item.name}</div>
                            <p className='italic text-sm text-muted-foreground'>{item.description}</p>
                          </div>
                          <div className='shrink-0 min-w-24'>{item.amount}</div>
                        </div>
                      )}
                    </div>

                    <div className='flex flex-col gap-y-2 mb-12'>
                      <div className='text-primary'>{t('aboutPersonalLanguageSkill')}</div>
                      <div className="border-b border-border"></div>
                      <div>Certificate of English B1</div>
                    </div>

                    <div className='flex flex-col gap-y-2 mb-12'>
                      <div className='text-primary'>{t('aboutPersonalCertifications')}</div>
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
                    <h3 className="h3 mb-8 text-center xl:text-left uppercase">{t('aboutQualificationsHeader')}</h3>
                    <div className='flex flex-col gap-6 xl:gap-12'>
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <GraduationCap size={28} />
                          <h4 className="capitalize">
                            {t('education')}
                          </h4>
                        </div>

                        <div className='flex flex-col gap-y-8'>
                          {educationsData?.map((item) =>
                            <div className='flex gap-x-8 group' key={item.university}>
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
                            {t('experience')}
                          </h4>
                        </div>

                        <div className='flex flex-col gap-y-8'>
                          {experiencesData?.map((item) =>
                            <div className='flex gap-x-8 group' key={item.company}>
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
                    <h3 className='h3 mb-8'>{t('aboutSkillsHeader')}</h3>

                    <div className='grid grid-cols-1 xl:grid-cols-2'>
                      {skillsData.map((type) =>
                        <div className='mb-16' key={type.title}>
                          <div className='text-xl font-semibold mb-2 text-primary'>{type.title}</div>
                          <div className='border-b border-border mb-4'></div>
                          <div>
                            {type.data.map((item) =>
                              <div key={item} className='text-center xl:text-left mx-auto xl:mx-0'>
                                <div>{item}</div>
                              </div>
                            )}
                          </div>
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