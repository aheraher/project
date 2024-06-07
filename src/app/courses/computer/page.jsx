"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Page = () => {
  const [selectedYear, setSelectedYear] = useState(null); // State for selected year
  const data = [
    { title: "Books", date: "04.11.2022", color: "bg-[#6366f1]" },
    { title: "Notes", date: "04.11.2022", color: "bg-purple-400" },
    { title: "Decodes", date: "04.11.2022", color: "bg-red-500" },
    { title: "Previous year question papers", date: "04.11.2022", color: "bg-purple-500" },
    { title: "Practical and Codes", date: "30.11.2022", color: "bg-pink-500" },
  ];

  const years = [
    { title: "2nd Year", color: "bg-blue-500" },
    { title: "3rd Year", color: "bg-green-500" },
    { title: "4th Year", color: "bg-yellow-500" },
  ]; // List of years to select from with colors

  return (
    <>
      <div className='max-w-screen-lg mx-auto'>
        {!selectedYear ? (
          // Year selection step
          <div className='flex flex-wrap items-start py-12'>
            {years.map((year, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div
                  onClick={() => setSelectedYear(year.title)}
                  className="block p-8 bg-gray-900 rounded-2xl uppercase relative overflow-hidden h-60 transition duration-500 hover:bg-gray-800 hover:text-white group cursor-pointer"
                >
                  <div className={`absolute top-[-4rem] right-[-4rem] w-32 h-32 ${year.color} rounded-full transition-transform duration-500 transform group-hover:scale-[30]`}></div>
                  <div className="relative z-10 font-bold text-white text-2xl mb-6 group-hover:text-white">
                    {year.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Data display step
          <div className='flex flex-wrap items-start py-12'>
            {data.map((course, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
                <Link href={`/course/computer/${course.title}`} className="block p-8 bg-gray-900 rounded-2xl uppercase relative overflow-hidden h-60 transition duration-500 hover:bg-gray-800 hover:text-white group">
                  <div className={`absolute top-[-4rem] right-[-4rem] w-32 h-32 ${course.color} rounded-full transition-transform duration-500 transform group-hover:scale-[30]`}></div>
                  <div className="relative z-10 font-bold text-white text-2xl mb-6 group-hover:text-white">
                    {course.title}
                  </div>
                  {course.date && (
                    <div className="relative z-10 text-sm text-white group-hover:text-white">
                      <span className="font-bold text-yellow-500 group-hover:text-white">Books, Notes, Decode, Previous year question paper, IMP video, Solutions...</span>
                    </div>
                  )}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Page;
