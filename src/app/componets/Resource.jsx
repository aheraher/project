import Link from 'next/link'
import React from 'react'

const Resource = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
  <div className="flex flex-wrap items-start py-12">
    {[
      { title: "First Year Comman for All Branch  ", date: "04.11.2022", color: "bg-[#6366f1]" ,course:"first_year" },
      { title: "Computer Engineering", date: "04.11.2022", color: "bg-purple-400" ,course:"computer"},
      { title: "Civil   Engineering", date: "04.11.2022", color: "bg-red-500" ,course:"civil" },
      { title: "electrical engineering ", date: "04.11.2022", color: "bg-purple-500" ,course:"electic"  },
      { title: "electronic and telecommunication engineering", date: "30.11.2022", color: "bg-pink-500" ,course:"e&tc"},
      { title: "information technology engineering", date: "22.11.30", color: "bg-blue-500" ,course:"it_engg"},
      { title: "Artificial Intelligence and Data Science", date: "22.11.30", color: "bg-pink-500" ,course:"aids" },
      { title: "mechanical engineering", date: "31.10.2022", color: "bg-orange-500",course:"mechanical" },
    ].map((course, index) => (
      <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
        <Link href= {`/courses/${course.course}`} className="block p-8 bg-gray-900 rounded-2xl  uppercase relative overflow-hidden h-60 transition duration-500 hover:bg-gray-800 hover:text-white group">
          <div className={`absolute top-[-4rem] right-[-4rem] w-32 h-32 ${course.color} rounded-full transition-transform duration-500 transform group-hover:scale-[30]`}></div>
          <div className="relative z-10 font-bold text-white text-2xl mb-6 group-hover:text-white">
            {course.title}
          </div>
         
          {course.date && (
            <div className="relative z-10 text-sm text-white group-hover:text-white">
              <span className="font-bold text-yellow-500 group-hover:text-white">  books,notes,decode,previous year question paper,IMP video,Solutions...  </span>
            </div>
          )}
        </Link>

        
      </div>
    ))}
  </div>
</div>
  )
}

export default Resource