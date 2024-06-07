import React from 'react';

const WhatWEOffer = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">What We Offer</h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg"> 
          Embrace the power of community learning and make your study sessions more effective and enjoyable. With Study Buddy, you’re never alone on your academic journey. Let’s ace those exams together!
          </p>
        </div>
        {/* text - end */}

        <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {/* feature - start */}
          <div className="flex flex-col rounded-lg border p-4 md:p-6 hover:shadow-xl hover:shadow-[#6366f1]  ">
            <div className="mb-2 flex justify-center">
              <svg className="h-10 w-auto sm:h-12 text-shadow" width="200" height="50" viewBox="0 0 200 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <text x="10" y="30" font-family="Arial, sans-serif" font-size="32" fill="currentColor">
                  📝
                </text>
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold md:text-xl">Past Exam Archive</h3>
            <p className="mb-4 text-gray-500">Browse through a collection of previous exam papers to familiarize yourself with the format and frequently asked questions.</p>
            <a href="#" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
          </div>
          {/* feature - end */}

          {/* feature - start */}
          <div className="flex flex-col rounded-lg border p-4 md:p-6 hover:shadow-xl hover:shadow-[#6366f1]">
            <div className="mb-2 flex justify-center">
              <svg className="h-10 w-auto sm:h-12 text-shadow" width="200" height="50" viewBox="0 0 200 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <text x="10" y="30" font-family="Arial, sans-serif" font-size="32" fill="currentColor">
                  ✅
                </text>
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold md:text-xl">Expert Solutions</h3>
            <p className="mb-4 text-gray-500">Find step-by-step solutions to past exam papers, providing you with clear explanations and methodologies.</p>
            <a href="#" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
          </div>
          {/* feature - end */}

          {/* feature - start */}
          <div className="flex flex-col rounded-lg border p-4 md:p-6 hover:shadow-xl hover:shadow-[#6366f1]">
            <div className="mb-2 flex justify-center">
              <svg className="h-10 w-auto sm:h-12 text-shadow" width="200" height="50" viewBox="0 0 200 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <text x="10" y="30" font-family="Arial, sans-serif" font-size="32" fill="currentColor">
                  🎓
                </text>
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold md:text-xl">Mentorship Program</h3>
            <p className="mb-4 text-gray-500">Connect with senior students and alumni who can offer personalized guidance, study tips, and moral support.</p>
            <a href="#" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
          </div>
          {/* feature - end */}

          {/* feature - start */}
          <div className="flex flex-col rounded-lg border p-4 md:p-6 hover:shadow-xl hover:shadow-[#6366f1]">
            <div className="mb-2 flex justify-center">
              <svg className="h-10 w-auto sm:h-12 text-shadow" width="200" height="50" viewBox="0 0 200 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <text x="10" y="30" font-family="Arial, sans-serif" font-size="32" fill="currentColor">
                  🚀
                </text>
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold md:text-xl">Quick Success Strategies</h3>
            <p className="mb-4 text-gray-500">Discover effective techniques for acing your exams, even with limited preparation time.</p>
            <a href="#" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
          </div>
          {/* feature - end */}

          {/* feature - start */}
          <div className="flex flex-col rounded-lg border p-4 md:p-6 hover:shadow-xl hover:shadow-[#6366f1]">
            <div className="mb-2 flex justify-center">
              <svg className="h-10 w-auto sm:h-12 text-shadow" width="200" height="50" viewBox="0 0 200 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <text x="10" y="30" font-family="Arial, sans-serif" font-size="32" fill="currentColor">
                  😄
                </text>
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold md:text-xl">Engaging Study Activities</h3>
            <p className="mb-4 text-gray-500">Participate in fun learning exercises and games that make studying an enjoyable and less stressful experience.</p>
            <a href="#" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
          </div>
          {/* feature - end */}

          {/* feature - start */}
          <div className="flex flex-col rounded-lg border p-4 md:p-6 hover:shadow-xl hover:shadow-[#6366f1]">
            <div className="mb-2 flex justify-center">
              <svg className="h-10 w-auto sm:h-12 text-shadow" width="200" height="50" viewBox="0 0 200 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <text x="10" y="30" font-family="Arial, sans-serif" font-size="32" fill="currentColor">
                  📤
                </text>
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold md:text-xl">Share & Collaborate</h3>
            <p className="mb-4 text-gray-500">Contribute your own notes and study materials to help others and build a supportive learning community.</p>
            <a href="#" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
          </div>
          {/* feature - end */}

          <div className="flex flex-col rounded-lg border p-4 md:p-6 hover:shadow-xl hover:shadow-[#6366f1]">
            <div className="mb-2 flex justify-center">
              <svg className="h-10 w-auto sm:h-12 text-shadow" width="200" height="50" viewBox="0 0 200 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <text x="10" y="30" font-family="Arial, sans-serif" font-size="32" fill="currentColor">
                  🧠
                </text>
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold md:text-xl">Interactive Learning Tools</h3>
            <p className="mb-4 text-gray-500">Engage with interactive content like quizzes and flashcards to test your knowledge and reinforce learning.</p>
            <a href="#" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
          </div>

          <div className="flex flex-col rounded-lg border p-4 md:p-6 hover:shadow-xl hover:shadow-[#6366f1]">
            <div className="mb-2 flex justify-center">
              <svg className="h-10 w-auto sm:h-12 text-shadow" width="200" height="50" viewBox="0 0 200 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <text x="10" y="30" font-family="Arial, sans-serif" font-size="32" fill="currentColor">
                  🌐
                </text>
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold md:text-xl">Community Forums</h3>
            <p className="mb-4 text-gray-500">Join discussions, ask questions, and share insights with fellow students in a collaborative online space.</p>
            <a href="#" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
          </div>

          <div className="flex flex-col rounded-lg border p-4 md:p-6 hover:shadow-xl hover:shadow-[#6366f1]">
            <div className="mb-2 flex justify-center">
              <svg className="h-10 w-auto sm:h-12 text-shadow" width="200" height="50" viewBox="0 0 200 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <text x="10" y="30" font-family="Arial, sans-serif" font-size="32" fill="currentColor">
                  🛠️
                </text>
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold md:text-xl">24/7 Support & Resources</h3>
            <p className="mb-4 text-gray-500">Access a wealth of resources and get support whenever you need it to ensure a smooth and uninterrupted learning experience.</p>
            <a href="#" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWEOffer;
