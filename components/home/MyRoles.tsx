import { roleData } from '@/lib/datas/role'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

const MyRoles = () => {
  return (
    <section className='mb-12 xl:mb-36'>
      <div className="container mx-auto">
        <h2 className="section-title mb-24 xl:mb-24 text-center mx-auto">My Roles</h2>

        <div className='grid grid-cols-1 xl:grid-cols-2 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
          {roleData.map((role, i) =>
            <Card key={i} className="w-full h-[300px] flex flex-col items-center pt-16 pb-10 relative">
              <CardHeader className="text-primary absolute -top-[60px]">
                <div className="w-[140px] h-[80px] dark:bg-transparent flex justify-center items-center">{role.icon}</div>
              </CardHeader>
              <CardContent className='text-center'>
                <CardTitle className="mb-8">{role.title}</CardTitle>
                <CardDescription className="text-lg">{role.description}</CardDescription>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

export default MyRoles