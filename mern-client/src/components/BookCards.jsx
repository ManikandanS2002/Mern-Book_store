import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import './BookCards.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';

const BookCards = ({headline, books}) => {
  return (
    <div className='my-16 px-4 lg:px-24'>
      <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>
      {/* Cards */}
      <div className='mt-12'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        {
            books.map(book => <SwiperSlide key={book._id}>
            <div className='glowing-box'>
              <Link to={`/book/${book._id}`} className=' block p-4 border rounded-lg hover:bg-gray-100 hover:shadow-neon-blue transition-shadow duration-200 h-full'>
               <div className='relative'>
                <img src={book.imageURL} alt={`${book.bookTitle} cover`} className='w-full h-auto object-cover rounded-t-lg' />
                <button 
                  aria-label="Add to cart" 
                  className='absolute right-3 top-3 bg-blue-600 hover:bg-black p-2 rounded'
                  style={{ position: 'absolute', right: '0.75rem', top: '0.75rem' }}>
                  <FaCartShopping className='w-4 h-4 text-white' />
                </button>
               </div>
                <div className='mt-2'>
                 <h3 className='text-lg font-semibold truncate'>{book.bookTitle}</h3>
                 <p className='text-gray-600'>{book.authorName}</p>
                </div>
                <div className='mt-2 text-lg font-bold'>₹250</div>
              </Link>
            </div>         
       </SwiperSlide>)
      }  
      </Swiper>
      </div>
    </div>
  )
}

export default BookCards
