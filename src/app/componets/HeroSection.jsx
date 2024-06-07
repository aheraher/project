import React from 'react';

const HeroSection = () => {
  return (
    // <section className="text-gray-600 body-font">
    //   <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    //     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    //       <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
    //       Welcome to Study Buddy!
    //       </h1>
    //       <p className="mb-8 leading-relaxed">
    //       Study Buddy is your ultimate companion in the journey of education. Whether you’re cramming for exams or just starting your semester, we’ve got you covered with a treasure trove of resources and a community of peers and seniors to guide you through.
    //       </p>
    //       <div className="flex justify-center">
    //         <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
    //           Button
    //         </button>
    //         <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
    //           Button
    //         </button>
    //       </div>
    //     </div>
    //     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    //       <img className="object-cover object-center rounded" alt="hero" src="/avtar.png" />
    //     </div>
    //   </div>
    // </section>


    <>
    
    
    
    
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    

    <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
      {/* image - start */}
      <img src="/avtar.png" loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center" />
      {/* image - end */}

      {/* overlay - start */}
      <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>
      {/* overlay - end */}

      {/* text start */}
      <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
        <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">Elevate Your Education: The Ultimate Hub for Study Collaboration!</p>
        <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">Connect, Share Notes, and Thrive Together!</h1>

        <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <a href="#" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Start now</a>

          <a href="#" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Take tour</a>
        </div>
      </div>
      {/* text end */}
    </section>
  </div>
</div>

    
    
    </>
  );
};

export default HeroSection;
