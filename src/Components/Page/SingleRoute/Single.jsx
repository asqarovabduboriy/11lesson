import React from 'react'
import { Usefect } from '../../Usefect/Usefect'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/material'

const Single = () => {
    const { id } = useParams()
    const { data } = Usefect(`/products/${id}`, id)


    // const singleRoye = data?.data?.products?.map((el) => (
    //     <div key={el.id}>
    //         <h2>{el.title}</h2>
    //         <img src={el.images[0]} alt="" />
    //     </div>
    // ))

    // console.log(singleRoye);
    return (
        <>
            <Container>
                <div key={data?.data?.products?.id}>
                    <h2>{data?.data?.products?.title}</h2>
                    <img src={data?.data?.products?.images[0]} alt="" />
                </div>
            </Container>
        </>
    )
}

export default Single