'use client'
import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid2';
import Link from 'next/link';
import { Box } from '@mui/material';

function SkeletonCard() {
    return (
        <Grid size={6}  className='mt-5 flex flex-col shadow-md'>
            <Skeleton animation="wave" variant="rectangular" width="100%" height={200}
                      className='m-auto'/>
            <Skeleton animation={false} width="70%" variant="text"
                      sx={{fontSize: '1.2rem', alignSelf: 'center'}}/>
            <Skeleton animation={false} width="70%" variant="text"
                      sx={{fontSize: '1.2rem', alignSelf: 'center', lineHeight: '0.8'}}/>
            <Skeleton animation={false} width="50%" variant="text"
                      sx={{fontSize: '3rem', alignSelf: 'center',}}/>
        </Grid>
    )
}

function ShowSkeletons({length=4}) {
    return (
        <>
            {
                Array.from({length}, (_, idx) => (<SkeletonCard key={idx}/>))
            }
        </>
    )
}

const Card = (props) => {
    console.log(props);
    const loading = props.loading

    return (
        <div className='md:pt-10 pt-5 md:mx-auto'>
            {loading ? <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <ShowSkeletons length={4}/>
            </Grid> : (
                <div className='md:grid md:grid-cols-3 md:gap-5'>
                    {props.filteredSpecialities.length > 0
                        ? props.filteredSpecialities.map((item, index) => (
                            <div key={index} className='md:w-[450px]  w-3/4 m-auto mt-5 shadow-md rounded-md hover:shadow-xl transition ease-in duration-300 hover:-translate-y-1 hover:scale-105 pb-5'>
                                <div className=''>
                                    <img src={item.picture} alt=""
                                         className='block m-auto rounded-t-md md:h-80 w-full size-cover'/>
                                    <div className='md:text-lg text-sm font-semibold text-center text-indigo-500 pt-2 md:pt-5 p-2'>{item.name}</div>
                                    <div className='md:text-sm text-xs text-center pt-2 md:pt-3'>Mentor: <span className='font-semibold text-indigo-500'>{item.teacher.user.first_name} {item.teacher.user.last_name}</span></div>
                                    <Link href={`/course/${item.id}`} className='p-2 bg-indigo-500 text-white rounded-md hover:shadow-lg mt-2 block m-auto text-center md:w-1/2 w-3/4'>Kursni ko'rish</Link>
                                </div>
                            </div>
                        ))
                        : <div className='text-xl text-center m-auto text-gray-400'>Belgilangan kategoriya bo'yicha
                            kurslar topilmadi !</div>}
                </div>
            )}
        </div>
    )
}

export default Card
