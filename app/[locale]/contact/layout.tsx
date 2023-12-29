import React from 'react'
import { Provider } from '../provider'

const ContactLayout = ({ children, params }: { children: React.ReactNode, params: { locale: string } }) => {
  return (
    <Provider locale={params.locale}>
      {children}
    </Provider>
  )
}

export default ContactLayout