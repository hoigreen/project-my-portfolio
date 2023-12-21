
import React from 'react'

const AboutMe = () => {
  const getData = (arr: any, title: string) => {
    return arr.find((item: any) => item.title === title);
  };

  return (
    <section>
      <div className='container mx-auto'>
        <h2 className='section-title'>About me</h2>
      </div>
    </section>
  );
}

export default AboutMe