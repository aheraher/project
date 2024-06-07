"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Page = ({ params }) => {
    console.log(params.title);
    let title = decodeURIComponent(params.title).toLowerCase();
    
     const GetDataBooks= async ()=>{
        let req = await fetch(`/api/hello`)
        let res = await req.json()
        if(res.ok){
            console.log("data availae",res);
            return res.data
        }
        else{
            console.log("error some thing wrong");
        }
     }

    //  useEffect title == book or your choince 

    const [books, setBooks] = useState([
        { "link": "https://drive.google.com/uc?export=download&id=1RNRWEKhgtrus6kqUbWOpu1r2e9U09Ju1", "subject": "Book 1" },

        // enter here all links and materils
      
    ]);
    const [notes, setNotes] = useState([
        { "link": "https://drive.google.com/uc?export=download&id=FILE_ID_3", "subject": "Note 1" }
    ]);
    const [decodes, setDecodes] = useState([
        { "link": "https://drive.google.com/uc?export=download&id=FILE_ID_4", "subject": "Decode 1" }
    ]);
    const [pyqp, setPyqp] = useState([
        { "link": "https://drive.google.com/uc?export=download&id=FILE_ID_5", "subject": "Previous Year Question Paper 1" }
    ]);
    const [practical, setPractical] = useState([
        { "link": "https://drive.google.com/uc?export=download&id=FILE_ID_6", "subject": "Practical 1" }
    ]);

    let data = [];

    if (title === "books") {
        console.log("yess true");
    
  
        data = books;
    } else if (title === "decodes") {
        data = decodes;
    } else if (title === "notes") {
        data = notes;
    } else if (title === "previous year question papers") {
        title = "Previous Year Question Papers";
        data = pyqp;
    } else if (title === "pratical and codes"  ) {
        title = "Practical and Codes";
        data = practical;
    }

    return (
        <>
            <div className="max-w-screen-lg mx-auto py-12">
                <div className="flex flex-wrap items-start">
                    {data.map((item, index) => (
                        <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
                            <Link href={item.link} target="_blank" className="block p-8 bg-gray-900 rounded-2xl uppercase relative overflow-hidden h-60 transition duration-500 hover:bg-gray-800 hover:text-white group">
                                <div className={`absolute top-[-4rem] right-[-4rem] w-32 h-32 bg-[#485ad6] rounded-full transition-transform duration-500 transform group-hover:scale-[30]`}></div>
                                <div className="relative z-10 font-bold text-white text-2xl mb-6 group-hover:text-white">
                                    {item.subject}
                                </div>
                                {item.date && (
                                    <div className="relative z-10 text-sm text-white group-hover:text-white">
                                        <span className="font-bold text-yellow-500 group-hover:text-white">Click to download</span>
                                    </div>
                                )}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Page;
