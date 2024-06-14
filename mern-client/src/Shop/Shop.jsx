import React, { useEffect, useState } from 'react'

import { Card } from "flowbite-react";

const Shop = () => {
  const [books,setBooks] = useState([]);
  useEffect(() =>{
    fetch("https://mern-book-store-joo9.onrender.com/all-books").then(res => res.json()).then(data => setBooks(data))
  })
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All Books Are Here</h2>
      <div className='grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-col-1 gap-8 my-12'>
        {
          books.map(book => 
          <Card key={book.id} className="max-w-sm">
          <img src={book.imageURL} alt="" className=''/>
           <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
             {book.bookTitle}
           </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
                {book.bookDescription.length > 100
                   ? `${book.bookDescription.substring(0, 100)}...`
                 : book.bookDescription}
          </p>
          <button className='bg-blue-700 font-semibold text-white rounded py-1'>Buy Now</button>
         </Card>
          )
        }
      </div>
    </div>
  )
}

export default Shop


// import React, { useEffect, useState } from 'react';
// import { Card } from "flowbite-react";

// const Shop = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     fetch("https://mern-book-store-joo9.onrender.com/all-books")
//       .then(res => res.json())
//       .then(data => setBooks(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []); // Add empty dependency array to run only once

//   return (
//     <div className='mt-28 px-4 lg:px-24'>
//       <h2 className='text-5xl font-bold text-center'>All Books Are Here</h2>
//       <div className='grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8 my-12'>
//         {books.map(book => (
//           <Card key={book.id} className="max-w-sm w-full h-96 flex flex-col">
//             <img src={book.imageURL} alt={book.bookTitle} className='w-full h-48 object-cover rounded-t-lg' />
//             <div className="p-5 flex flex-col flex-grow">
//               <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                 {book.bookTitle}
//               </h5>
//               <p className="font-normal text-gray-700 dark:text-gray-400 mt-2 overflow-hidden text-ellipsis">
//                 {book.bookDescription.length > 15
//                   ? `${book.bookDescription.substring(0, 15)}...`
//                   : book.bookDescription}
//               </p>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shop;
