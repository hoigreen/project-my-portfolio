'use client'

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const MyCV = ({ params: { locale } }: { params: { locale: string } }) => {
  const [widthScreen, setWidthScreen] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 0)

  useEffect(() => setWidthScreen(window.innerWidth), []);

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          {locale === "en" ?
            'My CV' :
            'CV của tớ'
          }
        </h2>

        <Document
          file={'/cv/CV - TruongQuocHoi - Fullstack Web Developer.pdf'}
          className="mx-16 mb-8 xl:mb-16 flex flex-col justify-center items-center border border-primary/40 rounded-lg"
        >
          <Page pageNumber={1} scale={widthScreen < 768 ? 0.6 : 2} />
          <Page pageNumber={2} scale={widthScreen < 768 ? 0.6 : 2} />
        </Document>

        <div className='w-full flex justify-center gap-3 md:flex-row mx-auto xl:mx-0 mb-12'>
          <Link href='/cv/CV - TruongQuocHoi - Fullstack Web Developer.pdf'>
            <Button className='gap-x-2'>
              {locale === "en" ?
                'Download my CV' :
                'Tải CV'
              }
              <Download size={16} /></Button>
          </Link>
        </div>
      </div>
    </section>

  )
}

export default MyCV