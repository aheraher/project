import React from 'react'

const page = (params) => {
    console.log(params.params.title);
    let title = params.params.title

   

    if (title.toLowerCase() == "books" ) {
        console.log("yess true");
    }

    else if (title == "Decodes" ) {

    }
    else if (title =="Notes" ) {
        
    }

    else if(title == "previous%20year%20question%20papers"  ){
        title = "previous year question papers"
        title= title.toUpperCase()

    }
    else if(title == "Pratical%20and%20Codes"  ){
        title = "Pratical and Codes"
        title= title.toUpperCase()

    }

  return (
   <>
   <h1  className=' text-4xl  font-bold  '  > {title} </h1>
   <button className=' px-6 py-3 bg-[#4363a1d5] hover:bg-blue-400 ' > dowload </button>
   </>
  )
}

export default page