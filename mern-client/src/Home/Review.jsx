import React, { useRef, useState } from 'react';
import { Avatar } from "flowbite-react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import profile from '../Assets/profile.jpg'


// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa6';


     
const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customer</h2>
      <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded flex sm:flex-row md:flex-row'>
          <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
               <FaStar/>
            </div>
            <div className='mt-7'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi voluptas, 
                magni distinctio ducimus qui enim.</p>
                <Avatar 
                    alt='avatar of jese'
                    img={profile}
                    rounded
                />
                <h5 className='text-lg font-medium'>Manikandan</h5>
                <p className='text-base'>Satisfied Customer</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded'>
          <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
               <FaStar/>
            </div>
            <div className='mt-7'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi voluptas, 
                magni distinctio ducimus qui enim.</p>
                <Avatar 
                    alt='avatar of jese'
                    img={profile}
                    rounded
                />
                <h5 className='text-lg font-medium'>Manikandan</h5>
                <p className='text-base'>Satisfied Customer</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded'>
          <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
               <FaStar/>
            </div>
            <div className='mt-7'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi voluptas, 
                magni distinctio ducimus qui enim.</p>
                <Avatar 
                    alt='avatar of jese'
                    img={profile}
                    rounded
                />
                <h5 className='text-lg font-medium'>Manikandan</h5>
                <p className='text-base'>Satisfied Customer</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded'>
          <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
               <FaStar/>
            </div>
            <div className='mt-7'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi voluptas, 
                magni distinctio ducimus qui enim.</p>
                <Avatar 
                    alt='avatar of jese'
                    img={profile}
                    rounded
                />
                <h5 className='text-lg font-medium'>Manikandan</h5>
                <p className='text-base'>Satisfied Customer</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded'>
          <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
               <FaStar/>
            </div>
            <div className='mt-7'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi voluptas, 
                magni distinctio ducimus qui enim.</p>
                <Avatar 
                    alt='avatar of jese'
                    img={profile}
                    rounded
                />
                <h5 className='text-lg font-medium'>Manikandan</h5>
                <p className='text-base'>Satisfied Customer</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded'>
          <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
               <FaStar/>
            </div>
            <div className='mt-7'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi voluptas, 
                magni distinctio ducimus qui enim.</p>
                <Avatar 
                    alt='avatar of jese'
                    img={profile}
                    rounded
                />
                <h5 className='text-lg font-medium'>Manikandan</h5>
                <p className='text-base'>Satisfied Customer</p>
            </div>
          </div>
        </SwiperSlide>

        
      </Swiper>
      </div>
    </div>
  )
}

export default Review


