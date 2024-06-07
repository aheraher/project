
import React from 'react'
import Team from '../componets/Team'

const page = () => {
  return (
  <>
  
  
  
  
  
  <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
  

    <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
   
      <div class="flex flex-col justify-between xl:w-5/12">
   

        <div class="sm:text-center lg:py-12 lg:text-left xl:py-24">
          <h1 class="mb-8 text-3xl font-bold text-black sm:text-5xl md:mb-12 md:text-5xl">About Us: A Journey from Confusion to Clarity</h1>
          <p class="mb-4 font-semibold text-indigo-700 md:mb-6 md:text-lg xl:text-xl"> Our Story </p>
          <p class="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl"> We began as a group of friends, stepping into the world of engineering with a mix of excitement and uncertainty. Our first year was a maze of questions: How do we study effectively? Where can we find free books? What are the secrets to passing exams at the last minute?
          
          
           </p>

{/*  button we hidden 
          <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#" class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Start now</a>

            <a href="#" class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Take tour</a>
          </div> */}
        </div>

       
    
      
      </div>
  

     
      <div class="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
        <img src="/confuse.avif" loading="lazy" alt="Photo by Fakurian Design" class="h-full w-full object-cover object-center" />
      </div>
    
    </section>
  </div>

          <Team/>

</div>
  
  
  
  </>
  )
}

export default page