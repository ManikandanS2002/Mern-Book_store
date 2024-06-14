import React, { useState } from 'react'
import { Button, Label, TextInput } from "flowbite-react";
import { Textarea } from "flowbite-react";

const Upload = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Finance",
    "Self Help",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Romance",
    "Religious",
    "History",
    "Business",
    "AutoBiography",
    "Encyclopedia",
    "Art"
  ]

  const [selectedBookCategories,setSelectedBookCategories] = useState("");
  const handleChangeSelectedValue = (e) => {
    // console.log(e.target.value);
    setSelectedBookCategories(e.target.value);
  }

  const handleBookUpload = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDF = form.bookPDF.value;

    const bookObj = {
      bookTitle,authorName,imageURL,bookPDF,category,bookDescription
    }

    console.log(bookObj);

    // Send Data to DB
    fetch(`https://mern-book-store-joo9.onrender.com/upload-book`,{
      method:'POST',
      headers:{
        "content-type":"application/json", 
      },
      body:JSON.stringify(bookObj)

    }).then(res => res.json()).then(data => {
      alert("Book Uploaded Successfully")
      form.reset();
    })
  }
  return (
    <>
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>
      <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4" onSubmit={handleBookUpload}>
      {/* First Row */}
       <div className='gap-8 flex'>
       <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Title" required />
      </div>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required />
      </div>
       </div>
       {/* Second Row */}
       <div className='gap-8 flex'>
       <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Image URL" />
        </div>
        <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book Img" required />
      </div>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>
        <select name="category" id="inputState" className='w-full rounded' 
        value={selectedBookCategories} onChange={handleChangeSelectedValue}>
          {
            bookCategories.map((option) => <option key={option} value={option}> {option} </option>)
          }
        </select>
      </div>
      {/* Description */}
     </div>
     <div className='gap-8 flex'>
     <div className='lg:w-full'>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name='bookDescription' 
        placeholder="Book Description" className='w-full' required rows={4} />
      </div>
      
     </div>
     <div className='gap-8 flex'>
      <div className='w-full'>
        <div className="mb-2 block">
          <Label htmlFor="bookPDF" value="Book PDF"/>
        </div>
        <TextInput id="bookPDFURL" name='bookPDF' type="text" placeholder="Book Pdf Link" required />
      </div>
     </div>
     <Button type="submit">Upload Book</Button>
     </form>
    </div>
    </>  
  )
    
}


export default Upload
