import React, { useState } from 'react'
import {useLoaderData, useParams} from 'react-router-dom'
import { Button, Label, TextInput, Textarea } from "flowbite-react";

const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle,authorName,imageURL,category,bookDescription,bookPDF} = useLoaderData();


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

  const handleBookUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDF = form.bookPDF.value;

    const updateBookObj = {
      bookTitle,authorName,imageURL,bookPDF,category,bookDescription
    }

    // console.log(bookObj);
    fetch(`https://mern-book-store-joo9.onrender.com/book/${id}`,{
      method:"PATCH",
      headers:{
        "content-type":"application/json",
      },
      body:JSON.stringify(updateBookObj)
    }).then(res => res.json())
    .then(data => {alert(`Book ${bookTitle} Updated Successfully`)
    })

    // Send Data to DB
    
  }
  return (
    <>
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update The Book Data</h2>
      <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4" onSubmit={handleBookUpdate}>
      {/* First Row */}
       <div className='gap-8 flex'>
       <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name='bookTitle' type="text" defaultValue={bookTitle} placeholder="Book Title" required />
      </div>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name='authorName' type="text" defaultValue={authorName} placeholder="Author Name" required />
      </div>
       </div>
       {/* Second Row */}
       <div className='gap-8 flex'>
       <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Image URL" />
        </div>
        <TextInput id="imageURL" name='imageURL' type="text" defaultValue={imageURL} placeholder="Book Img" required />
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
        placeholder="Book Description" className='w-full' required rows={4} defaultValue={bookDescription} />
      </div>
      
     </div>
     <div className='gap-8 flex'>
      <div className='w-full'>
        <div className="mb-2 block">
          <Label htmlFor="bookPDF" value="Book PDF"/>
        </div>
        <TextInput id="bookPDFURL" name='bookPDF' type="text" defaultValue={bookPDF} placeholder="Book Pdf Link" required />
      </div>
     </div>
     <Button type="submit">Update Book</Button>
     </form>
    </div>
    </>  
  )
}

export default EditBooks
