import Card from '../Card/Card'
import React, { useState } from 'react'
import { Usefect } from '../Usefect/Usefect'
import { Button, Container } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import'./Product.css'

import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';

const Product = () => {
    const [count, setcount] = useState(1)
    const [category,setCategory] =useState('all')


    const { data: categories } = Usefect('/products/categories')
    let url = `/products${category === 'all' ? "" : `/category/${category}` }?limit=${count * 3}`
    const { data } = Usefect(url, count, category)

    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
    };

    let btn = categories?.data?.map((el, inx) => (
        <SwiperSlide  key={inx}><Button variant="contained" color='primary' onClick={() => handleCategoryChange(el)}>
            {el}
        </Button></SwiperSlide>
    ))
    

    return (
        <>
            <Container maxWidth="lg">
                <div className='btn_warpper'>
                    <Swiper slidesPerView={5} navigation={true} modules={[Navigation]} className="mySwiper ">   
                       {btn}
                    </Swiper>
                </div>
                <Card data={data?.data?.products} />
              <div className='Btn_wrapper'>
              <Button onClick={() => setcount(p => p + 1)} variant="contained" color='primary'>see more </Button>
              </div>
            </Container>

        </>
    )
}

export default Product