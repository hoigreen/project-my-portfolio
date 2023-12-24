'use client'

import React, { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const MyCV = () => {
  const [widthScreen, setWidthScreen] = useState<number>(window.innerWidth)

  useEffect(() => setWidthScreen(window.innerWidth), []);

  return (
    <main>
      <div className="container mx-auto">
        <Document file={'/cv/CV - TruongQuocHoi - Fullstack Web Developer.pdf'} className="flex flex-col justify-center items-center border border-border">
          <Page pageNumber={1} scale={widthScreen < 768 ? 0.6 : 2} />
          <Page pageNumber={2} scale={widthScreen < 768 ? 0.6 : 2} />
        </Document>
      </div>
    </main>
  )
}

export default MyCV